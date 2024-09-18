
import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import { useState } from 'react';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Progress from './Components/Progress';

function App() {

  const [tods, setTods] = useState([{
      sno: 1,
      title: "FirstItem",
      desc: "ukjnhika ajilsfnn LKN SNC JN snn CJKA J lk<m sc.KM ",
      detailed: "hey mere vatan ke logon zara aakhon mei bhar lo paani jo saheed hue unki zara yaad karo kurbani"
    },
    {
      sno: 2,
      title: "SecondItem",
      desc: "taure ,ameo bjodp;s fsisnsodkmf ",
      detailed: "sum mere bete maan mera kehna chahe dukh hoye haste hi rehna, haste hi rehna"
    },
    {
      sno: 3,
      title: "ThirdItem",
      desc: "kjughboil hyhakbjf ioslhnlhka ioanvilzkn nikzlnf;oalk klnzk.v .,kln;kmvdzk",
      detailed: "tere jaise yaar kahan , kahan esa yaaraana, yaad karegi duniya tera mera hafsana"   
    }])
  
  const [pods, setPods] = useState([]);
  const [cods, setCods] = useState([]);

  const onDelete = (todo) => {
    setTods(tods.filter(x => x !== todo));
  };

  const onPDelete = (todo) => {
    setPods(pods.filter(x => x !== todo));
  };
 

  const onProgress = (prog) => {
    setPods(() => {
        const updatedPods = [...pods, prog];
        return updatedPods; 
    });
};


  return (
    <Router>
    <div className="App">
        <Header title="Things To Do" />
        <Routes>
          <Route path='/' element={<Todos todos={tods} onDelete={onDelete} onProgress={ onProgress} />}/>
          <Route path='/progress' element={<Progress todos={pods} onPDelete={onPDelete} />}/>
        </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
