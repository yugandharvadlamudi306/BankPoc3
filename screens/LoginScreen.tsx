import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import AuthService from '../services/AuthService';
import Loader from '../components/Loader';

type RootStackParamList = {
    Login: undefined;
    Dashboard: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({navigation}: Props) {
    const [loading, setLoading] = React.useState(false);

    const {control, handleSubmit} = useForm({
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const onLogin = async (data: any) => {
        try {
            setLoading(true);

            await AuthService.login(data);

            navigation.replace('Dashboard');
        } catch (e) {
            Alert.alert('Invalid Username or Password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>

            <Controller
                control={control}
                name="username"
                render={({field: {onChange, value}}) => (
                    <AppInput
                        placeholder="Username"
                        value={value}
                        onChangeText={onChange}
                    />
                )}
            />

            <Controller
                control={control}
                name="password"
                render={({field: {onChange, value}}) => (
                    <AppInput
                        placeholder="Password"
                        secureTextEntry
                        value={value}
                        onChangeText={onChange}
                    />
                )}
            />

            <AppButton
                title="Login"
                onPress={handleSubmit(onLogin)}
            />

            {loading && <Loader/>}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
});