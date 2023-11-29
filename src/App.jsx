import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import TestPage from './pages/TestPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
