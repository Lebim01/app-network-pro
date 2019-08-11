import React from 'react'
import { View, Text } from 'react-native'
import { withTheme } from "react-native-paper";
import { Input, Button } from 'react-native-elements'
import Card from '@components/Card/Card'
import { Br, BaseView } from '@components'
import DatePicker from 'react-native-datepicker'
import axios from 'axios'

import moment from 'moment'
import 'moment-round'
import 'moment/locale/es'
moment.locale('es')

const styles = {
    label : {
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 15
    },
    dateInput : {
        borderWidth : 0
    },
    dateText : {
        textAlign : 'left'
    },
    flexContainer : {
        flexDirection : 'row',
        flex : 1
    },
    flexItem : {
        flex : 1
    }
}

class Evento extends React.Component {

    state = {
        loading: false,
        fecha : moment().format('YYYY-MM-DD'),
        hora_inicio : moment().round(30, 'minutes').format('HH:mm:ss'),
        hora_fin : moment().round(30, 'minutes').add(30, 'minutes').format('HH:mm:ss')
    }

    onChange = name => (value) => {
        this.setState({
            [name] : value
        })
    }

    async save(){
        this.setState({
            loading: true
        })
        const { data } = await axios.post('/evento/put', { ...this.state })

        
        if(data.status === 200){
            this.props.navigation.navigate('calendar')
        }else{
            this.setState({
                loading: false
            })
        }
    }

    render(){
        return (
            <BaseView {...this.props}>
                <Card title="Evento" actions={<Button title="Guardar" onPress={this.save.bind(this)} loading={this.state.loading} />}>
                    <View>
                        <Input placeholder={'Agregar titulo'} onChangeText={this.onChange('titulo')} />
                        <Br/>
                        <Input placeholder={'Descripción'} onChangeText={this.onChange('descripcion')} />
                        <Br/>
                        <Input placeholder={'Ubicación'} onChangeText={this.onChange('ubicacion')} />
                        <Br/>
                        <Text style={{ ...styles.label, paddingLeft: 10 }}>Fecha</Text>
                        <DatePicker
                            style={{ width: '100%' }}
                            date={this.state.fecha}
                            onDateChange={date => this.setState({ fecha: date })}
                            format={'ddd[,] DD [de] MMMM [de] YYYY'}
                            customStyles={{
                                dateInput : styles.dateInput,
                                dateText : styles.dateText
                            }}
                        />
                        <View style={styles.flexContainer}>
                            <View style={styles.flexItem}>
                                <DatePicker
                                    style={{ width: '100%' }}
                                    date={this.state.hora_inicio}
                                    onDateChange={date => this.setState({ hora_inicio: date })}
                                    mode="time"
                                    format={'h:mm a'}
                                    customStyles={{
                                        dateInput : styles.dateInput,
                                        dateText : styles.dateText
                                    }}
                                    showIcon={false}  
                                />
                            </View>
                            <View style={styles.flexItem}>
                                <DatePicker
                                    style={{ width: '100%' }}
                                    date={this.state.hora_fin}
                                    onDateChange={date => this.setState({ hora_fin: date })}
                                    mode="time"
                                    format={'h:mm a'}
                                    customStyles={{
                                        dateInput : styles.dateInput,
                                        dateText : styles.dateText,
                                        dateIcon : styles.hide
                                    }}
                                    showIcon={false}
                                />
                            </View>
                        </View>
                    </View>
                </Card>
            </BaseView>
        )
    }
}

export default withTheme(Evento)