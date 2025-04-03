import { TransactionsTypes } from "../../types";

export type Props = {
  transactions: TransactionsTypes[];
  onDelete: (id: number) => void;
  onDownload: () => void;
}

const ExpenseList = ({ transactions, onDelete, onDownload }: Props) => {
  return (
    <div>
      ExpenseList
    </div>
  );
}

export default ExpenseList;
