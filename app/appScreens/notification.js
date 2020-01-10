import React from 'react';
import {View, Text, Button} from 'react-native'
import { connect } from 'react-redux'



class Notification extends React.Component{
    componentDidMount(){
        console.log(this.props.user.user[0])
    }
    render(){
        return(
            <View>
            <Text>Notification</Text>
        </View>
        )
    }
} 



const mapStateToProps = (state) => {
    return {
        user: state.reducer.user
    }
  }

  
  export default connect(mapStateToProps)(Notification)