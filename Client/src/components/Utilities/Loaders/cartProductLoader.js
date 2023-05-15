import { getShoppingCart } from "../fakedb";

const cartProductLoader =async ()=> {
    const storedCart = getShoppingCart(); 
    const ids = Object.keys(storedCart);
    const data = await fetch('http://localhost:5000/product' , { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(ids)
    }); 
    const products = await data.json(); 
    // console.log('first', products); 
    const savedCart = []; 
    for(const id in storedCart){
            const addedProduct  = products.find(product => product._id === id); 
            if(addedProduct){
                let quantity = storedCart[id]; 
                addedProduct.quantity = quantity ;
                savedCart.push(addedProduct); 
            }
    }
    return savedCart; 
}
export default cartProductLoader  ;