import React from 'react'
import { Dimensions } from "react-native";
import { LineChart as LChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
};

const emptyChart = {
    labels: ["Sin datos"],
    datasets: [
        {
            data: [
                0
            ]
        }
    ]
}

const isEmpty = (conf) => {
    return !(conf && conf.datasets && conf.datasets[0] && conf.datasets[0].data)
}

class LineChart extends React.Component {
    render(){
        const { data } = this.props
        return(
            <LChart
                data={!isEmpty(data) ? data : emptyChart}
                width={screenWidth - 20}
                height={220}
                chartConfig={chartConfig}
                bezier
                style={{
                    marginVertical: 10
                }}
            />
        )
    }
}

LineChart.defaultProps = {
    data : {}
}

export default LineChart
