# Website
This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

#### Clone the repository
```git
git clone https://github.com/Enecode/feedback-in-docusaurus.git
```
#### Navigate to the project directory
```
cd feedback-in-docusaurus
```

```
$ npm install
```
#### Setup Firebase Configurations or request for the configurations. 

##### Where to use the requested configurations
```
open the **firebaseConfig.js** file 
```
```
Past the configurations keys where it says paste **here**.
```

##### How to Set Up Firebase to Get Configuration Keys

###### Create a Firebase Project
- Visit the Firebase Console.
- Click on Add Project.
- Enter your project name and click Continue.
- Click Create Project and wait for it to be set up.

###### Register Your App (Web)
- In your Firebase project, click the Web icon `(</>)` in the dashboard to register a new web app.
- Enter your app nickname (optional).
- You can choose whether or not to enable Firebase Hosting (optional). 
- Click Register App.
  
###### Get Firebase Configuration Keys
After registering your app, Firebase will display your Firebase config object.

Copy the config keys from the snippet that looks like this:

```javascript

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

###### Install Firebase SDK in Your Project
In your project directory, run the following command to install Firebase:

```
$ npm install firebase
```

###### Initialize Firebase in Your Project
Paste the configuration keys inside the firebaseConfig file and initialize

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service