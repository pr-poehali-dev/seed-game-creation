import { useState } from "react";
import GameNavigation from "@/components/GameNavigation";
import Icon from "@/components/ui/icon";

interface ShopItem {
  id: number;
  name: string;
  price: number;
  icon: string;
  description: string;
  category: "seeds" | "tools" | "decorations";
}

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "seeds" | "tools" | "decorations"
  >("seeds");
  const [coins] = useState(250); // Игровая валюта

  const shopItems: ShopItem[] = [
    // Семена
    {
      id: 1,
      name: "Семена моркови",
      price: 10,
      icon: "🥕",
      description: "Быстрорастущие семена",
      category: "seeds",
    },
    {
      id: 2,
      name: "Семена помидоров",
      price: 15,
      icon: "🍅",
      description: "Сочные красные томаты",
      category: "seeds",
    },
    {
      id: 3,
      name: "Семена цветов",
      price: 20,
      icon: "🌸",
      description: "Красивые декоративные цветы",
      category: "seeds",
    },

    // Инструменты
    {
      id: 4,
      name: "Лейка",
      price: 50,
      icon: "🪣",
      description: "Для полива растений",
      category: "tools",
    },
    {
      id: 5,
      name: "Лопата",
      price: 75,
      icon: "🏗️",
      description: "Для посадки и пересадки",
      category: "tools",
    },

    // Украшения
    {
      id: 6,
      name: "Садовый гном",
      price: 100,
      icon: "🧙",
      description: "Декоративное украшение",
      category: "decorations",
    },
    {
      id: 7,
      name: "Фонтан",
      price: 200,
      icon: "⛲",
      description: "Красивый садовый фонтан",
      category: "decorations",
    },
  ];

  const categories = [
    { id: "seeds", name: "Семена", icon: "Sprout" },
    { id: "tools", name: "Инструменты", icon: "Hammer" },
    { id: "decorations", name: "Украшения", icon: "Sparkles" },
  ];

  const filteredItems = shopItems.filter(
    (item) => item.category === selectedCategory,
  );

  const handlePurchase = (item: ShopItem) => {
    if (coins >= item.price) {
      // Логика покупки будет добавлена позже
      alert(`Вы купили ${item.name}!`);
    } else {
      alert("Недостаточно монет!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <GameNavigation />

      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Заголовок и баланс */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-green-700 mb-4">
              🛍️ Магазин
            </h1>
            <div className="inline-flex items-center bg-yellow-100 px-6 py-3 rounded-full border-2 border-yellow-300">
              <Icon name="Coins" size={24} className="text-yellow-600 mr-2" />
              <span className="text-xl font-bold text-yellow-700">
                {coins} монет
              </span>
            </div>
          </div>

          {/* Категории */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-2 shadow-lg border-2 border-green-200">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id as any)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 mx-1 ${
                    selectedCategory === category.id
                      ? "bg-green-500 text-white shadow-lg"
                      : "text-green-700 hover:bg-green-100"
                  }`}
                >
                  <Icon name={category.icon} size={16} />
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Товары */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-center mb-4">
                    <Icon
                      name="Coins"
                      size={20}
                      className="text-yellow-600 mr-1"
                    />
                    <span className="text-lg font-bold text-yellow-700">
                      {item.price}
                    </span>
                  </div>

                  <button
                    onClick={() => handlePurchase(item)}
                    disabled={coins < item.price}
                    className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${
                      coins >= item.price
                        ? "bg-green-500 text-white hover:bg-green-600 hover:scale-105"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {coins >= item.price ? "Купить" : "Недостаточно монет"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
