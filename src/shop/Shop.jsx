import React, {useState,useEffect} from 'react';
import './shop.css'

const Shop = () => {

    const [cart, setCart] = useState([]);
    const [alert, setAlert] = useState("");
    const [cartTotal, setCartTotal] = useState(0);
    
    const items = [
        {
            id: 1, name: 'Cyberpunk 2077', price:60
        },
        {
            id: 2, name: 'CounterStrike 1.6', price: 5
        },
        {
            id: 3, name: 'NieR:Automata', price: 40
        }
    ];

    useEffect(
        ()=> {
            total();
        }, [cart]
    )

    const total = () => {
        let totalVal = 0;
        for(let i = 0; i<cart.length; i++) {
            totalVal += cart[i].price;
        }
        setCartTotal(totalVal);
    }

    const addToCart = (el) => {
        let addIt = true;
        for(let i=0;i<cart.length; i++){
            if(cart[i].id===el.id) addIt = false;
        }
        if(addIt) {
            setCart([...cart, el]);
            setAlert('');
        }
        else setAlert(`${el.name} is already in a your cart`);
    };

    const removeFromCart = (el) => {
        let hardCopy = [...cart];
        hardCopy= hardCopy.filter(cartItem => cartItem.id !== el.id);
        setCart(hardCopy);
        setAlert('');
    };

    const listItems = items.map(el => (
        <div key={el.id}>
            {`${el.name}: $${el.price}`}
            <input className="addCartBtn" type='submit' value='add' onClick={()=> addToCart(el)} />
            </div>
    ));

    const cartItems = cart.map(el => (
        <div key={el.id}>
            {`${el.name}: $${el.price}`}
            <input className="removeCartBtn" type='submit' value='remove' onClick={()=> removeFromCart(el)} />
            
            </div>
    ));

    return (
    <div>
        <div>{listItems}</div>
        <div className='cart'>CART</div>
        <div>{cartItems}</div>
        <div>Total: ${cartTotal}</div>
        <div>Alert Message: {alert}</div>
    </div>
    
    )
} ;

export default Shop;