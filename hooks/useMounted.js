import { useState, useEffect } from "react";

const useIsMounted = () => {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted;
};

export default useIsMounted;
