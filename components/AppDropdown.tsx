import React from 'react';
import {StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Colors from '../constants/Colors';
import {AccountsResponse} from "../model/AccountsResponse.ts";

interface Props {
    data: AccountsResponse[];
    value: string;
    onChange: (item: AccountsResponse) => void;
}

const AppDropdown = ({data, value, onChange}: Props) => {
    return (
        <Dropdown
            style={styles.dropdown}
            data={data}
            labelField="account"
            valueField="value"
            placeholder="Select Account"
            value={value}
            onChange={onChange}
        />
    );
};

export default AppDropdown;

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 8,
        paddingHorizontal: 15,
        backgroundColor: Colors.white,
        marginVertical: 10,
    },
});