import React from 'react'
import { Text } from 'react-native'
import { Tile } from 'react-native-elements';

class FraseDia extends React.Component {

    state = {
        fontLoaded : false,
        frase : ''
    }
    
    componentDidMount(){
        this.load()
    }

    async load(){
        this.setState({
            frase : 'No tiene nada de malo ser pequeño. Puedes hacer grandes cosas con un equipo así'
        })
    }

    render(){
        const image = require('@assets/images/bg5.jpg')
        if(this.state.frase) {
            return (
                <Tile
                    imageSrc={image}
                    title={this.state.frase}
                    contentContainerStyle={{ height: 70 }}
                    activeOpacity={1}
                    height={150}
                    titleStyle={{
                        color: 'black'
                    }}
                    contentContainerStyle={{
                        position: 'absolute'
                    }}
                    imageContainerStyle={{
                        opacity: 0.5
                    }}
                />
            )
        }else{
            return (
                <Text></Text>
            )
        }
    }
}

export default FraseDia