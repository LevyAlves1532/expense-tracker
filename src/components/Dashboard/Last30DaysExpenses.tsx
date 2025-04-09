import { useEffect, useState } from "react";

import { prepareExpenseBarChartData } from "../../utils/helper";
import CustomBarChart from "../charts/CustomBarChart";

import { useLanguage } from "../../hooks/useLanguage";

import { ResumTransactionExpenseTypes, TransactionsTypes } from "../../types";

const Last30DaysExpenses = ({ data }: { data: TransactionsTypes[] }) => {
  const { t } = useLanguage();

  const [ chartData, setChartData ] = useState<ResumTransactionExpenseTypes[]>([]);

  useEffect(() => {
    const result = prepareExpenseBarChartData(data);
    setChartData(result);

    return () => {};
  }, [data])

  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">{t('dashboard.home.expanses.graphic')}</h5>
      </div>

      <CustomBarChart 
        data={chartData}
      />
    </div>
  );
}

export default Last30DaysExpenses;
