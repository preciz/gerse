import { h, Component } from 'preact';
import Palyazat from './palyazat';

export default class Palyazatok extends Component {
  render() {
    return (
      <div>
        {
          window.gbk_palyazatok.map((palyazat) =>
            <Palyazat
              palyazat={palyazat}
            />
          )
        }
      </div>
    );
  }
}

