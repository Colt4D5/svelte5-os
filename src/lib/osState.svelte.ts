export class OsStateClass {
  wallpaper = $state('url(/desktop-background-default.webp)');
  dockPosition: 'bottom' | 'left' | 'right' = $state('bottom');
  dockApps = [
    {
      name: 'Terminal',
      icon: 'github',
    },
    {
      name: 'Github',
      icon: 'github',
    },
    {
      name: 'Photoshop',
      icon: 'github',
    },
  ];

  updateWallpaper(newWallpaper: string) {
    this.wallpaper = newWallpaper;
  }
  changeDockPosition(newPosition: 'bottom' | 'left' | 'right') {
    this.dockPosition = newPosition;
  }
}

export const osState = new OsStateClass();