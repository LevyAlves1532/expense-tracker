import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdCard } from "react-icons/io";
import { LuHandCoins, LuWalletMinimal } from "react-icons/lu";

import InfoCard from "../../components/Cards/InfoCard";
import DashboardLayout from "../../components/layouts/DashboardLayout"
import RecentTransactions from "../../components/Dashboard/RecentTransactions";
import FinanceOverview from "../../components/Dashboard/FinanceOverview";
import ExpenseTransactions from "../../components/Dashboard/ExpenseTransactions";
import Last30DaysExpenses from "../../components/Dashboard/Last30DaysExpenses";
import RecentIncomeWithChart from "../../components/Dashboard/RecentIncomeWithChart";
import RecentIncome from "../../components/Dashboard/RecentIncome";

import { useUserAuth } from "../../hooks/useUserAuth";

import { API_PATHS } from "../../utils/apiPaths";
import axiosInstance from "../../utils/axiosInstance";
import { addThousandsSeparator } from "../../utils/helper";

import { DashboardLastDays, TransactionsTypes } from "../../types";

type DashboardDataType = {
  total_income: number;
  total_expense: number;
  total_balance: number;
  last_60_days_income: DashboardLastDays<TransactionsTypes>;
  last_30_days_expense: DashboardLastDays<TransactionsTypes>;
  last_transactions: TransactionsTypes[];
};

const Home = () => {
  useUserAuth();

  const navigate = useNavigate();

  const [ dashboardData, setDashboardData ] = useState<DashboardDataType | null>(null);
  const [ loading, setLoading ] = useState(false);

  const fetchDashboardData = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await axiosInstance.get<DashboardDataType>(API_PATHS.DASHBOARD.GET_DATA);

      if (response.data) {
        setDashboardData(response.data);
      }
    } catch (error) {
      console.log('Something went wrong. Please try again.', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
    return () => {};
  }, [])

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard 
            icon={<IoMdCard />}
            label="Total Balance"
            value={addThousandsSeparator(dashboardData?.total_balance)}
            color="bg-primary"
          />
          <InfoCard 
            icon={<LuWalletMinimal />}
            label="Total Income"
            value={addThousandsSeparator(dashboardData?.total_income)}
            color="bg-orange-500"
          />
          <InfoCard 
            icon={<LuHandCoins />}
            label="Total Expense"
            value={addThousandsSeparator(dashboardData?.total_expense)}
            color="bg-red-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <RecentTransactions 
            transactions={dashboardData?.last_transactions}
            onSeeMore={() => navigate('/expense')}
          />

          <FinanceOverview 
            totalBalance={dashboardData?.total_balance || 0}
            totalIncome={dashboardData?.total_income || 0}
            totalExpense={dashboardData?.total_expense || 0}
          />

          <ExpenseTransactions
            transactions={dashboardData?.last_30_days_expense.transactions || []}
            onSeeMore={() => navigate('/expense')}
          />

          <Last30DaysExpenses 
            data={dashboardData?.last_30_days_expense.transactions || []}
          />

          <RecentIncomeWithChart 
            data={dashboardData?.last_60_days_income?.transactions?.slice(0, 4) || []}
            totalIncome={dashboardData?.total_income || 0}
          />

          <RecentIncome 
            transactions={dashboardData?.last_60_days_income?.transactions || []}
            onSeeMore={() => navigate('/income')}
          />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Home
