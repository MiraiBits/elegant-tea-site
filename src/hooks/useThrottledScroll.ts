import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to efficiently handle scroll events by throttling.
 * It returns a boolean indicating whether the user has scrolled past a certain threshold (50px).
 * @param {number} delay - The throttle delay in milliseconds.
 * @param {number} threshold - The scroll threshold in pixels (default: 50).
 * @returns {boolean} - True if scrolled past the threshold, false otherwise.
 */
function useThrottledScroll(delay: number, threshold: number = 50) {
  const [isScrolled, setIsScrolled] = useState(false);
  const lastCall = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastCall.current < delay) {
        return;
      }
      lastCall.current = now;
      setIsScrolled(window.scrollY > threshold);
    };

    // Set initial state on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [delay, threshold]);

  return isScrolled;
}

export default useThrottledScroll;
