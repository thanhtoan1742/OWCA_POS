import './App.css';
import NavigationBar from './NavigationBar';
import CategoryBar from './CategoryBar';
import FoodGrid from './FoodGrid';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <CategoryBar />
      <FoodGrid />
    </div>
  );
}

export default App;
