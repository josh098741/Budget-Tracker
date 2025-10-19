import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return(
    <div>
      <Header />
      <Routes>
        <Route to="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App
