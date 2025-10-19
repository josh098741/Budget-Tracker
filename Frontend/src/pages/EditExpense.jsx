import React,{useState,useEffect} from 'react'
import axios from 'axios'

function EditExpense(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    const [type, setType] = useState("credit")
    const [loading, setLoaading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {}
    },[])

    const handleSubmit = async () => {}

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

export default EditExpense