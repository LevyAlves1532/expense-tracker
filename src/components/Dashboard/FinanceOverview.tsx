import CustomPieChart from "../charts/CustomPieChart";

import { ResumTransactionTypes } from "../../types";
import { useLanguage } from "../../hooks/useLanguage";

const COLORS = ['#ffb851', '#FA2C37', '#FF6900'];

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }: { totalBalance: number,  totalIncome: number, totalExpense: number }) => {
  const { t, convertMoney } = useLanguage();

  const balanceData: ResumTransactionTypes[] = [
    {name: t('dashboard.home.cards.balance'), amount: totalBalance},
    {name: t('dashboard.home.cards.income'), amount: totalExpense},
    {name: t('dashboard.home.cards.expense'), amount: totalIncome},
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">{t('dashboard.home.transactions.graphic')}</h5>
      </div>

      <CustomPieChart 
        data={balanceData}
        label="Total Balance"
        totalAmount={convertMoney(totalBalance)}
        colors={COLORS}
        showTextAnchor
      />
    </div>
  );
}

export default FinanceOverview;
