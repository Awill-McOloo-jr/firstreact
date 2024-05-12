
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NewsBoard from './components/NewsBoard';

function App() {

  const [category,setCategory] = useState("general")
  return (
    <div className="App">
     <Header className= "fixed" setCategory = {setCategory} />
     <NewsBoard category = {category}/>
    </div>
  );
}

export default App;
