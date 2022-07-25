import { Bars } from "../svg/svg";

const defData = {
  d1: {
    data: [20, 60, 20, -40, -35, 30, 50],
    color: "#FBCF71",
    labelLine: "Clicks",
    labelDonut: "Total Views     200",
  },
  d2: {
    data: [-30, 25, 55, 15, -40, -30, 20],
    color: "#1F7BB6",
    labelLine: "Page View",
    labelDonut: "Total Clicks       65",
  },
  d3: {
    data: [40, 55, 0, -44, -20, 40, 55],
    color: "#01AAAA",
    labelLine: "Sign ups",
    labelDonut: "SignUps           22",
  },
};

const usersData = [
  {
    id: 1007,
    name: "Simona",
    profit: 55,
    view: <Bars width="10px" height="10px" fill="#636363" />,
  },
  {
    id: 1008,
    name: "Ariana",
    profit: 45,
    view: <Bars width="10px" height="10px" fill="#636363" />,
  },
  {
    id: 1009,
    name: "Adam",
    profit: 35,
    view: <Bars width="10px" height="10px" fill="#636363" />,
  },
  {
    id: 1010,
    name: "John",
    profit: 25,
    view: <Bars width="10px" height="10px" fill="#636363" />,
  },
  {
    id: 1011,
    name: "Garry",
    profit: 15,
    view: <Bars width="10px" height="10px" fill="#636363" />,
  },
];
export { defData, usersData };
