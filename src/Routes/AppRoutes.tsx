import { Layout } from "../components/Layout/Layout";
import { Main } from "../pages/Main";
import { Basket } from "../pages/Basket";
import { createBrowserRouter } from "react-router-dom";

import { Favorites } from "../pages/Favorites";
import { Contacts } from "../pages/Contacts";
import { Service } from "../pages/Service";
import { PageNotFound } from "../pages/PageNotFound";
import { Pay } from "../pages/Pay";
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
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

// export const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Main />} />
//         <Route path="basket" element={<Basket />} />
//         <Route path="favorites" element={<Favorites />} />
//         <Route path="contacts" element={<Contacts />} />
//         <Route path="service" element={<Service />} />
//         <Route path="pay" element={<Pay />} />
//         <Route path="*" element={<PageNotFound />} />
//       </Route>
//     </Routes>
//   )
// );
