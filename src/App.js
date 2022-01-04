import './App.css';
import Home from './Views/Home/Home.js';
import DogDetails from './Views/DogDetails/Dogdetails';
import { Route, NavLink, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <>
      <header>
        <NavLink to="" className="link">
          Home
        </NavLink>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dog/:id" component={DogDetails}></Route>
      </Switch>
    </>
  );
}

export default App;
