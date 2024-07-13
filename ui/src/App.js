import './App.css';
import Timer from './components/Timer';
import UserList from './components/UserList';
import UsersGitHub from './components/UsersGitHub';

function App() {
  return (
    <div className="App">
      <Timer />

      <UserList />

      <UsersGitHub />
    </div>
  );
}

export default App;
