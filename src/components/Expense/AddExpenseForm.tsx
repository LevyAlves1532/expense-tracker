import { useState } from "react";

import EmojiPickerPopup from "../EmojiPickerPopup";
import Input from "../Inputs/Input";

export type ExpenseTypes = {
  category: string;
  amount: number;
  date: string;
  icon: string;
};

const AddExpenseForm = ({ onAddExpense }: { onAddExpense: (expense: ExpenseTypes) => void }) => {
  const [ expense, setExpense ] = useState<ExpenseTypes>({
    category: '',
    amount: 0,
    date: '',
    icon: '',
  });

  const handleChange = (key: string, value: any) => setExpense({ ...expense, [key]: value });

  return (
    <div>
      <EmojiPickerPopup 
        icon={expense.icon}
        onSelect={(selectedIcon) => handleChange('icon', selectedIcon)}
      />

      <Input 
        value={expense.category}
        onChange={({ target }) => handleChange('category', target.value)}
        label="Category"
        placeholder="Rent, Groceries, etc"
        type="text"
      />

      <Input 
        value={`${expense.amount}`}
        onChange={({ target }) => handleChange('amount', target.value)}
        label="Amount"
        placeholder=""
        type="number"
      />

      <Input 
        value={expense.date}
        onChange={({ target }) => handleChange('date', target.value)}
        label="Date"
        placeholder=""
        type="date"
      />

      <div className="flex justify-end mt-6">
        <button 
          type="button" 
          className="add-btn add-btn-fill"
          onClick={() => onAddExpense(expense)}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
}

export default AddExpenseForm;
