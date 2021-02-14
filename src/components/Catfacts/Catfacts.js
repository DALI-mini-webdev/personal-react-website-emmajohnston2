import { Component } from "react";
import axios from 'axios'
 
class Catfacts extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }
 
    fetchData = () => {
        axios.get("https://api.punkapi.com/v2/beers/random")
        .then((response) => {
            console.log(response);
            this.setState({data: response.data[0]})
        }).catch((error) => {
            console.log(error);
        })
    }
    
    renderData = () => {
        if(this.state.data) {
          return(
            <div>
              <div>Beer Name: {this.state.data.name}</div>
              <div>Contributor: {this.state.data.contributed_by}</div>
              <div>Tagline: {this.state.data.tagline}</div>
            </div>
            )
        } else {
            return(
            <div>Rosie couldn't find any beers :'(</div>
            )
        }
    }
 
    render(){
        return (
            <div>
                <div>Rosie only drinks water, but she can tell you information about beers!</div>
                <button onClick = {this.fetchData}>Random Beer Generator</button>
                {this.renderData()}
                <hr></hr>
                <hr></hr>
                <hr></hr>
            </div>
        )
    }
}
 
export default Catfacts