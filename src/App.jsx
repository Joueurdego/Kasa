import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx';
import Apropos from './pages/APropos.jsx';
import Error404 from './pages/error404.jsx';
import Header from './Components/header.jsx';
import Logement from './pages/Logement';
import Footer from './Components/Footer.jsx';
import './App.css'



function App() {
  return (
    <Router>
      <main>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/logement/:id" element={<Logement />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
