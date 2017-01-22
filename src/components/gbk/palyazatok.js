import { h, Component } from 'preact';
import Palyazat from './palyazat';
import palyazatok_data from './palyazatok_data';

export default class Palyazatok extends Component {
  render() {
    return (
      <div>
        {
          palyazatok_data.map((palyazat) =>
            <Palyazat
              palyazat={palyazat}
            />
          )
        }
      </div>
    );
  }
}

