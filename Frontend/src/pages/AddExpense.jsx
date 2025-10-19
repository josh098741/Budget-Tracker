import React,{useState} from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddExpense(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    const [type, setType] = useState("credit")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(!title || !description || !amount){
            toast.error("All Fields Must Be Filled")
        }
        try{
            setLoading(true)
            await axios.post("http://localhost:5000/api/expense",{
                title,description,amount,type
            })
            setTitle("")
            setDescription("")
            setAmount("")
            setType("credit")
            toast.success("Expense successfully Added to the database")
            navigate("/")
        }catch(error){
            console.error("Error  in updating content",error)
            toast.error("Error in persisting Data to the database")
        }finally{
            setLoading(false)
        }
    }

    return(
        <div className="h-[700px] border border-slate-700">
            <div className="border gap-10 flex flex-col items-center h-[700px] justify-center">
                <div className="text-xl">Expenses And Income</div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <label>Title</label>
                            <input type="text" 
                            className="border outline-none border-slate-900 pl-5"
                            value={title} 
                            onChange={(event) => setTitle(event.target.value)}
                            />
                        </div>
                        
                        <div className="flex flex-col">
                            <label>Description</label>
                            <textarea 
                            className="border outline-none border-slate-900 pl-5"
                            value={description} 
                            onChange={(event) => setDescription(event.target.value)}
                            />
                        </div>
                        
                        <div className="flex flex-col">
                            <label>Money</label>
                            <input 
                            type="number" 
                            className="border border-slate-900 h-10 w-96 outline-none pl-5" 
                            value={amount} 
                            onChange={(event) => setAmount(event.target.value)} 
                            />
                        </div>
                        
                        <div className="flex justify-center items-center gap-5 text-center">
                            <div className="inline-block">
                                <label>
                                    <input 
                                    checked={type === "credit"} 
                                    type="radio"
                                    onChange={() => setType("credit")}
                                    />
                                    credit
                                </label>
                            </div>

                            <div className="inline-block">
                                <label>
                                    <input 
                                    type="radio" 
                                    checked={type === "debit"}
                                    onChange={() => setType("debit")}
                                    />
                                    debit
                                </label>
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-center">
                            <button disabled={loading} className="flex items-center justify-center border w-60 border-slate-900 h-10" type="submit">
                                {loading ? <div className="border-2 w-9 h-9 rounded-full border-l-blue-500 animate-spin"></div> : "Submit"}
                            </button>
                        </div>
                        
                    </div>
                    <div></div>
                </form>
            </div>
        </div>
    );
}

export default AddExpense