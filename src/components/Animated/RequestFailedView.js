import React from 'react'
import { View, Text } from 'react-native'
import { menuDrawer } from '@src/navigationOptions'
import lang from "@lang";

class RequestFailedView extends React.Component {

    static navigationOptions = menuDrawer

    render(){
        return (
            <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'red', fontWeight: 'bold' }}>
                    {lang.RequestFailed}
                </Text>
            </View>
        )
    }
}

export default RequestFailedView