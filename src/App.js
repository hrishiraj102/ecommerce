import logo from './logo.svg';
import './App.css';
import ProductListPage from './Pages/ProductListPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import CartPage from './Pages/CartPage';
import LoginPage from './Pages/LoginPage';

function App() {
  return (

    <div className="App">
      {<LoginPage/>}
      {<CartPage props={5}/>}
      {/* <ProductDetailsPage
        props={1} />
      <ProductListPage/> */}
    </div>
  );
}

export default App;
