import { Home, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom';

function Header(){

    return(
        <div className="h-32 bg-gradient-to-br from-green-400">
            <div className="flex justify-between p-10">
                <div>
                    <h1 className="text-2xl">Expense Tracker</h1>
                </div>
                <div className="flex gap-10">
                    <Link to="/">
                        <button className="flex gap-3 items-center justify-center border rounded border-slate-900 w-36 h-11">
                            <span>Home</span>
                            <span className="w-5"><Home /></span>
                        </button>
                    </Link>
                    <Link to="/add-expense" >
                        <button className="flex gap-3 rounded items-center justify-center border border-slate-900 w-36 h-11">
                            <span>Add Expense</span>
                            <span><ArrowRight /></span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header