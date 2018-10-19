//matrial-ui/icons drawer
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import BubbleChart from "@material-ui/icons/BubbleChart";
//components/views
import UserData from "../components/userData/UserData.jsx";
import MainDashboard from "../components/dashboard/Dashboard";
import BloodPressure from "../components/bloodPressure/BloodPressure.jsx";
import Carbs from "../components/carbsIntake/Carbs.jsx";
import SugarSub from "../components/sugarIntake/SugarSub.jsx";
//import Logout from "../components/login/Logout.jsx"; //missing logout button in drawer

const dashboardRoutes = [
  {
    path: "/",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: MainDashboard
  },
  {
    path: "/userData",
    sidebarName: "User Profile",
    navbarName: "User Profile",
    icon: Person,
    component: UserData
  },
  {
    path: "/bloodPressure",
    sidebarName: "Blood Pressure",
    navbarName: "BloodPressure",
    icon: BubbleChart,
    component: BloodPressure
  },
  {
    path: "/carbsList",
    sidebarName: "Carbs Readings",
    navbarName: "Carbs Readigs",
    icon: BubbleChart,
    component: Carbs
  },
  {
    path: "/submitLevel",
    sidebarName: "Sugar Level",
    navbarName: "Sugar Level",
    icon: BubbleChart,
    component: SugarSub
  },
  { redirect: true, path: "/", to: "/", navbarName: "Redirect" }
];

export default dashboardRoutes;
