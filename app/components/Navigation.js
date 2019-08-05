import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import configureStore from "../store/configureStore.js";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import InnerProduct from "./InnerProduct";
import Description from "./Description";
import Review from "./Review";
import Shipping_Returns from "./Shipping_Returns";
import Services from "./Services";
import Portfolio from "./Portfolio";
import AboutUs from "./AboutUs";
import FindUs from "./FindUs";
import Products from "./Products";
import Cart from "./Cart";
import Chat from "./Chat";


const store = configureStore();
const Routes = {
  Login: { screen: Login },
  Signup: { screen: Signup },
  Dashboard: { screen: Dashboard },
  InnerProduct: { screen: InnerProduct },
  Description: { screen: Description },
  Review: { screen: Review },
  Shipping_Returns: { screen: Shipping_Returns },
  Services: { screen: Services },
  Portfolio: { screen: Portfolio },
  AboutUs: { screen: AboutUs },
  FindUs: { screen: FindUs },
  Products: { screen: Products },
  Cart: { screen: Cart },
  Chat: { screen: Chat },
};
const Navigator = StackNavigator(Routes, {
  headerMode: 'screen'
});

export class Navigation extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.login,
    signup: state.signup,
    dashboard: state.dashboard,
    innerProduct: state.innerProduct,
    description: state.description,
    review: state.review,
    shipping_Returns: state.shipping_Returns,
    services: state.services,
    portfolio: state.portfolio,
    aboutUs: state.aboutUs,
    products: state.products,
    cart: state.cart,
    chat: state.chat,
  }
}
export default connect(mapStateToProps)(Navigation);
