import { useState, type FC, useEffect } from 'react';
import { Button, Image, ImageStyle, StyleProp, StyleSheet, Text, View } from 'react-native';
import { use2dImageUrl } from '../hooks/use-2d-image-url';
import { Avatar2DConfig } from '../types';
import React from 'react';

interface AvatarPageProps {
  avatarId: string;
  clearAvatar: () => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  image: {
    width: 200,
    height: 200
  }
});

const avatarConf: Avatar2DConfig = {
  expression: 'lol',
  pose: 'power-stance',
};

const AvatarPage: FC<AvatarPageProps> = ({ avatarId, clearAvatar }) => {
  const url = use2dImageUrl(avatarId, avatarConf);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: url + '?' + new Date() }}></Image>
      <Button title="Change avatar" onPress={() => clearAvatar()}></Button>
      <Button title="id" onPress={() => console.log(avatarId)} />
    </View>
    
  );
};

export default AvatarPage;
