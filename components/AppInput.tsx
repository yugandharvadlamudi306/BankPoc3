import React from 'react';
import {
    TextInput,
    StyleSheet,
    TextInputProps,
} from 'react-native';
import Colors from '../constants/Colors';

const AppInput = (props: TextInputProps) => {
    return (
        <TextInput
            style={styles.input}
            placeholderTextColor={Colors.textSecondary}
            {...props}
        />
    );
};

export default AppInput;

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 8,
        paddingHorizontal: 15,
        height: 50,
        marginVertical: 10,
        backgroundColor: Colors.white,
    },
});