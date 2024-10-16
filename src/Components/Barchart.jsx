import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Barchart = ({ books }) => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={books}>
          <XAxis dataKey="bookName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalPages" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;
