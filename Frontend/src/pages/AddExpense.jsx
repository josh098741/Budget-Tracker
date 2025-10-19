


function AddExpense(){

    return(
        <div className="h-[700px] border border-slate-700">
            <div className="border flex flex-col items-center justify-center">
                <div>Expenses And Income</div>
                <form>
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <label>Title</label>
                            <input type="text" className="border border-slate-900"/>
                        </div>
                        
                        <div className="flex flex-col">
                            <label>Description</label>
                            <textarea className="border border-slate-900" />
                        </div>
                        
                        <div className="flex flex-col">
                            <label>Money</label>
                            <input type="number" className="border border-slate-900 h-10 w-96 outline-none" />
                        </div>
                        
                        <div className="flex justify-center items-center gap-5 text-center">
                            <div className="inline-block">
                                <label>
                                    <input type="radio"/>
                                    credit
                                </label>
                            </div>

                            <div className="inline-block">
                                <label>
                                    <input type="radio" />
                                    debit
                                </label>
                            </div>
                        </div>
                        
                        
                        
                        
                    </div>
                    <div></div>
                </form>
            </div>
        </div>
    );
}

export default AddExpense