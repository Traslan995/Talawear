import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: маршрут не найден:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-light">404</h1>
        <p className="mb-6 text-lg font-light text-muted-foreground">Страница не найдена</p>
        <Link to="/" className="text-sm font-light text-foreground underline hover:no-underline">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
