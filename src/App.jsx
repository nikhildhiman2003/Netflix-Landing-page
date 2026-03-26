import React from 'react';
import Header from './component/header';
import HomepageBanner from './component/homepageBanner';
import Feature from './component/feature';
import Reason from './component/reason';
import Frequency from './component/frequency';
import "tailwindcss";


function App() {
  return (
    <div>
      <Header />
      <HomepageBanner/>
      <Feature/> 
      <Reason/>
      <Frequency/>
    </div>
  );
}
export default App;