import logo from './logo.svg';
import './App.css';
import { ViewportProvider, useViewport } from './ViewportProvider.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Gallery from './pages/Gallery';
import Rsvp from './pages/Rsvp';

function App() {
  return (
    <div className="App">
      <ViewportProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/gallery" element = {<Gallery />}/>
            <Route path="/rsvp" element = {<Rsvp />}/>
          </Routes>
        </Router>
      </ViewportProvider>
    </div>
  );
}

export default App;
