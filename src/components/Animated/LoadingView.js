import React from 'react'
import { View } from 'react-native'
import { menuDrawer } from '@src/navigationOptions'
import LottieView from "lottie-react-native";

class LoadingView extends React.Component {

    static navigationOptions = menuDrawer

    render(){
        return (
            <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <LottieView 
                    source={require('@lottie/9965-loading-spinner.json')}
                    autoPlay 
                    loop
                    style={{
                        width: '30%'
                    }}
                />
            </View>
        )
    }
}

export default LoadingView