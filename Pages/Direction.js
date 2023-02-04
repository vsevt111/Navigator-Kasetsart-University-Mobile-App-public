import * as React from 'react';
import { Button, View, Text,TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export default class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state ={
        text1: '',
        text2: '',
      };
  
    }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
          <View><Text>Search</Text></View>
          <Text>Origin/จุดเริ่มต้น:</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Type Origin"
            onChangeText={(text1) => this.setState({text1})}
            value={this.state.text1}
          />
          <Text>Destination/จุดปลายทาง:</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Type Destination"
            onChangeText={(text2) => this.setState({text2})}
            value={this.state.text2}
          />
        </View>
        
      );
    }
  }