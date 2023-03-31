import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePage from './components/ProfilePage.component';
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <ProfilePage />
      
    </Router>
  );
}

export default App;
