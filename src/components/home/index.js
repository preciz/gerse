import { h, Component } from 'preact';
import Hir from './hir';

export default class Home extends Component {
  state = {
    hirek: [],
    show_count: 10,
  }

  componentDidMount() {
    fetch('http://gersefeed.herokuapp.com/posts.json')
      .then((response) => response.json())
      .then((json) => this.setState({ hirek: json }));
  }

  render(_props, { hirek, show_count }) {
    return (
      <div className="col-12">
        { hirek.slice(0, show_count + 1).map(hir => <Hir hir={hir} />) }
        { hirek.length > 10 && <a
          href="#regebbi"
          className="btn color-white bg-fun-green center col-12 my3"
          onClick={(e) => {
            e.preventDefault();
            this.setState({ show_count: show_count + 10 });
          }}
        >Regebbi hirek</a>}
      </div>
    );
  }
}
