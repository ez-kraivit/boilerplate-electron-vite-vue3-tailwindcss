import { BrowserWindow, shell, ipcMain } from 'electron'


ipcMain.on("InputDemo",(event,text)=>{
    console.log("Send message to renderer: " + text);
    // focusedWindow.webContents.send("OutputDemo", "Kraivit Mongkhonsakunrit");
    event.sender.send("OutputDemo",text);
    // focusedWindow.setSize(1000, 750)
    // console.log("Send message to renderer: " + text);
    // event.sender.send("OutputDemo",text);
})

ipcMain.on("resize-window",(event,payload:{width:number,height:number})=>{
    const focusedWindow = BrowserWindow.fromWebContents(event.sender) as any
    return focusedWindow.setSize(payload.width, payload.height)
})