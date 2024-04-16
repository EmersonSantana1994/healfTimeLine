import React from "react";
import TelaLogin from './componentes/login/login'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
{
    path: "/",
    element: <TelaLogin/>,
},
])

