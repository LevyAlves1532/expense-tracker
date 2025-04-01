import { useEffect, useState } from "react";
import { TransactionsTypes } from "../../types";
import { LuPlus } from "react-icons/lu";

import CustomBarChart from "../charts/CustomBarChart";

import { prepareIncomeBarChartData } from "../../utils/helper";

const IncomeOverview = ({ transactions, onAddIncome }: { transactions: TransactionsTypes[], onAddIncome: ()=> void }) => {
  const [ chartData, setChartData ] = useState<any[]>([]);

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
            Income Overview
          </h5>
          <p className="text-xs text-gray-400mt-0.5">
            Track your earnings over time and analyze your income trends.
          </p>
        </div>

        <button className="add-btn" onClick={onAddIncome}>
          <LuPlus className="text-lg" />
          Add Income
        </button>
      </div>
      
      <div className="mt-10">
        <CustomBarChart data={chartData} />
      </div>
    </div>
  );
}

export default IncomeOverview;
