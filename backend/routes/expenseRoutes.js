import express from 'express'

const router = express.Router();

import { addExpense,getExpenses,deleteExpense } from '../controller/expenseController.js'

router.post("/",addExpense)
router.get("/",getExpenses)
router.delete("/:id",deleteExpense)

export default router