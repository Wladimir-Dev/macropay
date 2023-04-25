import './App.css'
import { Header } from './Components/Header'
import { Main } from './Components/Main'
import { ProductProvider } from './context/ProductContext'

function App() {
  return (
    <ProductProvider>
      <div className='app'>
        <Header />
        <Main />
      </div>
    </ProductProvider>
  )
}

export default App
