import Dashboard from "../Dashboard";
import DoughnutComp from "../DoughnutComp";
import Header from "../Header";
import LineComp from "../LineComp";
import ListUsers from "../ListUsers";
import MapComp from "../MapComp";
import SideBar from "../SideBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div>
        <Header />
        <Dashboard />
        <div className="chart-wrapper">
          <LineComp />
          <DoughnutComp />
          <MapComp />
        </div>
        <div className="listUsers-wrapper">
          <ListUsers>Top Affiliates</ListUsers>
          <ListUsers>Signups</ListUsers>
          <ListUsers>Pending Commissions</ListUsers>
        </div>
      </div>
    </div>
  );
}

export default App;
