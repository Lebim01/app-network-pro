import React from 'react'
import { View } from 'react-native'
import { withTheme } from "react-native-paper";
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

class Datos extends React.Component {


    render(){
        return (
            <View>
                <FormLabel>Name</FormLabel>
                <FormInput />
                <FormValidationMessage>Error message</FormValidationMessage>
            </View>
        )
    }
}

export default withTheme(Datos)