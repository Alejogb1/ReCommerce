import React, { Component } from 'react'
import Client from "shopify-buy"
const ShopContext = React.createContext()
const client = Client.buildClient(
    {
        storefrontAccessToken:"5e20c8f0d4652113b28b3c9a904e1d13",
        domain: "https://micatalogonline.myshopify.com/",
    }
)
 class ShopProvider extends Component {
     state = {
         products: [],
         product: [],
         checkout: [],
         isCartOpen: false,
         test: "test",
     }
     
     componentDidMount(){
        this.createCheckout()
      }

     
    createCheckout = async () => {
        
    };
     addItemCart = async (variantId, quantity) => {
         const lineItemsToAdd = ({
             variantId,
             quantity: parseInt(quantity, 10)
         })

         
     }
     fetchAllProducts = async () => {
        const products = await client.product.fetchAll()
        this.setState({ products: products})
     }
     fetchProductWithId = async (id) => {
        const product = await client.product.fetch(id)
        this.setState({ product: product})
     }
     closeCart =  () => { this.setState({ isCartOpen: false }) }
     openCart =  () => { this.setState({ isCartOpen: true }) }
    render() {
        return (
            <ShopContext.Provider value={{
                ...this.state,
                fetchAllProducts: this.fetchAllProducts,
                fetchProductWithId: this.fetchProductWithId,
                closeCart: this.closeCart,
                openCart: this.openCart,
                addItemCart: this.addItemCart,
                }}>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer;

export {ShopConsumer, ShopContext};
export default ShopProvider;