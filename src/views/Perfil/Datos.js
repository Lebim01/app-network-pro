import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { withTheme } from "react-native-paper";
import { Input, Button } from 'react-native-elements'
import Card from '@components/Card/Card'
import LoadingView from '@components/Animated/LoadingView'
import RequestFailedView from '@components/Animated/RequestFailedView'
import { Br, BaseView } from '@components'
import DatePicker from 'react-native-datepicker'
import lang from '@lang'

import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const query = {
    getProfile: gql`{
        user {
            name
        }
    }`
}

const styles = {
    label : {
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 15
    }
}

const Datos = (props) => {
    const { loading, error, data } = useQuery(query.getProfile);
    const [state, setState] = useState({})

    if(loading) return <LoadingView />

    if (error) return <RequestFailedView />

    const { user: profile } = data

    const save = () => {

    }

    const onChangeText = name => value => {
        setState({
            ...state,
            [name]: value
        })
    }

    return (
        <BaseView>
            <Card title="Perfil" actions={<Button title={lang.Save} onPress={save} loading={loading} />}>
                {profile &&
                    <View>
                        <Input labelStyle={styles.label} label={lang.Name} shake={true} value={profile.name} onChangeText={onChangeText('name')} />
                        <Br/>
                        <Input labelStyle={styles.label} label={lang.LastName} shake={true} value={profile.last_name} onChangeText={onChangeText('last_name')} />
                        <Br/>
                        <Text style={{ ...styles.label, paddingLeft: 10 }}>{lang.Birthday}</Text>
                        <DatePicker
                            style={{ width: '100%' }}
                            date={profile.birthday}
                            onDateChange={date => setState({ ...state, birthday: date })}
                            confirmBtnText={lang.Confirm}
                            cancelBtnText={lang.Cancel}
                        />
                        <Br/>
                        <Input labelStyle={styles.label} label={lang.Why} numberOfLines={2} multiline={true} value={profile.why} onChangeText={onChangeText('why')} />
                    </View>
                }
            </Card>
        </BaseView>
    )
}

export default withTheme(Datos)