import Emma from './Emma2.jpg';
import Rosie from './Rosie.jpg';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Showboard from "./components/shows/Showboard"
import Catfacts from "./components/Catfacts/Catfacts"
import firebase from "./firebase/index"
import ToDoBoard from './components/ToDoBoard'
  
function App() {
    console.log(firebase);
    console.log(firebase.db);
  return (
    <div className="App">
       <Navbar />
       <hr></hr>
       <Showboard />
       <hr></hr>
       <ToDoBoard />
       <hr></hr>
        <title>Emma's Personal Webpage</title>
      <div>
        <h1 className="purple-text">Hi, my name is Emma!</h1>
      </div>
        <p>I am a sophomore at Bates majoring in Biochemistry and minoring in Education. I am a member of the Bates debate team, and work as a Community Outreach Fellow to coordinate tutors in local schools.</p>
        <img className="smallimage" src={Emma}></img>
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
          <div><img className="smallimage" src={Rosie}></img></div>
          <Catfacts />
    </div>
  );
}
export default App
;
