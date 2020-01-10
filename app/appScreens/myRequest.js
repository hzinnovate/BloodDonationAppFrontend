import React from 'react';
import {View, Text, Button} from 'react-native'
import { connect } from 'react-redux'



class MyRequests extends React.Component{
    componentDidMount(){
        console.log(this.props.user.user[0])
    }
    render(){
        return(
            <View>
            <Text>MyRequests</Text>
        </View>
        )
    }
} 



const mapStateToProps = (state) => {
    return {
        user: state.reducer.user
    }
  }

  
  export default connect(mapStateToProps)(MyRequests)