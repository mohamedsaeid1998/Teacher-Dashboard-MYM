

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataPayment } from "../Store/Features/Reports/StatusPayment";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PaymentsChart = () => {
  // @ts-ignore
  const Payments = useSelector((state) => state.payments);

  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(getDataPayment());
  }, [dispatch]);
  return (
    <>
      {Payments.data.loading && <div>Loading.....</div>}
      {!Payments.data.loading && Payments.error ? (
        <div>Error: {Payments.data.error}</div>
      ) : null}
      {!Payments.loading && Payments.data.length ? (
        <ResponsiveContainer width="100%" height={320}>
          <BarChart
            width={100}
            height={300}
            data={Payments.data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              axisLine={{ stroke: "black" }}
              tick={{ fill: "black" }}
              label={{
                value: "شهر",
                angle: 360,
                position: "right",
                fill: "black",
              }}
            />
            <YAxis
              textAnchor="start"
              tick={{ fill: "black" }}
              axisLine={{ stroke: "black" }}
              label={{
                value: "طالب",
                angle: 360,
                position: "top",
                fill: "black",
                offset: 8,
              }}
            />

            <Legend iconType="circle" iconSize={8} />
            <Bar
              dataKey="Payment"
              stackId="a"
              fill="#1246AC"
              barSize={24}
              name=" تم الدفع"
            />
            <Bar
              dataKey="NotPayment"
              stackId="a"
              fill="#6CAEDE"
              barSize={10}
              name=" لم يتم الدفع"
            />
          </BarChart>
        </ResponsiveContainer>
      ) : null}
    </>
  );
};

export default PaymentsChart;
