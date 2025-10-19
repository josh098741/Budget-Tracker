import React,{useState} from 'react'
import toast from 'react-hot-toast'

function AddExpense(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    const [type, setType] = useState("credit")

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!title || !description || !amount){
            toast.error("All Fields Must Be Filled")
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
                            className="border border-slate-900"
                            value={title} 
                            onChange={(event) => setTitle(event.target.value)}
                            />
                        </div>
                        
                        <div className="flex flex-col">
                            <label>Description</label>
                            <textarea 
                            className="border border-slate-900"
                            value={description} 
                            onChange={(event) => setDescription(event.target.value)}
                            />
                        </div>
                        
                        <div className="flex flex-col">
                            <label>Money</label>
                            <input 
                            type="number" 
                            className="border border-slate-900 h-10 w-96 outline-none" 
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
                            <button className="border w-32 h-10" type="submit">Submit</button>
                        </div>
                        
                    </div>
                    <div></div>
                </form>
            </div>
        </div>
    );
}

export default AddExpense