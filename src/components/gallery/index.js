import { h, Component } from 'preact';

function preloadImage(url) {
  let img = new Image();
  img.src = url;
}

export default class Gbk extends Component {
  state = { active: 0 }

  showNext(pictures, active) {
    return (active + 1) < pictures.length;
  }

  componentDidMount() {
    this.props.pictures.map(preloadImage);
  }

  render({ pictures }, { active }) {
    if (pictures.length === 0) return null;

    const showPrev = active !== 0;
    const showNext = this.showNext(pictures, active);

    const style = {
      backgroundImage: `url('${pictures[active]}')`,
      height: 430,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };

    const justifyClass = (() => {
      if (showPrev && showNext) return "justify-between";
      if (!showPrev && showNext) return "justify-end";
      return "";
    })();

    return (
      <div className={`flex ${justifyClass} mt2`} style={style}>
        {
          showPrev && <a
            className="flex items-center"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%)',
            }}
            href="#elozo"
            onClick={() => this.setState({ active: active - 1 })}
          >
          >
            <svg style="width:48px;height:48px" viewBox="0 0 24 24">
              <path fill="#fff" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
            </svg>
          </a>
        }
        {
          showNext && <a
            className="flex items-center justify-end"
            href="#kovetkezo"
            onClick={() => this.setState({ active: active + 1 })}
            style={{
              width: 62,
              background: 'linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%)',
            }}
          >
            <svg style="width:48px;height:48px" viewBox="0 0 24 24">
              <path fill="#fff" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </a>
        }
      </div>
    );
  }
}

