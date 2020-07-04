import Home from "../screens/Home";
import Landing from "../components/Landing";
import RouteType from "../interfaces/route.type";
import Dashboard from "../components/Dashboard";
import Play from "../components/Play";
import Catalog from "../components/Catalog/Catalog";
import Rewind from "../components/Rewind";

export const homeRoutes: RouteType[] = [
  { path: "/home", exact: true, component: Dashboard },
  { path: "/home/landing", exact: false, component: Landing },
  { path: "/home/play", exact: false, component: Play },
  { path: "/home/dashboard", exact: false, component: Dashboard },
  { path: "/home/catalog", exact: false, component: Catalog },
  { path: "/home/rewind", exact: false, component: Rewind },
];

export default homeRoutes;
