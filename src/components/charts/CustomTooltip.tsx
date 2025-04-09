import { useLanguage } from "../../hooks/useLanguage";

const CustomTooltip = ({ active, payload }: { active: boolean, payload: any[] }) => {
  const { t, convertMoney } = useLanguage();

  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
        <p className="text-xs font-semibold text-amber-800 mb-1">{payload[0].name}</p>
        <p className="text-sm text-gray-600">
          {t('dashboard.home.amount')}: <span className="text-sm font-medium text-gray-900">{convertMoney(payload[0].value)}</span>
        </p>
      </div>
    );
  }

  return null;
}

export default CustomTooltip;
