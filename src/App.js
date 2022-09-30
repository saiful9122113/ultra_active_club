import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuestionAnswer from './components/QustionAnswer/QuestionAnswer';

function App() {
  return (
    <div>
      <Home></Home>
      <QuestionAnswer></QuestionAnswer>
    </div>
  );
}

export default App;
