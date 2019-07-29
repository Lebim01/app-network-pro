import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Agenda } from 'react-native-calendars'

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
    }
})

const items = {
    '2019-07-22': [{text: 'item 1 - any js object'}],
    '2019-07-23': [{text: 'item 2 - any js object'}],
    '2019-07-24': [],
    '2019-07-25': [{text: 'item 3 - any js object'},{text: 'any js object'}]
}
const markeds = {}
for(let key in items){
    markeds[key] = {marked : true}
}

class Mensual extends React.Component {

    renderItem(item) {
        return (
            <View style={[styles.item, {height: item.height}]}><Text>{item.text}</Text></View>
        );
    }
    
    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}>
                <Text>This is empty date!</Text>
            </View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.text !== r2.text;
    }

    render(){
        return (
            <View style={styles.container}>
                <Agenda
                    items={items}
                    renderItem={this.renderItem.bind(this)}
                    renderEmptyDate={this.renderEmptyDate.bind(this)}
                    rowHasChanged={this.rowHasChanged.bind(this)}
                    markedDates={markeds}
                    style={styles.container}
                />
            </View>
        )
    }
}

export default Mensual