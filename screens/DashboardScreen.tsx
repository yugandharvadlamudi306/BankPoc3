import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import AppDropdown from '../components/AppDropdown';
import AppButton from '../components/AppButton';
import ScreenLayout from "../components/ScreenLayout.tsx";
import AccountsService from "../services/AccountsService.ts";
import {AccountsResponse} from "../model/AccountsResponse.ts";

type RootStackParamList = {
    Dashboard: undefined;
    Balance: {
        id: number;
        accountType: string;
    };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

export default function DashboardScreen({navigation}: Props) {

    const [selected, setSelected] = React.useState('');
    const [dropDown, setDropDown] = React.useState<AccountsResponse[]>([]);
    useEffect(() => {
        const getAccount = async () => {
            const accounts = await AccountsService.getAccounts()
            console.log(accounts[0])
            setDropDown(accounts)
        }
        getAccount()
    }, [])

    return (
        <ScreenLayout
            title="Dashboard"
            subtitle="Manage Your Accounts"
            showHeader={true}
        >
            <View style={styles.container}>

                <Text style={styles.header}>
                    👋 Welcome
                </Text>

                <Text style={styles.userName}>
                    Yugandhar
                </Text>

                <View style={styles.card}>

                    <Text style={styles.label}>
                        Select Account
                    </Text>

                    <AppDropdown
                        data={dropDown}
                        value={selected}
                        onChange={item => setSelected(item.value)}
                    />

                    <AppButton
                        title="VIEW BALANCE"
                        onPress={() => {
                            const accountObject = dropDown.find((item) => {
                               return item.value === selected
                            }) ?? {
                                id: 0,
                                account: "saving",
                                value: "n?a"
                            }

                            navigation.navigate('Balance', {
                                id: accountObject.id,
                                accountType: accountObject.value
                            })
                        }
                        }
                    />

                </View>

            </View>
        </ScreenLayout>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F5F7FA",
        padding: 20,
    },

    header: {
        fontSize: 20,
        color: "#6B7280",
        marginTop: 40,
    },

    userName: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#1E40AF",
        marginBottom: 30,
    },

    card: {
        backgroundColor: "#FFF",
        borderRadius: 20,
        padding: 25,

        elevation: 8,

        shadowColor: "#000",

        shadowOpacity: 0.15,

        shadowRadius: 12,

        shadowOffset: {
            width: 0,
            height: 8,
        },
    },

    label: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 10,
        color: "#111827",
    },

});