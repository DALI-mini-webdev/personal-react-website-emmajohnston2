import React, { Component } from 'react';
class showBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        shows: Map(),
        showID: 0,
        newshowName: '',
        newshowgenre: '',
        newShowMainCharacter: ''
        }
    }
    newShowNameFunction = (event) => {
        this.setState({ newShowName: event.target.value });
      }
    newshowGenreFunction = (event) => {
        this.setState({ newShowGenre: event.target.value });
      }
    newShowMainCharacterFunction = (event) => {
        this.setState({ newShowMainChar: event.target.value });
      }


    render () {
        return (
            <div>
            <p> this is the TV show board </p>
            <p>Add your favorite show!</p>
            <p>Enter TV Show:</p>
            <input type="text" value={this.state.newShowName} onChange={this.newShowNameFunction} />
            <p>Enter TV Genre:</p>
            <input type="text" value={this.state.newShowGenre} onChange={this.newshowGenreFunction} />
            <p>Enter Main Character:</p>
            <input type="text" value={this.state.newShowMainChar} onChange={this.newShowMainCharacterFunction} />
            <button onClick={this.saveDogInfo}>Save!</button>
            </div>
        )
    }
  }
export default showBoard;