import React, { Component } from "react";
import { Content, Input, Item, Label, Text, Left, View } from "native-base";
import { Alert, Image, Dimensions, TextInput, TouchableOpacity } from "react-native";
import strings from "../resources/strings";
import PropTypes from "prop-types";
import * as Immutable from "../../node_modules/immutable/dist/immutable";
import ImmutableComponent from "./ImmutableComponent";
import search_icon from '../assets/icons/search_icon.png'
import chat_icon from '../assets/icons/chat_icon.png'
import notification_icon from '../assets/icons/notification_icon.png'
import cart_icon from '../assets/icons/cart_icon.png'
import category_icon from '../assets/icons/category_icon.png'
import brand_icon from '../assets/icons/brand_icon.png'
import machine_icon from '../assets/icons/machine_icon.png'
import tape_icon from '../assets/icons/tape_icon.png'
import option_icon from '../assets/icons/option_icon.png'
import colors from "../resources/colors";
import consts from "../const";
import { controlProgress } from "../actions/root-actions";


const { width, height } = Dimensions.get('window');


export default class DashboardHeader extends ImmutableComponent {

    constructor(props: {}) {
        super(props);
        this.state = {
            data: Immutable.Map({
                error: "",
                showDefaultValue: true,
            })
        };
    }
    render() {
        return (
            <View
                shouldRasterizeIOS
                renderToHardwareTextureAndroid
                style={Styles.containerStyle}>
                <View style={Styles.top}>
                    <TouchableOpacity style={Styles.sandwichMenu} onPress={this.props.onPressOpt}>
                        <Image style={Styles.topIconImg} source={option_icon} />
                    </TouchableOpacity>
                    <View style={Styles.topIcons}>
                        <TouchableOpacity style={Styles.topIcon}>
                            <Image style={Styles.topIconImg} source={search_icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.topIcon} onPress={this.onPressChat}>
                            <Image style={Styles.topIconImg} source={chat_icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.topIcon}>
                            <Image style={Styles.topIconImg} source={notification_icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.topIcon} onPress={this.onPressCart}>
                            <Image style={Styles.topIconImg} source={cart_icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.bottom}>
                    <TouchableOpacity style={Styles.item}>
                        <Image style={Styles.itemImg} source={category_icon} />
                        <Text style={Styles.itemText}>{strings.categories}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.item}>
                        <Image style={Styles.itemImg} source={brand_icon} />
                        <Text style={Styles.itemText}>{strings.brands}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.item}>
                        <Image style={Styles.itemImg} source={machine_icon} />
                        <Text style={Styles.itemText}>{strings.machines}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.item}>
                        <Image style={Styles.itemImg} source={tape_icon} />
                        <Text style={Styles.itemText}>{strings.tape}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    alertShow(text) {
        // Alert.alert(text);
    }
    onPressChat = () => {
        this.props.navigation.navigate(consts.CHAT_SCREEN)
    }
    onPressCart = () => {
        this.props.navigation.navigate(consts.CART_SCREEN);
    }
    handleTextChange = (text: string) => {
        if (this.props.onChangeText) {
            this.props.onChangeText(text);
        }
    };
}

const Styles = {
    containerStyle: {
        width: width
    },
    top: {
        backgroundColor: colors.header,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: width / 20,
        paddingRight: width / 20,
        paddingTop: width / 20,
        paddingBottom: height / 10,
    },
    sandwichMenu: {},
    topIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width / 7 * 3
    },
    topIcon: {},
    topIconImg: {
        height: width / 15,
        width: width / 15,
        resizeMode: 'contain'
    },
    bottom: {
        marginTop: -height / 15,
        width: width / 20 * 19,
        height: height / 7.5,
        borderRadius: 15,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        paddingLeft: width / 20,
        paddingRight: width / 20
    },
    item: {
        alignItems: 'center',
    },
    itemImg: {
        width: width / 10,
        height: width / 10,
        marginBottom: width / 100,
        resizeMode: 'contain',
    }
};

DashboardHeader.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    defaultValue: PropTypes.string
};