import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import * as colors from '../styles/colors';

const Card = ({children}) => (
    <View style={styles.card}>
        {children}
    </View>
);

const styles = StyleSheet.create({
    card: {
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: colors.LIGHT_GREY,
        borderWidth: 1,
        padding: 10

    }
});

export default Card;
