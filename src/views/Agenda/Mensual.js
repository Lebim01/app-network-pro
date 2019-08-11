import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Text as TextE } from 'react-native-elements'
import { Agenda } from 'react-native-calendars'
import { FAB, withTheme  } from 'react-native-paper'
import moment from 'moment'
import axios from 'axios'

const today = moment().format('YYYY-MM-DD')
const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex:1,
        paddingTop: 30
    },
    subtitle : {
        color: '#aaa'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
})
const emptyDate =  {
    [today]: { 
        fecha : today,
        titulo : 'Sin eventos' ,
        hora_inicio : '',
        hora_fin : '',
        descripcion : '',
        ubicacion : ''
    } 
}

class Mensual extends React.Component {

    state = {
        items: emptyDate,
        markeds : {},
        selected : today
    }

    renderItem(item) {
        return (
            <View style={[styles.item, {height: item.height}]}>
                <Text>{moment(`${item.fecha} ${item.hora_inicio}`).format('h:mm A')} - {moment(`${item.fecha} ${item.hora_fin}`).format('h:mm A')}</Text>
                <TextE h4>{item.titulo}</TextE>
                <Text style={styles.subtitle}>{item.ubicacion}</Text>
                <Text style={styles.subtitle}>{item.descripcion}</Text>
            </View>
        );
    }
    
    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}></View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.text !== r2.text;
    }

    addEvent(){
        this.props.navigation.navigate('evento')
    }

    async getEvents(){
        const { data } = await axios.post(`/evento/get`)

        let items = data
        if(!items[today]){
            items = {
                ...items,
                ...emptyDate
            }
        }
        const { markeds, selected } = this.getMarkedsDays(items)
        this.setState({
            items, markeds, selected
        })
    }

    getMarkedsDays(events){
        let markeds = {}
        let selected = null
        for(let key in events){
            markeds[key] = {marked : true}
            if(selected == null || moment(key).isAfter(moment(selected))) selected = key
        }
        return { markeds, selected }
    }

    componentDidMount(){
        this.getEvents()
    }

    render(){
        const { items, markeds, selected } = this.state
        return (
            <View style={styles.container}>
                <Agenda
                    items={items}
                    renderItem={this.renderItem.bind(this)}
                    renderEmptyDate={this.renderEmptyDate.bind(this)}
                    rowHasChanged={this.rowHasChanged.bind(this)}
                    markedDates={markeds}
                    style={styles.container}
                    selected={selected}
                />
                <FAB
                    icon="add"
                    onPress={this.addEvent.bind(this)}
                    style={{
                        ...styles.fab,
                        backgroundColor : this.props.theme.colors.primary
                    }}
                />
            </View>
        )
    }
}

export default withTheme(Mensual)