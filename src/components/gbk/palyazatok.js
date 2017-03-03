import { h, Component } from 'preact';
import Palyazat from './palyazat';

const gbk_palyazatok = [];

export default class Palyazatok extends Component {
  render() {
    return (
      <div>
        {
          gbk_palyazatok.map((palyazat) =>
            <Palyazat
              palyazat={palyazat}
            />
          )
        }
      </div>
    );
  }
}

