import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import People from './containers/People';
import Person from './containers/Person';
import Planet from './containers/Planet';


const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/people" component={People} />
      <Route exact path="/people/:id" component={Person} />
      <Route exact path="/planets/:id" component={Planet} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </div>
);

export default App;
//
// <div >
//     <NavBar />
//       <FetchUser>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <ProtectedRoute path='/event/:id' component={Event} />
//           <ProtectedRoute path='/viewuser/:id' component={ViewUser} />
//           <Route path="/about" component={About} />
//           <ProtectedRoute path="/dashboard" component={Dashboard} />
//           <Route path="/register" render={ (props) => <Register {...props} title="Register" /> } />
//           <Route path="/login" render={ (props) => <LoginPage {...props} title="Login" /> } />
//           <ProtectedRoute path="/newevent" component={EventForm} />
//           <Route component={NoMatch} />
//         </Switch>
//       </FetchUser>
//
//   </div>
