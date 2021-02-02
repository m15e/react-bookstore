import '../App.css';
import Header from './Header';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="Bookstore-CMS">
      <div className="content-container">
        <Header />
        <BooksList />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;
