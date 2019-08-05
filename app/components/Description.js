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
export class Description extends Component {

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
                        <Text style={Styles.title}>{strings.description}</Text>
                        <Text style={Styles.itemTitle}>PTFE Coated Glass Fabric Tapes</Text>
                        <Text style={Styles.content}>
                            PTFE impregnated fiberglass cloth, consisting of warp and fill yarns, and coated with a high temperature silicone adhesive. Excellent electrical, mechanical and chemical properties.
                        </Text>
                        <Text style={Styles.itemTitle}>Physical Properties</Text>
                        <View style={Styles.row}>
                            <View style={Styles.subrow}>
                                <Text style={Styles.item}>Backing:</Text>
                                <Text style={Styles.itemValue}>9.1 mil/0.0091”</Text>
                            </View>
                            <View style={Styles.subrow}>
                                <Text style={Styles.item}>Thickness:</Text>
                                <Text style={Styles.itemValue}>0.0121”</Text>
                            </View>
                        </View>
                        <View style={Styles.row}>
                            <View style={Styles.subrow}>
                                <Text style={Styles.item}>Strength:</Text>
                                <Text style={Styles.itemValue}>290/180</Text>
                            </View>
                            <View style={Styles.subrow}>
                                <Text style={Styles.item}>Peel:</Text>
                                <Text style={Styles.itemValue}>60”</Text>
                            </View>
                        </View>
                        <View style={Styles.row}>
                            <View style={Styles.subrow}>
                                <Text style={Styles.item}>Elogation:</Text>
                                <Text style={Styles.itemValue}>4.0% / 3.4%</Text>
                            </View>
                            <View style={Styles.subrow}>
                                <Text style={Styles.item}>Electrical:</Text>
                                <Text style={Styles.itemValue}>8000</Text>
                            </View>
                        </View>
                        <Text style={Styles.content}>
                            Alternative to 3M #5454; DeWal #134-10; St. Gobain #SG25-10; Greenbelt #100-10S; W.F. Lake #L-40S-10; Taconic #6085-10; Chemfab #350-10S; Lanmar #635-0; AFC #25010S
                        </Text>
                        <Text style={Styles.content}>
                            Note: The physical properties listed above are typical test results obtained from a series of laboratory tests and should not be used for the purpose of writing specifications. Before using this product, user shall determine the suitability of the product for his/her use; and user assumes all risks and liabilities in connection therewith. All test procedures used are in accordance with ASTM and PSTC methods.
                        </Text>
                        <View style={[Styles.row, { marginTop: height / 20 }]}>
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
        width: width / 20 * 19,
        padding: width / 40,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
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
    content: {
        marginTop: width / 40,
        marginBottom: width / 40
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
    },
    row: {
        marginTop: width / 40,
        flexDirection: 'row',
        width: width / 10 * 9,
        justifyContent: 'space-between'
    },
    btn1Text: {
        fontSize: dimens.btn,
        color: 'black'
    },
    subrow: {
        flexDirection: 'row',
        width: width / 20 * 9
    },
    item: {
        width: width / 11 * 2,
        color: 'black',
        fontWeight: 'bold',
        fontSize: dimens.item
    },
};

const mapStateToProps = (state) => ({
    Description: state.get('description'),
    root: state.get('root'),
});

export default connect(mapStateToProps)(Description)