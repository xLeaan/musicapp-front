export interface User {
    email: string;
    nombre?: string;
    num_documento?: string;
    celular?: string;
    rol_id?: string;
    contrasena: string;
    foto?: string;
}

export interface UserRegisterProps {
    onSignup: (user:User) => void;
    onLogin: () => void;
}

export interface UserLoginProps {
    onLogin: (user:User) => void;
    onSignup: () => void;
}

export interface UserProfileProps {
    user: User;
    onLogin: () => void;
    onEditProfile: (user: User) => void;
}