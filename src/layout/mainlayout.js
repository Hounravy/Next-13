import { Layout, Main } from '@components/common';
import { useState, useEffect } from 'react';

export default function MainLayout({ children }) {
  // State
  const [scrollBtn, setScrollBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setScrollBtn(true);
      } else {
        setScrollBtn(false);
      }
    });
  }, []);

  return (
    <div className='relative'>
      <Main.ScrollToTop scrollBtn={scrollBtn} />
      <Layout.Navbar />
      <div>{children}</div>
      <Layout.Footer />
    </div>
  );
}
