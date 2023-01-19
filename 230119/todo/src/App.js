import './App.css';
import ListContainer from './components/ListContainer';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
      <ListContainer />
    </div>
  );
}

export default App;
