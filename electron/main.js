'use strict';
/* Plantillas Clínicas · versión de escritorio (Windows) con Electron.
   Carga la misma web de la carpeta www/ y copia al portapapeles del sistema
   con saltos de línea de Windows (CRLF), que es lo que esperan los programas
   de historia clínica. */
const { app, BrowserWindow, ipcMain, clipboard, shell, nativeTheme, Menu } = require('electron');
const path = require('path');

const INDEX = path.join(__dirname, '..', 'www', 'index.html');
const FONDO = { claro: '#F3F6F5', oscuro: '#0D1413' };
let ventana = null;

app.setAppUserModelId('es.plantillasclinicas.app');

if (!app.requestSingleInstanceLock()) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (!ventana) return;
    if (ventana.isMinimized()) ventana.restore();
    ventana.focus();
  });
  app.whenReady().then(crearVentana);
}

function crearVentana() {
  Menu.setApplicationMenu(null);
  ventana = new BrowserWindow({
    width: 1280,
    height: 820,
    minWidth: 420,
    minHeight: 520,
    title: 'Plantillas Clínicas',
    show: false,
    autoHideMenuBar: true,
    backgroundColor: nativeTheme.shouldUseDarkColors ? FONDO.oscuro : FONDO.claro,
    icon: path.join(__dirname, '..', 'build', 'icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      sandbox: true,
      nodeIntegration: false,
      spellcheck: true,
      devTools: !app.isPackaged
    }
  });

  ventana.once('ready-to-show', () => ventana.show());
  ventana.loadFile(INDEX);

  // Los enlaces externos se abren en el navegador, nunca dentro de la app.
  ventana.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:\/\//i.test(url)) shell.openExternal(url);
    return { action: 'deny' };
  });
  ventana.webContents.on('will-navigate', (evento, url) => {
    if (url.startsWith('file://')) return;
    evento.preventDefault();
    if (/^https?:\/\//i.test(url)) shell.openExternal(url);
  });

  // Zoom con Ctrl + / Ctrl - / Ctrl 0 (no hay menú que lo aporte).
  ventana.webContents.on('before-input-event', (evento, tecla) => {
    if (tecla.type !== 'keyDown') return;
    const wc = ventana.webContents;
    if (!app.isPackaged && tecla.key === 'F12') { wc.toggleDevTools(); return; }
    if (!(tecla.control || tecla.meta)) return;
    if (tecla.key === '+' || tecla.key === '=') { wc.setZoomLevel(Math.min(wc.getZoomLevel() + 0.5, 4)); evento.preventDefault(); }
    else if (tecla.key === '-') { wc.setZoomLevel(Math.max(wc.getZoomLevel() - 0.5, -3)); evento.preventDefault(); }
    else if (tecla.key === '0') { wc.setZoomLevel(0); evento.preventDefault(); }
  });

  ventana.on('closed', () => { ventana = null; });
}

ipcMain.handle('pc:copiar', (_evento, texto) => {
  const t = String(texto == null ? '' : texto);
  clipboard.writeText(process.platform === 'win32' ? t.replace(/\r?\n/g, '\r\n') : t);
  return true;
});

ipcMain.on('pc:tema', (_evento, tema) => {
  nativeTheme.themeSource = tema === 'oscuro' ? 'dark' : tema === 'claro' ? 'light' : 'system';
  if (ventana) ventana.setBackgroundColor(nativeTheme.shouldUseDarkColors ? FONDO.oscuro : FONDO.claro);
});

app.on('window-all-closed', () => app.quit());
