# React Native TS

> A feature oriented react native boilerplate, bootstrapped by [React Native CLI](https://facebook.github.io/react-native/docs/getting-started.html), using functional patterns and tools

- [React Native TS](#react-native-ts)
  - [tltr;](#tltr)
  - [Contents](#contents)
    - [Application Blueprint](#application-blueprint)
    - [Testing Setup](#testing-setup)
    - [Dev tools](#dev-tools)
    - [Roadmap](#roadmap)
  - [Getting started](#getting-started)
  - [Development workflow](#development-workflow)
    - [Run application](#run-application)
      - [Start the application (required step)](#start-the-application-required-step)
      - [Open the application in iOS simulator](#open-the-application-in-ios-simulator)
      - [Open the application in Android simulator](#open-the-application-in-android-simulator)
    - [Test application](#test-application)
      - [Run unit tests](#run-unit-tests)
      - [Run tests every time code changes](#run-tests-every-time-code-changes)
      - [Generate code coverage report](#generate-code-coverage-report)
        - [Run tests every time code changes and generate code coverage report](#run-tests-every-time-code-changes-and-generate-code-coverage-report)
  - [Debugging](#debugging)
  - [Deployment](#deployment)

## tltr;

Sounds good and you just want to see how it works? Here is a quick start guide:

```
git clone https://github.com/phanhoangloc/react-native-ts
cd react-native-ts
yarn install
yarn start
```

For further setup instructions please see our [Getting Started](#getting-started) section.

## Contents

### Application Blueprint

- Always up-to-date [React Native](https://facebook.github.io/react-native/) scaffolding
- Modular and well-documented structure for application code
- [Context API] for safe and reasonable state management
- Painless React forms with [formik](https://github.com/jaredpalmer/formik)
- [React Navigation](https://reactnavigation.org/) for awesome navigation with 60fps transitions
- [Typescript](https://www.typescriptlang.org/) for static type checking
- [Ramda](https://github.com/ramda/ramda) and [Ramda Adjunct](https://github.com/char0n/ramda-adjunct) for functional Javascript
- [Recompose](https://github.com/acdlite/recompose) for building higher order components
- [Glamorous Native](https://github.com/robinpowered/glamorous-native) for styling React Native components
- Feature flags
- Clean and testable service layer for interacting with Graphql queries and mutations
- :star: Multi-environment configuration (local, dev, production,...) for iOS and Android
- :star: Built-in error handling, loading, updating and customizable screens

### Testing Setup

- [Jest](https://facebook.github.io/jest/) for unit testing application code and providing coverage information.
- [Enzyme](https://github.com/airbnb/enzyme) and fully mocked React Native for unit testing UI components

### Dev tools

- [TSLint](https://palantir.github.io/tslint/) for a fully pluggable JS linter
- [Prettier](https://github.com/prettier/prettier) as an opinionated code formatter

### Roadmap

- **TODO** Crash reporting with Sentry

## Getting started

To build your own app on top of the Starter Kit, fork or mirror this repository.

Once you have the code downloaded, follow the **[Setup guide](docs/SETUP.md)** to get started.

## Development workflow

After you have set up the project using above instructions, you can use your favorite IDE or text editor to write code, and run the application from the command line. Turn on React Native hot module reloading in the app developer menu to update your application as you code.

To learn how to structure your application, read **[Code structure principles](docs/STRUCTURE.md)** for more details.

### Run application

#### Open the application in iOS simulator

```
$ yarn ios
```

#### Open the application in Android simulator

(If using the stock emulator, the emulator must be running)

```
$ yarn android
```

### Test application

#### Run unit tests

```
$ yarn test
```

#### Run tests every time code changes

```
$ yarn test:watch
```

#### Generate code coverage report

```
$ yarn test:coverage
```

##### Run tests every time code changes and generate code coverage report

```
$ yarn test:wc
```

It's quite slow to watch file changes and then generate code coverage report. Despite that, it's very useful to run it on isolated/small test cases. Will improve this step in future.

## Debugging

For standard debugging select _Debug JS Remotely_ from the React Native Development context menu (To open the context menu, press _CMD+D_ in iOS or _D+D_ in Android). This will open a new Chrome tab under [http://localhost:8081/debugger-ui](http://localhost:8081/debugger-ui) and prints all actions to the console.

For advanced debugging under **macOS** we suggest using the standalone [React Native Debugger](https://github.com/jhen0409/react-native-debugger), which is based on the official debugger of React Native.
It includes the React Inspector and Redux DevTools so you can inspect React views and get a detailed history of the Redux state.

You can install it via [brew](https://brew.sh/) and run it as a standalone app:

```
$ brew update && brew cask install react-native-debugger
```

Open React Native Debugger on a different port (i.e 19001)

```
$ open "rndebugger://set-debugger-loc?host=localhost&port=19001"
```

> Note: Make sure you close all active chrome debugger tabs and then restart the debugger from the React Native Development context menu.

## Deployment

Read the **[Deployment guide](docs/DEPLOYMENT.md)** to learn how to deploy the application to test devices, app stores, and how to use Code Push to push updates to your users immediately.
