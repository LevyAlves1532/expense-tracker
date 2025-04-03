import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { isAxiosError } from "axios";

import DashboardLayout from "../../components/layouts/DashboardLayout";
import ExpenseOverview from "../../components/Expense/ExpenseOverview";
import AddExpenseForm, { ExpenseTypes } from "../../components/Expense/AddExpenseForm";
import ExpenseList from "../../components/Expense/ExpenseList";
import DeleteAlert from "../../components/DeleteAlert";
import Modal from "../../components/Modal";

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
  const handleAddExpense = async (expense: ExpenseTypes) => { 
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

   // Delete Income
   const deleteExpense = async (id: number) => {
    try {
      await axiosInstance.delete(API_PATHS.EXPENSE.DELETE_EXPENSE(id));

      setOpenDeleteAlert({ show: false, data: null });
      toast.success('Expense details deleted successfully');
      fetchExpenseDetails();
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(
          'Error adding Expense:',
          error.response?.data?.message || error.response?.data?.error || error.message
        );
      }
    }
  }

  // handle download expense details
  const handleDownloadExpenseDetails = () => {

  }

  useEffect(() => {
    fetchExpenseDetails();
  
    return () => {};
  }, [])

  return (
    <DashboardLayout activeMenu="Expense">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div className="">
            <ExpenseOverview 
              transactions={expenseData}
              onExpenseIncome={() => setOpenAddExpenseModal(true)}
            />
          </div>

          <ExpenseList 
            transactions={expenseData}
            onDelete={(id) => {
              setOpenDeleteAlert({
                show: true,
                data: id,
              });
            }}
            onDownload={handleDownloadExpenseDetails}
          />
        </div>

        <Modal
          isOpen={openAddExpenseModal}
          title="Add Expense"
          onClose={() => setOpenAddExpenseModal(false)}
        >
          <AddExpenseForm 
            onAddExpense={handleAddExpense}
          />
        </Modal>

        <Modal
          isOpen={openDeleteAlert.show}
          onClose={() => setOpenDeleteAlert({ show: false, data: null })}
          title="Delete Expense"
        >
          <DeleteAlert 
            content="Are you sure you want to delete this in expense detail?"
            onDelete={() => deleteExpense(openDeleteAlert.data!)}
          />
        </Modal>
      </div>
    </DashboardLayout>
  )
}

export default Expense
