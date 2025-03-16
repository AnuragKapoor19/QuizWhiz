import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import QuizOptions from './pages/Options';
import Questions from './pages/Questions';
import MyProfilePage from './pages/Profile';
import LeaderboardPage from './pages/LeaderBoard';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/quiz' element={<QuizOptions />} />
          <Route exact path='/questions' element={<Questions />} />
          <Route exact path='/profile' element={<MyProfilePage />} />
          <Route exact path='/leaderboard' element={<LeaderboardPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
