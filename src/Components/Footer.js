import React from 'react'
// import './footer.css'

export const Footer = () => {
  
  let footerStyle = {
    position: "relative",
    top: "10vh",
    width: "100%",
  }
  
  return (
    <footer className="bg-dark text-light" style={footerStyle}>
      <p className="text-center">Copyright &copy; MyTodosList.com</p>
    </footer>
  )
}

export default Footer
