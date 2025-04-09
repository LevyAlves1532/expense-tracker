import { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";

import CustomBarChart from "../charts/CustomBarChart";

import { useLanguage } from "../../hooks/useLanguage";

import { prepareIncomeBarChartData } from "../../utils/helper";

import { ChartDataTypes, TransactionsTypes } from "../../types";

const IncomeOverview = ({ transactions, onAddIncome }: { transactions: TransactionsTypes[], onAddIncome: ()=> void }) => {
  const { t } = useLanguage();

  const [ chartData, setChartData ] = useState<ChartDataTypes[]>([]);

  useEffect(() => {
    const result = prepareIncomeBarChartData(transactions);
    setChartData(result);

    return () => {};
  }, [transactions])

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div className="">
          <h5 className="text-lg">
            {t('dashboard.income.graphic.title')}
          </h5>
          <p className="text-xs text-gray-400mt-0.5">
            {t('dashboard.income.graphic.subtitle')}
          </p>
        </div>

        <button className="add-btn" onClick={onAddIncome}>
          <LuPlus className="text-lg" />
          {t('dashboard.income.graphic.button')}
        </button>
      </div>
      
      <div className="mt-10">
        <CustomBarChart data={chartData} />
      </div>
    </div>
  );
}

export default IncomeOverview;
