import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import AddExpense from './pages/AddExpense'
import EditExpense from './pages/EditExpense'
import Footer from './components/Footer'

function App() {

  return(
    <div className="min-h-screen flex flex-col">
      <div><Header /></div>
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/edit-expense/:id" element={<EditExpense />} />
        </Routes>
      </div>
      <div><Footer /></div>
    </div>
  );
}

export default App
