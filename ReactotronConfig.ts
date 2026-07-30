// ReactotronConfig.ts (project root, same level as App.tsx)
import Reactotron from 'reactotron-react-native';
// this file is not required it is only used for Reactotron
Reactotron
    .configure({ name: 'BankPoc3' })
    .useReactNative({
        networking: {
            ignoreUrls: /symbolicate/,
        },
    })
    .connect();

export default Reactotron;