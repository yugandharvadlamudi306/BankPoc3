import React from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {
    useSafeAreaInsets,
} from 'react-native-safe-area-context';

import Colors from '../constants/Colors';

interface Props {
    title: string;
    subtitle?: string;
}

const AppHeader = ({title, subtitle}: Props) => {

    const insets = useSafeAreaInsets();

    return (
        <>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content"
            />

            <View
                style={[
                    styles.container,
                    {
                        paddingTop: insets.top,
                        height: 72 + insets.top,
                    },
                ]}>

                <View style={styles.logoContainer}>
                    <Text style={styles.logoText}>🏦</Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        {title}
                    </Text>

                    {subtitle && (
                        <Text style={styles.subtitle}>
                            {subtitle}
                        </Text>
                    )}
                </View>

            </View>
        </>
    );
};

export default AppHeader;

const styles = StyleSheet.create({

    container: {

        backgroundColor: Colors.primary,

        flexDirection: 'row',

        alignItems: 'center',

        paddingHorizontal: 16,

        elevation: 6,

    },

    logoContainer: {

        width: 46,

        height: 46,

        borderRadius: 23,

        backgroundColor: 'rgba(255,255,255,0.15)',

        justifyContent: 'center',

        alignItems: 'center',

        marginRight: 12,

    },

    logoText: {

        fontSize: 24,

    },

    textContainer: {

        justifyContent: 'center',

        flex: 1,

    },

    title: {

        color: '#FFF',

        fontSize: 26,

        fontWeight: '700',

    },

    subtitle: {

        color: '#DCE6FF',

        fontSize: 13,

        marginTop: 2,

    },

});