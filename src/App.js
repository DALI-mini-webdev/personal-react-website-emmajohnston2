import Emma from './Emma2.jpg';
import Rosie from './Rosie.jpg';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import showBoard from "./components/favtvShows/showBoard"
  
function App() {
    const buttonFunction = () => {
      console.log("the button was clicked");
    }   
    const onChangeFunction = (event) => {
      console.log(event.target.value);
    }
  return (
    <div className="App">
       <Navbar />
       <showBoard />
       <button onClick={buttonFunction}>Button</button>
       <input type="text" onChange={onChangeFunction}></input>
    <head> 
        <title>Emma's Personal Webpage</title>
    </head>
      <div>
        <h1 className="purple-text">Hi, my name is Emma!</h1>
      </div>
        <p>I am a sophomore at Bates majoring in Biochemistry and minoring in Education. I am a member of the Bates debate team, and work as a Community Outreach Fellow to coordinate tutors in local schools.</p>
        <img class="smallimage" src={Emma}></img>
        <hr></hr>
            <h2 className="purple-text">Hobbies</h2>
            <body className="leftalign">
          <ul>
            <li>Baking and Cooking</li>
            <li>Biking</li>
            <li>Hiking</li>
          </ul>
          </body>
            <h2 className="purple-text">Fun Facts</h2>
          <body className="leftalign">
          <ol>
              <li>I have a cat named Rosie</li>
              <li>My favorite TV shows are The Office (I know, basic) and Schitt's Creek</li>
              <li>I am from Bradenton, Florida</li>
              <li>I played bass drum in my high school's marching band</li>
          </ol>
          </body>
          <div><img class="smallimage" src={Rosie}></img></div>
    </div>
  );
}
export default App
;
