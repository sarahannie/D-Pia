import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CodeAcademy from './pages/CodeAcademy';

const updateDocumentTitle = (title) => {
  document.title += `| What We Do${title}`;
};

export default function PageLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    const title =
      pathname === '/what-we-do' ? '' : ` - ${pathname.split('/')[2]}`;
    return updateDocumentTitle(title);
  }, [pathname]);

  return (
    <div className='pt-4'>
      {pathname === '/what-we-do' ? <CodeAcademy /> : <Outlet />}
    </div>
  );
}
