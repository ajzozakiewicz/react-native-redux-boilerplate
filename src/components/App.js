/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import * as Actions from '../store/actions/actions';
import Movies from './Movies';
import NavBar from 'react-native-tab-bar';

import globalStyles from '../styles/globalstyles';
import * as colors from '../styles/colors';

import {
    View,
    ScrollView,
    Settings,
    StyleSheet,
    Text
} from 'react-native';

class App extends Component {

    render() {
        const {
            movies
        } = this.props;

        return (
            <View style={globalStyles.appWrapper}>
                <Text style={styles.appTitle}>My Movie App</Text>

                <NavBar contentStyle={globalStyles.tabWrapper}
                        selectedColor={colors.PRIMARY_BLUE}
                        unselectedColor={colors.LIGHT_GREY}
                >
                    <Movies movies={movies} icon="account-circle" font="material"/>
                    <ScrollView  icon="announcement">
                        <Text>Another Tab</Text>
                    </ScrollView>
                    <ScrollView  icon="cogs" font="font-awesome">
                        <View style={{ flexDirection: 'row' }} >
                            <View style={{ flex: 4 }}>
                                <Text style={styles.appTitle}> I am 4/10 of the row. </Text>
                            </View>

                            <View style={{ flex: 6 }}>
                                <Text style={styles.appTitle}> I am 6/10 of the row. </Text>
                            </View>
                        </View>
                    </ScrollView>
                </NavBar>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    appTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 40,
        paddingLeft: 20,
        paddingRight: 20
    }
});

function mapStateToProps(state) {
    return {
        movies: state.mainReducer.movies
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({...Actions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
