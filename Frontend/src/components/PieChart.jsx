import React from 'react'
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts'

function PieChartComponent({ expense, className = '' }){

    const chartData = [
        {
            name: "Credit",
            value: expense
                .filter((item) => item.type === "credit")
                .reduce((acc,curr) => acc + Number(curr.amount), 0)
        },
        {
            name: "Debit",
            value: expense
                .filter((item) => item.type === "debit")
                .reduce((acc,curr) => acc + Number(curr.amount), 0)
        }
    ]

    const COLORS = ["#4CAF50","#F44336"]

    return(
        <div className={`w-full h-full ${className}`}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={'80%'}
                    label
                    >
                        {
                            chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index]} />
                            ))
                        }
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PieChartComponent