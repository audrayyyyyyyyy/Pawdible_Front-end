import './App.tsx'
import './App.css'
import Signup from './Components/LoginSignup/Signup';
import LandingPage from './Components/Scan/ScanPage.tsx';
import ScanPage from './Components/Scan/ScanPage.tsx';

function App() {
  return (
    <main className='App'>
      <ScanPage/>
      <Signup/>
    </main>
  );
}

export default App;
