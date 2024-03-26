import { Routes, Route } from 'react-router-dom';
import HomePage from './Homepage';
import ColorDetails from './ColorDetails';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/color/:color" element={<ColorDetails />}></Route>
      </Routes>
    </div>
  );
};

export default App;
