import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import BalanceScreen from '../screens/BalanceScreen';

export type RootStackParamList = {
    Login: undefined;

    Dashboard: undefined;

    Balance: {
        accountType: string;
    };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerTitleAlign: 'center',
                    animation: 'slide_from_right',
                }}>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        title: 'Login',
                    }}
                />

                <Stack.Screen
                    name="Dashboard"
                    component={DashboardScreen}
                    options={{
                        title: 'Dashboard',
                    }}
                />

                <Stack.Screen
                    name="Balance"
                    component={BalanceScreen}
                    options={{
                        title: 'Balance',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;