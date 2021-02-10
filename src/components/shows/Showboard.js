import React, { Component } from 'react';
import ShowPosting from './Showposting';
import { Map } from 'immutable';

class Showboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        shows: Map(),
        showID: 0,
        newshowName: '',
        newshowgenre: '',
        newShowMainCharacter: '',
        }
    }
    newShowNameFunction = (event) => {
        this.setState({ newshowName: event.target.value });
      }
    newshowGenreFunction = (event) => {
        this.setState({ newshowgenre: event.target.value });
      }
    newShowMainCharacterFunction = (event) => {
        this.setState({ newShowMainCharacter: event.target.value });
      }
    saveShowInfo = () => {
      let showData = {
        name: this.state.newshowName,
        genre: this.state.newshowgenre,
        mainchar: this.state.newShowMainCharacter,
      }
      this.setState({
        shows: this.state.shows.set(this.state.showID, showData),
        showID: this.state.showID + 1
      });
    }


    delete = (id) => {
      this.setState({shows: this.state.shows.delete(id)})
    }

MainCharUpdate = (id, field) => {
  this.setState({shows:this.state.shows.update(id, (n) => {
    return Object.assign({}, n, field); })
  })
}

    render () {
      const allShows = this.state.shows.entrySeq().map(
        ([id, shows]) => {
          return (
            <ShowPosting
            show={shows.name}
            genre={shows.genre}
            mainchar={shows.mainchar}
            id={id}
            delete={this.delete}
            update={this.MainCharUpdate}
            />
          );
        }
      );  
        return (
          <div>
            <p>TV show board </p>
            {allShows}
            <p>Add your favorite show!</p>
            <p>Enter TV Show:</p>
            <input type="text" value={this.state.newShowName} onChange={this.newShowNameFunction} />
            <p>Enter Genre:</p>
            <input type="text" value={this.state.newShowGenre} onChange={this.newshowGenreFunction} />
            <p>Enter Main Character:</p>
            <input type="text" value={this.state.newShowMainChar} onChange={this.newShowMainCharacterFunction} />
            <button onClick={this.saveShowInfo}>Save!</button>
            <button onClick={this.submit}> submit </button>
          </div>
        )
    }
  }
    export default Showboard;