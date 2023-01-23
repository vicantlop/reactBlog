import Blog  from './Blog/Blog'
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Blog />
    </Router>
  );
}

export default App;
