import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface GameCardProps {
  title: string;
  description: string;
  icon: string;
  emoji: string;
  link: string;
  color: string;
}

const GameCard = ({
  title,
  description,
  icon,
  emoji,
  link,
  color,
}: GameCardProps) => {
  return (
    <Link to={link} className="block group">
      <div
        className={`relative overflow-hidden rounded-2xl ${color} p-6 h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2`}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl animate-bounce">{emoji}</div>
          <Icon name={icon} size={32} className="text-white/80" />
        </div>

        <h3 className="text-xl font-bold text-white mb-2 font-rubik">
          {title}
        </h3>
        <p className="text-white/90 text-sm leading-relaxed">{description}</p>

        <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute -top-2 -left-2 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>
      </div>
    </Link>
  );
};

export default GameCard;
