import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdCard } from "react-icons/io";
import { LuHandCoins, LuWalletMinimal } from "react-icons/lu";

import InfoCard from "../../components/Cards/InfoCard";
import DashboardLayout from "../../components/layouts/DashboardLayout"

import { useUserAuth } from "../../hooks/useUserAuth";

import { API_PATHS } from "../../utils/apiPaths";
import axiosInstance from "../../utils/axiosInstance";
import { addThousandsSeparator } from "../../utils/helper";

type DashboardDataType = {
  total_income: number
  total_expense: number
  total_balance: number
  last_60_days_income_transactions: any[]
  income_last_60_days: number
  last_30_days_expense_transactions: any[]
  expense_last_30_days: number
  last_transactions: any[]
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
      </div>
    </DashboardLayout>
  )
}

export default Home
