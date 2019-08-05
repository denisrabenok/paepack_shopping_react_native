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
export class InnerProduct extends Component {

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
                        <Image style={Styles.productImg} source={product1} />
                        <Text style={Styles.productName}>PTFE Coated Glass Fabric Tape 6 Mil (78110)</Text>
                        <View style={Styles.rateRow}>
                            <View style={Styles.starGroup}>
                                <Image style={Styles.starImg} source={full_star_icon} />
                                <Image style={Styles.starImg} source={full_star_icon} />
                                <Image style={Styles.starImg} source={full_star_icon} />
                                <Image style={Styles.starImg} source={full_star_icon} />
                                <Image style={Styles.starImg} source={empty_star_icon} />
                            </View>
                            <View style={Styles.numGroup}>
                                <Input style={Styles.num} />
                                <Text style={Styles.price}>$39.60</Text>
                            </View>
                        </View>
                        <View style={Styles.row}>
                            <View style={Styles.subrow}>
                                <Text style={Styles.item}>Length:</Text>
                                <Text style={Styles.itemValue}>36 yards</Text>
                            </View>
                            <View style={Styles.subrow}>
                                <Text style={Styles.item}>Total No:</Text>
                                <Text style={Styles.itemValue}>1 rolls</Text>
                            </View>
                        </View>
                        <View style={[Styles.row, { justifyContent: 'flex-start' }]}>
                            <Text style={Styles.item}>Liner:</Text>
                            <Text style={[Styles.itemValue, { width: width * (9 / 10 - 1 / 6) }]}>With Liner   Without Liner</Text>
                        </View>
                        <View style={[Styles.row, { justifyContent: 'flex-start' }]}>
                            <Text style={Styles.item}>Width:</Text>
                            <Text style={[Styles.itemValue, { width: width * (9 / 10 - 1 / 6) }]}>1/2”(12.7MM)   3/4”(19.00MM)   1”(25.4MM)   2”(50.8MM)   3”(76.2MM)   Custom</Text>
                        </View>
                        <View style={Styles.row}>
                            <View style={Styles.subrow}>
                                <Text style={Styles.item}>UPC:</Text>
                                <Text style={Styles.itemValue}>635414715648</Text>
                            </View>
                            <View style={Styles.subrow}>
                                <Text style={Styles.item}>SKU:</Text>
                                <Text style={Styles.itemValue}>78110-0050-001</Text>
                            </View>
                        </View>
                        <View style={Styles.row}>
                            <View style={Styles.subrow}>
                                <Text style={Styles.item}>Brand:</Text>
                                <Text style={Styles.itemValue}>Alanson Product</Text>
                            </View>
                            <View style={Styles.subrow}>
                                <Text style={Styles.item}>Weight:</Text>
                                <Text style={Styles.itemValue}>5.00 LBS</Text>
                            </View>
                        </View>
                        <View style={Styles.row}>
                            <TouchableOpacity
                                style={Styles.btn1}
                                onPress={this.onPressDescription}>
                                <Text style={Styles.btn1Text}>{strings.description}</Text>
                                <Image style={Styles.goImgStyle} source={go_icon} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={Styles.btn1}
                                onPress={this.onPressReview}>
                                <Text style={Styles.btn1Text}>{strings.reviews}</Text>
                                <Image style={Styles.goImgStyle} source={go_icon} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            onPress={this.onPressShipping_Returns}
                            style={[Styles.btn1, { width: width / 5 * 3, marginTop: width / 40 }]}>
                            <Text style={Styles.btn1Text}>{strings.shipping_returns}</Text>
                            <Image style={Styles.goImgStyle} source={go_icon} />
                        </TouchableOpacity>
                        <View style={[Styles.row, { marginTop: height / 10 }]}>
                            <TouchableOpacity style={Styles.btn2}>
                                <Text style={Styles.btn1Text}>{strings.addToCart}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.btn3}>
                                <Text style={[Styles.btn1Text, { color: 'white' }]}>{strings.buyNow}</Text>
                            </TouchableOpacity>
                        </View>
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
    contentStyle: {
        flexDirection: 'column',
        paddingBottom: height / 20,
        alignItems: 'center',
        marginTop: width / 40,
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
        width: width / 20 * 19,
        padding: width / 40,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
    },
    productImg: {
        width: width / 10 * 9,
        height: height / 4,
        resizeMode: 'cover',
    },
    productName: {
        marginTop: width / 40,
        color: 'black',
        fontWeight: 'bold',
        fontSize: dimens.btn,
        textAlign: 'center'
    },
    rateRow: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    starGroup: {
        flexDirection: 'row',
        width: width / 3,
        justifyContent: 'space-between'
    },
    starImg: {
        width: width / 20,
        height: width / 20,
        resizeMode: 'contain'
    },
    numGroup: {
        width: width / 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    num: {
        borderWidth: 1,
        borderColor: '#aaaaaa',
        padding: 0,
        height: height / 20,
    },
    price: {
        marginLeft: width / 20,
        color: colors.finance,
        fontSize: dimens.btn,
        fontWeight: 'bold'
    },
    row: {
        marginTop: width / 40,
        flexDirection: 'row',
        width: width / 10 * 9,
        justifyContent: 'space-between'
    },
    subrow: {
        flexDirection: 'row',
        width: width / 20 * 9
    },
    item: {
        width: width / 6,
        color: 'black',
        fontWeight: 'bold',
        fontSize: dimens.item
    },
    btn1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#aaaaaa',
        width: width / 80 * 35,
        padding: width / 40
    },
    btn1Text: {
        fontSize: dimens.btn,
        color: 'black'
    },
    goImgStyle: {
        height: width / 20,
        width: width / 20,
        resizeMode: 'contain'
    },
    btn2: {
        width: width / 80 * 35,
        justifyContent: 'center',
        alignItems: 'center',
        padding: width / 40,
        backgroundColor: 'white',
        borderColor: colors.finance,
        borderRadius: 15,
        borderWidth: 1
    },
    btn3: {
        width: width / 80 * 35,
        justifyContent: 'center',
        alignItems: 'center',
        padding: width / 40,
        backgroundColor: colors.finance,
        borderRadius: 15,
    }
};

const mapStateToProps = (state) => ({
    InnerProduct: state.get('innerProduct'),
    root: state.get('root'),
});

export default connect(mapStateToProps)(InnerProduct)