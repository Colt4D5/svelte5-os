export class OsStateClass {
  constructor () {}
  themeColors = {
    primary: '#9EC5AB',
    secondary: '#2a2a2a',
    accent: '#3b3b3b',
    text: '#000',
    background: '#1e1e1e',
  };
  wallpaper = $state('url(/desktop-background-default.webp)');
  dockPosition: 'bottom' | 'left' | 'right' = $state('bottom');
  startMenuOpen = $state(false);
  dockApps = [
    {
      name: 'Terminal',
      icon: 'terminal',
    },
    {
      name: 'Github',
      icon: 'github',
    },
  ];

  desktopItems = [
    {
      title: 'trash',
      path: '/trash'
    },
  ];

  updateWallpaper(newWallpaper: string) {
    this.wallpaper = newWallpaper;
  }
  changeDockPosition(newPosition: 'bottom' | 'left' | 'right') {
    this.dockPosition = newPosition;
  }

  windows = $state<WindowPane[]>([]);
  addWindow(windowPane: WindowPane) {
    this.windows.push(windowPane);
  }
}

export const osState = new OsStateClass();