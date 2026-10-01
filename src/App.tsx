import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import Home from '@/pages/Home';
import About from '@/pages/About';
import { TherapeuticAreas, TherapeuticAreaDetail } from '@/pages/TherapeuticAreas';
import { Products, ProductDetailPage } from '@/pages/Products';
import Quality from '@/pages/Quality';
import Careers from '@/pages/Careers';
import Contact from '@/pages/Contact';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsConditions from '@/pages/TermsConditions';

const routeSeo: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Wellshark Pharmaceuticals | Specialty Pharmaceutical Company',
    description:
      'Wellshark Pharmaceuticals Pvt Ltd — a specialty pharmaceutical company built on a decade of pharmaceutical experience, with a focused therapeutic portfolio.',
  },
  '/about': {
    title: 'About Wellshark | Wellshark Pharmaceuticals',
    description:
      'Learn about Wellshark Pharmaceuticals Pvt Ltd — an established pharmaceutical marketing company with 10 years of operating experience.',
  },
  '/therapeutic-areas': {
    title: 'Therapeutic Areas | Wellshark Pharmaceuticals',
    description:
      'Explore Wellshark’s therapeutic focus areas including Urology, Gynecology, Nephrology, and Diabetology.',
  },
  '/products': {
    title: 'Products | Wellshark Pharmaceuticals',
    description:
      'Browse Wellshark’s pharmaceutical product portfolio across key therapeutic areas.',
  },
  '/quality': {
    title: 'Quality & Manufacturing | Wellshark Pharmaceuticals',
    description:
      'Learn about Wellshark’s quality standards and manufacturing partnerships.',
  },
  '/careers': {
    title: 'Careers | Wellshark Pharmaceuticals',
    description:
      'Explore career opportunities at Wellshark Pharmaceuticals Pvt Ltd.',
  },
  '/contact': {
    title: 'Contact | Wellshark Pharmaceuticals',
    description:
      'Get in touch with Wellshark Pharmaceuticals for product information, availability, or general enquiries.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Wellshark Pharmaceuticals',
    description: 'Privacy policy for Wellshark Pharmaceuticals Pvt Ltd.',
  },
  '/terms-conditions': {
    title: 'Terms & Conditions | Wellshark Pharmaceuticals',
    description: 'Terms and conditions for Wellshark Pharmaceuticals Pvt Ltd.',
  },
};

function SeoManager() {
  const { pathname } = useLocation();
  const seo =
    routeSeo[pathname] ||
    (pathname.startsWith('/therapeutic-areas/')
      ? { title: 'Therapeutic Area | Wellshark Pharmaceuticals', description: 'Explore Wellshark’s therapeutic areas.' }
      : pathname.startsWith('/products/')
      ? { title: 'Product | Wellshark Pharmaceuticals', description: 'Wellshark Pharmaceuticals product information.' }
      : { title: 'Wellshark Pharmaceuticals', description: 'Specialty pharmaceutical company.' });

  return <Seo title={seo.title} description={seo.description} />;
}

function App() {
  return (
    <BrowserRouter>
      <SeoManager />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/therapeutic-areas" element={<TherapeuticAreas />} />
            <Route path="/therapeutic-areas/:slug" element={<TherapeuticAreaDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
