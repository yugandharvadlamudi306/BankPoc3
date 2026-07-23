import React from 'react';
import {
    View,
    ActivityIndicator,
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
        marginTop: 25,
    },
});