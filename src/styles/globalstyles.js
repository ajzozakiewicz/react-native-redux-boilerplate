import { StyleSheet } from 'react-native';
import * as colors from './colors';

const globalstyles = StyleSheet.create({
    appWrapper: {
        backgroundColor: colors.OFF_WHITE,
        flex: 1
    },
    tabWrapper: {
        padding: 20,
        flex: 1
    },
    columnWrap: {
        flexDirection: 'row'
    }
});

export default globalstyles;
