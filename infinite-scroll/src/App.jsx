import ProductList from './component/product-list/ProductList';
import './App.css';

function App() {
  
  return (
    <div className='app'>
      <h2>Subhajyoti Store</h2>
      <ProductList pageSize={15} />
    </div>
  )
}

export default App
