import {
    Dimensions,
    FlatList,
    Image,
    ImageBackground,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Keyboard,
    ScrollView,
    Pressable,
    Alert
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import Icon from 'react-native-vector-icons/Ionicons';
  import Iconf from 'react-native-vector-icons/Feather';
  import Iconm from 'react-native-vector-icons/MaterialCommunityIcons';
  // import Picker from 'react-native-picker-select';

import Weather_Child from './weatherReportchild';
import { Screen_ } from '../constants/constants';
  
  const Weather_Report = ({...props}) => {
    const data = [
      {
        city: 'karachi',
        img: require('../../src/assets/unnamed.png'),
        id: 0,
        contents: 'Mostly cloudy',
        deg: 20,
        // city: 'karachi',
      },
      {
        img: require('../../src/assets/unnamed.png'),
        id: 1,
        contents: 'Mostly clear',
        deg: 12,
        city: 'hydrabad',
      },
      {
        img: require('../../src/assets/unnamed.png'),
        id: 2,
        contents: 'Mostly cloudy',
        deg: 30,
        city: 'shehdad-pur',
      },
      {
        img: require('../../src/assets/unnamed.png'),
        id: 3,
        contents: 'Mostly clear',
        deg: 19,
        city: 'islamabad',
      },
      {
        img: require('../../src/assets/unnamed.png'),
        id: 4,
        contents: 'Mostly cloudy',
        deg: 17,
        city: 'lahore',
      },

    ];
  
    const options = [
      {key: 1, value: '1'},
      {key: 2, value: '2'},
      {key: 3, value: '3'},
    ];
    const [celender,setcelender]=useState(false)
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [selected,setSelected]=useState("")
    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
          setKeyboardVisible(true);
        },
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setKeyboardVisible(false);
        },
      );
      return () => {
        keyboardDidHideListener.remove();
        keyboardDidShowListener.remove();
      };
    }, [props]);
    const [filtermodal, setfiltermodal] = useState({open: false});
    const [hearticon, sethearticon] = useState('heart-outline');
    console.log(selectedStartDate?.format('YYYY-MM-DD')?.toString())
    return (
      <View style={{flex: 1, height: Dimensions.get('screen').height}}>
        <View
          style={{
            height: Dimensions.get('screen').width / 2.7,
            width: '100%',
            padding: 10,
            shadowOpacity: 3,
            shadowColor: 'black',
            shadowOpacity: 0.26,
            shadowOffset: {width: 4, height: 2},
            shadowRadius: 10,
            elevation: 5,
            backgroundColor: 'white'
          }}>
          <View
            style={{
              height: '45%',
              // borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                height: '70%',
                width: '70%',
                flexDirection: 'row',
                justifyContent: "space-between",
                alignItems: 'center',
                  // borderWidth: 1,
                  
              }}>
             <Iconm
              name={'backburger'}
              size={40}
              color={Screen_.main_color}
              // style={{alignSel}}
            /><View style={{flexDirection:"row"}}>
              <Text
                style={{
                  fontSize: Dimensions.get('screen').width / 14,
                  fontWeight: 'bold',
                  color: Screen_.main_color,
                }}>
                Weather{' '}
              </Text>
              <Text
                style={{
                  fontSize: Dimensions.get('screen').width / 14,
                  textAlign: 'center',
                  color: 'black',
                }}>
                App
              </Text>
              </View>
             
            </View>
            <Image
                source={require('../../src/assets/unnamed.png')}
                style={{height: '100%', width: '15%',alignSelf:"flex-end"}}
              />
            {/* <Pressable style={{height: '100%', width: '40%',left:width/15}} android_ripple={{color:"grey"}} 
            onPress={()=>{
              Alert.alert('LogOut', 'Do you Want to Logout?', [
                  {
                    text: 'Yes',
                    onPress: async () => {
                      props?.FetchToken(null);
  
                    },
                  },
                  {
                    text: 'Cencel',
                    onPress: () => {
                      // console.log('cenceled');
                    },
                  },
  
                ]);
            }}>
              <Image
                source={require('../../assets/images/landowner.jpg')}
                style={{
                  height: '100%',
                  width: '40%',
                  borderRadius: 40,
                  borderWidth:1,
                  alignSelf: 'flex-end',
                }}
              />
            </Pressable> */}
          </View>
          <View
            style={{
              height: '50%',
              // borderWidth: 1,
              flexDirection: 'row',
              width: '95%',
              alignSelf: 'center',
              // alignItems:"flex-end"
            }}>
            <Icon
              name={'locate'}
              size={30}
              color={Screen_.main_color}
              style={{alignSelf: 'center'}}
            />
            <TextInput
              style={{
                height: '85%',
                borderBottomWidth: 0.5,
                width: '80%',
                alignSelf: 'baseline',
                fontSize: Dimensions.get('screen').width / 22,
                color:"black"
              }}
              placeholder={'Search'}
              placeholderTextColor={Screen_.main_color}
            />
            <Icon
              name={'search'}
              size={Dimensions.get('screen').width / 13}
              color={Screen_.main_color}
              style={{alignSelf: 'center', right: 40}}
            />
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                right: Dimensions.get('screen').width / 14,
              }}>
              <Iconf
                onPress={() => {
                  setfiltermodal({open: true});
                }}
                name={'sliders'}
                size={Dimensions.get('screen').width / 13}
                color={Screen_.main_color}
              />
            </TouchableOpacity>
          </View>
        </View>


        <View style={{height: '80%'}}>
        <View><Text style={{color:Screen_.main_color,fontWeight:"bold",fontSize:34,left:10}}>Daily</Text></View>

          <FlatList
            showsVerticalScrollIndicator={true}
            data={data}
            keyExtractor={item => {
              item.id;
            }}
            renderItem={({item}) => (
          
          <View style={{width:"94%",alignSelf:"center",}}>
             <Weather_Child item={item} props={props}/>
             </View>)}
          />
        </View>
        {/* F I L  T E R      M  O  D  A  L  */}
  
        {/* <Modal
          visible={filtermodal.open}
          transparent
          onRequestClose={() => {
            setfiltermodal({open: false});
            setcelender(false)
            setSelectedEndDate(null)
            setSelectedStartDate(null)
          }}>
          <View
            style={{
              height: Dimensions.get('screen').height,
              backgroundColor: 'rgba(0,0,0,0.3)',
              width: '100%',
            }}>
            {!isKeyboardVisible ? (
              <TouchableOpacity
              onPress={() => {
                setfiltermodal({open: false});
                setcelender(false)
                setSelectedEndDate(null)
                setSelectedStartDate(null)
              }}
                style={{
                  height: width / 1.2,
                  width: '100%',
                  alignSelf: 'flex-end',
                }}></TouchableOpacity>
            ) : null}
      <View
              style={{
                height: Dimensions.get('screen').height / 1.8,
                borderTopEndRadius: width / 8,
                borderTopStartRadius: width / 8,
                shadowOpacity: 3,
                shadowColor: 'black',
                shadowOpacity: 0.26,
                shadowOffset: {width: 4, height: 2},
                shadowRadius: 10,
                elevation: 5,
                backgroundColor: 'white',
              }}>
           {!celender?
           <> 
            <View
                style={{
                  height: '42%',
                  width: '100%',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
                  Filter By
                </Text>
                <Text
                  style={{
                    color: 'black',
                    alignSelf: 'flex-start',
                    left: width / 15,
                    fontSize: 20,
                  }}>
                  Type
                </Text>
                <View style={{flexDirection: 'row', height: '40%'}}>
                  <TextInput
                    style={{
                      height: '50%',
                      borderBottomWidth: 0.5,
                      width: '80%',
                      alignSelf: 'baseline',
                      fontSize: Dimensions.get('screen').width / 22,
                      color:"black"
                    }}
                    placeholder={'Search'}
                    placeholderTextColor={main_color}
                    
                  />
                  <Icon
                    name={'search'}
                    size={Dimensions.get('screen').width / 13}
                    color={main_color}
                    style={{alignSelf: 'center', right: width/12}}
                  />
                </View>
              </View>
  
              <View style={{height: '45%', width: '100%'}}>
                <View
                  style={{
                    height: '30%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                  }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      backgroundColor: main_color,
                      width: '35%',
                      borderRadius: 10,
                      alignItems: 'center',
                      height: '53%',
                      justifyContent:"space-around"
                    }}
                    onPress={()=>{setcelender(true)}}>
                    <Text
                      style={{color: 'white', fontSize: width/25, fontWeight: 'bold'}}>
                      {selectedStartDate?selectedStartDate?.format('YYYY-MM-DD')?.toString(): "Check in date"}
                    </Text>
                    <Icon
                    
                      name={'calendar-outline'}
                      size={Dimensions.get('screen').width / 17}
                      color={'white'}
                      // style={{alignSelf: 'center', right: 40}}
                    />
                  
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      backgroundColor: main_color,
                      width: '38%',
                      borderRadius: 10,
                      alignItems: 'center',
                      height: '53%',
                      justifyContent:"space-around"
                    }}
                    onPress={()=>{
                      setcelender(true)
                    }}>
                    <Text
                      style={{color: 'white', fontSize: width/25, fontWeight: 'bold'}}>
                      {selectedEndDate?selectedEndDate?.format('YYYY-MM-DD')?.toString(): "Check Out Date"}
                    </Text>
                    <Icon
                      name={'calendar-outline'}
                      size={Dimensions.get('screen').width / 17}
                      color={'white'}
                      // style={{alignSelf: 'center', right: 40}}
                    />
                  </TouchableOpacity>
                </View>
                <ScrollView scrollEnabled={false}>
                <SelectList
                        search={false}
                        setSelected={setSelected}
                        data={options}
                        dropdownItemStyles={{color: 'black'}}
                        dropdownTextStyles={{color: 'black'}}
                        inputStyles={{color: 'black'}}
                        placeholder="No. of guest"
                        boxStyles={{width: '90%', alignSelf: 'center'}}
                        dropdownStyles={{width:"90%",alignSelf:"center"}}
                        maxHeight={width/5}
                      />
                      </ScrollView>
                <TouchableOpacity
                  style={{
                    backgroundColor: main_color,
                    height: '20%',
                    width: '25%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    alignSelf: 'center',
                    top: 15,
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
                    Apply
                  </Text>
                </TouchableOpacity>
              </View></>:celender?
              <>
          <CalendarPicker
          selectedDayColor={main_color} 
          onDateChange={
                (e)=>{
                  if(!selectedStartDate){
                setSelectedStartDate(e)
              }else{
               setSelectedEndDate(e)
              }
                }} />
                     <TouchableOpacity
              style={{
                backgroundColor: main_color,
                height: '10%',
                width: '25%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                alignSelf: 'center',
                top: 15,
              }}
              onPress={()=>{
                setcelender(false)
              }}>
              <Text
                style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
              Done
              </Text>
            </TouchableOpacity>
            </>:null}
                
            </View>
          </View>
        </Modal> */}
      </View>
    );
  };
  export default Weather_Report
  
 
  
  
  const styles = StyleSheet.create({});
  