import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { isAxiosError } from "axios";

import DashboardLayout from "../../components/layouts/DashboardLayout";

import { useUserAuth } from "../../hooks/useUserAuth";

import { API_PATHS } from "../../utils/apiPaths";
import axiosInstance from "../../utils/axiosInstance";

import { TransactionsTypes } from "../../types";

const Expense = () => {
  useUserAuth();

  const [ expenseData, setExpenseData ] = useState<TransactionsTypes[]>([]);
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ openAddExpenseModal, setOpenAddExpenseModal ] = useState<boolean>(false);
  const [ openDeleteAlert, setOpenDeleteAlert ] = useState<{ show: boolean, data: number | null }>({
    show: false,
    data: null,
  });

  // Get All Expense Details
  const fetchExpenseDetails = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await axiosInstance.get<TransactionsTypes[]>(API_PATHS.EXPENSE.GET_ALL_EXPENSE);

      if (response.data) {
        setExpenseData(response.data);
      }
    } catch (error) {
      console.log('Something went wrong. Please try again.', error);
    } finally {
      setLoading(false);
    }
  }

  // Handle Add Income
  const handleAddExpense = async (expense: any) => { 
    const { category, amount, date, icon } = expense;

    // Validation Checks
    if (!category.trim()) {
      toast.error('Category is required.');
      return;
    }

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error('Amount should be a valid number greater than 0.');
      return;
    }

    if (!date) {
      toast.error('Date is required.');
      return;
    }

    try {
      await axiosInstance.post(API_PATHS.EXPENSE.STORE_EXPENSE, {
        category,
        amount,
        date,
        icon,
      });

      setOpenAddExpenseModal(false);
      toast.success('Expense added successfully');
      fetchExpenseDetails();
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(
          'Error adding expense:',
          error.response?.data?.message || error.response?.data?.error || error.message
        );
      }
    }
  }

  useEffect(() => {
    fetchExpenseDetails();
  
    return () => {};
  }, [])

  return (
    <DashboardLayout activeMenu="Expense">
      <div className="my-5 mx-auto">
      </div>
    </DashboardLayout>
  )
}

export default Expense
