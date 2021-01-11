import './App.css';
import PatientCard from './PatientCard';
import boris_smile from './media/images/boris_smile.png';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Rekognition</h1>
      </div>
      <div className="dashboard">
        <div className="left">
          <h2 className="title-head">Photo taken in clinic</h2>
          <img src={boris_smile} alt="logo" />
        </div>
        <div className="right">
          <h2 className="title-head">Matched patient</h2>
          <PatientCard/>
        </div>
      </div>
    </div>
  );
}

export default App;
