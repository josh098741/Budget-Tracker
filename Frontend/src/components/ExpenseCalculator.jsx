


function ExpenseCalculator({ expense }){

    const totalDebit = expense
        .filter((item) => item.type === "debit")
        .reduce((accumulator,current) => accumulator + Number(current.amount), 0)

    const totalCredit = expense.filter((item) => item.type === "credit")
        .reduce((accumulator, current) => accumulator + Number(current.amount), 0)
    return(
        <div className={`w-full h-full`}>
            <div className="text-center text-xl">Expenses</div>
            <div className="flex justify-between mx-10 my-5">
                <div className="flex flex-col justify-between">
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
                        <h1>Totals</h1>
                        <div>{totalCredit}</div>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
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
                    <div>
                        <div>
                            <h1>Totals</h1>
                            <div>{totalDebit}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1>Total Balance Left In My Account</h1>
                <div>Total Amount - {totalCredit - totalDebit}</div>
            </div>
        </div>
    )
}

export default ExpenseCalculator