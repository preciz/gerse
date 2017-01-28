import { h, Component } from 'preact';
import { Link } from 'preact-router';

export default class Header extends Component {
  render() {
    return (
      <header className="bg-holly p2">
        <div
          className="flex items-center"
          style="max-width: 1170px; margin: auto;"
        >
          <div className="header__logo mr1"></div>
          <h1 className="color-white m0 h3 pr4 fw900">GERSEKARÁT</h1>
          <nav className="flex">
            <Link
              className="color-white text-decoration-none pr2 bold fw900"
              href="/"
            >HIREK</Link>
            <Link
              className="color-white text-decoration-none px2 bold fw900"
              href="/kozigazgatas"
            >KOZIGAZGATAS</Link>
            <Link
              className="color-white text-decoration-none px2 bold fw900"
              href="/gbk"
            >BARATI KOR</Link>
          </nav>
        </div>
      </header>
    );
  }
}
