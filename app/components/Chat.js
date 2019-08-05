import React, { Component } from "react";
import { Alert, Image, StatusBar, Text, Dimensions, TouchableOpacity, AsyncStorage, TouchableHighlight, ScrollView } from "react-native";
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
import cross_icon from '../assets/icons/cross_icon.png'
import go_icon from '../assets/icons/go_icon.png'
import send_icon from '../assets/icons/send_icon.png'
import product from '../assets/machine.png'
import senderImg from '../assets/logo.png'
import receiverImg from '../assets/photo.png'
import Orientation from 'react-native-orientation';
import CustomTextInput from "./CustomTextInput";
import Header from "./SimpleHeader";
import LeftSideMenu from "./LeftSideMenu";
import Toast from 'react-native-toast-native';
const { width, height } = Dimensions.get('window');
// const window = Dimensions.get('window')
// console.ignoredYellowBox = true;
console.ignoredYellowBox = ['Warning:'];
export class Chat extends Component {

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
                <View style={Styles.chattingBox}>
                    <View contentContainerStyle={Styles.contentStyle}>
                        <Image style={[Styles.personImg, Styles.receiver]} source={senderImg} />
                        <Text style={[Styles.msg, Styles.receiver]}>Nice to meet you</Text>
                        <Image style={[Styles.personImg, Styles.sender]} source={receiverImg} />
                        <Text style={[Styles.msg, Styles.sender]}>Nice to meet you, too</Text>
                        <Text style={[Styles.msg, Styles.sender]}>I'd like to know about your products. Could you please guide me?</Text>
                        <Image style={[Styles.personImg, Styles.receiver]} source={senderImg} />
                        <Text style={[Styles.msg, Styles.receiver]}>Yes, of course</Text>
                    </View>
                    <View style={Styles.inputBox}>
                        <Input placeholder={strings.type_a_message} style={Styles.input} />
                        <TouchableOpacity >
                            <Image style={Styles.sendImg} source={send_icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                {this.renderProgress()}
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
    onPressDescription = () => {
        this.props.navigation.navigate(consts.DESCRIPTION_SCREEN);
    }
    onPressShipping_Returns = () => {
        this.props.navigation.navigate(consts.SHIPPING_RETURENS_SCREEN);
    }
    onPressback = () => {
        // this.setState({ onLeftSideMenu: true })
        this.props.navigation.pop();
    }
    onPressReview = () => {
        this.props.navigation.navigate(consts.REVIEW_SCREEN);
    }
}


const Styles = {
    containerStyle: {
        backgroundColor: colors.backColor
    },
    chattingBox: {
        width: width / 20 * 19,
        marginTop: width / 40,
        height: height - width * (1 / 6 + 1 / 20),
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 15,
        justifyContent: 'flex-end',
    },
    contentStyle: {
        alignItems: 'center',
        width: width / 20 * 19,
        // margin: width / 40,
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        marginBottom: width / 40,
        paddingLeft: width / 40,
        paddingRight: width / 40,
    },
    personImg: {
        width: width / 10,
        height: width / 10,
        resizeMode: 'cover',
        marginTop: width / 20,
        borderRadius: width / 20
    },
    sender: {
        alignSelf: 'flex-end',
        marginRight: width / 40,
    },
    msg: {
        width: width / 3 * 2,
        backgroundColor: '#aaaaaa',
        padding: width / 40,
        borderRadius: 5,
        fontSize: dimens.btn,
        marginTop: width / 40
    },
    receiver: {
        alignSelf: 'flex-start',
        marginLeft: width / 40,
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
    inputBox: {
        flexDirection: 'row',
        borderTopColor: '#aaaaaa',
        borderTopWidth: 1,
        padding: width / 40,
        alignItems: 'center',
        fontSize: dimens.item,
        marginTop: width / 40
    },
    sendImg: {
        width: width / 10,
        height: width / 10,
        resizeMode: 'contain'
    }
};

const mapStateToProps = (state) => ({
    Chat: state.get('chat'),
    root: state.get('root'),
});

export default connect(mapStateToProps)(Chat)