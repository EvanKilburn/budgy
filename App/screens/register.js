
import React from 'react';
import { TextInput, View, Button } from 'react-native';
import firebase from '../firebaseConfig';

export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            console.log(user);
            this.props.navigation.navigate("Main Tabs");
        })
    }

    updateEmail = (text) => {
        this.setState({ email: text });
    }

    updatePassword = (text) => {
        this.setState({ password: text });
    }

    onRegister = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(user => {
            console.log(user);
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <View>
                <TextInput onChangeText={this.updateEmail}></TextInput>
                <TextInput onChangeText={this.updatePassword}></TextInput>
                <Button title="Register" onPress={this.onRegister}></Button>
            </View>
        )
    }
}