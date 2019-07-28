/* @flow */

import * as React from "react";
import { View } from "react-native";

import TabItem from "./TabItem";

class Tabs extends React.PureComponent {
    state = {
        selectedIndex: 0
    };

    changeTab(tab){
        this.setState({
            selectedIndex: tab
        })
        if(this.props.onChange){
            this.props.onChange(tab)
        }
    }

    render() {
        const { selectedIndex } = this.state;
        const { tabs } = this.props

        return (
            <View style={styles.container}>
                { tabs.map((tab, i) => 
                    <TabItem
                        key={i}
                        title={tab.title}
                        selected={selectedIndex === i}
                        onPress={() => this.changeTab(i)}
                    />
                )}
            </View>
        );
    }
}

const styles = {
    container: {
        flexDirection: "row"
    }
};

Tabs.defaultProps = {
    tabs: []
}

export default Tabs