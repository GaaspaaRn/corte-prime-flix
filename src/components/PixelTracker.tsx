
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as pixel from '@/lib/pixel';

const PixelTracker = () => {
  const location = useLocation();

  useEffect(() => {
    pixel.pageview();
  }, [location]);

  return null;
};

export default PixelTracker;
