import MapView,{Polyline, PROVIDER_GOOGLE,Marker} from 'react-native-maps';
import * as React from 'react';
import motorcycle from '../database/motorcycle.json';
import { Button, View, Text,TextInput,StyleSheet,Image} from 'react-native';
import symbol from '../image/motorcycleTaxi2.png'

export default class HomeMotorcycle extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
            <MapView style={{flex : 1}}
                initialRegion={{
                latitude: 13.847639,
                longitude: 100.569584,
                latitudeDelta: 0.0252,
                longitudeDelta: 0.0151
        }}
            showsUserLocation={true}>
       
          {motorcycle.point.map((coor,index)=>(
            <Marker coordinate={coor.coordination} key={index}>
                <Image source={symbol} style={{width:20,height:20}}/>
            </Marker>
          ))}
       
          
     
        </MapView>
            </View>
        )
    }
}