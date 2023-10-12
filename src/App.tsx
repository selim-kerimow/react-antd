import React from "react";

// sections
import Header from "./sections/Header";
import Content from "./sections/Content";
import Footer from "./sections/Footer";


const App: React.FC = () => {


  return (
    <div className="app">
      
      <Header />
      <Content />
      <Footer />
      
    </div>
  )
}

export default App