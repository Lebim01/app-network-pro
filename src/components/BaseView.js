import React from 'react'
import { ScrollView } from "react-native";
import { menuDrawer } from '@src/navigationOptions'

class BaseView extends React.Component {

    static navigationOptions = menuDrawer

    render(){
        return (
            <ScrollView>
                {this.props.children}
            </ScrollView>
        )
    }
}

export default BaseView