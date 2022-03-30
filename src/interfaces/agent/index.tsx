
export interface Role {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
    assetPath: string;
}

export interface Ability {
    slot: string;
    displayName: string;
    description: string;
    displayIcon: string;
}

export interface MediaList {
    id: number;
    wwise: string;
    wave: string;
}

export interface VoiceLine {
    minDuration: number;
    maxDuration: number;
    mediaList: MediaList[];
}

export interface Data {
    uuid: string;
    displayName: string;
    description: string;
    developerName: string;
    characterTags: string[];
    displayIcon: string;
    displayIconSmall: string;
    bustPortrait: string;
    fullPortrait: string;
    fullPortraitV2: string;
    killfeedPortrait: string;
    background: string;
    assetPath: string;
    isFullPortraitRightFacing: boolean;
    isPlayableCharacter: boolean;
    isAvailableForTest: boolean;
    isBaseContent: boolean;
    role: Role;
    abilities: Ability[];
    voiceLine: VoiceLine;
}

export interface IAgent {
    status: number;
    data: Data;
}


