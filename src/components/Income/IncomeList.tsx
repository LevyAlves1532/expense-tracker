import moment from "moment";
import TransactionInfoCard from "../Cards/TransactionInfoCard";
import { LuDownload } from "react-icons/lu";

import { useLanguage } from "../../hooks/useLanguage";

import { TransactionsTypes } from "../../types";

export type Props = {
  transactions: TransactionsTypes[];
  onDelete: (id: number) => void;
  onDownload: () => void;
};

const IncomeList = ({ transactions, onDelete, onDownload }: Props) => {
  const { t } = useLanguage();

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">
          {t('dashboard.income.transactions.title')}
        </h5>

        <button 
          className="card-btn"
          onClick={onDownload}
        >
          <LuDownload className="text-base" />
          Download
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {transactions?.map((income) => (
          <TransactionInfoCard 
            key={`income_${income.id}`}
            title={income.source || ''}
            icon={income.icon}
            date={moment(income.date).format('Do MMM YYYY')}
            amount={income.amount}
            type="income"
            onDelete={() => onDelete(income.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default IncomeList;
