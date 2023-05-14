import { getShoppingCart } from "../fakedb";

const cartProductLoader =async ()=> {
    const data = await fetch('http://localhost:5000/shop'); 
    const products = await data.json(); 
    // console.log('first', products); 
    const storedCart = getShoppingCart(); 
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