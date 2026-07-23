import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

import AppHeader from './AppHeader';
import Colors from '../constants/Colors';

interface Props {
    title: string;
    subtitle?: string;
    children: ReactNode;
    showHeader?: boolean;
}

const ScreenLayout = ({
                          title,
                          subtitle,
                          children,
                          showHeader = true,
                      }: Props) => {

    return (

        <View style={styles.container}>

            {showHeader && (
                <AppHeader
                    title={title}
                    subtitle={subtitle}
                />
            )}

            <View style={styles.content}>
                {children}
            </View>

        </View>

    );

};

export default ScreenLayout;

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:Colors.background,
    },

    content:{
        flex:1,
        padding:20,
    },

});