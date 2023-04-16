import { getShoppingCart } from "../fakedb";

const cartProductLoader =async ()=> {
    const data = await fetch('products.json'); 
    const products = await data.json(); 
    // console.log('first', products); 
    const storedCart = getShoppingCart(); 
    const savedCart = []; 
    for(const id in storedCart){
            const addedProduct  = products.find(product => product.id === id); 
            if(addedProduct){
                let quantity = storedCart[id]; 
                addedProduct.quantity = quantity ;
                savedCart.push(addedProduct); 
            }
    }
    console.log('first', savedCart)
    return savedCart; 
}
export default cartProductLoader  ;