import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";

const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Login = lazy(() => import("../pages/Login/Login"));

//------------product
const Products = lazy(() => import("../pages/Products/Products"));
const ProductDetails = lazy(() => import("../pages/Products/ProductDetails"));

//------------Service
const Services = lazy(() => import("../pages/Services/Services"));
const ServiceDetails = lazy(() =>
  import("../pages/ServiceDetails/ServiceDetails")
);

const OrderCheckout = lazy(() => import("../pages/Checkout/OrderCheckout"));
const RentCheckout = lazy(() => import("../pages/Checkout/RentCheckout"));

//-----------------------------------------------------------------------------------------------------
// Dashboard
//-----------------------------------------------------------------------------------------------------

import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard/Dashboard"));

//------------------------Service
const ServiceCategories = lazy(() =>
  import("../pages/Dashboard/Service/Categories/ServiceCategories")
);
const AddCategory = lazy(() =>
  import("../pages/Dashboard/Service/Categories/AddCategory")
);
const EditCategory = lazy(() =>
  import("../pages/Dashboard/Service/Categories/EditCategory")
);

const AllServices = lazy(() =>
  import("../pages/Dashboard/Service/Services/AllServices")
);
const AddService = lazy(() =>
  import("../pages/Dashboard/Service/Services/AddService")
);
const EditService = lazy(() =>
  import("../pages/Dashboard/Service/Services/EditService")
);

//-----------Category
const Categories = lazy(() =>
  import("../pages/Dashboard/Categories/Categories")
);
const AddCategories = lazy(() =>
  import("../pages/Dashboard/Categories/AddCategories")
);
const EditCategories = lazy(() =>
  import("../pages/Dashboard/Categories/EditCategories")
);

// Sub Category
const SubCategories = lazy(() =>
  import("../pages/Dashboard/SubCategories/SubCategories")
);
const AddSubCategories = lazy(() =>
  import("../pages/Dashboard/SubCategories/AddSubCategories")
);
const EditSubCategories = lazy(() =>
  import("../pages/Dashboard/SubCategories/EditSubCategories")
);

// Sub Sub Category
const SubSubCategories = lazy(() =>
  import("../pages/Dashboard/SubSubCategories/SubSubCategories")
);
const AddSubSubCategory = lazy(() =>
  import("../pages/Dashboard/SubSubCategories/AddSubSubCategory")
);
const EditSubSubCategory = lazy(() =>
  import("../pages/Dashboard/SubSubCategories/EditSubSubCategory")
);

//--------------Product
const ProductsList = lazy(() =>
  import("../pages/Dashboard/Product/ProductsList")
);
const AddProduct = lazy(() => import("../pages/Dashboard/Product/AddProduct"));
const EditProduct = lazy(() =>
  import("../pages/Dashboard/Product/EditProduct")
);

const About = lazy(() => import("../pages/Dashboard/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("../pages/Dashboard/ContactUs/ContactUs"));

// --------Admin
const Administrator = lazy(() =>
  import("../pages/Dashboard/Administrator/Administrator")
);
const AddAdministrator = lazy(() =>
  import("../pages/Dashboard/Administrator/AddAdministrator")
);

//---------------Front-End
const Logo = lazy(() => import("../pages/Dashboard/Logo/Logo"));
const Favicon = lazy(() => import("../pages/Dashboard/Favicon/Favicon"));
const Themes = lazy(() => import("../pages/Dashboard/Theme/Themes"));
//---------Banner
const Banners = lazy(() => import("../pages/Dashboard/Banner/Banner"));
const AddBanner = lazy(() => import("../pages/Dashboard/Banner/AddBanner"));

const HomeServices = lazy(() =>
  import("../pages/Dashboard/FrontEndSetting/Service/HomeServices")
);

//-------------Order
const Orders = lazy(() => import("../pages/Dashboard/Orders/Orders"));

const Rents = lazy(() => import("../pages/Dashboard/Rents/Rents"));

//----------------General
const Counter = lazy(() => import("../pages/Dashboard/Counter/Counter"));
const BusinessInfo = lazy(() =>
  import("../pages/Dashboard/GeneralSetting/BusinessInfo/BusinessInfo")
);
const OthersServices = lazy(() =>
  import("../pages/Dashboard/GeneralSetting/OthersServices/OthersServices")
);

const SEO = lazy(() => import("../pages/Dashboard/SEO/SEO"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service/:id",
        element: <ServiceDetails />,
      },

      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:category",
        element: <Products />,
      },
      {
        path: "/products/:category/:subCategory",
        element: <Products />,
      },
      {
        path: "/products/product-details/:slug",
        element: <ProductDetails />,
      },
      {
        path: "/products/:category/:subCategory/:subSubCategory",
        element: <Products />,
      },

      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },

      // Checkout
      {
        path: "/order/checkout/:id",
        element: <OrderCheckout />,
      },
      {
        path: "/rent/checkout/:id",
        element: <RentCheckout />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/administrator/all-administrator",
        element: <Administrator />,
      },
      {
        path: "/admin/administrator/add-administrator",
        element: <AddAdministrator />,
      },

      //-----------------Services
      {
        path: "/admin/service/categories",
        element: <ServiceCategories />,
      },
      {
        path: "/admin/service/category/add",
        element: <AddCategory />,
      },
      {
        path: "/admin/service/category/edit/:id",
        element: <EditCategory />,
      },

      {
        path: "/admin/service/services",
        element: <AllServices />,
      },
      {
        path: "/admin/service/services/add-service",
        element: <AddService />,
      },
      {
        path: "/admin/service/services/edit-service/:id",
        element: <EditService />,
      },

      //-----------------Products
      {
        path: "/admin/products/all-products",
        element: <ProductsList />,
      },
      {
        path: "/admin/products/add-product",
        element: <AddProduct />,
      },
      {
        path: "/admin/products/edit-product/:id",
        element: <EditProduct />,
      },

      //----------Orders
      {
        path: "/admin/orders",
        element: <Orders />,
      },

      //----------Rents
      {
        path: "/admin/rents",
        element: <Rents />,
      },

      {
        path: "/admin/categories/categories",
        element: <Categories />,
      },
      {
        path: "/admin/categories/add-category",
        element: <AddCategories />,
      },
      {
        path: "/admin/categories/edit-category/:id",
        element: <EditCategories />,
      },
      {
        path: "/admin/categories/sub-categories",
        element: <SubCategories />,
      },
      {
        path: "/admin/categories/add-sub-category",
        element: <AddSubCategories />,
      },
      {
        path: "/admin/categories/edit-sub-category/:id",
        element: <EditSubCategories />,
      },
      {
        path: "/admin/categories/sub-sub-categories",
        element: <SubSubCategories />,
      },
      {
        path: "/admin/categories/add-sub-sub-category",
        element: <AddSubSubCategory />,
      },
      {
        path: "/admin/categories/edit-sub-sub-category/:id",
        element: <EditSubSubCategory />,
      },

      {
        path: "/admin/about-us",
        element: <About />,
      },

      {
        path: "/admin/counter",
        element: <Counter />,
      },

      {
        path: "/admin/contact-us",
        element: <ContactUs />,
      },

      //------------Front End Setting
      {
        path: "/admin/front-end/logo",
        element: <Logo />,
      },
      {
        path: "/admin/front-end/favicon",
        element: <Favicon />,
      },
      {
        path: "/admin/front-end/banner",
        element: <Banners />,
      },
      {
        path: "/admin/front-end/banner/add-banner",
        element: <AddBanner />,
      },
      {
        path: "/admin/front-end/services",
        element: <HomeServices />,
      },
      {
        path: "/admin/front-end/themes",
        element: <Themes />,
      },

      // -------------general setting
      {
        path: "/admin/general-setting/business-info",
        element: <BusinessInfo />,
      },
      {
        path: "/admin/general-setting/other-services",
        element: <OthersServices />,
      },

      {
        path: "/admin/seo",
        element: <SEO />,
      },
    ],
  },
]);
