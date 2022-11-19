import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  Image,
  Modal,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconf from 'react-native-vector-icons/Feather';
import Iconff from 'react-native-vector-icons/Fontisto';
import Iconm from 'react-native-vector-icons/MaterialCommunityIcons';
import {Screen_} from '../constants/constants';
// import {width, main_color} from '../../Constants/constant';
const Weather_Child = ({item, props}) => {
  const data=[{
    id:1,
    content:"hourly",
   
  },
  {
    id:2,
    content:"month",
   
  },
  {
    id:3,
    content:"year",
   
  },
  {
    id:4,
    content:"hourly",
   
  }]
  const data_1 = [
    {
      date: 'Sun 30',
      img: require('../../src/assets/unnamed.png'),
      id: 0,
      contents: 'portly sunny',
      deg: 20,
      // city: 'karachi',
    },
    {
      date: 'monday 1',
      img: require('../../src/assets/unnamed.png'),
      id: 1,
      contents: 'rainy',
      deg: 20,
      // city: 'karachi',
    },
    {
      date: 'monday 5',
      img: require('../../src/assets/unnamed.png'),
      id: 2,
      contents: 'sunny',
      deg: 20,
      // city: 'karachi',
    },
    {
      date: 'monday  8',
      img: require('../../src/assets/unnamed.png'),
      id: 3,
      contents: 'portly sunny',
      deg: 20,
      // city: 'karachi',
    },


  ];
  const [hearticon, sethearticon] = useState('heart-outline');
  console.log('props.navigation', props);
  const [selectedid, select_id] = useState(0);
  const[modal,setmodal]=useState({open:false,item:{city:'',deg:'',content:''}})
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
          onPress={() => {
            select_id(item?.id);
            console.log('id', item.id, selectedid);
            setmodal({open:true,item:{deg:item.deg,city:item.city,content:item.contents}})
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
            backgroundColor:
              selectedid == item?.id ? Screen_.main_color : 'lightgrey',
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
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: item.id == 0 ? 'white' : 'black',
                opacity: item.id == 0 ? 1 : 0.8,
              }}>
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
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  color: 'black',
                  opacity: 0.7,
                }}>
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

      <Modal transparent visible={modal.open}>
        <View
          style={{
            flex: 1,
            height: Dimensions.get('screen').height,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              height: '13%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              // padding: 10,
              shadowOpacity: 3,
              shadowColor: 'black',
              shadowOpacity: 0.26,
              shadowOffset: {width: 4, height: 2},
              shadowRadius: 10,
              elevation: 5,
              backgroundColor: 'white',
            }}>
            <View
              style={{
                height: '70%',
                // borderWidth: 1,
                width: '95%',
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  height: '100%',
                  width: '70%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  // borderWidth: 1,
                }}>
                <Iconm
                onPress={()=>{setmodal({open:false,item:{city:'',deg:'',content:''}})}}
                  name={'arrow-left-bold-box'}
                  size={40}
                  color={Screen_.main_color}
                  // style={{alignSel}}
                  style={{
                    shadowOpacity: 3,
                    shadowColor: 'black',
                    shadowOpacity: 0.26,
                    shadowOffset: {width: 4, height: 2},
                    shadowRadius: 10,
                    elevation: 5,
                    backgroundColor: 'white',
                  }}
                />
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      fontSize: Dimensions.get('screen').width / 14,
                      fontWeight: 'bold',
                      color: Screen_.main_color,
                      alignSelf: 'center',
                    }}>
                  {modal.item.city}
                  </Text>
                  <Text
                    style={{
                      fontSize: Dimensions.get('screen').width / 23,
                      textAlign: 'center',
                      color: 'black',
                    }}>
                    sun,30 august 2020
                  </Text>
                </View>
              </View>

              <Iconff
                name={'favorite'}
                size={40}
                color={Screen_.main_color}
                // style={{alignSel}}
              />
            </View>
          </View>

          <View style={{height: '27%',  flexDirection: 'row',justifyContent:"center"}}>
            <View style={{height: '100%', width: '40%', }}>

              <View style={{height:"100%",width:"100%",justifyContent:"center",}}>
              <Text
                style={{
                  fontSize: 50,
                  color: Screen_.main_color,
                  fontWeight: 'bold',
                  top:20
                }}>
                <Text style={{fontSize: 15}}>.           🔘</Text>C
              </Text>
              <Text
                style={{
                  fontSize: 50,
                  color: Screen_.main_color,
                  fontWeight: 'bold',
                }}>
                {modal.item.deg}
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  color: Screen_.main_color,
                  fontWeight: 'bold',
                }}>
                {modal.item.content}
              </Text>
              </View>
            </View>
            <View style={{height: '100%', width: '50%',}}>
              <Image source={require("../../src/assets/Sunn.jpg")}
              style={{height:"90%",width:"90%"}}/>
            </View>
          </View>
          <View style={{height: '20%', width: '100%', justifyContent: 'center'}}>
          <FlatList
            // showsVerticalScrollIndicator={true}
            data={data}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            horizontal
            keyExtractor={item => {
              item.id;
            }}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  height: 60,
                  width: Screen_.width / 3,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowOpacity: 3,
                  shadowColor: 'black',
                  shadowOpacity: 0.26,
                  shadowOffset: {width: 4, height: 2},
                  shadowRadius: 10,
                  elevation: 5,
                  margin: 5,
                  backgroundColor:item.id==1?Screen_.main_color:'white',
                  // borderWidth:1,
                  borderRadius:20,
                  
                }}>
                
                <Text
                  style={{
                    fontSize:Screen_.width / 19,
                    color:item.id==1?"white":Screen_.main_color,
                    fontWeight: 'bold',
                  }}>
                  {item.content}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{height: '25%', width: '100%', justifyContent: 'center'}}>
          <FlatList
            // showsVerticalScrollIndicator={true}
            data={data_1}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            horizontal
            keyExtractor={item => {
              item.id;
            }}
            renderItem={({item}) => (
              <View
              key={item.id}
              style={{
                height:Screen_.height / 4.5,
                width:Screen_.width/2,
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
                  backgroundColor: Screen_.main_color,
                  borderRadius: 20,
                  padding:10,
                  
                }}
                key={item.id}>
                <Pressable
                  // onPress={() => {
                  //   setSelected(true)
                  onPress={() => {
                    select_id(item?.id);
                    console.log('id', item.id, selectedid);
                  }}
                  style={{
                    height: '100%',
                    width: '100%',
                
                    // flexDirection: 'row',
                    backgroundColor: Screen_.main_color ,
                    padding: 15,
                  }}>
                 
                    <Text
                      style={{
                        fontSize: 22,
                        // fontWeight: 'bold',
                        color:'white' ,
                        // opacity: item.id == 0 ? 1 : 0.8,
                      }}>
                      {item.date}
                    </Text>
                   
                  {/* </View> */}
                
                  {/* <View style={{height: '100%', width: '45%', }}> */}
                    <View
                      style={{
                        height: '60%',
                        width: '70%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={item.img}
                        resizeMode={'contain'}
                        style={{height:"90%", width: "90%"}}
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 18,
                        // fontWeight: 'bold',
                        color: 'white',
                        opacity: item.id == 0 ? 1 : 0.8,
                      }}>
                      {item.deg}
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        // fontWeight: 'bold',
                        color: 'white',
                        opacity: item.id == 0 ? 1 : 0.8,
                      }}>
                      {item.contents}
                    </Text>
                  {/* </View> */}
                </Pressable>
              </View>
   
      
            </View>
            )}
          />
        </View>
        <View style={{height: '13%', width: '90%', justifyContent: 'center',alignSelf:"center"}}>
          <Text style={{fontSize:25,fontWeight:'bold',color:"black"}}>Details</Text>
          <FlatList
            // showsVerticalScrollIndicator={true}
            data={data}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            horizontal
            keyExtractor={item => {
              item.id;
            }}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  height: 60,
                  width: Screen_.width / 3,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowOpacity: 3,
                  shadowColor: 'black',
                  shadowOpacity: 0.26,
                  shadowOffset: {width: 4, height: 2},
                  shadowRadius: 10,
                  elevation: 5,
                  margin: 5,
                  backgroundColor:item.id==1?Screen_.main_color:'white',
                  // borderWidth:1,
                  borderRadius:20,
                  
                }}>
                
                <Text
                  style={{
                    fontSize:Screen_.width / 19,
                    color:item.id==1?"white":Screen_.main_color,
                    fontWeight: 'bold',
                  }}>
                  {item.content}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        </View>
      </Modal>
    </View>
  );
};

export default Weather_Child;

const styles = StyleSheet.create({});
