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

export const getExpenses = async (req,res) => {}

export const deleteExpense = async (req,res) => {} 