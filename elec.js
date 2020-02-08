const electron = require("electron");
const path = require("path");
const url = require("url");

const {app, BrowserWindow} = electron;

let win;

function CreateWindow()
{
    win = new BrowserWindow(/*{fullscreen:true}*/);
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'solivern.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.on('closed', () => {
        win = null;
    })
}

app.on('browser-window-created',function(e,window) {
    window.setMenu(null);
    window.maximize();
});

app.on('ready', CreateWindow);