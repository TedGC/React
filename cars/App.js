import CarForm from './components/CarForm';
import CarList from './components/CarList';
import CarSearch from './components/CarSearch';
import CarValue from './components/CarValue';

function App() {
  return (
    <div className='container is-fluid'>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}

export default App;

/**
 * REDUX STORE DESIGN
 * 
 *  1. identify what state exsits in the app
 * 2. identify how that state changes over time
 * 3. group together common pieces of state
 * 4. create a slice for each group  
 *
 */