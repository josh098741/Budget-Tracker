


function Home(){

    return(
        <div className="border h-[700px] border-slate-900">
            <div className="m-5 h-[610px] p-1">
                <div className="flex h-1/2">
                    <div className="border border-slate-500 mr-1 w-1/2">
                        <div>Graph Container</div>
                    </div>
                    <div className="border border-slate-500 w-1/2">
                        <div>Expense Calculator</div>
                    </div>
                </div>
                <div className="h-1/2 border my-1 border-slate-500">
                    <div>Transactions</div>
                </div>
            </div>
        </div>
    );
}

export default Home