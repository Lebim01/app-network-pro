import React from 'react'
import { ScrollView } from "react-native";
import { menuDrawer } from '@src/navigationOptions'

const styles = {
    container: theme => ({
        flex: 1,
        backgroundColor: theme.colors.background
    })
};

class Datos extends React.Component {

    static navigationOptions = menuDrawer

    render(){
        const { theme } = this.props
        return (
            <ScrollView style={styles.container(theme)}>
                {this.props.children}
            </ScrollView>
        )
    }
}

export default Datos