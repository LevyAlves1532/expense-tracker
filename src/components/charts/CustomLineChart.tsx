import { XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Area, AreaChart } from "recharts";

import { useLanguage } from "../../hooks/useLanguage";

import { ChartDataTypes } from "../../types";

const CustomLineChart = ({ data }: { data: ChartDataTypes[] }) => {
  const { t, convertMoney } = useLanguage();

  const CustomTooltip = ({ active, payload }: { active: boolean, payload: any[] }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
          <p className="text-xs font-semibold text-amber-800 mb-1">
            {payload[0].payload.category}
          </p>

          <p className="text-sm text-gray-600">
            {t('dashboard.expense.graphic.amount')}: <span className="text-sm font-medium text-gray-900">{convertMoney(payload[0].payload.amount)}</span>
          </p>
        </div>
      );
    }

    return null;
  }

  return (
    <div className="bg-white">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffb851" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#ffb851" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="none" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#555' }} stroke="none" />
          <YAxis tick={{ fontSize: 12, fill: '#555' }} stroke="none" />
          <Tooltip content={CustomTooltip as any} />

          <Area type="monotone" dataKey="amount" stroke="#ffb851" fill="url(#incomeGradient)" strokeWidth={3} dot={{ r: 3, fill: '#ab8df8' }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomLineChart;
