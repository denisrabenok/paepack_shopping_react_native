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
import cross_icon from '../assets/icons/cross_icon.png'
import go_icon from '../assets/icons/go_icon.png'
import product from '../assets/machine.png'
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
export class Cart extends Component {

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
                    <View style={Styles.item}>
                        <View style={Styles.itemDescRow}>
                            <Image style={Styles.itemImg} source={product} />
                            <View style={Styles.itemDesc}>
                                <Text style={Styles.itemName}>PTFE Coated Glass Fabric Tape 6 Mil (78106)</Text>
                                <View style={Styles.itemSubDescRow}>
                                    <Text style={Styles.price}>$19.26</Text>
                                    <View style={Styles.starGroup}>
                                        <Image style={Styles.starImg} source={full_star_icon} />
                                        <Image style={Styles.starImg} source={full_star_icon} />
                                        <Image style={Styles.starImg} source={full_star_icon} />
                                        <Image style={Styles.starImg} source={full_star_icon} />
                                        <Image style={Styles.starImg} source={empty_star_icon} />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={Styles.deliveryRow}>
                            <View style={Styles.deliverySubRow}>
                                <Input style={Styles.deliveryDays} />
                                <Text style={Styles.deliveryDesc}>Delivery in 7-8 days | Rs40</Text>
                            </View>
                            <TouchableOpacity style={Styles.showDetail}>
                                <Text style={Styles.showDetailText}>{strings.showDetail}</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={Styles.cross}>
                            <Image style={Styles.crossImg} source={cross_icon} />
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.item}>
                        <View style={Styles.itemDescRow}>
                            <Image style={Styles.itemImg} source={product} />
                            <View style={Styles.itemDesc}>
                                <Text style={Styles.itemName}>PTFE Coated Glass Fabric Tape 6 Mil (78106)</Text>
                                <View style={Styles.itemSubDescRow}>
                                    <Text style={Styles.price}>$19.26</Text>
                                    <View style={Styles.starGroup}>
                                        <Image style={Styles.starImg} source={full_star_icon} />
                                        <Image style={Styles.starImg} source={full_star_icon} />
                                        <Image style={Styles.starImg} source={full_star_icon} />
                                        <Image style={Styles.starImg} source={full_star_icon} />
                                        <Image style={Styles.starImg} source={empty_star_icon} />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={Styles.deliveryRow}>
                            <View style={Styles.deliverySubRow}>
                                <Input style={Styles.deliveryDays} />
                                <Text style={Styles.deliveryDesc}>Delivery in 7-8 days | Rs40</Text>
                            </View>
                            <TouchableOpacity style={Styles.showDetail}>
                                <Text style={Styles.showDetailText}>{strings.showDetail}</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={Styles.cross}>
                            <Image style={Styles.crossImg} source={cross_icon} />
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.item}>
                        <View style={Styles.itemDescRow}>
                            <Image style={Styles.itemImg} source={product} />
                            <View style={Styles.itemDesc}>
                                <Text style={Styles.itemName}>PTFE Coated Glass Fabric Tape 6 Mil (78106)</Text>
                                <View style={Styles.itemSubDescRow}>
                                    <Text style={Styles.price}>$19.26</Text>
                                    <View style={Styles.starGroup}>
                                        <Image style={Styles.starImg} source={full_star_icon} />
                                        <Image style={Styles.starImg} source={full_star_icon} />
                                        <Image style={Styles.starImg} source={full_star_icon} />
                                        <Image style={Styles.starImg} source={full_star_icon} />
                                        <Image style={Styles.starImg} source={empty_star_icon} />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={Styles.deliveryRow}>
                            <View style={Styles.deliverySubRow}>
                                <Input style={Styles.deliveryDays} />
                                <Text style={Styles.deliveryDesc}>Delivery in 7-8 days | Rs40</Text>
                            </View>
                            <TouchableOpacity style={Styles.showDetail}>
                                <Text style={Styles.showDetailText}>{strings.showDetail}</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={Styles.cross}>
                            <Image style={Styles.crossImg} source={cross_icon} />
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.item}>
                        <View style={Styles.itemDescRow}>
                            <Image style={Styles.itemImg} source={product} />
                            <View style={Styles.itemDesc}>
                                <Text style={Styles.itemName}>PTFE Coated Glass Fabric Tape 6 Mil (78106)</Text>
                                <View style={Styles.itemSubDescRow}>
                                    <Text style={Styles.price}>$19.26</Text>
                                    <View style={Styles.starGroup}>
                                        <Image style={Styles.starImg} source={full_star_icon} />
                                        <Image style={Styles.starImg} source={full_star_icon} />
                                        <Image style={Styles.starImg} source={full_star_icon} />
                                        <Image style={Styles.starImg} source={full_star_icon} />
                                        <Image style={Styles.starImg} source={empty_star_icon} />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={Styles.deliveryRow}>
                            <View style={Styles.deliverySubRow}>
                                <Input style={Styles.deliveryDays} />
                                <Text style={Styles.deliveryDesc}>Delivery in 7-8 days | Rs40</Text>
                            </View>
                            <TouchableOpacity style={Styles.showDetail}>
                                <Text style={Styles.showDetailText}>{strings.showDetail}</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={Styles.cross}>
                            <Image style={Styles.crossImg} source={cross_icon} />
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.btnGroup}>
                        <View style={Styles.total}>
                            <Text style={Styles.totalText}>Total:</Text>
                            <Text style={Styles.totalPrice}>$155.59</Text>
                        </View>
                        <TouchableOpacity style={Styles.continueBtn}>
                            <Text style={Styles.continueBtnText}>{strings.continue}</Text>
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
        width: width / 20 * 19,
        height: height / 3 * 0.8,
        padding: width / 40,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        borderRadius: 5,
        marginTop: width / 40
    },
    itemDescRow: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between'
    },
    itemImg: {
        width: width / 3,
        height: height / 6,
        resizeMode: 'cover'
    },
    itemDesc: {
        width: width / 5 * 2.7,
        paddingTop: width / 20,
        justifyContent: 'space-between'
    },
    itemName: {
        fontSize: dimens.btn,
        fontWeight: 'bold',
    },
    itemSubDescRow: {
        flexDirection: 'row'
    },
    price: {
        fontSize: dimens.item,
        fontWeight: 'bold',
        color: colors.finance,
        marginRight: width / 20
    },
    starGroup: {
        flexDirection: 'row'
    },
    starImg: {
        height: width / 20,
        width: width / 20,
        resizeMode: 'contain'
    },
    deliveryRow: {
        flexDirection: 'row',
        width: width / 10 * 9,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    deliverySubRow: {
        flexDirection: 'row',
        width: width / 2,
        alignItems: 'center',
    },
    deliveryDesc: {
        fontSize: dimens.item
    },
    showDetailText: {
        fontSize: dimens.item,
        color: colors.finance
    },
    deliveryDays: {
        borderColor: colors.backColor,
        borderWidth: 1,
        width: width / 6,
        height: 30,
        paddingTop: 0,
        paddingBottom: 0,
        marginRight: width / 40,
    },
    cross: {
        position: 'absolute',
        top: width / 80,
        right: width / 80
    },
    crossImg: {
        width: width / 20,
        height: width / 20,
        resizeMode: 'contain'
    },
    btnGroup: {
        marginTop: width / 10,
        borderRadius: 5,
        backgroundColor: 'white',
        padding: width / 20,
        width: width / 20 * 19
    },
    total: {
        flexDirection: 'row',
        width: width / 20 * 17,
        justifyContent: 'space-between'
    },
    totalText: {
        fontSize: dimens.btn
    },
    totalPrice: {
        fontSize: dimens.btn,
        color: colors.finance,
        fontWeight: 'bold'
    },
    continueBtn: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        padding: width / 40,
        marginTop: width / 40,
        width: width / 10 * 8,
        backgroundColor: colors.finance,
        borderRadius: 5
    },
    continueBtnText: {
        fontSize: dimens.btn,
        color: 'white',
        fontWeight: 'bold'
    }
};

const mapStateToProps = (state) => ({
    Cart: state.get('cart'),
    root: state.get('root'),
});

export default connect(mapStateToProps)(Cart)