
import Profile from './perfil';
import './App.css';
import LoginButton from './loguearse';
import LogoutButton from './logout';


function App() {
  return (
    <div className="App">
     <LoginButton/>
     <LogoutButton/>
     <Profile/>
    </div>
  );
}

export default App;
