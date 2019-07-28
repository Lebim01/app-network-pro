/* @flow */

import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import { XSCard, Tabs } from "@components";

class CardWithTabs extends React.Component {

    constructor(props){
        super(props)
        this.changeTab = this.changeTab.bind(this)
    }

    state = {
        tab : 0
    }

    changeTab(tab){
        this.setState({
            tab
        })
    }

    render() {
        const { title, subtitle, theme } = this.props;
        const { tab } = this.state
        return (
            <XSCard
                coverComponent={
                    <View>
                        <View style={styles.header}>
                            <Text style={styles.headline}>{title}</Text>
                            <Text style={styles.subheading(theme)}>{subtitle}</Text>
                        </View>
                    </View>
                }
                contentComponent={
                    <View>
                        <Tabs tabs={this.props.tabs} onChange={this.changeTab} />
                        { this.props.tabs[tab].content && 
                            this.props.tabs[tab].content 
                        }
                    </View>
                }
            />
        );
    }
}

const styles = {
    header: {
        padding: 10
    },
    headline: {
        fontSize: 18,
        marginBottom: 3
    },
    subheading: theme => ({
        fontSize: 14,
        color: theme.colors.subtitle
    }),
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginTop: 20,
        marginBottom: 30,
        marginHorizontal: 10
    },
    text1: {
        fontSize: 55,
        height: 60
    },
    text2: theme => ({
        fontSize: 16,
        color: theme.colors.subtitle,
        fontWeight: "bold"
    })
};

CardWithTabs.defaultProps = {
    tabs : []
}

export default CardWithTabs