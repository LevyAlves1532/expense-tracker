import moment from "moment";
import { LuDownload } from "react-icons/lu";

import TransactionInfoCard from "../Cards/TransactionInfoCard";

import { TransactionsTypes } from "../../types";

export type Props = {
  transactions: TransactionsTypes[];
  onDelete: (id: number) => void;
  onDownload: () => void;
}

const ExpenseList = ({ transactions, onDelete, onDownload }: Props) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">
          All Expenses
        </h5>

        <button className="card-btn" onClick={onDownload}>
          <LuDownload className="text-base" />
          Download
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {transactions?.map((expense) => (
          <TransactionInfoCard 
            key={`expense_${expense.id}`}
            title={expense.category || ''}
            icon={expense.icon}
            date={moment(expense.date).format("Do MMM YYYY")}
            amount={expense.amount}
            type="expense"
            onDelete={() => onDelete(expense.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;
