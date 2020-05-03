import React, { useState, useEffect } from 'react'
import { View, Text, DatePickerIOS } from 'react-native'
import { withTheme } from "react-native-paper";
import { Input, Button } from 'react-native-elements'
import Card from '@components/Card/Card'
import LoadingView from '@components/Animated/LoadingView'
import RequestFailedView from '@components/Animated/RequestFailedView'
import CountryPicker from 'react-native-country-picker-modal'
import { Br, BaseView } from '@components'
import lang from '@lang'
import moment from 'moment'

import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';

const query = {
    getProfile: gql`{
        user {
            name
            last_name
            email
            phone
            phone_code
            country
            why
            birthday
        }
    }`,
    saveProfile: gql`
        mutation SaveUser($name: String!, $last_name: String!, $email: String!, $phone: String!, $phone_code: String!, $country: String!, $why: String!, $birthday: String!) {
            saveUser(name: $name, last_name: $last_name, email: $email, phone: $phone, phone_code: $phone_code, country: $country, why: $why, birthday: $birthday) {
                name
                last_name
                email
                phone
                phone_code
                country
                why
                birthday
            }
        }
    `
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
    const [state, setState] = useState({
        birthday: moment().format('YYYY-MM-DD')
    })
    const [saveUser] = useMutation(
        query.saveProfile, 
        {
            update(cache, { data: { saveUser } }) {
                cache.writeQuery({
                    query: query.getProfile,
                    data: { user: saveUser },
                });
            }
        }
    );

    useEffect(() => {
        if(data && data.user){
            const { user: profile } = data
            /**
             * only set values if has value
             */
            setState({
                ...state,
                ...Object.keys(profile)
                    .filter((key) => {
                        return !!profile[key]
                    })
                    .reduce((a, key) => {
                        a[key] = profile[key]
                        return a
                    }, {})
            })
        }
    }, [data])

    if(loading) return <LoadingView />

    if (error) return <RequestFailedView />

    const save = () => {
        saveUser({ 
            variables: state
        });
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
                <View>
                    <Input 
                        labelStyle={styles.label} 
                        label={lang.Name} 
                        shake={true} 
                        value={state.name} 
                        onChangeText={onChangeText('name')} 
                    />
                    <Br/>
                    <Input 
                        labelStyle={styles.label} 
                        label={lang.LastName} 
                        shake={true} 
                        value={state.last_name} 
                        onChangeText={onChangeText('last_name')} 
                    />
                    <Br/>
                    <Text style={{ ...styles.label, paddingLeft: 10 }}>{lang.Birthday}</Text>
                    <DatePickerIOS
                        date={moment(state.birthday).toDate()}
                        onDateChange={(date) => {
                            setState({
                                ...state,
                                birthday: moment(date).format('YYYY-MM-DD')
                            })
                        }}
                        mode="date"
                        maximumDate={new Date()}
                    />
                    <Br/>
                    <View style={{ paddingHorizontal: 10 }}>
                        <CountryPicker 
                            onSelect={(country) => {
                                setState({
                                    ...state,
                                    country: country.name,
                                    phone_code: '+'+country.callingCode[0]
                                })
                            }}
                            withFilter
                        />
                        <Text style={{ color: 'gray' }}>Press on the flag to open modal</Text>
                        {state.country !== null && (
                            <Text style={styles.label}>
                                {state.country}
                            </Text>
                        )}
                    </View>
                    <Br />
                    <Input 
                        labelStyle={styles.label} 
                        label={lang.Phone} 
                        shake={true} 
                        value={state.phone}
                        leftIcon={
                            <Text>
                                {state.phone_code}
                            </Text>
                        }
                        leftIconContainerStyle={{
                            marginRight: 10
                        }}
                        onChangeText={onChangeText('phone')} 
                    />
                    <Br/>
                    <Input 
                        labelStyle={styles.label} 
                        label={lang.Email}
                        shake={true} 
                        value={state.email} 
                        onChangeText={onChangeText('email')} 
                    />
                    <Br />
                    <Text style={{ ...styles.label, paddingLeft: 10 }}>{lang.WriteWhy}</Text>
                    <Input 
                        labelStyle={styles.label} 
                        label={lang.Why} 
                        numberOfLines={2} 
                        multiline={true} 
                        value={state.why} 
                        onChangeText={onChangeText('why')} 
                    />
                </View>
            </Card>
        </BaseView>
    )
}

export default withTheme(Datos)