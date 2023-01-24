# Electron project

An Electron application building by Vite
Stack: React, Redux Toolkit, TypeORM, Sqlite
Configured prettier, eslint and pre-commit hooks.
Project structure in renderer folder match structure of [Feature Sliced Design](https://feature-sliced.design/).

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

#### Database

Database file in development mode by default located in the root of the project.
In build mode (portable) database file should be located in data folder in the folder, where you put app .exe file.

Name and location of database file defined in src/main/config/db.ts.

#### App name and logo

App name is defined in the package.json file

App logo and icon are defined in build folder (icon.ico, icon.png). Best resolution for the .png file - 512*512 px, for the .ico file - 256*256 px.

### Build

```bash
# For windows
# Full version
$ npm run build:win
#Portable version
$ npm run build:win:portable

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
