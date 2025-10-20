


function ExpenseCalculator({ expense }){

    return(
        <div className={`w-full h-full`}>
            <div className="text-center text-xl">Expenses</div>
            <div className="flex justify-between mx-10 my-5">
                <div>
                    <h1>Credit</h1>
                    {
                        expense && expense.length > 0 ? 
                        expense.map((item) => (
                            <div key={item._id}>{item.type === "credit" ? `${item.amount} KSH` : ""}</div>
                        ))
                        : <div>No Expense</div>
                    }
                </div>
                <div>
                    <h1>Debit</h1>
                    {
                        expense && expense.length > 0 ?
                        expense.map((item) => (
                            <div key={item._id}>{item.type === "debit" ? `${item.amount} KSH` : ""}</div>
                        ))
                        : <div>No expense</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ExpenseCalculator