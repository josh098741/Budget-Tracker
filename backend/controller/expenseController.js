import Expense from "../models/Expense"


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
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export const getExpenses = async (req,res) => {
    try{
        const expense = (await Expense.find()).toSorted({ createdAt: -1 })
        res.status(200).json(expense)
    }catch(error){
        res.status(500).json({message: "Internal Server Error"})
    }
}

export const deleteExpense = async (req,res) => {
    try{
        const { id } = req.params
        await Expense.findByIdAndDelete(id)
        res.status(200).json({ message: "Expense deleted Successfully" })
    }catch(error){
        res.status(500).jsonn({ message: "Internal Server Error" })
    }
} 