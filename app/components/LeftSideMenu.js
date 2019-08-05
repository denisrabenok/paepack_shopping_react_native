import React, { Component } from "react";
import { Content, Input, Item, Label, Text, Left, View, } from "native-base";
import { Alert, Image, Dimensions, TextInput, ScrollView, TouchableHighlight, TouchableOpacity } from "react-native";
import strings from "../resources/strings";
import PropTypes from "prop-types";
import * as Immutable from "../../node_modules/immutable/dist/immutable";
import ImmutableComponent from "./ImmutableComponent";
import photo from '../assets/photo.png'
import colors from "../resources/colors";
import dimens from "../resources/dimens";
import LinearGradient from 'react-native-linear-gradient';
import { controlProgress } from "../actions/root-actions";
import consts from "../const";
import aboutus_icon from '../assets/icons/aboutus_icon.png'
import bookingOnline_icon from '../assets/icons/bookingOnline_icon.png'
import portfolio_icon from '../assets/icons/portfolio_icon.png'
import products_icon from '../assets/icons/products_icon.png'
import services_icon from '../assets/icons/services_icon.png'
import signout_icon from '../assets/icons/signout_icon.png'
import findus_icon from '../assets/icons/findus_icon.png'
const { width, height } = Dimensions.get('window');


export default class LeftSideMenu extends ImmutableComponent {

    constructor(props: {}) {
        super(props);

        this.state = {
            data: Immutable.Map({
                error: "",
                showDefaultValue: true,
            }),
            indeterminate: false,
            width: width,
            dummy: true
        };
        // Alert.alert(width + ', ' + height);
    }
    componentDidMount() {
        this.animate();
    }

    animate() {
        let progress = width;
        this.setState({ width: progress });
        setTimeout(() => {
            this.setState({ indeterminate: false });
            let intervalId = setInterval(() => {
                progress = progress - 100;
                // Alert.alert('test')
                if (progress < width / 5) {
                    progress = width / 5
                    this.setState({ indeterminate: true })
                    this.setState({ width: progress });
                    clearInterval(intervalId);
                    return;
                }
                this.setState({ width: progress });
                // this.forceUpdate();
            }, 50);
        }, 10);
        // this.setState({ width: width / 2 })
    }
    onPressBack = () => {
        if (this.state.indeterminate) {
            this.setState({ indeterminate: false })
            let progress = width / 5;
            this.setState({ width: progress });
            setTimeout(() => {
                let intervalId = setInterval(() => {
                    progress = progress + 100;
                    // Alert.alert('test')
                    if (progress > width) {
                        progress = width
                        this.setState({ width: progress });
                        clearInterval(intervalId);
                        this.props.hideLeftMenu();
                        // this.props.parent.setState({ onLeftSideMenu: false });
                        return
                    }
                    this.setState({ width: progress });
                    // this.forceUpdate();
                }, 50);
            }, 10);
        }
    }
    onPressProducts = () => {
        this.props.hideLeftMenu();
        this.props.navigation.navigate(consts.PRODUCTS_SCREEN)
    }
    onPressAboutUs = () => {
        this.props.hideLeftMenu();
        this.props.navigation.navigate(consts.ABOUTUS_SCREEN)
    }
    onPressPortFindus = () => {
        this.props.hideLeftMenu();
        this.props.navigation.navigate(consts.FINDUS_SCREEN)
    }
    onPressPortfolio = () => {
        this.props.hideLeftMenu();
        this.props.navigation.navigate(consts.PORTFOLIO_SCREEN)
    }
    onPressServices = () => {
        this.props.hideLeftMenu();
        this.props.navigation.navigate(consts.SERVICES_SCREEN)
    }
    onPressLanguageSwitch = () => {
        // Alert.alert('test')
        // if (strings.getLanguage() === 'en') strings.setLanguage('ar')
        // else strings.setLanguage('en')
        this.props.refresh();
        this.forceUpdate();
    }
    render() {
        return (
            <View style={Styles.containerStyle}>
                <View
                    style={Styles.contentStyle}>
                    <View style={Styles.topRow}>
                        <LinearGradient
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 1 }}
                            colors={['#81d7af', '#8091da']}
                            style={Styles.outter}>
                            <View style={Styles.inner}>
                                <Image style={Styles.profileImg} source={photo} />
                            </View>
                        </LinearGradient>
                        <Text style={Styles.name}>Mark Anderson</Text>
                    </View>
                    <TouchableOpacity
                        onPress={this.onPressAboutUs}
                        underlayColor='transparent'
                        style={Styles.itemRow}>
                        <Image style={Styles.itemImg} source={aboutus_icon} />
                        <Text style={Styles.itemText}>{strings.aboutus}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onPressProducts}
                        underlayColor='transparent'
                        style={Styles.itemRow}>
                        <Image style={Styles.itemImg} source={products_icon} />
                        <Text style={Styles.itemText}>{strings.products}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onPressPortfolio}
                        underlayColor='transparent'
                        style={Styles.itemRow}>
                        <Image style={Styles.itemImg} source={portfolio_icon} />
                        <Text style={Styles.itemText}>{strings.portfolio}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onPressPortFindus}
                        underlayColor='transparent'
                        style={Styles.itemRow}>
                        <Image style={Styles.itemImg} source={findus_icon} />
                        <Text style={Styles.itemText}>{strings.findus}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onPressServices}
                        underlayColor='transparent'
                        style={Styles.itemRow}>
                        <Image style={Styles.itemImg} source={services_icon} />
                        <Text style={Styles.itemText}>{strings.services}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        underlayColor='transparent'
                        style={Styles.itemRow}>
                        <Image style={Styles.itemImg} source={bookingOnline_icon} />
                        <Text style={Styles.itemText}>{strings.bookingOnline}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        underlayColor='transparent'
                        style={Styles.itemRow}>
                        <Image style={Styles.itemImg} source={signout_icon} />
                        <Text style={Styles.itemText}>{strings.signout}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableHighlight
                    style={[Styles.backStyle, { width: this.state.width }]}
                    underlayColor='#00000020'
                    onPress={this.onPressBack}>
                    <View style={Styles.backStyle} />
                </TouchableHighlight>
            </View>
        );
    }
}

const Styles = {
    containerStyle: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        width: width,
        height: height,
        backgroundColor: '#00000020',
        justifyContent: 'flex-end',
        zIndex: 100000
    },
    contentStyle: {
        width: width / 5 * 4,
        height: height,
        backgroundColor: 'white',
        paddingTop: width / 10,
        backgroundColor: colors.header,
        borderRightWidth: 1,
        borderRightColor: '#aaaaaa',
    },
    topRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#aaaaaa',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: width / 20,
        paddingLeft: width / 20,
    },
    backStyle: {
        backgroundColor: '#00000020',
        // width: width / 3,
        height: height
    },
    outter: {
        width: width / 6,
        height: width / 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width / 8,
        marginBottom: width / 10,
    },
    inner: {
        width: width / 6 - 4,
        height: width / 6 - 4,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: width / 8 - 2
    },
    profileImg: {
        width: width / 6 - 4,
        height: width / 6 - 4,
        alignItems: 'center',
        borderRadius: width / 12 - 2
    },
    itemRow: {
        flexDirection: 'row',
        paddingLeft: width / 20,
        paddingRight: width / 20,
        borderBottomWidth: 1,
        borderColor: '#aaaaaa',
        paddingTop: height / 40,
        paddingBottom: height / 50,
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    itemImg: {
        width: height / 25,
        height: height / 25,
        marginRight: width / 20,
        resizeMode: 'contain'
    },
    name: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: dimens.btn + 4,
    },
    itemText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: dimens.btn,
    }
};

LeftSideMenu.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    defaultValue: PropTypes.string
};