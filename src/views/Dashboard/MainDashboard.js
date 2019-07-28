import React from 'react'
import { ScrollView } from "react-native";
import { withTheme } from "react-native-paper";

import { menuDrawer } from '@src/navigationOptions'
import { getDataFromURL } from '@utils/request'

import { CardWithTabs } from "@components";
import { LineChart } from "@components/Chart";


class MainDashboard extends React.Component {

    static navigationOptions = menuDrawer
    state = {
        dataDiario : {}
    }

    componentDidMount(){
        this.getData()
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

        return (
            <ScrollView style={styles.container(theme)}>
                <CardWithTabs
                    theme={theme} 
                    title={"Cantidad de citas"}
                    subtitle={"Progreso"}
                    tabs={[
                        {
                            title: 'Diario',
                            content : (
                                <LineChart 
                                    data={dataDiario}
                                />
                            )
                        },
                        {
                            title: 'Mensual'
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