import { h, Component } from 'preact';
import Gallery from '../gallery';

export default class Hir extends Component {
  state = {
    open: false,
  }

  render({ hir }, { open }) {
    return (
      <div className="bg-white mt3 p3 bshadow-md">
        <div className="flex-auto">
          <div className="flex items-center justify-between mb3">
            <h1 className="m0">{hir.title}</h1>
            <p className="m0 h2 color-fun-green">{hir.datum}</p>
          </div>
          { hir.gallery_ary.length > 1 && <Gallery
            pictures={hir.gallery_ary}
          /> }
          { hir.gallery_ary.length === 1 && <img
            className="col-12"
            src={hir.gallery_ary[0]}
          /> }
          <div className="h3" dangerouslySetInnerHTML={{__html: hir.body}} />
        </div>
      </div>
    );
  }
}
