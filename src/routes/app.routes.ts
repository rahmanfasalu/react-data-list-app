import Home from "../screens/Home";

import RouteType from "../interfaces/route.type";
export const appRoutes: RouteType[] = [
  { path: "/", exact: true, component: Home },
  { path: "/home", exact: false, component: Home },
  { path: "/show/:id", exact: false, component: null },
];

export default appRoutes;
