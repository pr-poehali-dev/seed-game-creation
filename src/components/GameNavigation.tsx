import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const GameNavigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/tutorial", label: "Обучение", icon: "BookOpen" },
    { path: "/shop", label: "Магазин", icon: "ShoppingCart" },
    { path: "/garden", label: "Сад", icon: "Flower" },
    { path: "/inventory", label: "Инвентарь", icon: "Package" },
    { path: "/achievements", label: "Достижения", icon: "Trophy" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b-2 border-green-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
              🌱
            </div>
            <span className="font-rubik font-bold text-xl text-green-700">
              Садовая Игра
            </span>
          </div>

          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 hover:bg-green-100 hover:scale-105 ${
                  location.pathname === item.path
                    ? "bg-green-500 text-white shadow-lg"
                    : "text-green-700 hover:text-green-800"
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GameNavigation;
