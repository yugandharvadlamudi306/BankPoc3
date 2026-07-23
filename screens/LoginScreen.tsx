import React from 'react';
import {
    View,
    StyleSheet,
    Alert,
    Text,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    ScrollView,
    Keyboard,
    Platform, TouchableOpacity
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import AuthService from '../services/AuthService';
import Loader from '../components/Loader';
import AppHeader from "../components/AppHeader.tsx";
import ScreenLayout from "../components/ScreenLayout.tsx";

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

            let loginResponse = await AuthService.login(data);
            loginResponse.success && navigation.replace('Dashboard');
        } catch (e) {
            Alert.alert('Invalid Username or Password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScreenLayout
            title="Banking"
            subtitle="Secure Digital Banking"
            showHeader={false}
        >
            <KeyboardAvoidingView
                style={{flex: 1}}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <ScrollView
                        contentContainerStyle={{flexGrow: 1}}
                        keyboardShouldPersistTaps="handled">
                        <View style={styles.container}>
                            {/*
            <AppHeader
                title="Banking POC"
                subtitle="Secure Digital Banking"
            />
*/}
                            <Text style={styles.logo}>
                                🏦
                            </Text>

                            <Text style={styles.title}>
                                Banking
                            </Text>

                            <Text style={styles.subtitle}>
                                Secure Digital Banking
                            </Text>

                            <View style={styles.card}>

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
                                <TouchableOpacity
                                    style={styles.forgotContainer}
                                    onPress={() => {
                                        Alert.alert(
                                            'Forgot Password',
                                            'This feature is not implemented in this POC.',
                                        );
                                    }}>
                                    <Text style={styles.forgotText}>
                                        Forgot Password?
                                    </Text>
                                </TouchableOpacity>
                                <AppButton
                                    title="LOGIN"
                                    onPress={handleSubmit(onLogin)}
                                />
                                {loading && <Loader/>}

                            </View>
                            <View style={styles.termsContainer}>
                                <Text style={styles.normalText}>
                                    By continuing you agree to our{' '}
                                </Text>

                                <TouchableOpacity
                                    onPress={() =>
                                        Alert.alert(
                                            'Terms & Conditions',
                                            'Terms & Conditions screen can be implemented here.',
                                        )
                                    }>
                                    <Text style={styles.linkText}>
                                        Terms & Conditions
                                    </Text>
                                </TouchableOpacity>
                            </View>


                        </View>
                    </ScrollView>

                </TouchableWithoutFeedback>

            </KeyboardAvoidingView>
        </ScreenLayout>
    );
}

const styles = StyleSheet.create({

    container: {

        flex: 1,

        backgroundColor: "#F5F7FA",

        justifyContent: "flex-start",

        padding: 25,

    },

    logo: {

        fontSize: 70,

        textAlign: "center",

    },

    title: {

        fontSize: 30,

        fontWeight: "bold",

        textAlign: "center",

        color: "#1E40AF",

        marginTop: 10,

    },

    subtitle: {

        fontSize: 16,

        textAlign: "center",

        color: "#6B7280",

        marginBottom: 35,

    },

    card: {

        backgroundColor: "#FFF",

        padding: 25,

        borderRadius: 20,

        elevation: 8,

        shadowColor: "#000",

        shadowOpacity: 0.15,

        shadowRadius: 12,

        shadowOffset: {

            width: 0,

            height: 8

        }

    },
    forgotContainer: {
        alignSelf: 'flex-end',
        marginTop: 10,
    },

    forgotText: {
        color: '#1E40AF',
        fontSize: 14,
        fontWeight: '600',
    },

    termsContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },

    normalText: {
        color: '#6B7280',
        fontSize: 13,
    },

    linkText: {
        color: '#1E40AF',
        fontWeight: '700',
        fontSize: 13,
    },

});