import './App.css';
import BookList from './BookList';
import { LibraryProvider } from './LibraryContext';

function App() {
  return (
    <LibraryProvider>
      <div className="App">
        <BookList />
      </div>
    </LibraryProvider>
  );
}

export default App;
