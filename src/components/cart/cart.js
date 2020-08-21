import React from 'react';
import Title from '../title';
import CartColumns from './cartcolumns';
import Empty from './empty';
import {ProductConsumer} from "../../context";
import CartList from './cartlist';
import CartTotals from './carttotals';
class Cart extends React.Component{
    render(){
        return(
            <div>
                <ProductConsumer>
                    {value=>{
                        const{cart}=value;
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                    <Title name="yours" title="cart"/>
                                    <CartColumns />
                                    <CartList value={value}/>
                                    <CartTotals value={value}/>
                                </React.Fragment>
                            )
                        }
                        else{
                           return(<Empty />)        
                        }
                    }}
                                    
                </ProductConsumer>
            </div>
        )
    }
}

export default Cart;