import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import TextFrom from './component/TextForm';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#063245';
      showAlert("Dark mode has been enabled", "success")
      // document.title = 'TextUtils - Dark mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils';
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      // document.title = 'TextUtils - Light mode';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextFrom showAlert={showAlert} heading="Try TextUtils - Word Counter, Charcter Counter, Remove extra space" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
