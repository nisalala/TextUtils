// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [text, setText] = useState("");

  const [alert, setAlert] = useState(null);
  //alert lai object banakp
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setText("light");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils-Darkmode";
    } else {
      setMode("light");
      setText("");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils-Lightmode";
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
          text={text}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* Use the `element` prop instead of wrapping components inside `Route` */}
            {/* <Route exact path="/about" element={<About />} /> */}

            {/* <Route
              exact path="/"
              element={ */}
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                  showAlert={showAlert}
                />
              {/* }
            />
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
