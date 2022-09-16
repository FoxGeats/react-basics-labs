import logo from './logo.svg';
import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" job="Empty dishwasher">
          
        </Task>
      <Task title="Laundry" deadline="Tomorrow" job="Fold laundry and put away" >
        
        </Task>
      <Task title="Tidy" deadline="Today" job=" "/>
    </div>
  );
}

export default App;
