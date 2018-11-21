import React, { Component, Fragment } from 'react';
import ConvertCase from './components/convertCase';
import './assets/sass/style.scss';

class App extends Component {
  render() {
    return (
        <Fragment>
            <main>
                <div className="container">
                    <div className="card border">
                      <div className="card-body-medium">
                          <ConvertCase/>
                      </div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
  }
}

export default App;