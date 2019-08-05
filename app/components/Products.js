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
import Header from "./ProductsHeader";
import LeftSideMenu from "./LeftSideMenu";
import Toast from 'react-native-toast-native';
import full_star_icon from '../assets/icons/full_star_icon.png'
import empty_star_icon from '../assets/icons/empty_star_icon.png'
const { width, height } = Dimensions.get('window');
// const window = Dimensions.get('window')
// console.ignoredYellowBox = true;
console.ignoredYellowBox = ['Warning:'];
export class Products extends Component {

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
                    navigation={this.props.navigation} />
                <Content contentContainerStyle={Styles.contentStyle}>
                    <View style={Styles.row}>
                        <TouchableOpacity style={Styles.item}>
                            <Image style={Styles.itemImg} source={product1} />
                            <Text style={Styles.itemName}>PTFE Coated Glass Fabric Tape 6 Mil (7810)</Text>
                            <View style={Styles.itemRate}>
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={empty_star_icon} />
                            </View>
                            <Text style={Styles.price}>$19.26 - $105.94</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.item}>
                            <Image style={Styles.itemImg} source={product} />
                            <Text style={Styles.itemName}>PTFE Coated Glass Fabric Tape 6 Mil (7810)</Text>
                            <View style={Styles.itemRate}>
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={empty_star_icon} />
                            </View>
                            <Text style={Styles.price}>$19.26 - $105.94</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.row}>
                        <TouchableOpacity style={Styles.item}>
                            <Image style={Styles.itemImg} source={product} />
                            <Text style={Styles.itemName}>PTFE Coated Glass Fabric Tape 6 Mil (7810)</Text>
                            <View style={Styles.itemRate}>
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={empty_star_icon} />
                            </View>
                            <Text style={Styles.price}>$19.26 - $105.94</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.item}>
                            <Image style={Styles.itemImg} source={product1} />
                            <Text style={Styles.itemName}>PTFE Coated Glass Fabric Tape 6 Mil (7810)</Text>
                            <View style={Styles.itemRate}>
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={empty_star_icon} />
                            </View>
                            <Text style={Styles.price}>$19.26 - $105.94</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.row}>
                        <TouchableOpacity style={Styles.item}>
                            <Image style={Styles.itemImg} source={product1} />
                            <Text style={Styles.itemName}>PTFE Coated Glass Fabric Tape 6 Mil (7810)</Text>
                            <View style={Styles.itemRate}>
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={empty_star_icon} />
                            </View>
                            <Text style={Styles.price}>$19.26 - $105.94</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.item}>
                            <Image style={Styles.itemImg} source={product} />
                            <Text style={Styles.itemName}>PTFE Coated Glass Fabric Tape 6 Mil (7810)</Text>
                            <View style={Styles.itemRate}>
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={empty_star_icon} />
                            </View>
                            <Text style={Styles.price}>$19.26 - $105.94</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.row}>
                        <TouchableOpacity style={Styles.item}>
                            <Image style={Styles.itemImg} source={product} />
                            <Text style={Styles.itemName}>PTFE Coated Glass Fabric Tape 6 Mil (7810)</Text>
                            <View style={Styles.itemRate}>
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={empty_star_icon} />
                            </View>
                            <Text style={Styles.price}>$19.26 - $105.94</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.item}>
                            <Image style={Styles.itemImg} source={product1} />
                            <Text style={Styles.itemName}>PTFE Coated Glass Fabric Tape 6 Mil (7810)</Text>
                            <View style={Styles.itemRate}>
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={empty_star_icon} />
                            </View>
                            <Text style={Styles.price}>$19.26 - $105.94</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.row}>
                        <TouchableOpacity style={Styles.item}>
                            <Image style={Styles.itemImg} source={product1} />
                            <Text style={Styles.itemName}>PTFE Coated Glass Fabric Tape 6 Mil (7810)</Text>
                            <View style={Styles.itemRate}>
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={full_star_icon} />
                                <Image style={Styles.itemStar} source={empty_star_icon} />
                            </View>
                            <Text style={Styles.price}>$19.26 - $105.94</Text>
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
        this.props.navigation.navigate(consts.INNERPRODUCT_SCREEN);
    }
    onPressSignup = () => {
        this.props.navigation.navigate(consts.SIGNUP_SCREEN);
    }
    onPressBack = () => {
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width / 20 * 19,
        alignSelf: 'center',
        marginTop: width / 40,
    },
    item: {
        width: width * 37 / 80,
        padding: width / 40,
        height: height / 3,
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'space-between',
    },
    itemImg: {
        width: width * 33 / 80,
        height: height / 6,
        resizeMode: 'cover'
    },
    itemName: {
        fontSize: dimens.item,
        fontWeight: 'bold'
    },
    itemRate: {
        flexDirection: 'row',
    },
    itemStar: {
        height: width / 20,
        width: width / 20,
        resizeMode: 'contain'
    },
    price: {
        fontWeight: 'bold',
        color: colors.finance
    }
};

const mapStateToProps = (state) => ({
    Products: state.get('products'),
    root: state.get('root'),
});

export default connect(mapStateToProps)(Products)