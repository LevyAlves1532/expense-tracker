import moment from "moment";
import { LuArrowRight } from "react-icons/lu";

import TransactionInfoCard from "../Cards/TransactionInfoCard";

import { useLanguage } from "../../hooks/useLanguage";

import { TransactionsTypes } from "../../types";

const ExpenseTransactions = ({ transactions, onSeeMore }: { transactions: TransactionsTypes[], onSeeMore: () => void }) => {
  const { t } = useLanguage();

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">{t('dashboard.home.expanses.title')}</h5>
        <button className="card-btn" onClick={onSeeMore}>
        {t('dashboard.home.button')} <LuArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-6">
        {transactions?.slice(0, 5)?.map((expense) => (
          <TransactionInfoCard 
            key={`expense_${expense.id}`}
            title={expense.category || ''}
            icon={expense.icon}
            date={moment(expense.date).format('Do MMM YYYY')}
            amount={expense.amount}
            type="expense"
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  );
}

export default ExpenseTransactions;
