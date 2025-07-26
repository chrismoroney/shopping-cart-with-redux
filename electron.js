const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
    },
  });
  //win.loadURL('http://localhost:3000');
  win.loadFile(path.join(__dirname, 'dist/index.html')); // production build
  //win.webContents.openDevTools();

  //

  // Or use this to load React in dev mode:
  // win.loadURL('http://localhost:3000');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
