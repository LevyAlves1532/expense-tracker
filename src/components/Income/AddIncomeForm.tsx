import { useState } from "react";

import Input from "../Inputs/Input";
import EmojiPickerPopup from "../EmojiPickerPopup";

export type IncomeTypes = {
  source: string;
  amount: number;
  date: string;
  icon: string;
};

const AddIncomeForm = ({ onAddIncome }: { onAddIncome: (income: any) => void }) => {
  const  [ income, setIncome ] = useState<IncomeTypes>({
    source: '',
    amount: 0,
    date: '',
    icon: '', 
  });

  const handleChange = (key: string, value: any) => setIncome({ ...income, [key]: value });

  return (
    <div>
      <EmojiPickerPopup
        icon={income.icon}
        onSelect={(selectedIcon) => handleChange('icon', selectedIcon)}
      />

      <Input 
        value={income.source}
        onChange={({ target }) => handleChange('source', target.value)}
        label="Income Source"
        placeholder="Freelance, Salary, etc."
        type="text"
      />

      <Input 
        value={`${income.amount}`}
        onChange={({ target }) => handleChange('amount', parseFloat(target.value))}
        label="Income Amount"
        placeholder=""
        type="number"
      />

      <Input 
        value={income.date}
        onChange={({ target }) => handleChange('amount', target.value)}
        label="Date"
        placeholder=""
        type="date"
      />

      <div className="flex justify-end mt-6">
        <button 
          type="button"
          className="add-btn add-btn-fill"
          onClick={() => onAddIncome(income)}
        >
          Add Income
        </button>
      </div>
    </div>
  );
}

export default AddIncomeForm;
