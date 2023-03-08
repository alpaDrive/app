# app
The alpaDrive mobile app

## Table Of Contents
* [What's this?](#whats-this)
    - [Role in the UX](#role-in-the-ux)
    - [Tech Stack](#tech-stack)

* [Targets](#targets)
    - [Design & Prototyping](#design--prototyping)
    - [Intended functions](#intended-functions)

* [Setup guide](#setup-guide)
    - [Prerequisites](#prerequisites)
    - [Installation Instructions](#installation-instructions)
    - [Known Issues](#known-issues)

## What's this?
Users of alpaDrive require an interface that is easily accessible to them from anywhere, to control and monitor their connected vehicle(s). The API server supports adding and managing multiple vehicles to a single user account as well.
### Role in the UX
As such, this mobile app is responsible for providing that seamless experience for the users. It is a core component of the whole UX and dictates how well users can take advantage of the alpaDrive hardware in their vehicles.
### Tech Stack
The app is written in [React Native](https://reactnative.dev) using the [Expo](https://expo.dev) workflow. It connects to the server via normal network calls and uses some third party components like the Google Maps API.

## Targets
This README was written during development. In the final version, the app aims to fulfill the targets.
### Design & Prototyping
We have prototyped a design which you can view [here](https://www.figma.com/proto/Za6FUG4mgHMAA0yuSpADos/alpaDrive?page-id=0%3A1&node-id=673%3A3&viewport=297%2C416%2C0.76&scaling=scale-down&starting-point-node-id=619%3A27). Obviously, this is just a wireframe for the team to follow and hence is subject to change in future releases.

*This is just a prototype design*
<table>
  <tr>
<td><img src="hhttps://raw.githubusercontent.com/alpaDrive/app/main/assets/screenshot-1.png "></td>
  <td><img src="https://raw.githubusercontent.com/alpaDrive/app/main/.github/screenshots/screenshot-2.png"></td>
   </tr>
</table>

### Intended Functions
* Vehicle pairing using QR Code scanner
* Vehicle location tracking
* Vehicle remote control
* Live vehicle stats
* Vehicle health reports
* Multiple vehicle controls

## Setup Guide
Follow this setup guide for development on your local machine

### Prerequisites
1. NodeJS & NPM
    > Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
    >Install [here](https://nodejs.org/en/).
2. Expo Toolkit
    > Expo is a managed workflow for React Native project that simplifies & pipelines the develpoment process.
    > Install by entering the command below
    > ```
    > $ npx expo
    >```
    > Optionally, login to your Expo account
    >```
    >$ npx expo login
    >```

3. Android Emulator (Optional)
    > Android Emaulator is a virutal device that can be used for development purposes. If your development machine is incapable or lacks powerful enough hardware, use your phone instead. Get Android Emulator by installing Android Studio [here](https://developer.android.com/studio/install).

### Installation instructions
1. Make a new directory and change into it
   
    ```bash
    $ mkdir alpaDrive && cd alpaDrive
    ```
2. Initialize a new empty Git repository and pull this code

    ```bash
    $ git init
    $ git remote add origin https://github.com/alpaDrive/app.git
    $ git pull origin main
    ```

3. Install all dependencies

    ```bash
    $ npm install
    ```

4. Install [React Navigation](https://reactnavigation.org/)'s dependencies

    ```
    $ npx expo install react-native-screens react-native-safe-area-context
    ```

5. Start the development server

    ```bash
    $ npx expo start
    ```
When the server starts, press `a` to start the app on your Android emulator, or scan he QR code via the [Expo Go](https://expo.dev/client) app to open your rendered code :beers:.

### Known issues
As of now, no issues are known.