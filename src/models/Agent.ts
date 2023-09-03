export interface Agent {
    firstname: string
    lastname: string
    email: string
    phone: string
    agency: string
    password: string
}
export interface MfaData{
    qrCode : string;
    mfaCode:string;
}

export interface AuthData{
    isAuthenticated : boolean;
    username : string;
    role:string;
    token:string
}