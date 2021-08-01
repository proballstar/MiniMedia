import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { LogBox, StyleSheet, Text, View } from 'react-native';

import firebase from 'firebase';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Ionicons, MaterialIcons, FontAwesome } from 'react-native-vector-icons'

LogBox.ignoreAllLogs(true)
//Testing Routes

//Auth Routes
import EnterScreen from './components/Auth/Home';
import LoginScreen from './components/Auth/Login';
import RegisterScreen from './components/Auth/Register';

//Post Routes
import CreatePostScreen from './components/Posts/Create';
import FeedScreen from './components/Posts/Post';
import initialize from './components/firebase.auth';
import Logout from './components/Posts/Logout';


const AuthTabs = createMaterialBottomTabNavigator()


function AuthRoutes() {

  return (
    <NavigationContainer>
      <AuthTabs.Navigator initialRouteName="Home">
      <AuthTabs.Screen name="Home" component={EnterScreen} options={{ tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
            )}}/>
        <AuthTabs.Screen name="Register" component={RegisterScreen} options={{ tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-plus" color={color} size={26} />
            )}}/>
        <AuthTabs.Screen name="Login" component={LoginScreen} options={{ tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="login" color={color} size={26} />
            )}}/>
      </AuthTabs.Navigator>
    </NavigationContainer>
  )
}

function PostRoutes() {
  return (
    <NavigationContainer>
      <AuthTabs.Navigator initialRouteName="Feed">
        <AuthTabs.Screen name="Create" component={CreatePostScreen} options={{ tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="post-add" color={color} size={26} />
            )}}/>
        <AuthTabs.Screen name="Feed" component={FeedScreen} options={{ tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="post-outline" color={color} size={26} />
            )}}/>
        <AuthTabs.Screen name="Logout" component={Logout}  options={{ tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="logout" color={color} size={26} />
            )}}/>
      </AuthTabs.Navigator>
    </NavigationContainer>
  )
}



export default class App extends Component {

  constructor(props){

    super(props)

    this.state = {
      loggedIn: false,
      loaded: false 
    }
  }

  componentDidMount() {
    initialize()
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true, loaded: true })
        console.log(` Logged is `)
      } else {
        this.setState({ loggedIn: false, loaded: true })
        console.log(user)

      }
    })
  }




  render() {

    const { loggedIn, loaded } = this.state;

    if(loggedIn) {
      return (
        <PostRoutes />
      )
    } else {
      return <AuthRoutes />
    }
}
}



