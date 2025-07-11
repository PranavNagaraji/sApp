import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutApp from './components/AboutApp';
import ShareFeatures from './components/ShareFeatures';
import HowItWorks from './components/HowItWorks';
import SmartphoneCarousel from './components/SmarphoneCarousel';
import CustomerCarousel from './components/CustomerCarousel';
import Pricing from './components/Pricing';
import ContactSection from './components/ContactSection';
import UsefulLinks from './components/UsefulLinks';
import FAQSection from './components/FaqSection';
import DevicesSection from './components/DeviceSection';
import DownloadPage from './pages/DownloadPage';
import Subscribe from './components/Subscribe';
import SignInPage from './pages/SignInPage';
import BillingPage from './pages/Billing';
import ContactUsPage from './pages/ContactUsPage';
import ScrollToTopButton from './components/scrollToTop';

const App = () => {
  return (
    <div className="font-sans relative">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <Features />
              <AboutApp />
              <ShareFeatures />
              <HowItWorks />
              <SmartphoneCarousel />
              <CustomerCarousel />
              <Pricing />
              <FAQSection />
              <DevicesSection />
              <Subscribe />
              <ContactSection />
              <UsefulLinks />
            </main>
          }
        />
        <Route path="/downloadpage" element={<DownloadPage />} />
        <Route path="/signinpage" element={<SignInPage />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
      </Routes>
      <ScrollToTopButton /> {/* ✅ Always visible across pages */}
    </div>
  );
};

export default App;
