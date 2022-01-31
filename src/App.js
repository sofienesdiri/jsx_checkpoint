import './App.css';
import imgs from "./imgsrc.jpg"
import vid from "./videos.mp4"

function App() {
  return (
    <div>
      <div style={{border:"solid 1px black" , maxWidth:"100vw"}}>
        <h1 className="title red">Your name here</h1>

        <br />

        <img src="/imgpublic.jpg" />

        <br />

        <img src={imgs} />
      </div>
      <video width="320" height="240" controls>

      <source src={vid} type="video/mp4"/>

      </video>
    </div>
  )
}

export default App;
