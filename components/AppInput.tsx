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
        height: 55,

        backgroundColor: Colors.white,

        borderRadius: 12,

        borderWidth: 1,

        borderColor: Colors.border,

        paddingHorizontal: 18,

        marginTop: 15,

        fontSize: 16,
    },
});