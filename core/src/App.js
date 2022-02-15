import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import QuizSelect from './components/QuizSelect'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizSelect/>}></Route>
      </Routes>

    </Router>
  );
}

export default App;
