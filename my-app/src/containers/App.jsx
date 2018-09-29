import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../components/Home';
import Redux from '../components/Redux';
import Event from '../components/Event';
import ClockTimer from '../components/Clock';
import Form from '../components/Form';
import Navbar from '../components/CustomNavbar';
import Tooltip from '../components/Tooltip';


import { Provider } from 'react-redux';
import { createStore } from  'redux';
import rootReducer from "../reducers/Index";

const store = createStore(rootReducer)


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/event'} component={Event}/>
                    <Route path={'/redux'} render={()=> <div><Provider store={store}><Redux /></Provider></div>}/>
                    <Route path={'/clock'} component={ClockTimer}/>
                    <Route path={'/form'} component={Form}/>
                    <Route path={'/tooltip'} component={Tooltip}/>
                </div>
            </Router>
        );
    }
}

export default App;
