import { useState } from "react";

import Input from "../Inputs/Input";
import EmojiPickerPopup from "../EmojiPickerPopup";

import { useLanguage } from "../../hooks/useLanguage";

export type IncomeTypes = {
  source: string;
  amount: number;
  date: string;
  icon: string;
};

const AddIncomeForm = ({ onAddIncome }: { onAddIncome: (income: any) => void }) => {
  const { t } = useLanguage();

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
        label={t('dashboard.income.graphic.form.source.label')}
        placeholder={t('dashboard.income.graphic.form.source.placeholder')}
        type="text"
      />

      <Input 
        value={`${income.amount}`}
        onChange={({ target }) => handleChange('amount', parseFloat(target.value))}
        label={t('dashboard.income.graphic.form.amount')}
        placeholder=""
        type="number"
      />

      <Input 
        value={income.date}
        onChange={({ target }) => handleChange('date', target.value)}
        label={t('dashboard.income.graphic.form.date')}
        placeholder=""
        type="date"
      />

      <div className="flex justify-end mt-6">
        <button 
          type="button"
          className="add-btn add-btn-fill"
          onClick={() => onAddIncome(income)}
        >
          {t('dashboard.income.graphic.form.button')}
        </button>
      </div>
    </div>
  );
}

export default AddIncomeForm;
