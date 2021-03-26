// import Layout from './component/layout/';
// import UseEffect from './hook/useEffect';
// import UseRef from './hook/useRef';
// import UseCallback from './hook/useCallback';
// import Users from './component/content/users';
// import UseMemo from './hook/useMemo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import Home from './component/Auth/home';
import Dashboard from './component/layout';
import About from './component/Auth/about';
import Navbar from './component/Auth/navbar';
import Login from './component/Auth/login';
import ProtectedRoute from './component/Auth/protectedRoute'
import ProtectedLogin from './component/Auth/protectedRoute/protectedLogin'
import store from './redux/Store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="">
          
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <ProtectedLogin path="/login">
            <Login/>
          </ProtectedLogin>
          <ProtectedRoute path="/dashboard">
            <Dashboard />
          </ProtectedRoute>
        </Switch>
      
      </div>
    </BrowserRouter>
    </Provider>
  );
}
export default App;






























// import React from 'react'
// import logo from './logo.svg';
// import './App.css';
// import MenuMakanan from "./components/basicReact/menuMakanan"
// import BelajarState from './components/basicReact/belajarState';
// import CrudApi from "./components/basicReact/crudApi";

// function App() {
//   return (
//     <React.Fragment>
//       <div className="text-center">
//         <h2>CRUD di React</h2>
//       </div>

//       <div>
//         <CrudApi >
//             <div className="container"></div>
//         </CrudApi>
//       </div>
//     </React.Fragment>
//   );
// }

// export default App;

// function App() {
//   return(
//     <div className="">test</div>
//   )
// }
// export default App;
