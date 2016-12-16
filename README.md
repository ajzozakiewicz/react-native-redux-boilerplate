# react-native-redux-boilerplate  
https://github.com/ajzozakiewicz/react-native-redux-boilerplate  

A React Native application that implements Redux, as well as a few other heplful starter components.  

- Flux Implementation: [Redux](https://github.com/reactjs/redux) & [Redux Thunk](https://github.com/gaearon/redux-thunk)  
- Constants: [keymirror](https://github.com/STRML/keyMirror)  
- Stateless Component Helper: [Recompose](https://github.com/acdlite/recompose)  
- Lodash: [lodash](https://lodash.com/)  
- Tab Bar Navigation: [react-native-tab-bar](https://www.npmjs.com/package/react-native-tab-bar)  

- Mock Server: [json-mock](https://github.com/therebelbeta/json-mock)

## Getting Started  

First, clone the repo locally using [SourceTree](https://www.sourcetreeapp.com/) or via command line:

```bash
$ git clone https://github.com/ajzozakiewicz/react-native-redux-boilerplate
```

Then, install all dependencies:

```bash
$ npm install
```

Next, start the development server by running:

```bash
$ npm run start
```

Then open the xcode project under /ios/ReactNativeBoilerplate.xcodeproj.  

Next, switch the provisioning profile for the application to your personal Apple developer account.  

- Click the blue project icon in upper left called 'ReactNativeBoilerplate'
- Under targets, click "Team"
- Select "Personal Team"

Repeat the process for the 'ReactNativeBoilerPlateTests' target  

Finally, run the app by pressing play in the upper left hand corner.

## Debugging and HMR (Hot Module Reloading)

Now that you have the app running in the iPhone simulator, press command + D to bring up the debug menu.  

- Click enable remote debugging. This will launch chrome developer tools and attach it to your development server.
- Also, enable live reloading. This will enable HMR.


## Build for release

When you are running against the development server in react-native, the simulator points to the a localhost server which will serve the  
application's JavaScript bundle so that it can be reloaded while the app is still running... Enabling HMR.  

When you switch to release, your React Native app will point to and use the local JavaScript bundle that is packaged in your xcode project.  
This allows you to run the application stand alone and disconnected from your dev server. It also removes the debug menu.

To enable this:

- In Xcode, click product --> scheme -- edit scheme
- Change the build configuration to "Release"
- Uncheck the box next for "Debug Executable"

Build the application... It will not be pulling from the local bundle. You can send it to your device via USB, stop the runner, disconnect, and the app will be  
side loaded to your device.

If you are running from your device be sure to trust the app under developer settings on your iPhone by going to  
Settings --> General --> Device Management --> --Your Apple email-- --> Trust your app.
