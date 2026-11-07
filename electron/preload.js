'use strict';
// Puente mínimo y seguro entre la web y Windows: solo copiar y cambiar el tema de la ventana.
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('plantillasNative', {
  plataforma: 'electron',
  copiar: (texto) => ipcRenderer.invoke('pc:copiar', String(texto)),
  tema: (tema) => ipcRenderer.send('pc:tema', String(tema))
});
