const throttle = (
  func: () => void,
  limit: number,
  setIsInThrottle?: (value?: boolean) => void
): (() => void) => {
  let inThrottle: boolean;
  return function(this: any, ...args): void {
    
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      if (typeof setIsInThrottle === "function") {
        setIsInThrottle(true);
      }
      setTimeout(() => {
        inThrottle = false;
        if (typeof setIsInThrottle === "function") {
          setIsInThrottle(false);
        }
      }, limit);
    }
  };
};

export default throttle;
