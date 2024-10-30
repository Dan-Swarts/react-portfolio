import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './styles/app.css'

export default function App() {

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}