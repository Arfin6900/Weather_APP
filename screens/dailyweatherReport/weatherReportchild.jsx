import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Screen_} from '../constants/constants';
// import {width, main_color} from '../../Constants/constant';
const Weather_Child = ({item, props}) => {
  const [hearticon, sethearticon] = useState('heart-outline');
  console.log('props.navigation', props);
  const [selectedid, select_id] = useState(0);
  return (
    <View
      key={item.id}
      style={{
        height:
          item.id !== 0
            ? Dimensions.get('screen').width / 3.5
            : Screen_.height / 6.5,
        width: item.id !== 0 ? '88%' : '95%',
        alignSelf: 'center',
        margin: 8,
      }}>
      <View
        style={{
          height: '100%',
          width: '100%',
          shadowOpacity: 3,
          shadowColor: 'black',
          shadowOpacity: 0.26,
          shadowOffset: {width: 4, height: 2},
          shadowRadius: 10,
          elevation: 5,
          backgroundColor: 'white',
          borderRadius: 20,
        }}
        key={item.id}>
        <Pressable
          // onPress={() => {
          //   setSelected(true)
onPress={()=>{
  select_id(item?.id)
  console.log("id",item.id,selectedid)
}}
          style={{
            height: '100%',
            width: '100%',
            shadowOpacity: 3,
            shadowColor: 'black',
            shadowOpacity: 0.26,
            shadowOffset: {width: 4, height: 2},
            shadowRadius: 10,
            elevation: 5,
            borderRadius: 20,
            flexDirection: 'row',
            backgroundColor: selectedid==item?.id ? Screen_.main_color : 'lightgrey',
            padding: 5,
          }}>
          <View
            style={{
              // height: '100%',
              // flexDirection: 'row',
              justifyContent: 'space-evenly',
              // alignItems: 'center',
              // borderWidth:1,
              width: '40%',
            }}>
            <Text style={{fontSize: 22, fontWeight: 'bold', color:item.id==0? 'white':'black',opacity:item.id==0?1:0.8}}>
              {item.city}
            </Text>
            <Text style={{fontSize: 19, fontWeight: 'bold', color: 'white'}}>
              {item.contents}
            </Text>
          </View>
          <View
            style={{
              height: '80%',
              width: '15%',
              justifyContent: 'flex-end',
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: '100%',
                width: '75%',
                justifyContent: 'flex-end',
              }}>
              <Text
                style={{
                  fontSize: item.id == 0 ? 34 : 32,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                {item.deg}
              </Text>
            </View>
            <View
              style={{height: '70%', width: '25%', justifyContent: 'flex-end'}}>
              <Text style={{fontSize: 12}}>🔘</Text>
            </View>
          </View>
          <View style={{height: '100%', width: '45%', flexDirection: 'row'}}>
            <View
              style={{
                height: '80%',
                width: '60%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={item.img}
                resizeMode={'contain'}
                style={{height: 60, width: 60}}
              />
            </View>
            <View
              style={{
                height: '100%',
                width: '40%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
                backgroundColor: item.id == 0 ? '#1884D4' : '#8b97b0',
                borderWidth: item.id == 0 ? 0.5 : 0,
              }}>
              <Text style={{fontSize: 40, fontWeight: 'bold', color: 'black',opacity:0.7}}>
                C
              </Text>
              <Text style={{fontSize: 40, fontWeight: 'bold', color: 'white'}}>
                F
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
      {/* <View style={{height: '30%'}}>
          <View
            style={{
              height: '40%',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: Dimensions.get('screen').width / 20,
                fontWeight: 'bold',
              }}>
              {item.contents}
            </Text>
            <Text
              style={{
                color: Screen_.main_color,
                fontSize: Dimensions.get('screen').width / 20,
                fontWeight: 'bold',
              }}>
              ${item.price}/Night
            </Text>
          </View>
          <View style={{height: '60%'}}>
            <Text style={{color: 'grey'}}>{item.city}/pakistan</Text>
            <View
              style={{
                height: '70%',
                width: '55%',
                justifyContent: 'center',
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'skyblue',
                shadowOpacity: 3,
                shadowColor: 'black',
                shadowOpacity: 0.26,
                shadowOffset: {width: 4, height: 2},
                shadowRadius: 10,
                elevation: 5,
                backgroundColor: 'skyblue',
              }}>
              <Text
                style={{
                  borderRightWidth: 1,
                  color: Screen_.main_color,
                  height: '50%',
                  fontWeight: 'bold',
                  fontSize:Screen_.width / 28,
                }}>
                3 beds{' '}
              </Text>
              <Text
                style={{
                  borderRightWidth: 1,
                  color:Screen_.main_color,
                  height: '50%',
                  fontWeight: 'bold',
                  fontSize:Screen_.width / 28,
                }}>
                {' '}
                4 bath{' '}
              </Text>
              <Text
                style={{
                  color:Screen_.main_color,
                  height: '50%',
                  fontWeight: 'bold',
                  fontSize:Screen_.width / 28,
                }}>
                {' '}
                25000sq.ft
              </Text>
            </View>
          </View>
        </View> */}
    </View>
  );
};

export default Weather_Child;

const styles = StyleSheet.create({});
