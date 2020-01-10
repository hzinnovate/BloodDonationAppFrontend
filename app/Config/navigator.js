import React from "react";
import {createAppContainer,createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import * as Auth from '../Auth'
import * as AppScreens from '../appScreens/index.js'
import {View , TouchableOpacity, Text} from 'react-native'


const home = createStackNavigator({
    home: {
        screen: AppScreens.Home,
        navigationOptions: () => ({
            title: 'Posts Feed',
            headerRight: 
                <View>
                    <TouchableOpacity style={{marginRight: 20,padding: 7, borderRadius: 100, backgroundColor: '#EFF0EF'}}>
                     <Auth.LogOut />
                    </TouchableOpacity>
                </View>
        }),
    },
})
const myRequest = createStackNavigator({
    home: {
        screen: AppScreens.MyRequests,
        navigationOptions: () => ({
            title: 'My Requests',
            headerRight: 
                <View>
                    <TouchableOpacity style={{marginRight: 20,padding: 7, borderRadius: 100, backgroundColor: '#EFF0EF'}}>
                     <Auth.LogOut />
                    </TouchableOpacity>
                </View>
        }),
    },
})
const postRequirment = createStackNavigator({
    home: {
        screen: AppScreens.PostRequirmentBlood ,
        navigationOptions: () => ({
            title: 'Post Blood Requirment',
            headerRight: 
                <View>
                    <TouchableOpacity style={{marginRight: 20,padding: 7, borderRadius: 100, backgroundColor: '#EFF0EF'}}>
                     <Auth.LogOut />
                    </TouchableOpacity>
                </View>
        }),
    },
})
const notification = createStackNavigator({
    home: {
        screen: AppScreens.Notification ,
        navigationOptions: () => ({
            title: 'Notification',
            headerRight: 
                <View>
                    <TouchableOpacity style={{marginRight: 20,padding: 7, borderRadius: 100, backgroundColor: '#EFF0EF'}}>
                     <Auth.LogOut />
                    </TouchableOpacity>
                </View>
        }),
    },
})
const MyDrawerNavigator = createDrawerNavigator({
    'Post Requirement':{
        screen: postRequirment
    },
    Home: {
      screen: home,
    },
    'My Request' : {
        screen: myRequest
    },
    Notification : {
        screen: notification
    },
    Settings: {
        screen: home
    }
  });
  
const MainSwitch = createSwitchNavigator({
    authVerify: Auth.Verify,
    login: Auth.Login,
    signup: Auth.SignUp,
    home: MyDrawerNavigator,
},{
    backBehavior: 'history'
})

export default createAppContainer(MainSwitch)