import React from "react";

export default [
  {
    name: "home",
    path: "/",
    component: React.lazy(() => import("./Home")),
  },
  {
    name: "band",
    path: "/band",
    component: React.lazy(() => import("./Band")),
  },
  {
    name: "tour",
    path: "/tour",
    component: React.lazy(() => import("./Tour")),
  },
  {
    name: "404",
    path: "*",
    component: React.lazy(() => import("./NotFound")),
  },
];
