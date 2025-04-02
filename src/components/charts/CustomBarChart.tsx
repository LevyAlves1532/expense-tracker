import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';

import { ResumTransactionExpenseTypes } from '../../types';

const CustomBarChart = ({ data }: { data: ResumTransactionExpenseTypes[] }) => {
  // Function to alternative colors
  const getBarColor = (index: number): string => {
    return index % 2 === 0 ? '#875cf5' : '#cfbefb';
  }

  const CustomTooltip = ({ active, payload }: { active: boolean, payload: any[] }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
          <p className="text-xs font-semibold text-purple-800 mb-1">
            {payload[0].payload.category}
          </p>
          <p className="text-sm text-gray-600">
            Amount: <span className="text-sm font-medium text-gray-900">${payload[0].payload.amount}</span>
          </p>
        </div>
      );
    }

    return null;
  }

  return (
    <div className="bg-white mt-6">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="none" />

          <XAxis 
            dataKey="month" 
            tick={{ 
              fontSize: 12, 
              fill: "#555",
            }} 
            stroke="none"
          />
          <YAxis 
            tick={{
              fontSize: 12,
              fill: '#555',
            }}
            stroke="none"
          />

          <Tooltip content={CustomTooltip as any} />

          <Bar 
            dataKey="amount"
            fill="#FF8042"
            radius={[10, 10, 0, 0]}
            // activeBar={{ r: 8, fill: 'yellow' }}
          >
            {data.map((entry, index) => (
              <Cell 
                key={index}
                fill={getBarColor(index)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomBarChart;
