import './App.css'
import ProductList from './component/product-list/ProductList'

function App() {
  return (
    <>
      <h2>Subhajyoti Store</h2>
      <ProductList pageSize={15} />
    </>
  )
}

export default App
