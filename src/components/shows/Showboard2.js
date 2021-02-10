import React, { Component } from 'react';
import ShowPosting from './Showposting';
import { Map } from 'immutable';

class Showboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        show: Map(),
        showID: 0,
        name: '',
        genre: '',
        mainchar: '',
        }
    }

    nameFunction = (event) => {
        this.setState({ name: event.target.value });
      }
    genreFunction = (event) => {
        this.setState({ genre: event.target.value });
      }
    maincharFunction = (event) => {
        this.setState({ mainchar: event.target.value });
      }
    saveShowInfo = () => {
      let showData = {
        name: this.state.name,
        genre: this.state.genre,
        mainchar: this.state.mainchar,
      }
    submit = () => {
    let showData = {
         name: this.state.name,
         genre: this.state.genre,
         mainchar: this.state.newmainchar,
        }
    this.setState({
        shows: this.state.shows.set(this.state.showID, showData),
        showID: this.state.showID + 1
      });
    }

    delete = (id) => {
        this.setState({shows: this.state.shows.delete(id)})
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
              <input type="text" value={this.state.name} onChange={this.name} />
              <p>Enter Genre:</p>
              <input type="text" value={this.state.genre} onChange={this.genre} />
              <p>Enter Main Character:</p>
              <input type="text" value={this.state.mainchar} onChange={this.mainchar} />
              <button onClick={this.saveShowInfo}>Save!</button>
              <button onClick={this.submit}> submit </button>
            </div>
          )
      }
    };
export default Showboard2;