import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Browse from './pages/Browse/Browse';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/browse" component={Browse}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
