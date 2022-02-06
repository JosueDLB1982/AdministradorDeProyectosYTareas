import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import NewAccount from './components/auth/NewAccount'
import Projects from './components/projects/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='newAccount' element={<NewAccount />} />
        <Route path='projects' element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
