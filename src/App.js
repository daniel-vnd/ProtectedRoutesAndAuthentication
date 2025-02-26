import { BrowserRouter } from 'react-router-dom'
import './App.css';
import {AuthWrapper} from '../src/auth/AuthWrapper';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthWrapper />
      </BrowserRouter>
    </div>
  );
}

export default App;
