import moment from "moment";
import { LuArrowRight } from "react-icons/lu";

import TransactionInfoCard from "../Cards/TransactionInfoCard";

import { useLanguage } from "../../hooks/useLanguage";

import { TransactionsTypes } from "../../types";

const RecentIncome = ({ transactions, onSeeMore }: { transactions: TransactionsTypes[], onSeeMore: () => void }) => {
  const { t } = useLanguage();

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">
          {t('dashboard.home.incomes.title')}
        </h5>

        <button className="card-btn" onClick={onSeeMore}>
        {t('dashboard.home.button')} <LuArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-6">
        {transactions?.slice(0, 5)?.map((item, index) => (
          <TransactionInfoCard 
            key={`income_${index}`}
            title={item.source || ''}
            icon={item.icon}
            date={moment(item.date).format('Do MMM YYYY')}
            amount={item.amount}
            type="income"
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  );
}

export default RecentIncome;
