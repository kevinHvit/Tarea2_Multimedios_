import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const Login = () => {

  const navigation = useNavigation();
  

  return (

    
    <View 

      style={styles.container}
    >
      
        <Image source = {require("../images/logo.jpg")} style={styles.logoStart}></Image>
        <Text style={styles.title}>Bienvenido!</Text>
        <Text style={styles.subtitle}>Ingrese con tu cuenta</Text>
        <TextInput
          placeholder="multimedios@gmail.com"
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="contraseña"
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity
        onPress={()=> navigation.navigate("Recov")}//esto es para redireccionar
        ><Text style={styles.registerText1}>¿Has olvidado tu contraseña?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <LinearGradient
          colors={["#00C1BB", "#005B58"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.btnLogin}
        >
          <Text style={styles.txtLogin}>Iniciar Sesion</Text>
        </LinearGradient>
       
      </TouchableOpacity >
      <Text style={styles.registerText}>No tiene cuenta.</Text>
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
      <Text style={styles.registerText3}>Registrarse</Text>
      </TouchableOpacity>
        

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
    color: 'FFFF00',///Falta

  },

  background: {
 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 65,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 20,


  },
  input: {
    width: "85%",
    height: 60,
    borderRadius: 30,
    paddingLeft: 30,
    marginTop: 30,
    marginLeft: 35,
    borderColor: "gray",
    color: "#000000",
    backgroundColor: "#F5F5F5",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 4,
    fontSize: 17,
    textDecorationLine: "underline",
  },
  txtLogin: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  btnLogin: {
    borderRadius: 30,
    width: 219,
    height: 53,
    marginTop: 40,
    marginLeft: 100,
    paddingTop: 10,
  },
  registerText1: {
    marginTop: 15,
    marginRight:45,
    color: '#00C1BB',
    textDecorationLine: 'underline',
    textAlign:'right',
  },
  registerText3: {
    marginTop: 15,
    marginRight:45,
    marginLeft: 65,
    color: '#00C1BB',
    textDecorationLine: 'underline',
    textAlign:'center',
    fontWeight: "bold",
    
  
  },
  registerText: {
    marginTop: 15,
    marginRight:45,
    marginLeft: 65,
    color: '#00C1BB',
    textDecorationLine: 'underline',
    textAlign:'center',
   
  }
});

export default Login;
