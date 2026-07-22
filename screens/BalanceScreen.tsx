import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import BalanceService from '../services/BalanceService';
import Loader from '../components/Loader';

type RootStackParamList = {
    Balance:{
        accountType:string;
    };
};

type Props=NativeStackScreenProps<
    RootStackParamList,
    'Balance'
>;

export default function BalanceScreen({route}:Props){

    const[balance,setBalance]=React.useState(0);
    const[loading,setLoading]=React.useState(true);

    React.useEffect(()=>{

        loadBalance();

    },[]);

    const loadBalance=async()=>{

        const response=await BalanceService.getBalance({

            userId:1,
            accountType:route.params.accountType

        });

        setBalance(response.balance);

        setLoading(false);

    };

    if(loading){

        return<Loader/>;

    }

    return(

        <View style={styles.container}>

            <Text style={styles.title}>
                Account
            </Text>

            <Text style={styles.value}>
                {route.params.accountType}
            </Text>

            <Text style={styles.title}>
                Available Balance
            </Text>

            <Text style={styles.balance}>
                ₹ {balance}
            </Text>

        </View>

    );

}

const styles=StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    title:{
        fontSize:18,
        marginTop:20
    },

    value:{
        fontSize:22,
        fontWeight:'bold'
    },

    balance:{
        fontSize:36,
        fontWeight:'bold',
        color:'green'
    }

});