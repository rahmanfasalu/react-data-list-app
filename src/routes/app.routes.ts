import Home from "../screens/Home";

import RouteType from "../interfaces/route.type";
import CarDetails from "../screens/CarDetails";
export const appRoutes: RouteType[] = [
  { path: "/", exact: true, component: Home },
  { path: "/cars", exact: true, component: Home },
  { path: "/cars/:id", exact: false, component: CarDetails },
];

export default appRoutes;
