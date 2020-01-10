import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Picker } from 'react-native';
import { updateuser } from '../Redux/actions/authAction'
import { connect } from 'react-redux'
import { registerUser, loginUser } from '../Api/index.js'


class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            bloodgroup: 'BloodGroup'
        }
    }
    componentDidMount() {
        if (this.props.user) {
            this.props.navigation.navigate('authVerify')
        }
    }
    async signUp() {
        const { name, email, password, confirmPassword, bloodgroup } = this.state;
        if (password !== '' && password === confirmPassword && name !== '' && bloodgroup !== 'BloodGroup' && email !== '') {
            const obj = {
                name,
                email,
                password,
                bloodgroup
            }
            try {
                const user = await registerUser(obj)
                // console.log('true==> ' , user)
                if (user.message === "User registered successfully!") {
                    console.log('SignUp')
                    try {
                        const user = await loginUser(obj.email, obj.password)
                        console.log(user.token)
                        await this.props.updateuser(user)
                        await this.props.navigation.navigate('authVerify')

                    } catch (e) {
                        console.log(e.message)
                    }

                } else if (user.message === `E11000 duplicate key error collection: BloodDonation.users index: email_1 dup key: { : "${obj.email}" }`) {
                    console.log('this email is allready exist')
                }


            } catch (e) {
                console.log('false')
            }
        } else {
            Alert.alert('Password does not match')
        }

    }
    render() {
        const { name, email, password, bloodgroup } = this.state
        return (
            <View style={styles.container}>
                <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                    {/* <Image style={{ height: 200, width: 200 }} source={require('../assets/Logo.png')} /> */}
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                    {/* {this.ImageRender()} */}
                    <TextInput
                        style={{ width: '90%', height: 50, margin: 5, backgroundColor: 'white', borderBottomColor: 'grey', borderBottomWidth: 1 }}
                        placeholder="Full Name"
                        onChangeText={name => this.setState({ name })}
                        value={name}
                    />
                    <TextInput
                        style={{ width: '90%', height: 50, margin: 5, backgroundColor: 'white', borderBottomColor: 'grey', borderBottomWidth: 1 }}
                        placeholder="Email"
                        onChangeText={email => this.setState({ email })}
                        value={email}
                    />
                    <TextInput
                        style={{ width: '90%', height: 50, margin: 5, backgroundColor: 'white', borderBottomColor: 'grey', borderBottomWidth: 1 }}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={password => this.setState({ password })}
                        password={password}
                    />
                    <TextInput
                        style={{ width: '90%', height: 50, margin: 5, backgroundColor: 'white', borderBottomWidth: 1 }}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        onChangeText={confirmPassword => this.setState({ confirmPassword })}
                        password={password}
                    />
                    <Picker
                        selectedValue={this.state.bloodgroup}
                        style={{ height: 50, width: '80%' }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ bloodgroup: itemValue })}>
                        <Picker.Item label="Select Blood Group" value="BloodGroup" />
                        <Picker.Item label="A Positive" value=" A Positive" />
                        <Picker.Item label="B Positive" value=" B Positive" />
                        <Picker.Item label="O Positive" value=" O Positive" />
                        <Picker.Item label="A Negative" value=" A Negative" />
                        <Picker.Item label="B Negative" value=" B Negative" />
                        <Picker.Item label="O Negative" value=" O Negative" />
                    </Picker>
                    <View style={{ flexDirection: 'row' }}>

                        <TouchableOpacity
                            style={{ flex: 1, backgroundColor: 'red', width: '50%', borderRadius: 15, height: 50, justifyContent: 'center', alignItems: 'center', margin: 5 }}
                            onPress={() => this.props.navigation.navigate('login')}
                        >
                            <Text style={{ color: 'white' }}>CANCLE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ flex: 1, backgroundColor: '#4BCC1E', width: '50%', borderRadius: 15, height: 50, justifyContent: 'center', alignItems: 'center', margin: 5 }}
                            onPress={() => this.signUp()}
                        >
                            <Text style={{ color: 'white' }}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

// import React from 'react'
// import {View, Text} from 'react-native'

// class SignUp extends React.Component{
//     render(){
//         return(
//             <View>
//             <Text>SignUp</Text>
//         </View>
//     )
//     }
// }

// export default SignUp