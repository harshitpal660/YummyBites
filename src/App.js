import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Favourite from './Pages/Favourite'
import {Switch,Route,withRouter} from 'react-router-dom';
export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={withRouter(Home)}/>
        <Route exact path='/favourite' component={withRouter(Favourite)}/>
      </Switch>
      {/* <Home/> */}
    </div>
  );
}
