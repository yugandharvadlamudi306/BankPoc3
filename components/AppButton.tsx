import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps,
} from 'react-native';

import Colors from '../constants/Colors';

interface Props extends TouchableOpacityProps {
    title: string;
}

const AppButton = ({title, ...props}: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            {...props}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default AppButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,

        height: 55,

        borderRadius: 12,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 20,

        elevation: 5,
    },

    title: {
        color: Colors.white,

        fontSize: 18,

        fontWeight: '700',
    },
});