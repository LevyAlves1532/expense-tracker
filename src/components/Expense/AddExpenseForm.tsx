import { useState } from "react";

import EmojiPickerPopup from "../EmojiPickerPopup";
import Input from "../Inputs/Input";

import { useLanguage } from "../../hooks/useLanguage";

export type ExpenseTypes = {
  category: string;
  amount: number;
  date: string;
  icon: string;
};

const AddExpenseForm = ({ onAddExpense }: { onAddExpense: (expense: ExpenseTypes) => void }) => {
  const { t } = useLanguage();

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
        label={t('dashboard.expense.graphic.form.category.label')}
        placeholder={t('dashboard.expense.graphic.form.category.placeholder')}
        type="text"
      />

      <Input 
        value={`${expense.amount}`}
        onChange={({ target }) => handleChange('amount', target.value)}
        label={t('dashboard.expense.graphic.form.amount')}
        placeholder=""
        type="number"
      />

      <Input 
        value={expense.date}
        onChange={({ target }) => handleChange('date', target.value)}
        label={t('dashboard.expense.graphic.form.date')}
        placeholder=""
        type="date"
      />

      <div className="flex justify-end mt-6">
        <button 
          type="button" 
          className="add-btn add-btn-fill"
          onClick={() => onAddExpense(expense)}
        >
          {t('dashboard.expense.graphic.form.button')}
        </button>
      </div>
    </div>
  );
}

export default AddExpenseForm;
