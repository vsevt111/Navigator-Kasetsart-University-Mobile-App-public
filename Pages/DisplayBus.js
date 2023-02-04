import MapView,{Polyline, PROVIDER_GOOGLE} from 'react-native-maps';
import Bus4 from '../database/bus/bus4.json'
import * as React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Button, View, Text,TextInput } from 'react-native';

export default class DisplayBus extends React.Component{
    render(){
        return(
        <View style={{flex:1}}>
            <Text>DisplayBus</Text>
        </View>
        )         
    }
}