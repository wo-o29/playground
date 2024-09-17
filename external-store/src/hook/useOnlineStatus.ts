import { useEffect, useCallback, useState } from "react";

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const update = useCallback(() => {
    setIsOnline(navigator.onLine);
  }, []);

  useEffect(() => {
    window.addEventListener("online", update);
    window.addEventListener("offline", update);

    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
    };
  }, [update]);

  return isOnline;
}
