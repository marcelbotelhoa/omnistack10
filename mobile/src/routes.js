import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createSwitchNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar',
            }, 
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no GitHub',
            }
        },
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerStyle: {
                backgroundColor: '#7D40E7'
            },
        },
    })
);

export default Routes;