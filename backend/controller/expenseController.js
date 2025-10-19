import Expense from "../models/Expense.js"


export const addExpense = async (req,res) => {
    try{
        const {title, description, amount, type} = req.body

        if(!title || !description || !amount || !type){
            return res.status(400).json({ message: "All The fields must be filled" })
        }

        const newExpense = new Expense({title, description, amount, type})

        await newExpense.save()
        res.status(201).json(newExpense)

    }catch(error){
        res.status(500).json({ message: "Internal Server Error in add Expense" })
    }
}

export const getExpenses = async (req,res) => {
    try{
        const expense = await Expense.find().sort({ createdAt: -1 })

        if(!expense){
            return res.status(404).json({ message: "No Expense was found" })
        }
        
        res.status(200).json(expense)
    }catch(error){
        res.status(500).json({message: "Internal in Server Error getExpenses"})
    }
}

export const deleteExpense = async (req,res) => {
    try{
        const { id } = req.params

        const deletedExpense = await Expense.findByIdAndDelete(id)

        if(!deletedExpense){
            return res.status(404).json({ message: "Expense Not found" })
        }

        res.status(200).json({ message: "Expense deleted Successfully" })
    }catch(error){
        res.status(500).json({ message: "Internal Server Error in Delete Expenses" })
    }
} 