import './App.css';
import Home from './Views/Home/Home.js';
import { Route, NavLink, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <>
      <header>
        <NavLink to="/home">home</NavLink>
      </header>
      <Switch>
        <Route>
          <Home />;
        </Route>
      </Switch>
    </>
  );
}

export default App;
