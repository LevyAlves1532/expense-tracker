import { useEffect, useState } from "react"
import { isAxiosError } from "axios";
import toast from "react-hot-toast";

import DashboardLayout from "../../components/layouts/DashboardLayout"
import IncomeOverview from "../../components/Income/IncomeOverview";
import Modal from "../../components/Modal";
import AddIncomeForm, { IncomeTypes } from "../../components/Income/AddIncomeForm";
import IncomeList from "../../components/Income/IncomeList";
import DeleteAlert from "../../components/DeleteAlert";

import { API_PATHS } from "../../utils/apiPaths";
import axiosInstance from "../../utils/axiosInstance";

import { useUserAuth } from "../../hooks/useUserAuth";
import { TransactionsTypes } from "../../types";

const Income = () => {
  useUserAuth();

  const [ incomeData, setIncomeData ] = useState<TransactionsTypes[]>([]);
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ openAddIncomeModal, setOpenAddIncomeModal ] = useState<boolean>(false);
  const [ openDeleteAlert, setOpenDeleteAlert ] = useState<{ show: boolean, data: number | null }>({
    show: false,
    data: null,
  });

  // Get All Income Details
  const fetchIncomeDetails = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await axiosInstance.get<TransactionsTypes[]>(API_PATHS.INCOME.GET_ALL_INCOME);

      if (response.data) {
        setIncomeData(response.data);
      }
    } catch (error) {
      console.log('Something went wrong. Please try again.', error);
    } finally {
      setLoading(false);
    }
  }

  // Handle Add Income
  const handleAddIncome = async (income: IncomeTypes) => { 
    const { source, amount, date, icon } = income;

    // Validation Checks
    if (!source.trim()) {
      toast.error('Source is required.');
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
      await axiosInstance.post(API_PATHS.INCOME.STORE_INCOME, {
        source,
        amount,
        date,
        icon,
      });

      setOpenAddIncomeModal(false);
      toast.success('Income added successfully');
      fetchIncomeDetails();
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(
          'Error adding income:',
          error.response?.data?.message || error.response?.data?.error || error.message
        );
      }
    }
  }

  // Delete Income
  const deleteIncome = async (id: number) => {
    try {
      await axiosInstance.delete(API_PATHS.INCOME.DELETE_INCOME(id));

      setOpenDeleteAlert({ show: false, data: null });
      toast.success('Income details deleted successfully');
      fetchIncomeDetails();
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(
          'Error adding income:',
          error.response?.data?.message || error.response?.data?.error || error.message
        );
      }
    }
  }

  // handle download income details
  const handleDownloadIncomeDetails = async () => {

  }

  useEffect(() => {
    fetchIncomeDetails();

    return () => {};
  }, [])

  return (
    <DashboardLayout activeMenu="Income">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div className="">
            <IncomeOverview 
              transactions={incomeData}
              onAddIncome={() => setOpenAddIncomeModal(true)}
            />
          </div>

          <IncomeList 
            transactions={incomeData}
            onDelete={(id) => {
              setOpenDeleteAlert({
                show: true,
                data: id,
              });
            }}
            onDownload={handleDownloadIncomeDetails}
          />
        </div>

        <Modal
          isOpen={openAddIncomeModal}
          onClose={() => setOpenAddIncomeModal(false)}
          title="Add Inome"
        >
          <AddIncomeForm 
            onAddIncome={handleAddIncome}
          />
        </Modal>

        <Modal
          isOpen={openDeleteAlert.show}
          onClose={() => setOpenDeleteAlert({ show: false, data: null })}
          title="Delete Income"
        >
          <DeleteAlert 
            content="Are you sure you want to delete this in income detail?"
            onDelete={() => deleteIncome(openDeleteAlert.data!)}
          />
        </Modal>
      </div>
    </DashboardLayout>
  )
}

export default Income
