import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Inicio from "./componentes/Inicio";

import InicioPrincipal from './pages/InicioPrincipal';
import ListaPropietarios from './pages/ListaPropietarios';
import AddMascota from './pages/AddMascota';

function App() {
  return (
      <Router>
      <div className="container">
        <Header/>
        <Switch>
          <Route exact path="/" component={InicioPrincipal}/>
          <Route path="/listaPropietarios" component={ListaPropietarios} />
          <Route path="/AddMascota" component={AddMascota} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;