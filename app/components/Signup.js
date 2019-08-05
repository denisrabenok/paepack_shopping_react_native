import React, { Component } from "react";
import { Alert, Image, StatusBar, Text, Dimensions, TouchableOpacity, AsyncStorage } from "react-native";
import { Button, Container, Content, Spinner, View } from "native-base";
import colors from "../resources/colors";
import { connect } from "react-redux";
import consts from "../const";
import dimens from "../resources/dimens";
import strings from "../resources/strings";
import * as loginActions from "../actions/login-actions";
import * as rootActions from "../actions/root-actions";
import background from '../assets/background.png'
import logo from '../assets/logo.png'
import Orientation from 'react-native-orientation';
import CustomTextInput from "./CustomTextInput";
import Toast from 'react-native-toast-native';
const { width, height } = Dimensions.get('window');
// const window = Dimensions.get('window')
// console.ignoredYellowBox = true;
console.ignoredYellowBox = ['Warning:'];
export class Signup extends Component {

    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            isGoneAlready: false,
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
                <Image source={background}
                    style={Styles.imageStyle} />
                <StatusBar style={Styles.statusBarStyle} hidden={true} />
                <Content contentContainerStyle={Styles.contentStyle}>
                    <Image style={Styles.logo} source={logo} />
                    <CustomTextInput
                        label="name"
                        onChangeText={(text) => this.setEmail(text)}
                        placeholder={strings.firstName}
                        secureTextEntry={false} />
                    <CustomTextInput
                        label="name"
                        onChangeText={(text) => this.setEmail(text)}
                        placeholder={strings.lastName}
                        secureTextEntry={false} />
                    <CustomTextInput
                        label="email"
                        onChangeText={(text) => this.setEmail(text)}
                        placeholder={strings.email}
                        secureTextEntry={false} />
                    <CustomTextInput
                        label="password"
                        onChangeText={(text) => this.setEmail(text)}
                        placeholder={strings.password}
                        secureTextEntry={true} />
                    <TouchableOpacity
                        style={Styles.btn}
                        onPress={this.onPressLogin}>
                        <Text style={Styles.btnText}>{strings.signup}</Text>
                    </TouchableOpacity>
                    <View style={Styles.desc}>
                        <Text style={Styles.descText}>{strings.already_have_an_account}</Text>
                        <TouchableOpacity style={Styles.descBtn} onPress={this.onPressSignin}>
                            <Text style={Styles.descBtnText}>{strings.signin}</Text>
                        </TouchableOpacity>
                    </View>
                    {this.renderProgress()}
                </Content>
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

    onLoginPress = () => {
        // this.setState({ isGoneAlready: false });
        // this.props.dispatch(loginActions.login(this.state.email, this.state.password));
        this.props.navigation.navigate(consts.SETUP_SCREEN);
    }
    onPressSignin = () => {
        this.props.navigation.navigate(consts.LOGIN_SCREEN);
    }
}


const Styles = {
    containerStyle: {

        backgroundColor: '#ffffff'
    },
    contentStyle: {
        flex: 0,
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        // alignSelf: 'center',
        // marginHorizontal: dimens.margin_large
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
    imageStyle: {
        position: 'absolute',
        top: 0,
        width: width,
        height: height,
        resizeMode: 'stretch',
    },
    logo: {
        width: width / 3,
        height: width / 3,
        marginTop: height / 13,
        marginBottom: height / 40,
        resizeMode: 'contain'
    },
    btn: {
        // marginTop: height / 40,
        width: width / 20 * 17,
        borderRadius: 15,
        height: height / 40 * 3,
        backgroundColor: '#ec1f27',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: dimens.btn
    },
    desc: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: height / 40
    },
    descText: {
        fontSize: dimens.btn
    },
    descBtn: {
        marginLeft: 10,
    },
    descBtnText: {
        color: '#ec1f27',
        fontSize: dimens.btn
    }
};

const mapStateToProps = (state) => ({
    Signup: state.get('signup'),
    root: state.get('root'),
});

export default connect(mapStateToProps)(Signup)