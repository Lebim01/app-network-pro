import React from 'react'
import { View, Text } from 'react-native'
import { withTheme } from "react-native-paper";
import { Input, Button } from 'react-native-elements'
import Card from '@components/Card/Card'
import { Br, BaseView } from '@components'
import DatePicker from 'react-native-datepicker'
import moment from 'moment'
import axios from 'axios'
import Toast from 'react-native-easy-toast'

const styles = {
    label : {
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 15
    }
}

class Datos extends React.Component {

    state = {
        fecha_nacimiento: moment().format('YYYY-MM-DD'),
        nombres : '',
        apellido_paterno : '',
        apellido_materno : '',
        mi_porque : '',
        loading : false
    }

    componentDidMount(){
        this.load()
    }

    async load(){
        const { data } = await axios.post('/perfil/get')
        this.setState({
            ...data
        })
    }

    async save(){
        const { nombres, apellido_materno, apellido_paterno, fecha_nacimiento, mi_porque } = this.state
        this.setState({
            loading : true
        })
        const { data } = await axios.post('/perfil/post', { 
            nombres,
            apellido_paterno,
            apellido_materno,
            fecha_nacimiento,
            mi_porque
        })

        if(data.status === 200){
            this.refs.toast.show('Guardado');
        }else{
            this.refs.toast.show('Fallo al guardar');
        }

        this.setState({
            loading : false
        })
    }

    onChangeText = name => (text) => {
        this.setState({
            [name] : text
        })
    }

    render(){
        return (
            <BaseView {...this.props}>
                <Card title="Perfil" actions={<Button title="Guardar" onPress={this.save.bind(this)} loading={this.state.loading} />}>
                    <View>
                        <Input labelStyle={styles.label} label="Nombre" shake={true} value={this.state.nombres} onChangeText={this.onChangeText('nombres')} />
                        <Br/>
                        <Input labelStyle={styles.label} label="Apellido Paterno" shake={true} value={this.state.apellido_paterno} onChangeText={this.onChangeText('apellido_paterno')} />
                        <Br/>
                        <Input labelStyle={styles.label} label="Apellido Materno" shake={true} value={this.state.apellido_materno} onChangeText={this.onChangeText('apellido_materno')} />
                        <Br/>
                        <Text style={{ ...styles.label, paddingLeft: 10 }}>Fecha de nacimiento</Text>
                        <DatePicker
                            style={{ width: '100%' }}
                            date={this.state.fecha_nacimiento}
                            onDateChange={date => this.setState({ fecha_nacimiento: date })}
                        />
                        <Br/>
                        <Input labelStyle={styles.label} label="Escribe tu PORQUE" numberOfLines={2} multiline={true} value={this.state.mi_porque} onChangeText={this.onChangeText('mi_porque')} />
                    </View>
                </Card>
                <Toast ref="toast" position="top"/>
            </BaseView>
        )
    }
}

export default withTheme(Datos)