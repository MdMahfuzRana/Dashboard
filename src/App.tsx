import './App.scss';
import ContentBody from './Components/ContentBody/ContentBody';
import BrandExample from './Components/NavBar/NavBar';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <>
    <BrandExample />
    <div className="App">
      <Sidebar />
      <ContentBody />
    </div>
    </>
  );
}

export default App;
