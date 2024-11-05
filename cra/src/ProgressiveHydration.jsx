import React, { useState, useEffect } from "react";

const ProgressiveHydration = ({ children, priority = "low" }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (priority === "high") {
      setIsHydrated(true);
    } else {
      const timer = setTimeout(() => {
        setIsHydrated(true);
      }, 2000); // 2초 후 hydration

      return () => clearTimeout(timer);
    }
  }, [priority]);

  if (!isHydrated) {
    return <div dangerouslySetInnerHTML={{ __html: children }} />;
  }

  return <>{children}</>;
};

const ProgressiveApp = () => {
  return (
    <div>
      <ProgressiveHydration priority="high">
        <h1>중요한 컨텐츠</h1>
      </ProgressiveHydration>

      <ProgressiveHydration>
        <p>덜 중요한 컨텐츠</p>
      </ProgressiveHydration>
    </div>
  );
};

export default ProgressiveApp;
