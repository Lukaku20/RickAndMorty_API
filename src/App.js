import './App.css';
import Footer from './Components/public/Footer';
import Navbar from './Components/public/Navbar';
import Main from './Components/public/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Detail } from './Components/public/Detail';
import { UserForm } from './Components/public/UserForm';

function App() {
  return (

    <div>

      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details/:id" element={<Detail />} />
          <Route path="/user-form" element={<UserForm />} />
        </Routes>
      </Router>
      <Footer />
    </div>

  );


}

export default App;
