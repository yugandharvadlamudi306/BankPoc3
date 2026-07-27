import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import BalanceService from '../services/BalanceService';
import Loader from '../components/Loader';
import ScreenLayout from "../components/ScreenLayout.tsx";

type RootStackParamList = {
    Balance: {
        id:number
        accountType: string;
    };
};

type Props = NativeStackScreenProps<
    RootStackParamList,
    'Balance'
>;

export default function BalanceScreen({route}: Readonly<Props>) {

    const [balance, setBalance] = React.useState(0);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {

        loadBalance();

    }, []);

    const loadBalance = async () => {

        const response = await BalanceService.getBalance({

            id: route.params.id,
            accountId:route.params.accountType,

        });
        setBalance(response[0].availableBalance);

        setLoading(false);
    };

    if (loading) {

        return <Loader/>;

    }

    return (
        <ScreenLayout
            title="Account Balance"
            subtitle="Available Balance"
            showHeader={true}>
            <View style={styles.container}>
                <Text style={styles.header}>
                    Account Details
                </Text>

                <View style={styles.card}>

                    <Text style={styles.account}>
                        {route.params.accountType}
                    </Text>

                    <Text style={styles.balanceLabel}>
                        Available Balance
                    </Text>

                    <Text style={styles.balance}>
                        ₹ {balance.toLocaleString()}
                    </Text>

                    <View style={styles.divider}/>

                    <Text style={styles.currency}>
                        Currency
                    </Text>

                    <Text style={styles.currencyValue}>
                        INR
                    </Text>

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
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 40,
        marginBottom: 30,
        color: "#1E40AF",
    },

    card: {
        backgroundColor: "#FFF",
        padding: 30,
        borderRadius: 20,

        elevation: 8,

        shadowColor: "#000",

        shadowOpacity: 0.15,

        shadowRadius: 12,

        shadowOffset: {
            width: 0,
            height: 8
        },
    },

    account: {
        fontSize: 24,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 25,
        color: "#111827",
    },

    balanceLabel: {
        fontSize: 16,
        textAlign: "center",
        color: "#6B7280",
    },

    balance: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        color: "#16A34A",
    },

    divider: {
        height: 1,
        backgroundColor: "#E5E7EB",
        marginVertical: 30,
    },

    currency: {
        fontSize: 16,
        textAlign: "center",
        color: "#6B7280",
    },

    currencyValue: {
        fontSize: 22,
        fontWeight: "700",
        textAlign: "center",
        marginTop: 8,
        color: "#1E40AF",
    },

});