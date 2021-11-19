import {createContext, useState} from 'react'

const CartContext=createContext({
    cart:[],
    totalItem:0,
    totalPrice:0,
    totalPromotion:0,
    totalPay:0,
    addToCart: (newItem)=>{},
    removeCart: (item_id)=>{},
    isInCart: (item_id)=>{},
    changeQuantity: (item_id, newQuantity)=>{},
})

export function CartContextProvider(props){
     const [userCart, SetUserCart] = useState([])

    const context={
        cart:userCart,
        totalItem: getTotalItem(userCart),
        totalPrice:getPriceCart(userCart),
        totalPromotion:getPromotionCart(userCart),
        totalPay:getPayCart(userCart),
        addToCart: AddToCartHandler,
        removeCart: RemoveItemHandler,
        isInCart: IsInCartHandler,
        changeQuantity: ChangeQuantityHandler,
        
    };

    function getPriceCart(userCart){
        let arr=userCart.map((item)=>{
            return item.price*item.quantity;
        }) 
        let sum=0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    
    function getPromotionCart(userCart){
        let arr=userCart.map((item)=>{
            return item.price*(item.promotion/100)*item.quantity;
        }) 
        let sum=0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    function getPayCart(userCart){
        let arr=userCart.map((item)=>{
            return item.price*(1-item.promotion/100)*item.quantity;
        }) 
        let sum=0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    function getTotalItem(userCart){
        let arr=userCart.map((item)=>{
            return item.quantity;
        })
        let sum=0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }


    function AddToCartHandler(newItem){
        if(IsInCartHandler(newItem.id)===true){
            let elementPos=userCart.map((item)=>{return item.id}).indexOf(newItem.id);
            ChangeQuantityHandler(newItem.id,userCart[elementPos].quantity+newItem.quantity);
        }
        else{
        SetUserCart((prevCart)=>{
            let insertItem={
                ...newItem,
            }
            return prevCart.concat(insertItem);
        })
        }
    }

    function RemoveItemHandler(item_id){
        SetUserCart((prevCart)=>{
            return prevCart.filter(item =>item.id!==item_id);
        })
    }

    function IsInCartHandler(item_id){
        return userCart.some(item => item.id===item_id);
    }

    function ChangeQuantityHandler(item_id, newQuantity){
        SetUserCart(prevCart=>{
            let elementPos=prevCart.map((item)=>{return item.id}).indexOf(item_id);
            let carts=[...prevCart];
            let cart_to_change={...prevCart[elementPos]};
            cart_to_change.quantity=newQuantity;
            carts[elementPos]=cart_to_change
            return carts;
        })
    }
    
    return(
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;

