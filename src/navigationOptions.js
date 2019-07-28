import React from 'react'
import { Appbar } from "react-native-paper";

export const menuDrawer = ({ navigation }) => {
    return {
        header: (
            <Appbar.Header>
                <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
                <Appbar.Content title="Dashboard" />
            </Appbar.Header>
        )
    };
};

export const backButton = ({ navigation }) => {
    return {
        header: (
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Dashboard" />
            </Appbar.Header>
        )
    };
};