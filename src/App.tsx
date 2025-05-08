import './App.tsx'
import './App.css'
import Signup from './Components/LoginSignup/Signup';
import LandingPage from './Components/Scan/LandingPage.tsx';

function App() {
  return (
    <main className='App'>
      <LandingPage/>
      <Signup/>
    </main>
  );
}

export default App;
