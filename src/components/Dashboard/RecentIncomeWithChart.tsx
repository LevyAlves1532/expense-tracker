import { useEffect, useState } from "react";

import CustomPieChart from "../charts/CustomPieChart";

import { useLanguage } from "../../hooks/useLanguage";

import { ResumTransactionTypes, TransactionsTypes } from "../../types";

const COLORS = ['#ffb851', '#FA2C37', '#FF6900'];

const RecentIncomeWithChart = ({ data, totalIncome }: { data: TransactionsTypes[], totalIncome: number }) => {
  const { t } = useLanguage();

  const [ chartData, setChartData ] = useState<ResumTransactionTypes[]>([]);

  const prepareChartData = () => {
    const dataArr = data?.map((item): ResumTransactionTypes => ({
      name: item?.source || '',
      amount: item?.amount,
    }));

    setChartData(dataArr);
  }

  useEffect(() => {
    prepareChartData();

    return () => {};
  }, [data])

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">{t('dashboard.home.incomes.graphic')}</h5>
      </div>

      <CustomPieChart 
        data={chartData}
        label="Total Income"
        totalAmount={`$${totalIncome}`}
        showTextAnchor
        colors={COLORS}
      />
    </div>
  );
}

export default RecentIncomeWithChart;
