import { h, Component } from 'preact';

export default class Palyazat extends Component {
  state = {
    open: false,
  }

  button(open) {
    if (open) return <svg style="width:32px;height:32px" viewBox="0 0 24 24">
      <path fill="#006D33" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,10L12,15L17,10H7Z" />
    </svg>;

    return <svg style="width:32px;height:32px" viewBox="0 0 24 24">
      <path fill="#006D33" d="M12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M17,14L12,9L7,14H17Z" />
    </svg>;
    }

  render({ palyazat }, { open }) {
    return (
      <div className="bg-white mt3 p3 bshadow-md">
        <div className="flex">
          <div className="flex-auto">
            <div className="flex items-center justify-between">
              <h3 className="m0">{palyazat.title}</h3>
              <h4 className="h4 m0 color-endeavour">{palyazat.date}</h4>
            </div>
            <p className="m0 color-endeavour">{palyazat.code}</p>
          </div>
          <div className="flex items-center">
            <a
              className="self-center ml3 flex items-center"
              href="#bovebben"
              title="Bovebben"
              onClick={(e) => {
                e.preventDefault();
                this.setState({open: !open});
              }}
            >
              {this.button(open)}
            </a>
          </div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

//  <svg style="width:32px;height:32px" viewBox="0 0 24 24">
//    <path fill="#006D33" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
//  </svg>
//<svg style="width:32px;height:32px" viewBox="0 0 24 24">
//  <path fill="#006D33" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
//</svg>
//<svg style="width:24px;height:24px" viewBox="0 0 24 24">
//  <path fill="#006D33" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
//</svg>
