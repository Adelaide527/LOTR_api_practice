import React from "react";
import './modal.css';

export default class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    };
  }

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  showOurModal() {
    if(this.state.show) 
      return (
        <div className="modal">
          <ul>
            {this.props.chapters.map((chapter) => {
              return <li key={chapter.chapterName} className="text">{chapter.chapterName}</li>
            })}
          </ul>
          <button onClick={e => { this.showModal(e); }} >
            Close
          </button>
        </div>
      )
    else
      return null
  }
  
  render() {
    // console.log(this.props.name);
    return (
      <div>
        <button key={this.props.name} onClick={e => { this.showModal(); }} >
          Chapters
        </button>
        {this.showOurModal()}
      </div>
    )
  }
}

