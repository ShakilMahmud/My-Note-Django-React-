import ReactDOM from "react-dom/client";
import {
 BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import NotePage from "./pages/NotePage";
import { useState } from "react";

function App() {

  
  const [lightTheme, setLightTheme] = useState(true);

  return (
    
        <div className={(lightTheme) ? 'container' : 'container dark'}>
          <div className="app">
          <Header lightTheme={lightTheme} setLightTheme={setLightTheme}/>
          <Router>
            <Routes> 
              <Route path="/" exact element={< NotesListPage />} />
              <Route path="/note/:id" element={<NotePage />} />
            </Routes>
          </Router>
          </div>
        </div>
   
    
  );
}

export default App;
