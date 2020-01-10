import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert,KeyboardAvoidingView, SafeAreaView, ScrollView} from 'react-native';
import { updateuser } from '../Redux/actions/authAction'
import { connect } from 'react-redux'
import {loginUser} from '../Api/index'
  
class Login extends Component{
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
componentDidMount(){
    if(this.props.user){
        this.props.navigation.navigate('authVerify')
    }
}
    async nav(user){
        try {
            await this.props.updateuser(user)
            await this.props.navigation.navigate('authVerify')
          } catch (error) {
                console.log(error)
          }
        
}

   async login(){
        const {email, password} = this.state
        try{
            const user = await loginUser(email, password)
            // console.log(user)
                await this.nav(user)
        } catch (e){
        }
    }
    render() {
        const { email, password } = this.state
        return (
                <View style={styles.container}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TextInput
                            style={{ width: '90%', height: 50, margin: 5, backgroundColor: 'white', borderBottomColor: 'grey', borderBottomWidth: 1 }}
                            placeholder="Enter Your Email"
                            onChangeText={email => this.setState({ email })}
                            value={email}
                        />
                        <TextInput
                            style={{ width: '90%', height: 50, margin: 5, backgroundColor: 'white' }}
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={password => this.setState({ password })}
                            password={password}
                        />
                        <TouchableOpacity
                            style={{ backgroundColor: 'red', width: '90%', borderRadius: 15, height: 50, justifyContent: 'center', alignItems: 'center', margin: 5 }}
                            disabled={false}
                            onPress={()=>{this.login()}}
                        >
                            <Text style={{color: 'white'}}>LOG IN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ backgroundColor: 'black', width: '90%', borderRadius: 15, height: 50, justifyContent: 'center', alignItems: 'center', margin: 5 }}
                            onPress={()=> this.props.navigation.navigate('signup') }
                        >
                            <Text style={{color: 'white'}}>CREATE NEW ACCOUNT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const mapStateToProps = (state) => {
    return {
        user: state.reducer.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateuser: (user) => dispatch(updateuser(user)),

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Login)