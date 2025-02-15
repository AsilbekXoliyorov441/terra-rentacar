import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home/HomePage";
import CarsPage from "./pages/cars/CarsPage";
import BrandsPage from "./pages/brands/BrandsPage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import BlogPage from "./pages/blog/BlogPage";
import ServicePage from "./pages/services/ServicePage";
import SingleCarPage from "./pages/single-car/SingleCarPage";
import SingleBrandPage from "./pages/single-brand/SingleBrandPage";
import SingleBlogPage from "./pages/single-blog/SingleBlogPage";
import UslugBuggiesPage from "./pages/uslug-buggies/UslugBuggiesPage";
import UslugCarPage from "./pages/uslug-car/UslugCarPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cars" element={<CarsPage />} />
          <Route path="cars/:id" element={<SingleCarPage />} />
          <Route path="brands" element={<BrandsPage />} />
          <Route path="brands/:id" element={<SingleBrandPage />} />
          <Route path="services/uslugbuggies" element={<UslugBuggiesPage />} />
          <Route path="services/uslugcar" element={<UslugCarPage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog" element={<SingleBlogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
