import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from "react-router-dom";

//day_1
import Day_1 from '../src/mode/day_1';
import Day_3 from '../src/mode/day_3';

class App extends Component {
    componentWillMount() {
        let url = window.location.url;

    }
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to="/day_1" >Day_1</Link>

                        <Link to="/day_3" >Day_3</Link>
                    </div>
                    <div>
                        <Route path="/day_1" component={Day_1} />
                        <Route path="/day_3" component={Day_3} />
                    </div>
                </div>
            </Router>
        )
    }
   
}
ReactDOM.render(<App />, document.querySelector('#app'))