import './App.css'
import { DetailsProduct } from './Components/DetailsProduct'
import { Header } from './Components/Header'
import { Main } from './Components/Main'
import { ProductProvider } from './context/ProductContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <ProductProvider>
      <div className='app'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/detailsProduct/:id' element={<DetailsProduct />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ProductProvider>
  )
}

export default App
