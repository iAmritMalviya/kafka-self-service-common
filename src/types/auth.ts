

export type TTokenType = 'access' | 'refresh'
export interface IToken {
    id: number;
    userId: number;
    deviceId: string;
    tokenValue: string;
    tokenType: TTokenType;
    refreshTokenSent: number; 
    createdAt: Date;
    expiredAt: Date; 
  }
  

export interface IOTP {
    id: number;
    isVerified: boolean; // default: false, 
    userId: number;
    isBlocked: boolean; // default: false
    otpValue: string;
    blockedTimeout: Date; 
    counter: number;       
    createdAt: Date; // default: date
    expiredAt: Date; 
  }
  