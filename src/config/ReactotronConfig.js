import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

if (__DEV__) {
  const tron = Reactotron.configure({host: '192.168.1.148'})
    .use(reactotronRedux())
    .useReactNative()
    .connect();
  console.tron = tron;
  tron.clear();
}
