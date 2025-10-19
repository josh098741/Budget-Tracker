import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import AddExpense from './pages/AddExpense'
import EditExpense from './pages/EditExpense'

function App() {

  return(
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/edit-expense/:id" element={<EditExpense />} />
      </Routes>
    </div>
  );
}

export default App
