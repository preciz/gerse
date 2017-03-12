import { h, Component } from 'preact';

import page from './page.json';

const page_body = page.body;

export default class Kozigazgatas extends Component {
  render() {
    return (
      <div className="col-12">
        <div className="bg-white mt3 p3 bshadow-md">
          <div
            className="h3"
            dangerouslySetInnerHTML={{__html: page_body}}
          />
        </div>
      </div>
    );
  }
}

