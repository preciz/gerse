import { h, Component } from 'preact';
import { Link } from 'preact-router';

export default class HeaderMobile extends Component {
  render({showMobileHeader, setMobileHeader}) {
    return (
      <header className="header header-mobile bg-holly p2">
        <div
          className="flex flex-column nitems-center"
          style="max-width: 1170px; margin: auto;"
        >
          <div className="flex items-center">
            <div className="header__logo mr1" style={{minWidth: 30}} />
            <h1 className="color-white m0 h3 pr2 fw900">GERSEKARÁT</h1>
            <a
              href="#menu"
              className="flex-auto flex justify-end pr1 text-decoration-none items-center"
              onClick={(e) => {
                e.preventDefault();
                setMobileHeader(!showMobileHeader);
              }}
            >
              <span
                className="color-white bold h3 pr1"
              >Menu</span>
              <svg style="width:33px;height:33px" viewBox="0 0 24 24">
                <path
                  fill="#fff"
                  d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
                />
              </svg>
            </a>
          </div>
          {
            showMobileHeader && <nav
              className="flex flex-column items-center mt1"
            >
              <Link
                className="color-white text-decoration-none py1 bold fw900 center"
                href="/"
              >HÍREK</Link>
              <Link
                className="color-white text-decoration-none py1 bold fw900 center"
                href="/kozigazgatas"
              >KÖZIGAZGATÁS</Link>
              <Link
                className="color-white text-decoration-none py1 bold fw900 center"
                href="/intezmenyek"
              >INTÉZEMÉNYEK</Link>
              <Link
                className="color-white text-decoration-none py1 bold fw900 center"
                href="/turizmus"
              >TURIZMUS</Link>
              <Link
                className="color-white text-decoration-none py1 bold fw900 center"
                href="/civil-szervezetek"
              >CIVIL SZERVEZETEK</Link>
              <Link
                className="color-white text-decoration-none py1 bold fw900 center"
                href="/gbk"
              >BARÁTI KÖR</Link>
              <div className="flex items-center justify-between mt1" style="width: 130px">
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
          }
        </div>
      </header>
    );
  }
}
