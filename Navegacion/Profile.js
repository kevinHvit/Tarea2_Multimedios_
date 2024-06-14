import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const Profile = () => {

  const navigation = useNavigation();
  

  return (

    
    <View 

      style={styles.container}
    >
      
        <Image source = {require("../images/logo.jpg")} style={styles.logoStart}></Image>
        <Text style={styles.title}>Editar Perfil</Text>
        <Text style={styles.subtitle}>Su Nombre</Text>
        <Text style={styles.subtitle}>Su correo</Text>
        <Text style={styles.subtitle}>Contraseña</Text>
        <Text style={styles.subtitle}>Fecha</Text>
       

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height:"100%",
   
  },
  
  logoStart: {
    justifyContent: 'center',
    width: "100%",
  
  },
  subtitle:{
   fontSize:15,
    marginLeft: 25,
    marginBottom:20,
    marginTop: 20,
    color: 'FFFF00',///Falta

  },

  background: {
 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 55,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom:15,
  },
 
});

export default Profile;
