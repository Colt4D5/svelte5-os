class FileSystemManager {
  constructor() {}

  getFileContents() {
    return `<h1>This is dummy content</h1>`;
  }
}

export const fileSystem = new FileSystemManager();