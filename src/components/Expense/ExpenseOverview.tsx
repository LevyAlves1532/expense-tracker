import { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";

import CustomLineChart from "../charts/CustomLineChart";

import { useLanguage } from "../../hooks/useLanguage";

import { prepareExpenseLineChartData } from "../../utils/helper";

import { ChartDataTypes, TransactionsTypes } from "../../types";

const ExpenseOverview = ({ transactions, onExpenseIncome }: { transactions: TransactionsTypes[], onExpenseIncome: () => void }) => {
  const { t } = useLanguage();

  const [ chartData, setChartData ] = useState<ChartDataTypes[]>([]);

  useEffect(() => {
    const result = prepareExpenseLineChartData(transactions);
    setChartData(result);

    return () => {};
  }, [transactions])

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div className="">
          <h5 className="text-lg">
            {t('dashboard.expense.graphic.title')}
          </h5>

          <p className="text-xs text-gray-400 mt-0.5">
            {t('dashboard.expense.graphic.subtitle')}
          </p>
        </div>

        <button className="add-btn" onClick={onExpenseIncome}>
          <LuPlus className="text-lg" />
          {t('dashboard.expense.graphic.button')}
        </button>
      </div>

      <div className="mt-10">
        <CustomLineChart 
          data={chartData}
        />
      </div>
    </div>
  );
}

export default ExpenseOverview;
