import React, { useRef } from 'react'
import { SafeAreaView, View, Button, Text, ScrollView } from 'react-native'
import Wizard from "react-native-wizard"
import t from 'tcomb-form-native'

import * as Permissions from 'expo-permissions';
import * as Contacts from 'expo-contacts';

const styles = {
    title : {
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center'
    }
}

const Form = t.form.Form;

const MetaForm = t.struct({
    porque: t.String,
    ganancia: t.Number
});

const CompromisoForm = t.struct({
    cambio: t.String,
    horas: t.Number,
    dejar: t.String
});

const expandInputHeight = (name, form) => (e) => {
    form.current.getComponent(name).refs.input.setNativeProps({
        style: {
            paddingVertical: 10,
            height: e.nativeEvent.contentSize.height
        }
    })
}

const Buttons = () => {
    return (
        <View
        style={{
            justifyContent: "space-between",
            flexDirection: "row",
            backgroundColor: "#FFF",
            borderBottomColor: "#dedede",
            borderBottomWidth: 1,
        }}>
            <Button disabled={isFirstStep} title="Prev" onPress={() => wizard.current.prev()} />
            <Text>{currentStep + 1}. Step</Text>
            <Button disabled={isLastStep} title="Next" onPress={() => wizard.current.next()} />
        </View>
    )
}

const WizardStartApp = () => {
    const wizard = useRef();
    const metaForm = useRef()
    const compromisoForm = useRef()

    const optionsMeta = {
        fields : {
            porque : {
                label : '¿Cual es tu porqué?',
                help : 'Describe que es lo que te mueve a conseguir esa meta, parte importante es que este porqué debe mantenerte motivado todos los dias',
                multiline: true,
                onContentSizeChange: expandInputHeight('porque', metaForm)
            },
            ganancia : {
                label : '¿Cuanto dinero te quieres ganar?',
                help : 'Debe ser una cantidad que te emocione',
                multiline: true,
                onContentSizeChange: expandInputHeight('ganancia', metaForm),
                inlineImageLeft: 'search_icon'
            }
        }
    };

    const optionsCompromiso = {
        fields : {
            cambio : {
                label : 'Dar a cambio',
                multiline: true,
                onContentSizeChange: expandInputHeight('cambio', compromisoForm)
            },
            horas : {
                label : 'Horas a trabajar por dia',
                multiline: true,
                onContentSizeChange: expandInputHeight('horas', compromisoForm),
            },
            dejar : {
                label : 'Dejar de hacer',
                multiline: true,
                onContentSizeChange: expandInputHeight('dejar', compromisoForm),
            }
        }
    };

    const stepList = [
        {
            content: (
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <SafeAreaView style={{paddingHorizontal: 10}}>
                        <Text style={styles.title}>Empecemos por{'\n'}¿Cuál es tu meta?</Text>
                        <Form
                            ref={metaForm}
                            type={MetaForm}
                            options={optionsMeta}
                        />
                        <Button
                            title="Siguiente"
                            color="#841584"
                            onPress={() => {
                                let value = metaForm.current.getValue();
                                if (value) {
                                    console.debug(value);
                                    wizard.current.next()
                                }
                            }}
                        />
                    </SafeAreaView>
                </ScrollView>
            )
        },
        {
            content: (
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <SafeAreaView style={{paddingHorizontal: 10}}>
                        <Text style={[styles.title, { fontSize: 25 }]}>¡Excelente!{'\n'}Ahora, ¿a qué estas dispuesto?</Text>
                        <Form
                            ref={compromisoForm}
                            type={CompromisoForm}
                            options={optionsCompromiso}
                        />
                        <Button
                            title="Siguiente"
                            color="#841584"
                            onPress={() => {
                                wizard.current.next()
                            }}
                        />
                    </SafeAreaView>
                </ScrollView>
            )
        },
        {
            content: (
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <SafeAreaView style={{paddingHorizontal: 10}}>
                        <Text style={[styles.title, { fontSize: 25 }]}>¡Fabuloso!{'\n'}Sincroniza tus contactos</Text>
                        
                        <Button
                            title="Finalizar iniciación"
                            color="#841584"
                            onPress={async () => {
                                const { status } = await Permissions.askAsync(Permissions.CONTACTS);
                                if (status !== 'granted') {
                                    alert('Hey! You might want to enable notifications for my app, they are good.');
                                }else{
                                    const { data } = await Contacts.getContactsAsync();
                            
                                    if (data.length > 0) {
                                        const contact = data[0];
                                        console.debug(contact);
                                    }
                                }
                            }}
                        />
                    </SafeAreaView>
                </ScrollView>
            )
        },
    ]

    return (
        <View style={{flex: 1}}>
            <SafeAreaView style={{ backgroundColor: "#FFF" }}>
                <Wizard
                    ref={wizard}
                    steps={stepList}
                    onNext={() => {
                        console.log("Next Step Called")
                    }}
                    onPrev={() => {
                        console.log("Previous Step Called")
                    }}
                />
            </SafeAreaView>
        </View>
    )
}

export default WizardStartApp