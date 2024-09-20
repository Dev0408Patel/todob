
import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import { useState } from 'react';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Progress from './Components/Progress';
import InsertForm from './Components/InsertForm';
import Completed from './Components/Completed'

function App() {

  const [tods, setTods] = useState([{
      
      title: "FirstItem",
      desc: "ukjnhika ajilsfnn LKN SNC JN snn CJKA J lk<m sc.KM ",
      detailed: "hey mere vatan ke logon zara aakhon mei bhar lo paani jo saheed hue unki zara yaad karo kurbani"
    },
    {
      
      title: "SecondItem",
      desc: "taure ,ameo bjodp;s fsisnsodkmf ",
      detailed: "sum mere bete maan mera kehna chahe dukh hoye haste hi rehna, haste hi rehna"
    },
    {
      
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

  const onCDelete = (todo) => {
    setPods(cods.filter(x => x !== todo));
  };
 

  const onProgress = (prog) => {
    setPods(() => {
        const updatedPods = [...pods, prog];
        return updatedPods; 
    });
  };

  const onInsert = (data) => {
    setTods([...tods, data]);
    console.log(tods);
  }

  const done = (data) => {
    setCods([...cods, data]);
    console.log(cods);
  }


  return (
    <Router>
    <div className="App">
        <Header title="Things To Do" />
        <Routes>
          <Route path='/' element={<Todos todos={tods} onDelete={onDelete} onProgress={onProgress} onInsert={onInsert} onDone={done } />}/>
          <Route path='/progress' element={<Progress todos={pods} onPDelete={onPDelete} onDone={done }/>} />
          <Route path='/completed' element={<Completed todos={cods} onCDelete={onCDelete} />} />
          {/* <Route path='/insert' element={<InsertForm onInsert={ onInsert} />}/> */}
        </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
