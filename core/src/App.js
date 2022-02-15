import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import QuizSelect from './components/QuizSelect'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizSelect/>}></Route>
        {/* <Route path="/r/:topic" component={RandomQuiz} exact /> */}
      </Routes>

    </Router>
  );
}

export default App;
