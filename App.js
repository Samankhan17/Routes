// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Sucess");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("dark mode has been enabled", "Sucess");
    }
  };
  return (
    <>
    <Router>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
       <Routes>
          <Route path="/about" element={ <About/>}/>
          <Route path="/" element={<Textform
          heading="This is the Heading for the table"
          mode={mode}
          showAlert={showAlert}
        />}/>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
