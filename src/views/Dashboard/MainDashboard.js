import React from 'react'
import { ScrollView, View, Text } from "react-native";
import { withTheme } from "react-native-paper";

import { menuDrawer } from '@src/navigationOptions'
import { getDataFromURL } from '@utils/request'

import { CardWithTabs, FraseDia } from "@components";
import { LineChart } from "@components/Chart";
import WizardStartApp from '@views/WizardStartApp'

class MainDashboard extends React.Component {

    static navigationOptions = menuDrawer
    state = {
        dataDiario : {}
    }

    componentDidMount(){    
        //this.getData()
    }

    async getData(){
        try {
            let dataDiario = await getDataFromURL('dashboard/citasDiario')
            this.setState({
                dataDiario
            })
        } catch(e){
            
        }
    }

    render(){
        const { theme } = this.props
        const { dataDiario } = this.state

        return <WizardStartApp />

        return (
            <ScrollView style={styles.container(theme)}>
                <FraseDia />
                <CardWithTabs
                    theme={theme} 
                    title={"Cantidad de citas"}
                    subtitle={"Progreso"}
                    tabs={[
                        {
                            title: 'Diario',
                            content : (
                                <LineChart 
                                    //data={dataDiario}
                                    data={{
                                        labels: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"],
                                        datasets: [
                                            {
                                                data: [
                                                    Math.random() * 1000,
                                                    Math.random() * 1000,
                                                    Math.random() * 1000,
                                                    Math.random() * 1000,
                                                    Math.random() * 1000,
                                                    Math.random() * 1000
                                                ]
                                            }
                                        ]
                                    }}
                                />
                            )
                        },
                        {
                            title: 'Mensual',
                            content : (
                                <View>
                                    <Text>dfhjadsjka</Text>
                                    
                                </View>
                            )
                        },
                        {
                            title: 'Anual'
                        }
                    ]}
                />
            </ScrollView>
        )
    }
}

const styles = {
    container: theme => ({
        flex: 1,
        backgroundColor: theme.colors.background
    })
};

export default withTheme(MainDashboard)