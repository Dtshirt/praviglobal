'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import MobileFooter from './MobileFooter';
import DoctorPopup from './DoctorPopup';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const normalizedPath = pathname ? pathname.replace(/\/$/, '') : '';
  const isAppOnlyPage = normalizedPath === '/advanced-fertility-care';

  if (isAppOnlyPage) {
    return (
      <main id="main-content" className="min-h-screen bg-slate-950">
        {children}
      </main>
    );
  }

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        {children}
      </main>
      <Footer />
      <MobileFooter />
      <DoctorPopup />
    </>
  );
}
