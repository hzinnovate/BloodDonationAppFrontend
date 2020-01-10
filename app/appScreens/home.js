import React from 'react';
import {View, Text, Button} from 'react-native'
import { connect } from 'react-redux'
import { LogOut } from '../Auth';



class Home extends React.Component{
    static navigationOptions = {
        drawerLabel: 'name',
      };
    componentDidMount(){
        console.log(this.props.user.user[0])
    }
    render(){
        return(
            <View>
            <Text>Home Page</Text>
            <LogOut />
        </View>
        )
    }
} 



const mapStateToProps = (state) => {
    return {
        user: state.reducer.user
    }
  }

  
  export default connect(mapStateToProps)(Home)