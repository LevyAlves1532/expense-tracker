import { useEffect, useState } from "react"

import DashboardLayout from "../../components/layouts/DashboardLayout"
import IncomeOverview from "../../components/Income/IncomeOverview";

import { API_PATHS } from "../../utils/apiPaths";
import axiosInstance from "../../utils/axiosInstance";

import { TransactionsTypes } from "../../types";
import Modal from "../../components/Modal";

const Income = () => {
  const [ incomeData, setIncomeData ] = useState<TransactionsTypes[]>([]);
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ openAddIncomeModal, setOpenAddIncomeModal ] = useState<boolean>(false);
  const [ openDeleteAlert, setOpenDeleteAlert ] = useState<{ show: boolean, data: TransactionsTypes | null }>({
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
  const handleAddIncome = async (income: any) => {

  }

  // Delete Income
  const deleteIncome = async (id: number) => {

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
        </div>

        <Modal
          isOpen={openAddIncomeModal}
          onClose={() => setOpenAddIncomeModal(false)}
          title="Add Inome"
        >
          <div>Add Income Form</div>
        </Modal>
      </div>
    </DashboardLayout>
  )
}

export default Income
