import React from "react";
import "./SideBar.css";
import {
  Arrow,
  ChartArea,
  ClocK,
  Eye,
  Heart,
  Key,
  Microphone,
  Settings,
  Speedometer,
  User,
} from "./../../svg/svg";

function SideBar() {
  return (
    <div className="sidebarWrapper">
      <h1>b</h1>
      <Speedometer />
      <Key />
      <User />
      <Microphone />
      <ChartArea />
      <Arrow />
      <Settings />
      <Heart />
      <ClocK />
      <Eye />
      <p>#171717</p>
    </div>
  );
}

export default SideBar;
