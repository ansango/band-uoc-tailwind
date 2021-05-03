import React from "react";

export default [
  {
    name: "home",
    path: "/",
    component: React.lazy(() => import("./Home")),
  },
  {
    name: "tour",
    path: "/tour",
    component: React.lazy(() => import("./Tour")),
  },
  {
    name: "band",
    path: "/band",
    component: React.lazy(() => import("./Band")),
  },
];
