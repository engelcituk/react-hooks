import './App.css';
import Header from './components/Header'
import Characters from './components/Characters'


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='Container'>
        <Characters/>
      </div>
    </div>
  );
}

export default App;
