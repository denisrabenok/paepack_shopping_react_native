import React, { Component } from "react";
import { Alert, Image, StatusBar, Text, Dimensions, TouchableOpacity, AsyncStorage, TouchableHighlight } from "react-native";
import { Button, Container, Content, Spinner, View } from "native-base";
import colors from "../resources/colors";
import { connect } from "react-redux";
import consts from "../const";
import dimens from "../resources/dimens";
import strings from "../resources/strings";
import * as loginActions from "../actions/login-actions";
import * as rootActions from "../actions/root-actions";
import background from '../assets/background.png'
import product from '../assets/product.png'
import product1 from '../assets/machine.png'
import logo from '../assets/logo.png'
import Orientation from 'react-native-orientation';
import CustomTextInput from "./CustomTextInput";
import Header from "./DashboardHeader";
import LeftSideMenu from "./LeftSideMenu";
import Toast from 'react-native-toast-native';
const { width, height } = Dimensions.get('window');
// const window = Dimensions.get('window')
// console.ignoredYellowBox = true;
console.ignoredYellowBox = ['Warning:'];
export class Dashboard extends Component {

    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            isGoneAlready: false,
            onLeftSideMenu: false,
            dummy: false
        }
        this.getKey();
    }

    componentDidMount() {
        Orientation.lockToPortrait();
        this.props.dispatch(rootActions.controlProgress(false))
    }

    componentWillMount() {
        // let lang = this.props.root.get('lang');
        // console.warn(lang + 'test')
        // strings.setLanguage(lang)
        // strings.setLanguage('ar')
        // this.setState({ dummy: !this.state.dummy })
        // this.forceUpdate();
    }
    componentDidUpdate() {
        this.proceed()
    }
    async getKey() {
        // try {
        //     const value = await AsyncStorage.getItem('@Victory:key');
        //     strings.setLanguage(value);
        //     this.setState({ dummy: true });
        //     this.props.dispatch(rootActions.switchLanguage(value))
        //     this.forceUpdate();
        // } catch (error) {
        //     console.log("Error retrieving data" + error);
        // }
        // this.setState({ dummy: true });
    }
    proceed() {
        // if (lang) {
        //     strings.setLanguage(lang);
        //     // this.setState({ dummy: !this.state.dummy });
        // }
        // const loginError = this.props.Login.get('loginError');
        // const isLoggedIn = this.props.Login.get('isLoggedIn');
        // const toastStyles = {
        //     width: width,
        //     height: height / 6,
        //     backgroundColor: '#34343400',
        //     color: 'red',
        //     fontSize: dimens.text_size_button,
        //     alignItems: 'center',
        //     alignSelf: 'center',
        //     justifyContent: 'center'
        // }
        // Alert.alert(this.state.email + ', ' + loginError.msg)
        // if (isLoggedIn)
        //     Alert.alert('1')
        // if (this.state.isGoneAlready)
        //     Alert.alert('2')
        // if (this.isObject(loginError.msg))
        //     Alert.alert('3')
        // if (loginError.msg)
        //     Alert.alert('4')
        // if (this.isObject(loginError) && loginError && !this.isObject(loginError.msg) && loginError.msg) {
        //     Toast.show(loginError.msg, Toast.SHORT, Toast.CENTER, toastStyles);
        //     // Alert.alert(loginError + '');
        //     this.props.dispatch(loginActions.setError({}))
        // } else if (isLoggedIn && !this.state.isGoneAlready) {
        //     this.setState({ isGoneAlready: true });
        //     this.props.navigation.navigate(consts.DASHBOARD_SCREEN);
        // }
    }

    isObject(obj) {
        return typeof obj === 'object';
    }

    // noinspection JSMethodCanBeStatic
    setEmail(text) {
        this.setState({ email: text });
    }
    setPassword(text) {
        this.setState({ password: text });
    }
    validateEmail = (text: string): boolean => consts.EMAIL_REGEX.test(text);

    validatePassword = (text: string): boolean => text.length >= consts.MIN_PASSWORD_LENGTH;

    render() {
        return (
            <Container style={Styles.containerStyle}>
                <StatusBar style={Styles.statusBarStyle} hidden={true} />
                <Header
                    onPressOpt={this.onPressOpt}
                    navigation={this.props.navigation} />
                <Content contentContainerStyle={Styles.contentStyle}>
                    <TouchableHighlight
                        onPress={this.onPressItem}
                        underlayColor='transparent'
                        style={Styles.item}>
                        <View>
                            <Image style={Styles.itemBackImage} source={product1} />
                            <View style={Styles.circleDesc}>
                                <View style={Styles.circle} />
                                <View style={Styles.top}>
                                    <Text style={Styles.saleText}>{strings.sale}</Text>
                                    <Text style={Styles.uptoText}>{strings.upto}</Text>
                                </View>
                                <View style={Styles.bottom}>
                                    <Text style={Styles.percentTex}>30%</Text>
                                    <Text style={Styles.offText}>{strings.off}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.onPressItem}
                        underlayColor='transparent'
                        style={Styles.item}>
                        <View>
                            <Image style={Styles.itemBackImage} source={product} />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.onPressItem}
                        underlayColor='transparent'
                        style={Styles.item}>
                        <View>
                            <Image style={Styles.itemBackImage} source={product1} />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.onPressItem}
                        underlayColor='transparent'
                        style={Styles.item}>
                        <View>
                            <Image style={Styles.itemBackImage} source={product} />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.onPressItem}
                        underlayColor='transparent'
                        style={Styles.item}>
                        <View>
                            <Image style={Styles.itemBackImage} source={product1} />
                        </View>
                    </TouchableHighlight>
                    {this.renderProgress()}
                </Content>
                {this.state.onLeftSideMenu ?
                    <LeftSideMenu
                        navigation={this.props.navigation}
                        hideLeftMenu={this.hideLeftMenu}
                        refresh={this.refresh} />
                    : null}
            </Container>
        );
    }

    renderProgress() {
        if (this.props.root.get('progress')) {
            return this.spinner()
        } else {
            return null;
        }
    }

    spinner() {
        return (
            <Spinner
                color={colors.secondColor}
                animating={true}
                size={'large'}
                style={loginStyles.progressStyle} />
        )
    }

    validateEmail = (text: string): boolean => consts.EMAIL_REGEX.test(text);

    validatePassword = (text: string): boolean => text.length >= consts.MIN_PASSWORD_LENGTH;

    onPressItem = () => {
        this.props.navigation.navigate(consts.INNERPRODUCT_SCREEN);
    }
    onPressSignup = () => {
        this.props.navigation.navigate(consts.SIGNUP_SCREEN);
    }
    onPressOpt = () => {
        this.setState({ onLeftSideMenu: true })
    }
    hideLeftMenu = () => {
        this.setState({ onLeftSideMenu: false });
    }
}


const Styles = {
    containerStyle: {
        backgroundColor: colors.backColor
    },
    contentStyle: {
        flexDirection: 'column',
        paddingBottom: height / 20,
    },
    statusBarStyle: {
        // backgroundColor: colors.primaryColor
    },
    progressStyle: {
        position: 'absolute',
        top: height / 3,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    item: {
        marginTop: height / 40,
        width: width / 20 * 19,
        padding: width / 80,
        backgroundColor: 'white',
        borderRadius: 15,
        alignSelf: 'center',
    },
    itemBackImage: {
        width: width / 40 * 37,
        height: height / 4,
        resizeMode: 'cover',
        borderRadius: 15
    },
    circleDesc: {
        position: 'absolute',
        height: height / 8,
        bottom: width / 40,
        left: width / 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: height / 50
    },
    circle: {
        position: 'absolute',
        left: 0,
        width: height / 8,
        height: height / 8,
        borderRadius: height / 16,
        backgroundColor: '#00000060',
    },
    top: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        zIndex: 1000
    },
    saleText: {
        color: colors.sale,
        fontWeight: 'bold',
        fontSize: dimens.btn + 2,
    },
    uptoText: {
        color: 'white',
        paddingLeft: 5,
        fontWeight: 'bold'
    },
    bottom: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        zIndex: 1000
    },
    percentTex: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: dimens.btn + 8
    },
    offText: {
        color: 'white',
        paddingLeft: 5,
        fontWeight: 'bold'
    }
};

const mapStateToProps = (state) => ({
    Dashboard: state.get('dashboard'),
    root: state.get('root'),
});

export default connect(mapStateToProps)(Dashboard)