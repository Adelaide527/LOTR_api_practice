import React from "react";

export default class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    };
  }

  showModal = e => {
    this.setState({
      show: true
    });
  };

  showOurModal() {
    if(this.state.show) 
      return (
        <ul>
          {this.props.chapters.map((chapter) => {
            return <li key={chapter}>{chapter.chapterName}</li>
          })}
        </ul>
      )
    else
      return null
  }
  
  render() {
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

