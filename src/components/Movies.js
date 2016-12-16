import React from 'react';
import Card from './Card';

import globalStyles from '../styles/globalstyles';
import * as colors from '../styles/colors';

import {
    ScrollView,
    StyleSheet,
    Text
} from 'react-native';

const Movies = ({movies, tabLabel, style}) => (
    <ScrollView tabLabel={tabLabel} style={style}>
        {
            movies.map((item, index) => {
                return (
                    <Card key={index}>
                        <Text>{item.title}</Text>
                    </Card>
                );
            })
        }
    </ScrollView>
);

export default Movies;
