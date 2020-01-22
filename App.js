import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import News from './Pages/news'
import Error from './Pages/Error';
import Navigation from './Components/Layouts/Navigation';
import Footer from './Components/Layouts/Footer';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
            <Navigation />
            <Switch>
            <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/news" component={News}/>
            <Route component={Error}/>
            </Switch>
            <Footer/>
            </div>
            </BrowserRouter>

    );
    }
}

export default App;
