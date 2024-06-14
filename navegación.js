import React from "react"
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; //1. importar tab
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from "./Navegacion/Home";
import Home2 from "./Navegacion/Home2";
import HomeBtn from "./Navegacion/HomeBtn";
import Login from "./Navegacion/login";
import Recov from "./Navegacion/Recov";
import Recover from "./Navegacion/Recover";
import SignIn from "./Navegacion/SignIn";
import Profile from "./Navegacion/Profile"

import { createStackNavigator } from "@react-navigation/stack";
import { ImagePickerIOS } from "react-native";

const Stack = createStackNavigator();

function Stacks() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
        >
            <Stack.Screen
                name="Login"
                component={Login}

                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    //headerBackTitleVisible:false,
                }}
            />
            <Stack.Screen
                name="Recov"
                component={Recov}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Recover"
                component={Recover}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    headerShown: false
                }}
            />

        </Stack.Navigator>
    );
}


const TabNav = createBottomTabNavigator();

/*function Tabs () {
    return (
        <TabNav.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: 'green',
            }} >

            <TabNav.Screen 
            name="Home" 
            component={Stacks}
            //component={Home}
            options={{
                tabBarLabel: 'HomE', //se utiliza para asignar nombre a la opción del botón
                tabBarIcon:  ({color, size}) => (
                    <MaterialCommunityIcons name="home" color={color} size={size}/> //se utiliza renderizar el icon
                ),
                tabBarBadge: 3, //se utiliza para las notificaciones
                headerShown: false, //oculta el header
            }}/>

            <TabNav.Screen name="Home2" component={Home2}/> 
            <TabNav.Screen name="Login" component={Login}/> 
            
        </TabNav.Navigator>
    )
};*/

export default function Navegacion() {
    return (
        <NavigationContainer>
            <Stacks />
        </NavigationContainer>
    );
}