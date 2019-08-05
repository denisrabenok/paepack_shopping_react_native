import React, { Component } from "react";
import { Alert, Image, StatusBar, Text, Dimensions, TouchableOpacity, AsyncStorage, TouchableHighlight } from "react-native";
import { Button, Container, Content, Spinner, View, Input } from "native-base";
import colors from "../resources/colors";
import { connect } from "react-redux";
import consts from "../const";
import dimens from "../resources/dimens";
import strings from "../resources/strings";
import * as loginActions from "../actions/login-actions";
import * as rootActions from "../actions/root-actions";
import background from '../assets/background.png'
import full_star_icon from '../assets/icons/full_star_icon.png'
import empty_star_icon from '../assets/icons/empty_star_icon.png'
import go_icon from '../assets/icons/go_icon.png'
import map from '../assets/map.png'
import logo from '../assets/logo.png'
import Orientation from 'react-native-orientation';
import CustomTextInput from "./CustomTextInput";
import CustomTextArea from "./CustomTextArea";
import Header from "./SimpleHeader";
import LeftSideMenu from "./LeftSideMenu";
import Toast from 'react-native-toast-native';
const { width, height } = Dimensions.get('window');
// const window = Dimensions.get('window')
// console.ignoredYellowBox = true;
console.ignoredYellowBox = ['Warning:'];
export class FindUs extends Component {

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
                <StatusBar style={Styles.statusBarStyle} hidden={true} />
                <Header
                    navigation={this.props.navigation} />
                <Content contentContainerStyle={Styles.contentStyle}>
                    <View style={Styles.form}>
                        <Image style={Styles.productImg} source={map} />
                    </View>
                    <View style={Styles.form}>
                        <Text style={Styles.content}>
                            For questions about any of our products, or help with placing your order, don't hesitate to contact us:
                        </Text>
                        <Text style={Styles.content}>
                            Email: info@paepack.com
                        </Text>
                        <Text style={Styles.content}>
                            Local: 1-323-705-4761
                            
                        </Text>
                        <Text style={Styles.content}>
                            Toll free: 1-866-PAEPACK (1-866-723-7225)
                        </Text>
                        <CustomTextInput
                            label="name"
                            onChangeText={(text) => this.setEmail(text)}
                            placeholder={strings.name}
                            secureTextEntry={false} />
                        <CustomTextInput
                            label="email"
                            onChangeText={(text) => this.setEmail(text)}
                            placeholder={strings.email}
                            secureTextEntry={false} />
                        <CustomTextArea
                            onChangeText={(text) => this.setEmail(text)}
                            placeholder={strings.message}
                            secureTextEntry={false} />
                        <TouchableOpacity style={Styles.btn}>
                            <Text style={Styles.btnText}>{strings.send}</Text>
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

    onPressItem = () => {
        // this.setState({ isGoneAlready: false });
        // this.props.dispatch(loginActions.login(this.state.email, this.state.password));
        // Alert.alert('test')
        // this.props.navigation.navigate(consts.SETUP_SCREEN);
    }
    onPressSignup = () => {
        this.props.navigation.navigate(consts.SIGNUP_SCREEN);
    }
    onPressback = () => {
        // this.setState({ onLeftSideMenu: true })
        this.props.navigation.pop();
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
        marginTop: width / 40,
        alignItems: 'center',
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
    form: {
        marginTop: width / 40,
        width: width / 20 * 19,
        padding: width / 40,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
    },
    productImg: {
        width: width / 10 * 9,
        height: height / 3.5,
        resizeMode: 'cover'
    },
    subform: {
        alignSelf: 'stretch',
        height: height / 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        borderRadius: 15
    },
    comingSoon: {
        fontSize: dimens.title,
        fontWeight: 'bold'
    },
    itemTitle: {
        alignSelf: 'flex-start',
        textAlign: 'left',
        fontSize: dimens.btn,
        color: 'black',
        fontWeight: 'bold',
    },
    title: {
        color: colors.finance,
        fontSize: dimens.title,
        fontWeight: 'bold',
        marginTop: width / 20,
        marginBottom: width / 40,
    },
    subtitle: {
        // color: colors.finance,
        fontSize: dimens.btn,
        fontWeight: 'bold',
        marginBottom: width / 80,
    },
    titleDesc: {
        fontSize: dimens.btn - 4,
        fontWeight: 'bold',
        marginBottom: width / 40,
    },
    content: {
        alignSelf: 'flex-start',
        marginTop: width / 80,
        marginBottom: width / 100,
        textAlign: 'left'
    },
    btn: {
        marginTop: width / 40,
        width: width / 20 * 17,
        justifyContent: 'center',
        alignItems: 'center',
        padding: width / 40,
        backgroundColor: colors.finance,
        borderRadius: 15,
    },
    btnText: {
        fontSize: dimens.btn,
        color: 'white',
        fontWeight: 'bold'
    },
};

const mapStateToProps = (state) => ({
    FindUs: state.get('findUs'),
    root: state.get('root'),
});

export default connect(mapStateToProps)(FindUs)