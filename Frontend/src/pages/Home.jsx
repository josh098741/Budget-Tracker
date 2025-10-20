import axios from 'axios'
import React,{ useState,useEffect } from 'react'
import { Edit,Trash } from 'lucide-react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import PieChartComponent from '../components/PieChart'
import ExpenseCalculator from '../components/ExpenseCalculator'

function Home(){

    const [expense, setExpense] = useState([])
    const [loading, setLoading] = useState(false)

    const handleDelete = async (id) => {
        try{
            await axios.delete(`http://localhost:5000/api/expense/${id}`)
            const updatedExpense = expense.filter((item) => item._id !== id)
            setExpense(updatedExpense)
        }catch(error){
            console.log("Error in deleting expense",error)
            toast.error("Failed to delete the expense")
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true)
                const response = await axios.get("http://localhost:5000/api/expense")
                console.log(response.data)
                setExpense(response.data)
            }catch(error){
                console.log(error)
            }finally{
                setLoading(false)
            }
            
        }
        fetchData()
    },[])

    return(
        <div className="border h-[700px] border-slate-900">
            <div className="m-5 h-[610px] p-1">
                <div className="flex h-1/2">
                    <div className="border border-slate-500 mr-1 w-1/2 h-full">
                        <PieChartComponent className="relative top-2 h-full" expense={expense} />
                    </div>
                    <div className="border border-slate-500 w-1/2">
                        <ExpenseCalculator expense={expense} />
                    </div>
                </div>
                <div className="h-1/2 border my-1 border-slate-500 flex flex-wrap">
                    {
                        loading ? <div>Loading</div> 
                        : expense && expense.length > 0 ? 
                        expense.map((item) => (
                            <div key={item._id} className="border m-3 w-40 h-20 border-slate-900 rounded text-xs grid grid-cols-2">
                                <div className="border-r border-slate-500">
                                    <h1 className="text-center">{item.title}</h1>
                                    <p >{item.amount}</p>
                                    <p className={item.type === 'debit' ? 'text-red-800':'text-green-500'}>{item.type}</p>
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div><p>{item.description}</p></div>
                                    <div className="flex justify-between">
                                        <button  onClick={() => handleDelete(item._id)}><Trash className="hover:text-red-500 transition-all" /></button>
                                        <Link to={`/edit/${item._id}`}>
                                            <button><Edit className="hover:text-green-500 transition-all" /></button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                        
                        : <div></div>
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default Home