import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginPage } from './components/login';
import { Threads } from './features/threads/threads-view';

function App() {
  return (
    <>
      <Routes>  
        <Route path="/login" element={<LoginPage />} />
        <Route path="/threads/:id" element={<Threads />} />
      </Routes>
    </>
  );
}

export default App;
