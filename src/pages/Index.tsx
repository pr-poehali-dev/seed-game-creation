import GameNavigation from "@/components/GameNavigation";
import GameCard from "@/components/GameCard";
import FloatingElement from "@/components/FloatingElement";

const Index = () => {
  const gameCards = [
    {
      title: "Обучение",
      description: "Изучи основы садоводства и стань мастером выращивания!",
      icon: "BookOpen",
      emoji: "📚",
      link: "/tutorial",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
    },
    {
      title: "Магазин семян",
      description: "Покупай редкие семена и расширяй свою коллекцию растений!",
      icon: "ShoppingCart",
      emoji: "🛒",
      link: "/shop",
      color: "bg-gradient-to-br from-purple-400 to-purple-600",
    },
    {
      title: "Мой сад",
      description: "Сажай, поливай и выращивай самые красивые растения!",
      icon: "Flower",
      emoji: "🌻",
      link: "/garden",
      color: "bg-gradient-to-br from-green-400 to-green-600",
    },
    {
      title: "Инвентарь",
      description:
        "Управляй своими семенами, урожаем и садовыми инструментами!",
      icon: "Package",
      emoji: "📦",
      link: "/inventory",
      color: "bg-gradient-to-br from-orange-400 to-orange-600",
    },
    {
      title: "Достижения",
      description: "Получай награды за свои садовые достижения и прогресс!",
      icon: "Trophy",
      emoji: "🏆",
      link: "/achievements",
      color: "bg-gradient-to-br from-yellow-400 to-yellow-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <GameNavigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-4 mb-8">
            <FloatingElement delay={0}>
              <div className="text-6xl">🌱</div>
            </FloatingElement>
            <FloatingElement delay={0.5}>
              <div className="text-5xl">🌻</div>
            </FloatingElement>
            <FloatingElement delay={1}>
              <div className="text-6xl">🌿</div>
            </FloatingElement>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-green-700 mb-6 font-rubik">
            Садовая Игра
          </h1>

          <p className="text-xl md:text-2xl text-green-600 mb-8 max-w-3xl mx-auto">
            Создай самый красивый сад! Выращивай растения, собирай урожай и
            становись настоящим садовым мастером! 🌈
          </p>

          <div className="flex justify-center space-x-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-700">🪙 1,250</div>
              <div className="text-sm text-green-600">Монеты</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">⭐ Новичок</div>
              <div className="text-sm text-blue-600">Уровень</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-700">🌱 42</div>
              <div className="text-sm text-purple-600">Растения</div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Cards Grid */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-12 font-rubik">
            Исследуй игровой мир! 🗺️
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {gameCards.map((card, index) => (
              <GameCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border-2 border-green-200">
            <h3 className="text-2xl font-bold text-center text-gray-700 mb-8 font-rubik">
              Твоя садовая статистика 📊
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-green-100 rounded-xl">
                <div className="text-2xl mb-2">🌱</div>
                <div className="text-2xl font-bold text-green-700">15</div>
                <div className="text-sm text-green-600">Посажено сегодня</div>
              </div>

              <div className="text-center p-4 bg-blue-100 rounded-xl">
                <div className="text-2xl mb-2">💧</div>
                <div className="text-2xl font-bold text-blue-700">28</div>
                <div className="text-sm text-blue-600">Полито растений</div>
              </div>

              <div className="text-center p-4 bg-yellow-100 rounded-xl">
                <div className="text-2xl mb-2">🥕</div>
                <div className="text-2xl font-bold text-yellow-700">7</div>
                <div className="text-sm text-yellow-600">Собрано урожая</div>
              </div>

              <div className="text-center p-4 bg-purple-100 rounded-xl">
                <div className="text-2xl mb-2">🏆</div>
                <div className="text-2xl font-bold text-purple-700">3</div>
                <div className="text-sm text-purple-600">Новые достижения</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
