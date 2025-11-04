import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Step2 from './components/Step2';
import Step4 from './components/Step4';

function usePath() {
  const [path, setPath] = React.useState(window.location.pathname);
  React.useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  return path;
}

export default function App() {
  const path = usePath();

  return (
    <div className="min-h-screen bg-white text-[#434545]">
      <Header />
      {path === '/step-2' ? (
        <Step2 />)
        : path === '/step-4' ? (
          <Step4 />
        ) : (
          <Home />
        )}
      <footer className="border-t border-neutral-100 py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} PBL. All rights reserved.
      </footer>
    </div>
  );
}
