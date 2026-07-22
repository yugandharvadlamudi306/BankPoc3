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
        <TouchableOpacity style={styles.button} {...props}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default AppButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 10,
    },
    title: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600',
    },
});