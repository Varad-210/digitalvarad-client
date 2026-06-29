import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';

const useTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const consent = Cookies.get('cookie_consent');
    
    // Only track if consent is explicitly given
    if (consent === 'accepted') {
      let visitorId = Cookies.get('skillmint_visitor_id');
      
      if (!visitorId) {
        visitorId = uuidv4();
        Cookies.set('skillmint_visitor_id', visitorId, { expires: 365 });
      }

      // Track page view
      const trackPageView = async () => {
        try {
          // Adjust API URL if needed based on environment
          const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
          
          await fetch(`${API_URL}/api/track`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              visitor_id: visitorId,
              event_type: 'page_view',
              url: window.location.href,
              referrer: document.referrer,
            }),
          });
        } catch (error) {
          console.error("Tracking error:", error);
        }
      };

      trackPageView();
    }
  }, [location]); // Re-run whenever the route changes
};

export default useTracking;
