import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

interface InventoryItem {
  id: string;
  name: string;
  icon: string;
  quantity: number;
  rarity: "common" | "rare" | "epic" | "legendary";
  description: string;
}

const Inventory = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "seeds" | "plants" | "tools" | "stats"
  >("seeds");

  const playerStats = {
    level: 12,
    experience: 1420,
    nextLevelExp: 1800,
    coins: 2450,
    plantsGrown: 67,
    seedsPlanted: 89,
    toolsUnlocked: 15,
  };

  const inventoryData = {
    seeds: [
      {
        id: "1",
        name: "Семена моркови",
        icon: "🥕",
        quantity: 24,
        rarity: "common" as const,
        description: "Быстрорастущие семена",
      },
      {
        id: "2",
        name: "Семена помидоров",
        icon: "🍅",
        quantity: 8,
        rarity: "common" as const,
        description: "Сочные красные томаты",
      },
      {
        id: "3",
        name: "Семена цветов",
        icon: "🌸",
        quantity: 15,
        rarity: "rare" as const,
        description: "Красивые декоративные цветы",
      },
    ],
    plants: [
      {
        id: "5",
        name: "Спелый томат",
        icon: "🍅",
        quantity: 12,
        rarity: "common" as const,
        description: "Свежие томаты",
      },
      {
        id: "6",
        name: "Цветущая роза",
        icon: "🌹",
        quantity: 5,
        rarity: "rare" as const,
        description: "Красивая роза",
      },
      {
        id: "7",
        name: "Золотая морковь",
        icon: "🥕",
        quantity: 3,
        rarity: "epic" as const,
        description: "Волшебная морковь",
      },
    ],
    tools: [
      {
        id: "8",
        name: "Лопата",
        icon: "🔨",
        quantity: 1,
        rarity: "common" as const,
        description: "Обычная лопата",
      },
      {
        id: "9",
        name: "Волшебная лейка",
        icon: "🪣",
        quantity: 1,
        rarity: "epic" as const,
        description: "Ускоряет рост растений",
      },
      {
        id: "10",
        name: "Секатор",
        icon: "✂️",
        quantity: 1,
        rarity: "rare" as const,
        description: "Точная обрезка",
      },
    ],
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "bg-gray-100 text-gray-800";
      case "rare":
        return "bg-blue-100 text-blue-800";
      case "epic":
        return "bg-purple-100 text-purple-800";
      case "legendary":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const categories = [
    { id: "seeds" as const, label: "Семена", icon: "Seedling" },
    { id: "plants" as const, label: "Растения", icon: "Flower" },
    { id: "tools" as const, label: "Инструменты", icon: "Wrench" },
    { id: "stats" as const, label: "Статистика", icon: "BarChart3" },
  ];

  const renderInventoryGrid = (items: InventoryItem[]) => (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {items.map((item) => (
        <Card
          key={item.id}
          className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <CardContent className="p-4 text-center">
            <div className="text-3xl mb-2">{item.icon}</div>
            <div className="text-sm font-medium mb-1">{item.name}</div>
            <Badge className={`text-xs mb-2 ${getRarityColor(item.rarity)}`}>
              {item.rarity}
            </Badge>
            <div className="text-lg font-bold text-primary">
              ×{item.quantity}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderStats = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Icon name="Star" size={20} />
              Уровень
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary mb-2">
              {playerStats.level}
            </div>
            <Progress
              value={(playerStats.experience / playerStats.nextLevelExp) * 100}
              className="mb-2"
            />
            <div className="text-sm text-gray-600">
              {playerStats.experience} / {playerStats.nextLevelExp} опыта
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Icon name="Coins" size={20} />
              Монеты
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-600">
              {playerStats.coins}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Icon name="Sprout" size={20} />
              Выращено
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">
              {playerStats.plantsGrown}
            </div>
            <div className="text-sm text-gray-600">растений</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Seedling" size={20} />
              Достижения
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Посажено семян</span>
              <Badge variant="secondary">{playerStats.seedsPlanted}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Инструментов открыто</span>
              <Badge variant="secondary">{playerStats.toolsUnlocked}</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Trophy" size={20} />
              Награды
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center text-gray-500">
              <Icon name="Lock" size={32} className="mx-auto mb-2" />
              <div>Новые награды скоро!</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              🎒 Инвентарь
            </h1>
            <p className="text-gray-600">
              Управляйте своими ресурсами и следите за прогрессом
            </p>
          </div>
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <Icon name="Home" size={18} />В сад
            </Button>
          </Link>
        </div>

        {/* Player Level Bar */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {playerStats.level}
                </div>
                <div>
                  <div className="font-semibold">
                    Садовник уровня {playerStats.level}
                  </div>
                  <div className="text-sm text-gray-600">
                    {playerStats.experience} / {playerStats.nextLevelExp} опыта
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-yellow-600">
                <Icon name="Coins" size={20} />
                <span className="font-bold">{playerStats.coins}</span>
              </div>
            </div>
            <Progress
              value={(playerStats.experience / playerStats.nextLevelExp) * 100}
            />
          </CardContent>
        </Card>

        {/* Category Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <Icon name={category.icon as any} size={18} />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Content */}
        <div className="animate-fade-in">
          {selectedCategory === "stats" ? (
            renderStats()
          ) : (
            <div>
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {categories.find((c) => c.id === selectedCategory)?.label}
                </h2>
                <p className="text-gray-600">
                  {selectedCategory === "seeds" &&
                    "Семена для посадки новых растений"}
                  {selectedCategory === "plants" &&
                    "Выращенные растения и урожай"}
                  {selectedCategory === "tools" &&
                    "Инструменты для работы в саду"}
                </p>
              </div>
              {renderInventoryGrid(inventoryData[selectedCategory])}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
