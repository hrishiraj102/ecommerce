import logo from './logo.svg';
import './App.css';
import ProductListPage from './Pages/ProductListPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';

function App() {
  return (

    <div className="App">

      <ProductDetailsPage
        props={1} />
      {/* <ProductListPage/> */}
    </div>
  );
}

export default App;
