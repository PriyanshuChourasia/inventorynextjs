import { IExpenseByCategorySummary } from "./ExpenseByCategorySummary";
import { IExpenseSummary } from "./ExpenseSummary";
import { IProduct } from "./Product";
import { IPurchaseSummary } from "./PurchaseSummary";
import { ISalesSummary } from "./SalesSummary";

export interface IDashboardMetrics{
    popularProducts: IProduct[];
    salesSummary: ISalesSummary[];
    purchaseSummary: IPurchaseSummary[];
    expenseSummary: IExpenseSummary[];
    expenseByCategorySummary: IExpenseByCategorySummary[];
}