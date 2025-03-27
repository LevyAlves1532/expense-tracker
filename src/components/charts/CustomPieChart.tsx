import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import CustomTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';

export type Props = {
  data: any[];
  label: string;
  totalAmount: string;
  colors: string[];
  showTextAnchor?: boolean;
};

const CustomPieChart = ({ data, label, totalAmount, colors, showTextAnchor }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={380}>
      <PieChart>
        <Pie 
          data={data}
          dataKey='amount'
          nameKey='name'
          cx='50%'
          cy='50%'
          outerRadius={130}
          innerRadius={100}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell 
              fill={colors[index % colors.length]}
              key={`cell-${index}`}
            />
          ))}
        </Pie>
        <Tooltip content={CustomTooltip as any} />
        <Legend content={CustomLegend as any} />

        {showTextAnchor && (
          <>
            <text
              x='50%'
              y='50%'
              dy={-25}
              textAnchor='middle'
              fill='#666'
              fontSize={14}
            >
              {label}
            </text>
            <text
              x='50%'
              y='50%'
              dy={8}
              textAnchor='middle'
              fill='#333'
              fontSize={24}
              fontWeight='semi-bold'
            >
              {totalAmount}
            </text>
          </>
        )}
      </PieChart>
    </ResponsiveContainer>
  );
}

export default CustomPieChart;
