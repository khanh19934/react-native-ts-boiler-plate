import keyMirror from 'key-mirror-nested';

const Routes = {
  Root: {
    App: ''
  },
  Home: {
    Home: ''
  },
  Main: {
    Main: ''
  }
};

export default keyMirror(Routes) as typeof Routes;
