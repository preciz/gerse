import { h, Component } from 'preact';
import { Link } from 'preact-router';

export default class Header extends Component {
  render() {
    return (
      <header className="header header-normal bg-holly p2">
        <div
          className="flex items-center"
          style="max-width: 1170px; margin: auto;"
        >
          <Link
            className="text-decoration-none flex items-center"
            href="/"
          >
            <div className="header__logo mr1" style={{minWidth: 30}} />
            <h1 className="color-white m0 h3 pr2 fw900">GERSEKARÁT</h1>
          </Link>
          <nav className="flex items-center">
            <Link
              className="color-white text-decoration-none pr2 bold fw900 center"
              href="/"
            >HÍREK</Link>
            <Link
              className="color-white text-decoration-none px2 bold fw900 center"
              href="/kozigazgatas.html"
            >KÖZIGAZGATÁS</Link>
            <Link
              className="color-white text-decoration-none px2 bold fw900 center"
              href="/intezmenyek.html"
            >INTÉZEMÉNYEK</Link>
            <Link
              className="color-white text-decoration-none px2 bold fw900 center"
              href="/turizmus.html"
            >TURIZMUS</Link>
            <Link
              className="color-white text-decoration-none px2 bold fw900 center"
              href="/civil-szervezetek.html"
            >CIVIL SZERVEZETEK</Link>
            <Link
              className="color-white text-decoration-none px2 bold fw900 center"
              href="/gbk.html"
            >BARÁTI KÖR</Link>
            <div className="flex items-center justify-between pl1" style="width: 130px">
              <a target="_blank" href="https://www.google.hu/maps/@46.9710616,16.741266,14z">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="#fff" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                </svg>
              </a>
              <a target="_blank" href="mailto:gersebkor@freemail.hu">
                <svg style="width:28px;height:28px" viewBox="0 0 22 22">
                  <path fill="#fff" d="M20,18H18V9.25L12,13L6,9.25V18H4V6H5.2L12,10.25L18.8,6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                </svg>
              </a>
              <a target="_blank" href="https://www.facebook.com/GersekaratRendezvenyek">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="#fff" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
