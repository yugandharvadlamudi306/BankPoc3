import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import AppDropdown from '../components/AppDropdown';
import AppButton from '../components/AppButton';

type RootStackParamList = {
    Dashboard: undefined;
    Balance: {
        accountType: string;
    };
};

type Props = NativeStackScreenProps<RootStackParamList,'Dashboard'>;

const data = [
    {
        label:'Savings',
        value:'Savings'
    },
    {
        label:'Current',
        value:'Current'
    },
    {
        label:'Salary',
        value:'Salary'
    }
];

export default function DashboardScreen({navigation}:Props){

    const[selected,setSelected]=React.useState('');

    return(

        <View style={styles.container}>

            <Text style={styles.title}>
                Select Account
            </Text>

            <AppDropdown
                data={data}
                value={selected}
                onChange={(item)=>setSelected(item.value)}
            />

            <AppButton
                title="Get Balance"
                onPress={()=>{

                    navigation.navigate('Balance',{
                        accountType:selected
                    });

                }}
            />

        </View>

    );

}

const styles=StyleSheet.create({

    container:{
        flex:1,
        padding:20
    },

    title:{
        fontSize:22,
        marginBottom:20
    }

});