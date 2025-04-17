import { Layout } from "../components/Layout/Layout";
import { Main } from "../pages/Main";
import { Basket } from "../pages/Basket";
import { createBrowserRouter } from "react-router-dom";

import { Favorites } from "../pages/Favorites";
import { Contacts } from "../pages/Contacts";
import { Service } from "../pages/Service";
import { PageNotFound } from "../pages/PageNotFound";
import { Pay } from "../pages/Pay";
import { Success } from "../pages/Success";
import { FormOfPayment } from "../components/FormOfPayment/FormOfPayment";
import { formDataAction } from "../utils/payAction";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
      { path: "basket", element: <Basket /> },
      { path: "favorites", element: <Favorites /> },
      { path: "contacts", element: <Contacts /> },
      { path: "service", element: <Service /> },
      {
        path: "pay",
        element: <Pay />,
        action: formDataAction,
        children: [{ path: "formOfPayment", element: <FormOfPayment /> }],
      },
      { path: "success", element: <Success /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

