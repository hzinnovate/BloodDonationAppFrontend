import React from 'react';
import { View, Text, Button, Picker, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import {addPost} from '../Api/index.js'


class PostRequirmentBlood extends React.Component {
    constructor() {
        super();
        this.state = {
            bloodgroup: '',
            urgency: '',
            noOfUnitsRequired: '',
            country: 'Pakistan',
            state: '',
            city: '',
            hospital: '',
            yourRelationWithPatient: '',
            contact: '',
            additionalInstructions: ''
        }
    }
    componentDidMount() {
        console.log(this.props.user.user[0])
    }
    async sendPost(){
        const {bloodgroup, urgency, noOfUnitsRequired, country, state, city, hospital, yourRelationWithPatient, contact, additionalInstructions} = this.state
        if(bloodgroup !== '', urgency !== '', noOfUnitsRequired !== '', state !== '', city !== '', hospital !== '', yourRelationWithPatient !== '', contact !== ''){
            let uid = this.props.user.user[0]._id;
            let email = this.props.user.user[0].email;
            let name = this.props.user.user[0].name
            const obj = {
                name,
                email,
                uid,
                bloodgroup,
                urgency,
                noOfUnitsRequired,
                country,
                state,
                city,
                hospital,
                yourRelationWithPatient,
                contact,
                additionalInstructions,
                comments: [],
                volunteer: []
            }
            try{
                const addposts = await addPost(obj)
                console.log(addposts)
            }
            catch (e){
                console.log(e)
            }
        }
    }
    render() {
        return (
            <View>
                <Picker
                    selectedValue={this.state.bloodgroup}
                    style={{ height: 50, width: '70%' }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ bloodgroup: itemValue })}>
                    <Picker.Item label="A Positive" value="A Positive" />
                    <Picker.Item label="B Positive" value="B Positive" />
                    <Picker.Item label="O Positive" value="O Positive" />
                    <Picker.Item label="A Negative" value="A Negative" />
                    <Picker.Item label="B Negative" value="B Negative" />
                    <Picker.Item label="O Negative" value="O Negative" />
                </Picker>
                <TextInput
                    keyboardType='numeric'
                    placeholder='No of units Required'
                    maxLength={1}
                    style={{ height: 50, borderColor: 'gray', borderWidth: 1, width: '70%' }}
                    onChangeText={noOfUnitsRequired => this.setState({ noOfUnitsRequired })}
                    value={this.state.noOfUnitsRequired}
                />
                <Picker
                    selectedValue={this.state.urgency}
                    style={{ height: 50, width: '70%' }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ urgency: itemValue })}>
                    <Picker.Item label="Urgent" value="Urgent" />
                    <Picker.Item label="Within 5 hours" value="Within 5 hours" />
                    <Picker.Item label="Within 12 hours" value="Within 12 hours" />
                    <Picker.Item label="Within 24 hours" value="Within 24 hours" />
                    <Picker.Item label="Within 2 days" value="Within 2 days" />
                    <Picker.Item label="Within Week" value="Within Week" />
                </Picker>
                <Picker
                    selectedValue={this.state.country}
                    style={{ height: 50, width: '70%' }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ country: itemValue })}>
                    <Picker.Item label="Pakistan" value="Pakistan" />
                </Picker>
                <Picker
                    selectedValue={this.state.state}
                    style={{ height: 50, width: '70%' }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ state: itemValue })}>
                    <Picker.Item label="Sindh" value="Sindh" />
                    <Picker.Item label="Panjab" value="Panjab" />
                    <Picker.Item label="Balochistan" value="Balochistan" />
                    <Picker.Item label="NWFP" value="NWFP" />
                </Picker>
                <Picker
                    selectedValue={this.state.city}
                    style={{ height: 50, width: '70%' }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ city: itemValue })}>
                    <Picker.Item label="Karachi" value="Karachi" />
                    <Picker.Item label="Haidrabad" value="Haidrabad" />
                    <Picker.Item label="Lahore" value="Lahore" />
                    <Picker.Item label="Islamabad" value="Islamabad" />
                </Picker>
                <Picker
                    selectedValue={this.state.hospital}
                    style={{ height: 50, width: '70%' }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ hospital: itemValue })}>
                    <Picker.Item label="Indus Hospital" value="Indus Hospital" />
                    <Picker.Item label="Ziauddin Hospital" value="Ziauddin Hospital" />
                    <Picker.Item label="Agha Khan Hospital" value="Agha Khan Hospital" />
                    <Picker.Item label="Liaquat National Hospital" value="Liaquat National Hospital" />
                    <Picker.Item label="OMI" value="OMI" />
                    <Picker.Item label="Jinnah Hospital" value="Jinnah Hospital" />
                    <Picker.Item label="Holy Family Hospital" value="Holy Family Hospital" />
                </Picker>
                <Picker
                    selectedValue={this.state.yourRelationWithPatient}
                    style={{ height: 50, width: '70%' }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ yourRelationWithPatient: itemValue })}>
                    <Picker.Item label="Father" value="Father" />
                    <Picker.Item label="Mother" value="Mother" />
                    <Picker.Item label="Son" value="Son" />
                    <Picker.Item label="Daughter" value="Daughter" />
                    <Picker.Item label="Aunt" value="Aunt" />
                    <Picker.Item label="Uncle" value="Uncle" />
                    <Picker.Item label="Nephew" value="Nephew" />
                    <Picker.Item label="Niece" value="Niece" />
                    <Picker.Item label="Friend" value="Friend" />
                    <Picker.Item label="Neighbour" value="Neighbour" />
                    <Picker.Item label="None" value="None" />
                </Picker>
                <TextInput
                    placeholder='Mobile Number e.g : 03#########'
                    keyboardType='numeric'
                    maxLength={11}
                    style={{ height: 50, borderColor: 'gray', borderWidth: 1, width: '70%' }}
                    onChangeText={contact => this.setState({ contact })}
                    value={this.state.contact}
                />
                <TextInput
                    placeholder='Additional Instructions'
                    maxLength={100}
                    textAlignVertical='top'
                    multiline={true}
                    numberOfLines={10}
                    style={{ borderColor: 'gray', borderWidth: 1, width: '70%' }}
                    onChangeText={additionalInstructions => this.setState({ additionalInstructions })}
                    value={this.state.additionalInstructions}
                />
                <TouchableOpacity
                    style={{ backgroundColor: 'red', width: '90%', borderRadius: 15, height: 50, justifyContent: 'center', alignItems: 'center', margin: 5 }}
                onPress={()=> this.sendPost()}
                >
                    <Text style={{ color: 'white' }}>POST</Text>
                </TouchableOpacity>
            </View>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        user: state.reducer.user
    }
}


export default connect(mapStateToProps)(PostRequirmentBlood)