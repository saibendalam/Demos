import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowUp, Rows3 } from "lucide-react";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
];
const barData = [
  {
    name: "Mon",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Tue",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Wed",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Thu",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Fri",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Sat",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sun",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const COLORS = ["red", "green", "#FFBB28", "#FF8042"];
function Dashboard() {
  const [active, setActive] = useState("all");

  return (
    <div className="h-full w-full ">
      <div className="flex justify-between text-xl ">
        <div className="font-bold">
          Hey Chris, 494 rules have failed and required your attention
        </div>
        <div>
          <ul className="flex gap-4">
            <li
              className={`${
                active == "all" ? "underline  underline-offset-8" : " "
              } gap-2 flex flex-col cursor-pointer `}
              onClick={() => {
                setActive("all");
              }}
            >
              All
            </li>
            <li
              className={`${
                active == "7days" ? "underline  underline-offset-8" : ""
              } gap-2 flex flex-col cursor-pointer `}
              onClick={() => {
                setActive("7days");
              }}
            >
              last 7 days
            </li>
            <li
              className={`${
                active == "30days" ? "underline underline-offset-8" : "  "
              } gap-2 flex flex-col cursor-pointer`}
              onClick={() => {
                setActive("30days");
              }}
            >
              last 30 days
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 h-[90%] gap-5 mt-4 w-full sm:grid-cols-4">
        <Card className="shadow-md flex  items-center justify-between flex-col ">
          <CardHeader className="w-full">
            <CardTitle>Rules</CardTitle>
          </CardHeader>
          <CardContent className="w-full">
            <p className="font-bold relative text-3xl text-center w-full">
              220
              <sup className="text-green-400 text-2xl absolute">↑ 20</sup>
            </p>
            <p className="text-center">Total Rules</p>
          </CardContent>
          <CardFooter className="border-t-2 flex items-center justify-center p-0 w-full h-1/3 ">
            <div className="flex-1 flex flex-col items-center justify-center border-r-2 h-full">
              <p className="font-bold text-green-400">100</p>
              <p>Active</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center border-r-2 h-full">
              <p className="font-bold text-red-600">100</p>
              <p>Inactive</p>
            </div>
          </CardFooter>
        </Card>
        <Card className="shadow-md flex  items-center justify-between flex-col ">
          <CardHeader className="w-full">
            <CardTitle>Overall Usage</CardTitle>
          </CardHeader>
          <CardContent className="w-full">
            <p className="font-bold relative text-3xl text-center w-full">
              530
              <sup className="text-green-400 text-2xl absolute">↑ 2%</sup>
            </p>
            <p className="text-center">Rule Execution</p>
          </CardContent>
          <CardFooter className="border-t-2 flex items-center justify-center p-0 w-full h-1/3 ">
            <div className="flex-1 flex flex-col items-center justify-center border-r-2 h-full">
              <p className="font-bold text-green-400">4150</p>
              <p>Successful</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center border-r-2 h-full">
              <p className="font-bold text-red-600">115</p>
              <p>Failed</p>
            </div>
          </CardFooter>
        </Card>

        <Card className="shadow-md col-span-2 w-full flex items-center justify-center">
          <CardHeader className="h-full flex py-4 items-center justify-around w-[33%]">
            <CardTitle className="flex text-left items-start w-full">
              Cost
            </CardTitle>
            <CardDescription className="flex flex-col w-full ">
              <p className="font-bold text-black relative text-3xl text-center w-full">
                5%
              </p>
              <p className="text-center">Budget Utilization ↑ 2%</p>
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0  w-[33%]">
            <PieChart
              width={400}
              height={200}
              className="flex items-center justify-center"
            >
              <text
                x={125}
                y={90}
                textAnchor="middle"
                dominantBaseline="middle"
              >
                Budget
              </text>
              <text
                x={125}
                y={120}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-bold"
              >
                $5000
              </text>
              <Pie
                data={data}
                cx={120}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </CardContent>
          <CardFooter className="w-[33%] h-full flex-col items-center justify-center border-l-2">
            <div className="p-5 flex flex-1 w-full items-center justify-start gap-2">
              <Separator
                className="h-[60%] w-1 bg-red-500"
                orientation="vertical"
              />
              <div className="font-bold text-black">
                {" "}
                $ 250 <p className="font-normal text-gray-400"> Spent</p>
              </div>
            </div>
            <Separator className=" w-[84%] h-1" />
            <div className=" p-5 flex w-full flex-1 items-center justify-start gap-2">
              <Separator
                className="h-[60%] w-1 bg-green-500"
                orientation="vertical"
              />
              <div className="font-bold text-black">
                $ 3000 <p className="font-normal text-gray-400"> Remaining</p>
              </div>
            </div>
          </CardFooter>
        </Card>

        <Card className="shadow-md col-span-2 flex items-start flex-col h-full w-full p-0 justify-start row-span-5">
          <CardHeader className="w-full flex flex-row items-center justify-between">
            <CardTitle>Usage Trends</CardTitle>
            <CardDescription className="flex gap-4">
              <div className="flex  items-center justify-center gap-1">
                <span className="text-green-500 self-center  text-center">
                  ●{" "}
                </span>
                Successful
              </div>
              <div className="flex  items-center justify-center gap-1">
                <span className="text-red-500 self-center  text-center">
                  ●{" "}
                </span>
                Failed
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={barData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis axisLine={false} tickLine={false} dataKey="name" />
                <YAxis  axisLine={false}  tickLine={false}/>
                <Tooltip />
                <Bar
                  dataKey="pv"
                  fill="green"
                  barSize={10}
                  radius={[10, 10, 0, 0]}
                />
                <Bar
                  dataKey="uv"
                  
                  fill="red"
                  barSize={10}
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="shadow-md col-span-2 flex items-start flex-col h-full w-full p-0 justify-start row-span-5">
          <CardHeader className="w-full flex flex-row items-center justify-between">
            <CardTitle>Usage Trends</CardTitle>
            <CardDescription className="flex gap-4">
              <div className="flex  items-center justify-center gap-1">
                <span className="text-green-500 self-center  text-center">
                  ●{" "}
                </span>
                Successful
              </div>
              <div className="flex  items-center justify-center gap-1">
                <span className="text-red-500 self-center  text-center">
                  ●{" "}
                </span>
                Failed
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                layout={"vertical"}
                data={barData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis  axisLine={false}
                  tickLine={false} dataKey="name" />
                <YAxis
                  dataKey="uv"
                  type={"category"}
                  axisLine={false}
                  tickLine={false}
                  
                />
                <Tooltip />
                <Bar
                  dataKey="pv"
                  fill="green"
                  barSize={10}
                  radius={[10, 10, 0, 0]}
                />
                <Bar
                  dataKey="uv"
                  fill="red"
                  barSize={10}
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
