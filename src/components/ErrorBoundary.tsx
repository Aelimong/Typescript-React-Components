import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const ErrorBoundary = (props: Props) => {
  const { children } = props;
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setHasError(true);
      console.error(event.error);
    };

    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  if (hasError) {
    return <div>에러페이지 입니다.</div>;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
