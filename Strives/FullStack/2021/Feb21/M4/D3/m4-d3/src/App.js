import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import BookList from './components/BookList'
import History from './data/history.json'
import Fantasy from './data/fantasy.json'
import Horror from './data/horror.json'
import Romance from './data/romance.json'
import Scifi from './data/scifi.json'

function App() {
  return (
    <div>
      <WarningSign text=" hola "/>
      <MyBadge text="hello" color="blue"/>
      <BookList category={Fantasy}/>
    </div>
  );
}

export default App;
