import { useTheme } from "@/components/theme-provider";
import { LayoutIcon, Rows3 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const { theme } = useTheme();
  const [active, setActive] = useState("dashboard");
  const navigate=useNavigate();
  useEffect(()=>{
    navigate("/dashboard")
  },[])
  return (
    <div className="h-10 w-full flex items-center justify-center gap-2 mb-2">
      <ul className="flex gap-4">
        <li
          className={
            `${active == "dashboard" ? "border-b-4 font-bold border-orange-300 cursor-pointer" : "cursor-pointer "} gap-2 flex flex-col"`
          }
          onClick={()=>{setActive("dashboard");navigate("/dashboard")}}
        >
          <LayoutIcon className="h-5 w-5"/>Dashboard
        </li>
        <li
          className={
            `${active == "ruleManagement" ? "border-b-4 font-bold border-red-500 cursor-pointer" : "cursor-pointer "} gap-2 flex flex-col"`
          }
          onClick={()=>{setActive("ruleManagement");navigate("/rulemanagement")}}
        >
          <Rows3 className="h-5 w-5"/> Rule Management
        </li>
      </ul>
    </div>
  );
}

export default Header;
