 import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
 import {
   StyleSheet,
   View,
   Text,
   TouchableOpacity,
   Image,
   TextInput
 } from 'react-native';
 
 
 const LogoutScreen: () => React$Node = ({navigation}) => {
   return (
     <>
       <View style={styles.container}>
         <View style={{flex: 1}} />
         <View style={{flex: 2}}>
           <View style={styles.logoArea}>
             <Image
              source={require('../image/mainlogo.png')}
              style={{width: '70%', resizeMode: 'contain'}}
             />
           </View>
           <View style={styles.btnArea}>
             <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => navigation.navigate('LoginTap')}>
               <Text style={{fontSize: 17, fontWeight: 'bold'}}>로그인</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.signupBtn}>
               <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>회원가입</Text>
             </TouchableOpacity>
           </View>
         </View>
         <View style={{flex: 1}} />
       </View>
     </>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: 'white',
   },
   logoArea: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
    //  backgroundColor: 'red',
   },
   btnArea: {
     flex: 1,
    //  justifyContent: 'center',
     alignItems: 'center',
    //  backgroundColor: 'yellow',
   },
   loginBtn: {
     width: '60%',
     height: '25%',
     borderWidth: 2,
     borderColor: '#1c1c1c',
     borderRadius: 20,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'white',
     marginBottom: '5%',
   },
   signupBtn: {
    width: '60%',
    height: '25%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    marginBottom: '5%',
  }
 });
 
 export default LogoutScreen;
 