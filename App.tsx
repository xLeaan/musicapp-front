import React, { useEffect, useRef, useState } from 'react';
import WebView, { WebViewMessageEvent } from 'react-native-webview';
import { useAvatarCreatorUrl } from './src/hooks/use-avatar-creator-url';
import {
  AssetUnlockedEvent,
  AvatarCreatorEvent,
  AvatarExportedEvent,
  UserAuthorizedEvent,
  UserSetEvent,
  UserUpdatedEvent,
  UserLoggedOutEvent
} from './src';
import { Alert } from 'react-native';
import AvatarPage from './src/pages/avatar';
import Login from './src/pages/Login';
import Signup from './src/pages/SignUp';

const RPM_TARGET = 'readyplayerme';

const subdomain = 'api-avatar';

export default function App() {
  const webView = useRef<WebView | null>();
  const url = useAvatarCreatorUrl(subdomain, {});
  const [avatarId, setAvatarId] = useState<string>();
  const [showUserUpdatedAlert, setShowUserUpdatedAlert] = useState(false);
  const [showLogin, setShowLogin] = useState<boolean>(true);
  const [showSignup, setShowSignup] = useState<boolean>(false);

  const supportedEvents = {
    'v1.avatar.exported': onAvatarExported,
    'v1.user.set': onUserSet,
    'v1.user.authorized': onUserAuthorized,
    'v1.asset.unlock': onAssetUnlocked,
    'v1.user.updated': onUserUpdated,
    'v1.user.logout': onUserLoggedOut
  } as Record<string, any>;


  function onAvatarExported(message: AvatarExportedEvent) {
    setAvatarId(message.data.avatarId);
  }

  function onAssetUnlocked(message: AssetUnlockedEvent) {
    Alert.alert(`Asset Unlocked | Asset ID = ${message.data?.assetId}`);
  }

  function onUserAuthorized(message: UserAuthorizedEvent) {
    Alert.alert(`User Authorized | User ID = ${message.data?.id}`);
  }

  function onUserSet(message: UserSetEvent) {
    Alert.alert(`User Set | User ID = ${message.data?.id}`);
  }

  function onUserUpdated(message: UserUpdatedEvent) {
    if (showUserUpdatedAlert) {
      Alert.alert(`User Updated | User ID = ${message.data?.id}`);
    }
  }

  function onUserLoggedOut(message: UserLoggedOutEvent) {
    Alert.alert(`User Logged Out`);
  }

  function onWebViewLoaded() {
    webView.current?.postMessage(
      JSON.stringify({
        target: 'readyplayerme',
        type: 'subscribe',
        eventName: 'v1.**'
      })
    );
  }

  function onMessageReceived(message: WebViewMessageEvent) {
    const data = message.nativeEvent.data;
    const event = JSON.parse(data) as AvatarCreatorEvent;

    if (event?.source !== RPM_TARGET || !event.eventName) {
      return;
    }

    supportedEvents[event.eventName]?.(event);
  }

  function handleLogin() {
    // Aquí podrías hacer alguna validación o llamar a una función de autenticación en el backend
    setShowLogin(false);
  }

  function handleSignup() {
    setShowSignup(true);
    setShowLogin(false);
  }

  function onBackToLogin() {
    setShowSignup(false);
    setShowLogin(true);
  }

  function handleLogout() {
    setShowLogin(true);
    setAvatarId(undefined);
  }

  if (showLogin) {
    return <Login onLogin={handleLogin} onSignup={handleSignup} />;
  }

  if (showSignup) {
    return <Signup onSignup={handleSignup} onLogin={onBackToLogin} />;
  }

  if (avatarId) {
    return <AvatarPage clearAvatar={() => setAvatarId('')} avatarId={avatarId}></AvatarPage>;
  }

  return (
      <WebView
        ref={webView}
        style={{ marginTop: 30 }}
        onLoad={onWebViewLoaded}
        onMessage={onMessageReceived}
        source={{ uri: url }}
        />
      
    
  );
}
