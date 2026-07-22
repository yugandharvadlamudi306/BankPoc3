import React from 'react';
import {
    ActivityIndicator,
    View,
    StyleSheet,
} from 'react-native';
import Colors from '../constants/Colors';

const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size="large"
                color={Colors.primary}
            />
        </View>
    );
};

export default Loader;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
});