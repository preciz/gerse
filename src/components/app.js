import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from './home';
import Kozigazgatas from './kozigazgatas';
import Gbk from './gbk';

export default class App extends Component {
  // Gets fired when the route changes.
  // @param {Object} event   "change" event from [preact-router](http://git.io/preact-router)
  // @param {string} event.url The newly routed URL
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <div
          className="millenium-park"
          style={{
            height: 300,
            backgroundImage: `url("/assets/images/milleniumi_park.jpg")`,
            backgroundPosition: '50% 60%',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <Header />
        <div className="flex justify-center pb4">
          <div style={{width: 800}}>
            <Router onChange={this.handleRoute}>
              <Home path="/" />
              <Kozigazgatas path="/kozigazgatas/"/>
              <Gbk path="/gbk/"/>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}
