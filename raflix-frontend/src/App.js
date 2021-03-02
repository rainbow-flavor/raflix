import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
