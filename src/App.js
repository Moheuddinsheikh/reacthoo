import logo from './logo.svg';
import './App.css';

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>Products page</h1>
      <p>{location.pathname}</p>
      <p>{new URLSearchParams(location.search).get('name')}</p>
    </div>
  );
}

export default App;
