import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already given consent
    const consent = Cookies.get('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookie_consent', 'accepted', { expires: 365 });
    setIsVisible(false);
  };

  const handleDecline = () => {
    Cookies.set('cookie_consent', 'declined', { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-sm">
        <p>
          We use cookies to improve your experience and track website usage. 
          By accepting, you agree to our <a href="/cookie-policy" className="underline text-blue-400">Cookie Policy</a>.
        </p>
      </div>
      <div className="flex gap-4 shrink-0">
        <button 
          onClick={handleDecline}
          className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
        >
          Decline
        </button>
        <button 
          onClick={handleAccept}
          className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
