import React from 'react';
import axios from 'axios';
import Modal from './Modal';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      chaps: []
    };
  }

  componentDidMount() {
    var url = 'https://the-one-api.dev/v2/book/';

    document.title = 'Lord of the Rings Books'
    axios.get(url) // Get the books list
      .then((res) => {
        for (let i = 0; i < res.data.docs.length; i++) {
          const element = res.data.docs[i];

          axios.get(url + element._id + '/chapter') // Get the chapters for each book
            .then((result) => {
              this.setState({chaps: result.data.docs})
              var newBooks = this.state.books.concat({id: element._id, name: element.name, chapters: this.state.chaps})
              this.setState({
                ...this.state,
                books: newBooks
              })
            })
        }
        console.log(this.state.books);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.books.map((book) => {
            return(
              <div>
                <p key={book.id}>{book.name}</p>
                <Modal key={book.id+"modal"} name={book.name} chapters={book.chapters}/>
              </div>
            )
          })}
        </header>
      </div>
    );
  }
}

export default App;
