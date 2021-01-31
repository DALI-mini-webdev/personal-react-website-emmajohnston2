import logo from './logo.svg';
import './App.css';

  
function App() {
    const name = "Emma";
    var nameComponent = (name === "Emma") ?
    <p>hi my name is {name}</p> : <p>my  name is not Emma</p>;
    const buttonFunction = () => {
      console.log("the button was clicked");
    }   
    const onChangeFunction = (event) => {
      console.log(event.target.value);
    }
  return (
    <div className="App">
       <button onClick={buttonFunction}>Button</button>
    <head> 
        <title>Emma's Personal Webpage</title>
    </head>
      <div>
        <h1 className="purple-text">Hi, my name is Emma!</h1>
      </div>
        <p>I am a sophomore at Bates majoring in Biochemistry and minoring in Education. I am a member of the Bates debate team, and work as a Community Outreach Fellow to coordinate tutors in local schools.</p>
        <img class="smallimage" src="./IMG_8636 (2) 4.jpg"></img>
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
            <div>
              <img class="smallimage" src="./20190821_160413 1.jpg"></img>
            </div>
          </body>
    </div>
  );
}
export default App
;
