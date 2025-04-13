import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';



function App() {



  return (
    <Layout>
      <Cart />
     /** it should hide the shopping cart when the item is zero or below */
      <Products />
    </Layout>
  );
}

export default App;



/**
 * 
 * target goals of this practice
 * 
 * shopping cart
 * 
 * 1. enable the counter function for the shopping cart component
 * 2. if the quantity is 0, hide the shopping cart from the app
 * 
 * 
 * cart button
 * 1. toggle the cart button to show and hide depending on the condition I set up 
 * 2. what would be the logic to set up this feature in this app? 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */