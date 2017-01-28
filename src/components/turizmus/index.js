import { h, Component } from 'preact';
import GalleryText from '../gallery_text';
import turizmus_images from './turizmus_images';

const page_body = `<h3>Horgászat</h3>\n\n<p><a target='_blank'  href=\"http://www.vasihorgasz.hu/vizek/gersekaratito.htm\">Horgászati információk</a></p>\n\n<h3>Vendégházak</h3>\n\n<p><strong>Bester lak</strong><br>\nÜzemeltető: Takács Dániel<br>\nCím: 9813 Gersekarát, Béke u. 28.<br>\nMobil: +36-20/427-8602; +36-20/824-1041</p>\n\n<p><strong>Falusi vendégház</strong><br>\nTulajdonos: Csarankó Józsefné<br>\nCím: 9813 Gersekarát, Dózsa Gy. u. 58.<br>\nTel: +36-30/491-8584</p>\n\n<p><strong>Guba Panzió</strong><br>\nTulajdonos: Guba Gyuláné<br>\nCím: 9813 Gersekarát, Petőfi u. 27.<br>\nTel: +36-30/851-3028</p>\n\n<p><strong>Karát-lak</strong><br>\nTulajdonos: Karátföldi Józsefné<br>\nCím: 9813 Gersekarát, Petőfi u. 7.<br>\nTel: +36-94/373-494<br>\nWeb: <a target='_blank'  href=\"http://www.karatlak.extra.hu\">www.karatlak.extra.hu</a><br>\n<a target='_blank'  href=\"https://www.youtube.com/watch?v=7WHaza-F0y0\">Bemutatkozó videó</a></p>\n\n<p><strong>Nagyika Vendégház</strong><br>\nTulajdonos: Szabó Györgyné<br>\nCím: 9813 Gersekarát, Petőfi u. 12.<br>\nTel: +36-30/317-1174</p>\n\n<p><strong>Vadvirág vendégház</strong><br>\nTulajdonos: Gaál László<br>\nCím: 9813 Gersekarát Dózsa György u. 26/A.<br>\nTelefon: +36-70/528-1400<br>\nWeb: <a target='_blank'  href=\"http://www.vadviragvendegh.atw.hu\">www.vadviragvendegh.atw.hu</a></p>\n\n<p><strong>Vendég apartman</strong><br>\nTulajdonos: Herczeg Gyula<br>\nCím: 9813 Gersekarát, Dózsa Gy. u. 68.<br>\nTel: +36-30/944-2190</p>\n\n<p><strong>Winchester-vendégház</strong><br>\nTulajdonos: Pirka Lászlóné Ibolya<br>\nTel:  06-94/414-570<br>\nMobil: 06-30-600-6626, 06-20-585-5775<br>\nWeb: <a target='_blank'  href=\"http://www.winchester-vendeghaz.hu\">http://www.winchester-vendeghaz.hu</a><br>\n<a target='_blank'  href=\"https://www.youtube.com/watch?v=lSmm0riy6YE\">Bemutatkozó videó</a></p>\n`;

export default class Turizmus extends Component {
  render() {
    return (
      <div className="col-12">
        <div className="bg-white mt3 p3 bshadow-md">
          <GalleryText pictures={turizmus_images} />
          <div
            className="h3"
            dangerouslySetInnerHTML={{__html: page_body}}
          />
        </div>
      </div>
    );
  }
}

