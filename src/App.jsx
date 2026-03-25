import React from 'react';
import Header from './component/header';
import Homebanner from './component/homebanner';
import Feature from './component/feature';
import Reason from './component/reason';
import Footer from './component/footer';
import "tailwindcss";


function App() {
  return (
    <div>
      <Header />
      <Homebanner/>
      <Feature/> 
      <Reason/>
      <Footer/>
    </div>
  );
}
export default App;