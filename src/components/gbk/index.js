import { h, Component } from 'preact';
import Palyazatok from './palyazatok.js';

const description_one = "Az egyesület 1999-ben alakult a település közösségi életének szervezése, a község fejlesztése, hagyományainak, építészeti és természeti értékeinek védelme érdekében. Az egyesület a Művelődési Házban működik. 2001-től a helyi önkormányzattal kötött közművelődési megállapodás alapján, mint a Gersekaráti Teleház gazdája és működtetője a település valamennyi polgára, intézménye és civil szerveződése számára nyitott közösségi színteret biztosít, elérhető szolgáltatásokat nyújt, közösségi, kulturális, szabadidős és ismeretterjesztő programokat szervez.";

const description_two = "Az egyesület 2002-től tagja a Magyar Teleház Szövetségnek. Ettől az évtől kezdődően működtet a Vas Megyei Munkaügyi Központtal együttműködve Foglalkozási Információs Pontot a településen. A szervezet 2002-től közhasznú szervezetként végzi tevékenységét. A Teleházban 2004-től Információs Iroda is működik, mely hozzájárul Gersekarát lakosainak naprakész információval való ellátásához, a település és a Hegyháti kistérség értékeinek, kultúrájának, hagyományainak a bemutatásával a helyi turisztikai kínálat minőségi fejlesztéséhez, főként a falusi-, zöld- és ifjúsági turizmus területén. 2005-től a Teleház eMagyarország Pontként is szolgálja a település lakóit, illetve a községbe érkezőket. Folyamatosan segíti a helyi lakosság és a civil szervezetek elektronikus ügyintézését, tájékoztatását. 2009-ben pályázati támogatásnak köszönhetően számítástechnikai eszközfejlesztésre és Internet-használatot népszerűsítő foglalkozások megtartására került sor, ez évtől a Teleház KIHOP-ként (Közösségi Internet Hozzáférési Pontként) működik. Az eMagyarország Pont infrastrukturális fejlesztése és szolgáltatási színvonalának emelése érdekében az egyesület szorosan együttműködik az eMagyarország Centrummal, mint országos szakmai szervezettel.";

const description_three = "2006-tól kezdődően az önkormányzattal kötött közfeladatellátási szerződés alapján az egyesület működteti a Művelődési Házban az Ifjúsági Klub és Információs Pontot, mely a helyi fiatalok számára nyújt szabadidős programokat és információs szolgáltatást. Az egyesület az általa működtetett közösségi színterek szolgáltatásain és programjain keresztül a lakosság széles rétegeivel áll kapcsolatban. Több közösség, civil szervezet létrehozását segítette elő, és segíti azok folyamatos működését. Az egyesület pályázati tevékenysége is egyre jelentősebb. A szervezet 2006-tól tagja a helyi LEADER Akciócsoportnak, 2008-tól pedig a Göcsej-Hegyhát Leader Egyesületnek és a Hegyháti Kulturális Közkincs Kerekasztalnak. Az egyesület által működtetett közösségi terek, azok programjai, szolgáltatásai nyitottak, bármely érdeklődő személy vagy közösség (gyermekek, fiatalok, felnőttek, civil szervezetek, intézmények) számára biztosított a bekapcsolódás, részvétel lehetősége.";

export default class Gbk extends Component {
  state = { show_description: false }

  render(_props, { show_description }) {
    return (
      <div>
        <div className="bg-white mt3 p3 bshadow-md">
          <h1 className="center h2 m0 mt2 mb3">Gersekarátért Baráti Kör</h1>
          <p className="m0 justify color-endeavour">{ description_one }</p>
          {
            show_description && <div>
              <p className="m0 justify mt2 color-gray">{ description_two }</p>
              <p className="m0 justify mt2 color-gray">{ description_three }</p>

              <p className="m0 mb1 mt3 h4 bold">Vezetőségi és Bizottsági tagok:</p>
              <ul className="list-reset m0">
                <li>
                  <span className="pr1">Elnök:</span>
                  Ferencz Lászlóné
                </li>
                <li>
                  <span className="pr1">Alelnök:</span>
                  Pintérné Nagy Éva</li>
                <li>
                  <span className="pr1">Titkár:</span>
                  ifj. Ferencz László
                </li>
                <li>
                  <span className="pr1">Gazdasági felelős:</span>
                  Gombos Anita
                </li>
                <li>
                  <span className="pr1">Felügyelő Bizottság elnöke:</span>
                  Horváth Veronika
                </li>
                <li>
                  <span className="pr1">Felügyelő Bizottság tagjai:</span>
                  Babos Andrea, Gorza Norbert
                </li>
              </ul>

              <p className="m0 mb1 mt3 h4 bold">Elérhetőségek:</p>
              <ul className="list-reset m0">
                <li>
                  <span className="pr1">Cím:</span>
                  9813 Gersekarát, Honvéd u. 2.
                </li>
                <li>
                  <span className="pr1">Tel:</span>
                  +36-94/574-032
                </li>
                <li>
                  <span className="pr1">Fax:</span>
                  +36-94/574-033
                </li>
                <li>
                  <span className="pr1">Mobil:</span>
                  +36-30/851-3028
                </li>
                <li>
                  <span className="pr1">E-mail:</span>
                  <a href="mailto:gersebkor@freemail.hu">
                    gersebkor@freemail.hu
                  </a>
                </li>
              </ul>

              <p className="m0 mb1 mt3 h4 bold">Dokumentumok:</p>
              <ul className="list-reset m0">
                <li>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/0B7EPicf9wHAFdkFLZkhQUWY0T0k/view?usp=sharing"
                  >
                    2013. évi egyszerűsített beszámoló
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/0B7EPicf9wHAFVmJ0Z0Z6N0didUk/view?usp=sharing"
                  >
                    2013. évi egyszerűsített beszámoló közhasznúsági melléklete
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/0B7EPicf9wHAFOXJac3Bsc1F1Qzg/view?usp=sharing"
                  >
                    2015. évi egyszerűsített beszámoló és közhasznúsági melléklete
                  </a>
                </li>
              </ul>
            </div>
          }
          {
            !show_description && <div className="mb1 mt3">
              <a
                href="#bovebben"
                className="btn btn-outline color-fun-green center col-12"
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ show_description: true });
                }}
              >Bővebben</a>
            </div>
          }
        </div>
        <Palyazatok />
      </div>
    );
  }
}

