
import { PieChart, Pie, Cell, Legend } from "recharts";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataProfit } from "../Store/Features/Reports/StatusProfit";

const COLORS = [
  "#AB5F22",
  "#0994AB",
  "#371AAB",
  "#AB9800",
  "#1246AC",
  "#6CAEDE",
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const TotalProfit = () => {
  // @ts-ignore
  const Profits = useSelector((state) => state.profits);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(getDataProfit());
  }, [dispatch]);
  return (
    <div className=" pie  flex items-center overflow-hidden">
      {Profits.data.loading && <div>Loading.....</div>}
      {!Profits.data.loading && Profits.error ? (
        <div>Error: {Profits.data.error}</div>
      ) : null}
      {!Profits.loading && Profits.data.length ? (
        <PieChart width={430} height={305} style={{ width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
          <Pie
            data={Profits.data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {Profits.data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend
            layout="vertical"
            verticalAlign="middle"
            align="left"
            iconType="circle"
            iconSize={6}
            // @ts-ignore
            boxWidth={5}
            wrapperStyle={{ left: "20px" }}
          />
        </PieChart>
      ) : null}
    </div>
  );
};

export default TotalProfit;
