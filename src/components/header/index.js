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
          <h1 className="color-white m0 h3 pr4">GERSEKARAT</h1>
          <nav className="flex">
            <Link
              className="color-white text-decoration-none pr2 bold"
              href="/"
            >HIREK</Link>
            <Link
              className="color-white text-decoration-none px2 bold"
              href="/kozigazgatas"
            >KOZIGAZGATAS</Link>
            <Link
              className="color-white text-decoration-none px2 bold"
              href="/gbk"
            >BARATI KOR</Link>
          </nav>
        </div>
      </header>
    );
  }
}
