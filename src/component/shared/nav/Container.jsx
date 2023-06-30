import Header from "../header/Header"
import Footer from "../footer/Footer"




const Container = ({children}) => {
  return (
    <>
    <Header/>

      {children}

    <Footer/>
    
    </>
  )
}

export default Container