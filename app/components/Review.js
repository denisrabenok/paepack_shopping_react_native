import React, { Component } from "react";
import { Alert, Image, StatusBar, Text, Dimensions, TouchableOpacity, AsyncStorage, TouchableHighlight } from "react-native";
import { Button, Container, Content, Spinner, View, Input, Textarea } from "native-base";
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
import product1 from '../assets/machine.png'
import logo from '../assets/logo.png'
import Orientation from 'react-native-orientation';
import CustomTextInput from "./CustomTextInput";
import Header from "./SimpleHeader";
import LeftSideMenu from "./LeftSideMenu";
import Toast from 'react-native-toast-native';
const { width, height } = Dimensions.get('window');
// const window = Dimensions.get('window')
// console.ignoredYellowBox = true;
console.ignoredYellowBox = ['Warning:'];
export class Review extends Component {

    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            isGoneAlready: false,
            dummy: false,
            Star_status: [{ isFull: false }, { isFull: false }, { isFull: false }, { isFull: false }, { isFull: false }]
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
                    <View style={Styles.productRow}>
                        <Image style={Styles.productImg} source={product1} />
                        <View style={Styles.desc}>
                            <Text style={Styles.productName}>PTFE Coated Glass Fabric Tape 6 Mil (78106)</Text>
                            <Text style={Styles.productDesc}>Lorem Ipsum has been the industry's standard dummy text ever since</Text>
                            <Text style={Styles.price}>$19.26</Text>
                        </View>
                    </View>
                    <View style={Styles.circle}>
                        <Text style={Styles.rate}>4.2</Text>
                    </View>
                    <View style={Styles.starGroup}>
                        <TouchableHighlight underlayColor='transparent' style={Styles.star} onPress={(index) => this.setStarFull(0)}>
                            <Image style={Styles.starImg} source={this.state.Star_status[0].isFull ? full_star_icon : empty_star_icon} />
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='transparent' style={Styles.star} onPress={(index) => this.setStarFull(1)}>
                            <Image style={Styles.starImg} source={this.state.Star_status[1].isFull ? full_star_icon : empty_star_icon} />
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='transparent' style={Styles.star} onPress={(index) => this.setStarFull(2)}>
                            <Image style={Styles.starImg} source={this.state.Star_status[2].isFull ? full_star_icon : empty_star_icon} />
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='transparent' style={Styles.star} onPress={(index) => this.setStarFull(3)}>
                            <Image style={Styles.starImg} source={this.state.Star_status[3].isFull ? full_star_icon : empty_star_icon} />
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='transparent' style={Styles.star} onPress={(index) => this.setStarFull(4)}>
                            <Image style={Styles.starImg} source={this.state.Star_status[4].isFull ? full_star_icon : empty_star_icon} />
                        </TouchableHighlight>
                    </View>
                    <Textarea style={Styles.review} placeholder='Write your review' />
                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btnText}>{strings.sendreview}</Text>
                    </TouchableOpacity>
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

    setStarFull = (index) => {
        for (var i = 0; i < index + 1; i++) {
            this.state.Star_status[i].isFull = true;
        }
        for (var i = index + 1; i < 5; i++) {
            this.state.Star_status[i].isFull = false;
        }
        this.forceUpdate();
    }
    getStar = (index) => {
        if (this.state.Star_status[i].isFull)
            return full_star_icon;
        else
            empty_star_icon;
    }
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
        // backgroundColor: colors.backColor
    },
    contentStyle: {
        flexDirection: 'column',
        paddingBottom: height / 20,
        marginTop: width / 40,
        alignItems: 'center',
        paddingLeft: width / 20,
        paddingRight: width / 20,
        paddingTop: width / 20,
        paddingBottom: width / 20,
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
    productRow: {
        flexDirection: 'row',
        width: width / 10 * 9,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    productImg: {
        width: width / 3,
        height: height / 6,
        resizeMode: 'cover'
    },
    desc: {
        width: width * (2 / 3 - 3 / 20)
    },
    productName: {
        fontSize: dimens.item,
        color: 'black',
        fontWeight: 'bold',
    },
    price: {
        color: colors.finance,
        fontSize: dimens.btn,
        fontWeight: 'bold'
    },
    circle: {
        width: width / 5,
        height: width / 5,
        borderRadius: width / 10,
        borderWidth: 2,
        borderColor: '#aaaaaa',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height / 40
    },
    rate: {
        fontSize: dimens.btn
    },
    starGroup: {
        marginTop: height / 20,
        flexDirection: 'row',
        width: width / 3 * 2,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    starImg: {
        width: width / 10,
        height: width / 10,
        resizeMode: 'contain'
    },
    review: {
        marginTop: width / 20,
        alignSelf: 'stretch',
        borderWidth: 1,
        height: height / 5,
        borderColor: '#aaaaaa',
        borderRadius: 15
    },
    btn: {
        alignSelf: 'stretch',
        marginTop: width / 20,
        padding: width / 40,
        backgroundColor: colors.finance,
        alignItems: 'center',
        borderRadius: 15
    },
    btnText: {
        fontSize: dimens.btn,
        color: 'white'
    }
};

const mapStateToProps = (state) => ({
    Review: state.get('review'),
    root: state.get('root'),
});

export default connect(mapStateToProps)(Review)