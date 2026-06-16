A real-time, collaborative code editor built using React, TailwindCSS, Socket.io, NodeJS/ExpressJS, and CodeMirror (v5). This application allows multiple users to collaborate on code in real-time. Users can join a room by sharing a unique room ID, where their code will be synced across all connected users. It supports multiple programming languages, syntax highlighting, and a variety of themes and font selectors.

## Features

- **Real-time collaboration**: Multiple users can join a room using a unique room ID, and their code will be synced across all participants.
- **Room sharing**: Users can share their room ID with others to invite them for collaboration.
- **Toasts notifications**: Get notified when users enter or leave the room.
- **Syntax highlighting**: Supports popular programming languages such as:
  - JavaScript (JS)
  - Python (Python)
  - PHP (PHP)
  - Go (Go)
  - Markdown (Markdown)
- **Themes and customization**: Dozens of themes and a font selector for a personalized coding experience.
- **CodeMirror integration**: Used for a powerful and customizable code editor interface.
- **Real-time updates**: Code is synced between users in real time via WebSocket connections using Socket.io.

## Technologies Used

- **Frontend**:
- React
- TailwindCSS
- CodeMirror v5
- Socket.io-client
- **Backend**:
- Node.js
- Express.js
- Socket.io

## Screenshots

### Home page

![Home](/project-images/codechime/Home_page.png)

### Editor page

![Editor](/project-images/codechime/Editor_page.png)

### Code sync

![Code Sync](/project-images/codechime/Code_sync.png)

### Notifications

![Notifications](/project-images/codechime/Notifications.png)

## Usage

- **Create or Join a Room**: To start, click on "Create Room" or share an existing room ID with others to join the same room.
- **Collaborative Coding**: Once you're in the room, the code you write will be synced with all other participants in real-time.
- **Customizing the Editor**: Select from dozens of themes and adjust the font settings to match your preferences.
- **Notifications**: When someone enters or leaves the room, you will receive a notification through toast messages.
