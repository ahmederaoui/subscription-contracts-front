export interface Subscription {
     id: string;
     contractType: ContractType;
     agency: string;
     bankCode: number;
     clientSegment: ClientSegment;
     address: string;
     creationDate: Date;
     signatureDate: Date;
     updateDate: Date;
     contractStatus: ContractStatus;
     agentId: string;
     signatureMatrices: SignatureMatrix[] ;
     signatureProfiles: SignatureProfile[] ;
     webCeiling: Ceiling;
     mobileCeiling: Ceiling;
     subscriberIds: string[] ;
     accountIds: string[] ;
     cardIds: string[] ;
}

export enum ClientSegment {
     INDIVIDUAL,
     BUSINESS
}

export enum ContractStatus {
     REGISTERED,
     SIGNED,
     CANCELED,
     TERMINATED
}

export enum ContractType {
     TYPE1,
     TYPE2,
     TYPE3
}


export interface Ceiling {
     id: string;
     minUnitAmount: number;
     maxUnitCeiling: number;
     TransferPerDay: number;
}
export interface SignatureProfile {
      id: string;
      rank: number;
      description: string;
}

export interface SignatureMatrix {
      id: string;
      authorizedOperation: string;
      minAmount: number;
      maxAmount: number;
      signatureProfiles: SignatureProfile[] ;
}