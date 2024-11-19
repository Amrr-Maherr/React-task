import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import StorySection from "./Componants/StorySection";
import StoryContentOne from "./Componants/StoryContentOne";
import StoryContentTwo from "./Componants/StoryContentTwo";
import NavBar from "./Componants/NavBar";
import HeroSection from "./Componants/HeroSection";
import ProductSection from "./Componants/ProductsSection";
import Footer from "./Componants/Footer";
import AboutSection from "./Componants/AboutSection";
import ApiProducts from "./Componants/ApiProducts";
import ProductsLink from "./Componants/ProductsLink";
import FQAPage from "./Componants/FAQPage"
import SocialMediaPage from "./Componants/SocialMediaPage"
import "./App.css"
import ProductDetails from "./Componants/ProductDetails";
import StoryContentThree from "./Componants/StroyContentThree";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <StorySection />
                <AboutSection />
                <ProductSection />
                <ProductsLink />
              </>
            }
          >
            <Route path="one" element={<StoryContentOne />} />
            <Route path="two" element={<StoryContentTwo />} />
            <Route path="three" element={<StoryContentThree />} />
          </Route>
          <Route
            path="/products"
            element={
              <>
                <ApiProducts />
              </>
            }
          />
          <Route
            path="/qs"
            element={
              <>
                <FQAPage />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <SocialMediaPage />
              </>
            }
          />
          <Route
            path="/story"
            element={
              <>
                <StorySection />
              </>
            }
          />
          <Route
            path="products/:productsId"
            element={
              <>
                <ProductDetails />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
