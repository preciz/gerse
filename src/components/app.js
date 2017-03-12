import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import HeaderMobile from './header_mobile';
import Home from './home';
import Kozigazgatas from './kozigazgatas';
import Turizmus from './turizmus';
import Intezmenyek from './intezmenyek';
import CivilSzervezetek from './civil_szervezetek';
import Gbk from './gbk';

export default class App extends Component {
  state = {
    showMobileHeader: false,
  };

  // Gets fired when the route changes.
  // @param {Object} event   "change" event from [preact-router](http://git.io/preact-router)
  // @param {string} event.url The newly routed URL
  handleRoute = e => {
    this.currentUrl = e.url;

    this.setState({showMobileHeader: false});
  };

  render({}, {showMobileHeader}) {
    return (
      <div id="app">
        <div
          className="millenium-park"
        />
        <Header />
        <HeaderMobile
          showMobileHeader={showMobileHeader}
          setMobileHeader={(bool) => this.setState({ showMobileHeader: bool })}
        />
        <div className="flex justify-center pb4">
          <div style={{maxWidth: 800}} className="col-12">
            <Router onChange={this.handleRoute}>
              <Home path="/" />
              <Kozigazgatas path="/kozigazgatas"/>
              <CivilSzervezetek path="/civil-szervezetek"/>
              <Turizmus path="/turizmus"/>
              <Intezmenyek path="/intezmenyek"/>
              <Gbk path="/gbk"/>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}
