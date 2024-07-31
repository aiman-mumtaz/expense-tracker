import { dashboard, expense, income, transactions } from "./icons";

export const menuItems = [
    {
        id : 1,
        title : 'Dashboard',
        icon:dashboard,
        link:'/dashboard'
    },
    {
        id : 2,
        title : 'View Transactions',
        icon:transactions,
        link:'/dashboard'
    },
    {
        id : 3,
        title : 'Incomes',
        icon:income,
        link:'/dashboard'
    },
    {
        id : 4,
        title : 'Expenses',
        icon:expense,
        link:'/dashboard'
    }
]