# vid.io
Stream videos over localhost:3000.
# How-to:
1. Install [Node.js](https://nodejs.org/en/) if you don't already have it;
2. Download the zip of the main branch;
3. Unzip;
4. Move the videos you want to stream into the `streamables` folder (you can delete the demo videos);
5. In File Explorer on the top ribbon, goto File > Open Windows PowerShell (make sure you're in the 'vid.io-main' subfolder);
6. Run `ipconfig`. Note down the IPv4 Address that is under "Wireless LAN adapter Wi-Fi:";
7. Run `npm install`, then `npm run server`
8. Your video streaming server is now active. To shut it down, press Ctrl-C.

# Connecting:
- Make sure you turn off any firewalls on the device running the server since it might block other devices from connecing to it. 
- The device on which you want to view the videos should be connected to the same network as the server.

Open a web browser on the device where you want to view the videos, type in the IPv4 address that you noted down earlier followed by :3000 (something like 192.168.0.0:3000 for 
example). Hit enter and you should be connected.

# Known bugs:
- Certain audio codecs may be unsupported by your browser. You can still watch the video, but it'll be muted.
- Any file (including non-video files) in the `streamables` folder will get picked up and shown on the webpage. 

# Planned future updates:
- Video quality selection;
- Audio/video codec conversion for better compatibility;
- Add 'About', 'Settings', and 'Databse info' pages;
- Light and Dark modes;
- Add videos from url;
