  export interface Level {
      uuid: string;
      charmLevel: number;
      displayName: string;
      displayIcon: string;
      assetPath: string;
  }
  export interface Datum {
      uuid: string;
      displayName: string;
      isHiddenIfNotOwned: boolean;
      themeUuid: string;
      displayIcon: string;
      assetPath: string;
      levels: Level[];
  }
  export interface IBuddies {
      status: number;
      data: Datum[];
  }

