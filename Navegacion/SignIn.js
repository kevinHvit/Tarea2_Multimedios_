import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import app from "../Config/config";
import { useState } from 'react';


import { addDoc, collection, getFirestore } from "firebase/firestore";
import { ImagePickerIOS } from 'react-native';

const db = getFirestore(app);

const SignIn = () => {

  const navigation = useNavigation();
  

  const inicioEstado = {
    nombreCompleto:'',
    email:'',
    clave:'',
  }

  const [estado, setEstado] = useState(inicioEstado);
  
  const HandleChangeText = (value,name) => {
    setEstado({...estado, [name]:value})
  }


  const RegistarUsuario = async()=>{
    //console.log(estado)
    try {
      await addDoc(collection(db, 'Usuarios'),{...estado})

      Alert.alert('Alerta', 'El usuario se registró con éxito')

      props.navigation.navigate('Login')
     
    } catch  {
      console.error(error)
    }
  }

  return (

    
    <View 

      style={styles.container}
    >
      
        <Image source = {require("../images/logo.jpg")} style={styles.logoStart}></Image>
        <Text style={styles.title}>Crear cuenta</Text>
        <Text style={styles.subtitle}>Ingrese los datos solicitados:</Text>
        <TextInput
          placeholder="Nombre completo"
          style={styles.input}
          keyboardType="email-address"
          onChangeText={(value) => HandleChangeText(value,'nombreCompleto')}
        />
        <TextInput
          placeholder="Correo electrónico"
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(value) => HandleChangeText(value,'email')}
        />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(value) => HandleChangeText(value,'clave')}
        />
        <TouchableOpacity
        onPress={()=> navigation.navigate("Login")}//esto es para redireccionar
        
      ><Text style={styles.registerText1}>Iniciar Sesión</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={RegistarUsuario}>
        <LinearGradient
          colors={["#00C1BB", "#005B58"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.btnLogin}
        >
          <Text style={styles.txtLogin}>Regístrate</Text>
        </LinearGradient>
      </TouchableOpacity>
        <Text style={styles.registerText}>Ya tiene cuenta.</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Recov")}>
        <Text style={styles.registerText3}>¿Has olvidado tu contraseña?</Text>

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
    fontSize: 55,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 20,


  },
  input: {
    width: "85%",
    height: 60,
    borderRadius: 30,
    paddingLeft: 30,
    marginTop: 20,
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
    marginTop: 10,
    marginRight:45,
    color: '#00C1BB',
    textAlign:'right',
    fontWeight: "bold",
  },
  registerText3: {
    marginTop: 10,
    marginRight:45,
    marginLeft: 65,
    color: '#00C1BB',
    textDecorationLine: 'underline',
    textAlign:'center',
    fontWeight: "bold",
    
  
  },
  registerText: {
    marginTop: 10,
    marginRight:45,
    marginLeft: 65,
    color: '#00C1BB',
    textDecorationLine: 'underline',
    textAlign:'center',
   
  }
});

export default SignIn;
