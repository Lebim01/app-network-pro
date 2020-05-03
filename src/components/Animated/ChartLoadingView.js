import React from 'react'
import { View } from 'react-native'
import { menuDrawer } from '@src/navigationOptions'
import LottieView from "lottie-react-native";

class ChartLoadingView extends React.Component {

    static navigationOptions = menuDrawer

    render(){
        return (
            <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <LottieView 
                    source={require('@lottie/570-fever-chart.json')}
                    autoPlay 
                    loop
                />
            </View>
        )
    }
}

export default ChartLoadingView