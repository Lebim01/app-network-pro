import React from 'react'
import { View, Text } from 'react-native'
import { withTheme } from "react-native-paper";
import { Input, Button } from 'react-native-elements'
import Card from '@components/Card/Card'
import { Br, BaseView } from '@components'
import DatePicker from 'react-native-datepicker'
import moment from 'moment'

const styles = {
    label : {
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 15
    }
}

class Datos extends React.Component {

    state = {
        birthday: moment().format('YYYY-MM-DD'),
        name : '',
        lastname_a : '',
        lartname_m : '',
        why : '',
        loading : false
    }

    save(){
        this.setState({
            loading : true
        })
    }

    render(){
        return (
            <BaseView {...this.props}>
                <Card title="Perfil" actions={<Button title="Guardar" onPress={this.save.bind(this)} loading={this.state.loading} />}>
                    <View>
                        <Input labelStyle={styles.label} label="Nombre" shake={true} />
                        <Br/>
                        <Input labelStyle={styles.label} label="Apellido Paterno" shake={true} />
                        <Br/>
                        <Input labelStyle={styles.label} label="Apellido Materno" shake={true} />
                        <Br/>
                        <Text style={{ ...styles.label, paddingLeft: 10 }}>Fecha de nacimiento</Text>
                        <DatePicker
                            style={{ width: '100%' }}
                            date={this.state.birthday}
                            onDateChange={date => this.setState({ birthday: date })}
                        />
                        <Br/>
                        <Input labelStyle={styles.label} label="Escribe tu PORQUE" numberOfLines={15} multiline={true} />
                    </View>
                </Card>
            </BaseView>
        )
    }
}

export default withTheme(Datos)