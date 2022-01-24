import './App.css';


const array = ['estudar', 'academia', 'descansar', 'estudar']

const Task = (array) => {
  return (
    array.map(item => <li>{item}</li>)
  );
}

function App() {
  return (
   Task(array)
  );
}

export default App;
