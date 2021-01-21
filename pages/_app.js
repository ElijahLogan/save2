import App from 'next/app'
import Layout from '../components/layout.js';
import Amplify from "aws-amplify";
import awsExports from "../src/aws-exports";
Amplify.configure(awsExports);

/*
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
Amplify.configure(awsconfig);
*/

export default class MyApp extends App {

    state = {
        cart: [],
        carttotal: 0
    }

    componentDidMount = () => {
        /*
        const cart = JSON.parse(localStorage.getItem('cart'));
        const carttotal = JSON.parse(localStorage.getItem('total'));
        if (cart) {
            this.setState({
                cart,
                carttotal
            });
        }
        */
    };

    /*

    addToCart = (product) => {

       
        this.setState({
            cart: [...this.state.cart, product]
        });
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
    }

    deleteFromCart = (productId) => {

        //get cart
        let cart = this.state.cart;

        //make new cart by removing  itemId that was selected
        let newCart = cart.filter(item => item.id !== productId)

        //change state to reflect new cart
        this.setState({
            cart: newCart
        })


        localStorage.setItem('cart', JSON.stringify(this.state.cart));
    }

    calculateTotal = (price) => {
        this.setState({
            carttotal: this.state.carttotal + price
        });
        localStorage.setItem('total', JSON.stringify(this.state.carttotal));
    }
*/
    render() {
        const { Component, pageProps } = this.props
        return (
                <Layout>
                    <Component {...pageProps} />
                </Layout>
        )
    }
}
