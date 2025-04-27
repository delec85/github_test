// client/public/boots_img
 //* all bots img

 // client/public/prof_img/avatar.webp




 // /Users/olegoman/WORK/HIVE/ft_transendense/client/src/styles/cursor.css


 .neon-cursor {
	position: fixed;
	width: 20px;
	height: 20px;
	background: radial-gradient(
	  circle,
	  rgba(255, 153, 255, 1) 20%,
	  rgba(102, 255, 255, 0.3) 80%
	);
	border-radius: 50%;
	pointer-events: none;
	z-index: 9999;
	transform: translate(-50%, -50%);
	box-shadow: 
	  0 0 15px rgba(255, 153, 255, 1),
	  0 0 30px rgba(102, 255, 255, 0.7),
	  0 0 50px rgba(255, 255, 204, 0.5);
	transition: transform 0.2s ease;
  }
  
  /* Шлейф */
  .cursor-trail {
	position: fixed;
	width: 20px;
	height: 20px;
	background: radial-gradient(
	  circle,
	  rgba(255, 153, 255, 0.8) 20%,
	  rgba(102, 255, 255, 0.2) 70%,
	  transparent 80%
	);
	border-radius: 50%;
	pointer-events: none;
	z-index: 9998;
	transform: translate(-50%, -50%); /* Центрируем шлейф */
	animation: fade-out 1s ease-out forwards;
	box-shadow: 
	  0 0 10px rgba(255, 153, 255, 0.8),
	  0 0 20px rgba(102, 255, 255, 0.5);
  }
  
  /* Анимация для исчезновения шлейфа */
  @keyframes fade-out {
	0% {
	  opacity: 0.8;
	  transform: translate(-50%, -50%) scale(1); /* Учитываем центрирование */
	}
	100% {
	  opacity: 0;
	  transform: translate(-50%, -50%) scale(0.3); /* Учитываем центрирование */
	}
  }



// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/components/NeonCursor.tsx

import React, { useEffect } from 'react';
import '../styles/cursor.css';

const NeonCursor: React.FC = () => {
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const cursor = document.createElement('div');
    cursor.classList.add('neon-cursor');
    document.body.appendChild(cursor);

    let lastTrailTime = 0;
    const trailInterval = 30;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTrailTime < trailInterval) return;
      lastTrailTime = now;

      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      const trail = document.createElement('div');
      trail.classList.add('cursor-trail');
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
      document.body.appendChild(trail);

      setTimeout(() => {
        trail.remove();
      }, 1000); 
    };

    const handleMouseDown = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      setTimeout(() => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      }, 200);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      cursor.remove();
      document.querySelectorAll('.cursor-trail').forEach((trail) => trail.remove());
    };
  }, []);

  return null; 
};

export default NeonCursor;




 // /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/types/botsData.ts
 //! TYPES
 export const bots = [
	{
	  name: 'Vampire (Vegetarian)',
	  image: '/boots_img/vampire.png',
	  strengths: 'Charming, peaceful',
	  weaknesses: 'Avoids blood, distracted by veggies',
	},
	{
	  name: 'Zombie Hygienist',
	  image: '/boots_img/zombie.png',
	  strengths: 'Clean freak, fast hands',
	  weaknesses: 'Avoids dirt, hates brains',
	},
	{
	  name: 'Werewolf (Fur Allergy)',
	  image: '/boots_img/wolf.png',
	  strengths: 'Sniffs danger',
	  weaknesses: 'Sneezes every full moon',
	},
	{
	  name: 'Cowboy (Scared of Horses)',
	  image: '/boots_img/cowboy.png',
	  strengths: 'Great aim',
	  weaknesses: 'Avoids ranches, prefers bikes',
	},
	{
	  name: 'Dragon (Afraid of Fire)',
	  image: '/boots_img/dragon.png',
	  strengths: 'Icy breath, strong wings',
	  weaknesses: 'Fears flames, carries extinguisher',
	},
	{
	  name: 'Robot with Emotions',
	  image: '/boots_img/robot.png',
	  strengths: 'Empathy, poetic',
	  weaknesses: 'Short-circuits from sadness',
	},
	{
	  name: 'Ghost (Afraid of the Dark)',
	  image: '/boots_img/ghost.png',
	  strengths: 'Can float anywhere',
	  weaknesses: 'Scared without light',
	},
	{
	  name: 'Mermaid (Can’t Swim)',
	  image: '/boots_img/mermaid.png',
	  strengths: 'Sings beautifully',
	  weaknesses: 'Needs life jacket in water',
	},
	{
	  name: 'Ninja (Always Loud)',
	  image: '/boots_img/ninja.png',
	  strengths: 'Strong and fast',
	  weaknesses: 'Can not stop yelling',
	},
	{
	  name: 'Chef (Hates Food)',
	  image: '/boots_img/chef.png',
	  strengths: 'Perfect knife skills',
	  weaknesses: 'Gags at smell of basil',
	},
  ];



//  /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/types/UserInfo.ts
export type MatchResult = {
	date: string;
	weekday: string;
	result: "win" | "loss";
  };
  
  export type UserInfo = {
	username: string;
	avatar: string;
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	wins: number;
	losses: number;
	online: boolean;
	history: MatchResult[];
	onRemove?: () => void;
	onChallenge?: () => void;
  };
  
  // *** Block: Calculate User Stats ***
  export const calculateUserStats = (
	wins: number,
	losses: number | string,
	history: MatchResult[] = []
  ) => {
	// calculating the total matches and win rate here.
	const totalMatches = typeof losses === "number" ? wins + losses : 0;
	const winRate = totalMatches ? Math.round((wins / totalMatches) * 100) : 0;
  
	// finding the latest game date by sorting the history in descending order.
	const latestDate = [...history]
	  .sort((a, b) => b.date.localeCompare(a.date))
	  .find(Boolean)?.date;
  
	// filtering the history to get stats for the latest game day.
	const dailyStats = latestDate
	  ? history.filter((h) => h.date === latestDate)
	  : [];
  
	// counting the wins and losses for the latest game day.
	const winsToday = dailyStats.filter((m) => m.result === "win").length;
	const lossesToday = dailyStats.filter((m) => m.result === "loss").length;
  
	// returning all the calculated stats as an object.
	return {
	  winRate,
	  latestDate,
	  winsToday,
	  lossesToday,
	};
  };


  

// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/types/fakeNames.ts

import { UserInfo } from "./UserInfo";
import { toast } from "react-hot-toast";

export const defaultFriends: UserInfo[] = [
  {
    username: "Zoe",
    avatar: "/boots_img/ghost.png",
    email: "zoe@example.com",
    firstName: "Zoe",
    lastName: "Fast",
    password: "secret",
    online: true,
    wins: 11,
    losses: 44,
    history: [
      { date: "2025-04-24", weekday: "Thu", result: "win" },
      { date: "2025-04-24", weekday: "Thu", result: "loss" },
    ],
    onRemove: () => toast("Zoe removed from friends 👋"),
    onChallenge: () => toast.success("Challenge sent to Zoe"),
  },
  {
    username: "Mika",
    avatar: "/boots_img/ninja.png",
    email: "mika@example.com",
    firstName: "Mika",
    lastName: "Stealth",
    password: "secret",
    online: false,
    wins: 5,
    losses: 6,
    history: [
      { date: "2025-04-24", weekday: "Thu", result: "win" },
      { date: "2025-04-24", weekday: "Thu", result: "loss" },
    ],
    onRemove: () => toast("Mika removed from friends 👋"),
    onChallenge: () => toast.success("Challenge sent to Mika"),
  },
  {
    username: "Alex",
    avatar: "/boots_img/chef.png",
    email: "alex@example.com",
    firstName: "Alex",
    lastName: "Cook",
    password: "secret",
    online: true,
    wins: 9,
    losses: 3,
    history: [
      { date: "2025-04-24", weekday: "Thu", result: "win" },
      { date: "2025-04-24", weekday: "Thu", result: "loss" },
    ],
    onRemove: () => toast("Alex removed from friends 👋"),
    onChallenge: () => toast.success("Challenge sent to Alex"),
  },
  {
    username: "Tina",
    avatar: "/boots_img/mermaid.png",
    email: "tina@example.com",
    firstName: "Tina",
    lastName: "Wave",
    password: "secret",
    online: false,
    wins: 3,
    losses: 5,
    history: [
      { date: "2025-04-24", weekday: "Thu", result: "win" },
      { date: "2025-04-24", weekday: "Thu", result: "loss" },
    ],
    onRemove: () => toast("Tina removed from friends 👋"),
    onChallenge: () => toast.success("Challenge sent to Tina"),
  },
];

export const defaultPlayers: UserInfo[] = defaultFriends.map((player) => ({
  ...player,
  onRemove: undefined, // У игроков нет кнопки "Remove"
  onChallenge: () => toast.success(`Challenged ${player.username}`),
}));



  // /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/types/ui.tsx

  import React, { ReactNode, ButtonHTMLAttributes } from "react";

  // ==== Primary Button ====
  type PrimaryButtonProps = {
	children: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>;
  
  export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
	children,
	...props
  }) => {
	return (
	  <button
		className="
		  bg-white
		  text-black
		  font-bold
		  py-2
		  px-8
		  rounded
		  text-xl
		  shadow-md
		  hover:bg-gray-300
		"
		{...props}
	  >
		{children}
	  </button>
	);
  };
  
  
  
  
  // ==== Card Wrapper ====
  type CardWrapperProps = {
	children: ReactNode;
	onClick?: () => void;
  };
  
  export const CardWrapper: React.FC<CardWrapperProps> = ({
	children,
	onClick,
  }) => {
	return (
	  <div
		className="
		  bg-gray-800
		  rounded-lg
		  p-3
		  shadow-sm
		  transition
		  hover:bg-gray-700
		  cursor-pointer
		  w-full
		  min-w-[240px]
		  max-w-[260px]
		  duration-200
		  ease-in-out
		"
		onClick={onClick}
	  >
		{children}
	  </div>
	);
  };
  
  
//! PROFILE
// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/Avatar.tsx


import React, { useEffect, useState } from 'react';

interface AvatarProps {
  src: string;
  username: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, username, className }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  useEffect(() => {
    setImgSrc(src);
    setIsImageLoaded(true);
  }, [src]);

  return (
    <div className="flex flex-col items-center">
      <div
        className={`
          rounded-full
          border-2
          border-white
          overflow-hidden
          flex
          items-center
          justify-center
          bg-gray-800
          text-white
          text-center
          ${className}
        `}
      >
        {isImageLoaded ? (
          <img
            src={imgSrc}
            alt={username}
            className="w-full h-full object-cover"
            onError={() => setIsImageLoaded(false)}
          />
        ) : (
          <span className="text-sm font-semibold px-2">{username}</span>
        )}
      </div>
    </div>
  );
};

export default Avatar;





// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/BotCard.tsx





import React from 'react';

interface BotCardProps {
  name: string;
  image: string;
  strengths: string;
  weaknesses: string;
  onSelect: () => void;
  selected: boolean;
}

const BotCard: React.FC<BotCardProps> = ({
  name,
  image,
  strengths,
  weaknesses,
  onSelect,
  selected
}) => {
  return (
    <div
      onClick={onSelect}
      className={`
        cursor-pointer
        bg-gray-800
        bg-opacity-70
        hover:bg-gray-700
        transition
        rounded-xl
        flex
        items-center
        gap-4
        px-4
        py-4
        h-auto
        min-h-[150px]
        sm:min-h-[170px]
        lg:min-h-[180px]
        xl:min-h-[190px]
        overflow-hidden
		hover:scale-105
		hover:shadow-[0_0_20px_#00ff7f]

        ${selected ? 'ring-2 ring-purple-400' : ''}
      `}
    >
      <img
        src={image}
        alt={name}
        className="
          w-20
          h-20
          sm:w-24
          sm:h-24
          lg:w-28
          lg:h-28
          rounded-full
          object-cover
          flex-shrink-0
        "
      />
      <div
        className="
          text-left
          flex
          flex-col
          justify-center
          overflow-hidden
        "
      >
        <h3 className="
          font-bold
          text-base
          sm:text-lg
          lg:text-xl
          leading-tight
          mb-1
          break-words
        ">
          {name}
        </h3>
        <p className="text-sm sm:text-base text-green-300 mb-1 break-words">
          + {strengths}
        </p>
        <p className="text-sm sm:text-base text-red-300 break-words">
          − {weaknesses}
        </p>
      </div>
    </div>
  );
};

export default BotCard;






// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/EnhancedFriendsList.tsx


import React, { useState } from "react";
import { UserInfo } from "./types/UserInfo";
import PlayerCard from "./PlayerCard";
import { CardWrapper } from "./types/ui";
import { toast } from 'react-hot-toast';

interface Props {
  friends: UserInfo[];
}

const EnhancedFriendsList: React.FC<Props> = ({ friends }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="
      flex 
      flex-col 
      gap-2 
      overflow-y-auto 
      max-h-[500px] 
      pr-1 
      scrollbar-thin 
      scrollbar-thumb-white/60 
      scrollbar-track-transparent
    ">
      {friends.map((friend, index) => {
        const isExpanded = expandedIndex === index;

        return (
          <CardWrapper key={index} onClick={() => toggleExpand(index)}>
            <div className="flex justify-between items-center">
              <div className="font-bold text-base">{friend.username}</div>
              <div className={`text-sm ${friend.online ? "text-green-400" : "text-gray-400"}`}>
                {friend.online ? "Online" : "Offline"}
              </div>
            </div>

            {/* Expanded content */}
            <div className={`
              transition-all 
              duration-300 
              overflow-hidden 
              ${isExpanded ? "max-h-[600px] mt-3" : "max-h-0"}
            `}>
              <PlayerCard
                name={friend.username}
                online={friend.online}
                wins={friend.wins}
                losses={friend.losses}
                avatar={friend.avatar}
                history={friend.history}
                onRemove={() => toast(`${friend.username} removed from friends 👋`)}
                onChallenge={() => toast.success(`Challenge sent to ${friend.username}`)}
              />
            </div>
          </CardWrapper>
        );
      })}
    </div>
  );
};

export default EnhancedFriendsList;





// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/GameModelSelector.tsx


import React from "react";

const modes = [
  {
    name: "Single Player",
    img: "/button_img/single.png",
  },
  {
    name: "Multiplayer",
    img: "/button_img/mlti.png",
  },
  {
    name: "Tournament",
    img: "/button_img/tourn.png",
  },
];

const GameModeSelector: React.FC = () => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        gap-4
      "
    >
      {modes.map((mode, index) => (
        <button
          key={index}
          onClick={() => alert(`${mode.name} clicked!`)}
          className="
            bg-transparent
            rounded-xl
            shadow-md
            overflow-hidden
            transform
            transition
            duration-300
            hover:scale-110
            hover:shadow-[0_0_20px_#00ff7f]
          "
        >
          <img
            src={mode.img}
            alt={mode.name}
            className="
              w-[240px]
              h-auto
              object-contain
              block
              transition
              duration-300
              hover:brightness-110
            "
          />
        </button>
      ))}
    </div>
  );
};

export default GameModeSelector;








// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/PlayArena.tsx


import React from 'react';

interface ArenaProps {
  username: string;
  opponentImage?: string | null;
  playerImage?: string | null;
  opponentName?: string;
}

const Arena: React.FC<ArenaProps> = ({
  username,
  opponentImage,
  playerImage,
  opponentName
}) => {
  return (
    <div className="
				flex
				flex-col
				items-center
				justify-center
				gap-4
				mt-8
				px-4
				sm:flex-row
				sm:gap-10
				sm:mt-10">
					
      {/* Player 1 */}
      <div className="
				h-32
				w-32
				sm:w-36
				sm:h-36
				md:w-40
				md:h-40
				lg:w-44
				lg:h-44
				xl:w-48
				xl:h-48
				rounded-full
				bg-gray-700
				bg-opacity-60
				shadow-inner
				overflow-hidden
				flex
				items-center
        drop-shadow-[0_0_8px_white]
				justify-center">
        {playerImage ? (
          <img
            src={playerImage}
            alt="Player 1"
            className="
              w-full
              h-full
              object-cover
              rounded-full"/>
        ) : (
          <div className="flex 
		  				flex-col 
						items-center 
						text-xs">
            <span className="font-semibold">Player 1</span>
            <span className="text-gray-300 mt-1">{username}</span>
          </div>
        )}
      </div>

      {/* VS */}
      <span className="text-xl font-bold text-red-400">VS</span>

      {/* Player 2 */}
      <div className="
				w-32
				h-32
				sm:w-36
				sm:h-36
				md:w-40
				md:h-40
				lg:w-44
				lg:h-44
				xl:w-48
				xl:h-48
				rounded-full
				bg-gray-700
				bg-opacity-60
				shadow-inner
				overflow-hidden
				flex
				items-center
				justify-center
        drop-shadow-[0_0_8px_white]
				relative">
        {opponentImage ? (
          <>
            <img
              src={opponentImage}
              alt="Bot"
              className="
                w-full
                h-full
                object-cover
                rounded-full"/>
            {opponentName && (
              <span className="
                absolute
                bottom-[-1.5rem]
                text-xs
                font-medium
                text-gray-300
              ">
                {opponentName}
              </span>
            )}
          </>
        ) : (
          <div className="flex
		  				flex-col 
						items-center 
						text-xs">
            <span className="font-semibold">Player 2</span>
            <span className="text-gray-300 mt-1">Waiting...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Arena;





// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/PlayerCard.tsx
import React from "react";
import UserHeader from "./UserHeader";
import { MatchResult, calculateUserStats } from "./types/UserInfo";

interface Props {
  name: string;
  online: boolean;
  wins: number;
  losses: number;
  onRemove?: () => void;
  onChallenge?: () => void;
  avatar?: string;
  history?: MatchResult[];
}

const PlayerCard: React.FC<Props> = ({
  name,
  online,
  wins,
  losses,
  onRemove,
  onChallenge,
  avatar = "/boots_img/robot.png",
  history = [],
}) => {
  const { winRate, latestDate, winsToday, lossesToday } = calculateUserStats(
    wins,
    losses,
    history
  );

  return (
    <div
      className="
      bg-gray-900
      rounded-xl
      p-4
      shadow-md
      space-y-4
      w-full
      flex
      flex-col
      items-center
    "
    >
      <UserHeader username={name} avatar={avatar} wins={wins} losses={winRate} />
      {latestDate && (
        <p className="text-sm 
					text-purple-300 
					text-center 
					font-semibold">
          {name} on {latestDate}: {winsToday} wins, {lossesToday} losses
        </p>
      )}
      <div className="flex gap-3 
	  				justify-center 
	  				flex-wrap pt-2">
        {onRemove && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            className="px-4 
					py-2 
					rounded-md 
					text-sm 
					font-semibold 
					text-red-400 
					border-2 
					border-red-500 
					hover:bg-red-600 
					hover:text-white 
					transition 
					duration-300 
					shadow-[0_0_12px_#ff4d4d] 
					hover:shadow-[0_0_18px_#ff4d4d]"
          >
            Remove
          </button>
        )}
        {onChallenge && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onChallenge();
            }}
            className="px-4 
					py-2 
					rounded-md 
					text-sm 
					font-semibold 
					text-cyan-300 
					border-2 
					border-cyan-400 
					hover:bg-cyan-500 
					hover:text-black 
					transition 
					duration-300 
					shadow-[0_0_12px_#00ffff] 
					hover:shadow-[0_0_18px_#00ffff]"
          >
            Challenge
          </button>
        )}
      </div>
    </div>
  );
};

export default PlayerCard;









// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/PlayersList.tsx

import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import { CardWrapper } from "./types/ui";
import { toast } from 'react-hot-toast';
import { UserInfo } from "./types/UserInfo"; // Импортируем UserInfo

type Props = {
  players: UserInfo[]; // Заменяем EnhancedFriend на UserInfo
};

const PlayersList: React.FC<Props> = ({ players }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="
      flex 
      flex-col 
      gap-2 
      overflow-y-auto 
      max-h-[500px] 
      pr-1 
      scrollbar-thin 
      scrollbar-thumb-white/60 
      scrollbar-track-transparent
    ">
      {players.map((player, index) => {
        const isExpanded = expandedIndex === index;

        return (
          <CardWrapper key={index} onClick={() => toggleExpand(index)}>
            <div className="flex justify-between items-center">
              <div className="font-bold text-base">{player.username}</div>
              <div className={`text-sm ${player.online ? "text-green-400" : "text-gray-400"}`}>
                {player.online ? "Online" : "Offline"}
              </div>
            </div>

            <div className={`
              transition-all 
              duration-300 
              overflow-hidden 
              ${isExpanded ? "max-h-[600px] mt-3" : "max-h-0"}
            `}>
              <PlayerCard
                name={player.username}
                online={player.online}
                wins={player.wins}
                losses={player.losses}
                avatar={player.avatar}
                history={player.history}
                onChallenge={() => toast.success(`Challenged ${player.username}`)}
              />
            </div>
          </CardWrapper>
        );
      })}
    </div>
  );
};

export default PlayersList;





// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/WinsLossChart.tsx

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from 'recharts';
import { MatchResult } from './types/UserInfo';
import MatchHistory from './MatchHistory';

interface WinLossChartProps {
  history?: MatchResult[];
}

const getLast7Dates = () => {
  const result: { date: string; weekday: string }[] = [];
  const options: Intl.DateTimeFormatOptions = { weekday: 'short' };

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const weekday = d.toLocaleDateString('en-US', options);
    result.push({ date: dateStr, weekday });
  }

  return result;
};

const transformHistoryToChartData = (history: MatchResult[] = []) => {
  const last7Days = getLast7Dates();

  return last7Days.map(({ date, weekday }) => {
    const dayMatches = history.filter((match) => match.date === date);
    const wins = dayMatches.filter((m) => m.result === 'win').length;
    const losses = dayMatches.filter((m) => m.result === 'loss').length;

    return {
      day: weekday,
      wins,
      losses,
    };
  });
};

const WinLossChart: React.FC<WinLossChartProps> = ({ history = [] }) => {
  const data = transformHistoryToChartData(history);

  return (
    <div
      className="
        w-full
        h-[min(360px,40vw)]
        bg-gray-800
        bg-opacity-50
        rounded-2xl
        p-4
        shadow-lg
      "
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={4} barCategoryGap={16}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis
            dataKey="day"
            stroke="#ccc"
            tick={{ fill: '#ccc', fontSize: 14 }}
          />
          <YAxis
            allowDecimals={false}
            stroke="#ccc"
            tick={{ fill: '#ccc', fontSize: 14 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#222',
              borderColor: '#00ffcc',
              color: '#fff',
              fontSize: '14px',
            }}
          />
          <Legend />
          <Bar dataKey="wins" fill="#10b981" name="Wins" />
          <Bar dataKey="losses" fill="#ef4444" name="Losses" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WinLossChart;







// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/Profile.tsx

import React, { useState, useEffect } from "react";
import PlayersList from "./PlayersList";
import BotCard from "./BotCard";
import { bots } from "./types/botsData";
import PlayArena from "./PlayArena";
import ProfileActions from "./ProfileActions";
import EnhancedFriendsList from "./EnhancedFriendsList";
import WinLossChart from "./WinsLossChart";
import ProfileModal from "./ProfileModal";
import { PrimaryButton } from "./types/ui";
import GameModeSelector from "./GameModelSelector";
import UserHeader from "./UserHeader";
import { UserInfo, MatchResult } from "./types/UserInfo";
import { toast } from "react-hot-toast";
import { defaultFriends, defaultPlayers } from "./types/fakeNames";

// Попытка импорта axios с проверкой
let axios: any;
try {
  axios = require("axios");
} catch (error) {
  console.warn("axios не установлен, используется локальный вариант загрузки данных");
  axios = null;
}

// Захардкоженные данные для локального варианта (только для user)
const defaultUser: UserInfo = {
  username: "Legend",
  avatar: "/prof_img/avatar.webp",
  email: "legend@example.com",
  firstName: "Legi",
  lastName: "Gnoman",
  password: "default",
  wins: 30,
  losses: 0,
  online: true,
  history: [
    { date: "2025-04-21", weekday: "Mon", result: "win" },
    { date: "2025-04-22", weekday: "Tue", result: "loss" },
    { date: "2025-04-23", weekday: "Wed", result: "win" },
    { date: "2025-04-23", weekday: "Wed", result: "win" },
    { date: "2025-04-23", weekday: "Wed", result: "loss" },
    { date: "2025-04-24", weekday: "Thu", result: "win" },
  ],
};

// Функции для взаимодействия с сервером (если axios доступен)
const fetchUserFromServer = async (): Promise<UserInfo> => {
  if (!axios) throw new Error("axios не доступен");
  const response = await axios.get("/api/user");
  return response.data;
};

const saveUserToServer = async (user: UserInfo): Promise<void> => {
  if (!axios) throw new Error("axios не доступен");
  await axios.post("/api/user", user);
};

const fetchFriendsFromServer = async (): Promise<UserInfo[]> => {
  if (!axios) throw new Error("axios не доступен");
  const response = await axios.get("/api/friends");
  return response.data.map((friend: UserInfo) => ({
    ...friend,
    onRemove: () => toast(`${friend.username} removed from friends 👋`),
    onChallenge: () => toast.success(`Challenge sent to ${friend.username}`),
  }));
};

const fetchPlayersFromServer = async (): Promise<UserInfo[]> => {
  if (!axios) throw new Error("axios не доступен");
  const response = await axios.get("/api/players");
  return response.data.map((player: UserInfo) => ({
    ...player,
    onChallenge: () => toast.success(`Challenged ${player.username}`),
  }));
};

// Локальная загрузка данных
const loadLocalData = () => ({
  user: defaultUser,
  friends: defaultFriends,
  players: defaultPlayers,
});

const Profile: React.FC = () => {
  const [selectedBot, setSelectedBot] = useState<(typeof bots)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserInfo | null>(null);
  const [friends, setFriends] = useState<UserInfo[]>([]);
  const [players, setPlayers] = useState<UserInfo[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Загрузка данных
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        if (axios) {
          const userData = await fetchUserFromServer();
          setUser(userData);

          const friendsData = await fetchFriendsFromServer();
          setFriends(friendsData);

          const playersData = await fetchPlayersFromServer();
          setPlayers(playersData);
        } else {
          const localData = loadLocalData();
          setUser(localData.user);
          setFriends(localData.friends);
          setPlayers(localData.players);
        }
      } catch (err) {
        console.error("Ошибка загрузки данных:", err);
        const localData = loadLocalData();
        setUser(localData.user);
        setFriends(localData.friends);
        setPlayers(localData.players);
        setError("Не удалось загрузить данные с сервера. Используются локальные данные.");
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Сохранение данных
  const saveUserData = async (updatedUser: UserInfo) => {
    try {
      if (axios) {
        await saveUserToServer(updatedUser);
      } else {
        console.warn("axios не доступен, данные сохранены локально");
      }
      setUser(updatedUser);
    } catch (err) {
      console.error("Ошибка сохранения данных:", err);
      setError("Не удалось сохранить данные. Пожалуйста, попробуйте снова.");
    }
  };

  // Обработчик сохранения из ProfileModal
  const handleSaveProfile = async (data: {
    avatar: string;
    username: string;
    email: string;
    password: string;
  }) => {
    if (!user) return;

    const updatedUser = {
      ...user,
      avatar: data.avatar,
      username: data.username,
      email: data.email,
      password: data.password || user.password,
    };
    await saveUserData(updatedUser);
    setIsModalOpen(false);
  };

  // Обработчик завершения игры
  const handleGameEnd = async (result: "win" | "loss") => {
    if (!user) return;

    const today = new Date().toISOString().split("T")[0];
    const weekday = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(new Date());

    const updatedUser = {
      ...user,
      history: [...user.history, { date: today, weekday, result }],
      wins: result === "win" ? user.wins + 1 : user.wins,
      losses: result === "loss" ? user.losses + 1 : user.losses,
    };

    await saveUserData(updatedUser);
  };

  // Обработчик нажатия на кнопку "PLAY"
  const handlePlayClick = () => {
    if (!selectedBot) {
      toast.error("Пожалуйста, выберите бота для игры!");
      return;
    }

    const result = Math.random() > 0.5 ? "win" : "loss";
    handleGameEnd(result);
    toast.success(`Игра завершена! Вы ${result === "win" ? "победили" : "проиграли"} против ${selectedBot.name}!`);
  };

  // Обработка состояний загрузки и ошибок
  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center text-white">
        Загрузка...
      </div>
    );
  }

  if (error && !user) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center text-white">
        {error}
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center text-white">
        Данные пользователя не найдены.
      </div>
    );
  }

  return (
    <>
      <div
        className="
          min-h-screen
          w-full
          text-white
          flex
          flex-col
          overflow-y-auto
          justify-between
        "
      >
        <div
          className="
            flex
            justify-between
            items-center
            px-6
            py-4
          "
        >
          <div
            className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-red-400
              via-indigo-300
              to-green-300
              text-2xl
              sm:text-3xl
              font-bold
              transition-transform
              duration-300
              ease-in-out
              hover:scale-110
            "
            style={{
              textShadow: `0 0 20px rgba(255, 255, 255, 0.3), 0 0 32px rgba(255, 0, 255, 0.3)`,
            }}
          >
            NEON PONG
          </div>
          <ProfileActions
            username={user.username}
            online={user.online}
            onProfileClick={() => setIsModalOpen(true)}
          />
        </div>

        <div
          className="
            hidden
            xl:grid
            xl:grid-cols-6
            gap-4
            px-4
            flex-grow
          "
        >
          <div
            className="
              pt-4
              flex
              flex-col
              items-start
              col-span-1
              max-w-[220px]
            "
          >
            <h2
              className="
                text-lg
                font-semibold
                mb-2
                text-left
                drop-shadow-[0_0_8px_red]
              "
            >
              Friends
            </h2>
            <EnhancedFriendsList friends={friends} />
          </div>

          <div
            className="
              pt-6
              col-span-1
              ml-12
            "
          >
            <WinLossChart history={user.history} />
          </div>

          <div
            className="
              pt-8
              flex
              flex-col
              items-center
              justify-start
              gap-6
              col-span-2
            "
          >
            <UserHeader
              username={user.username}
              avatar={user.avatar}
              wins={user.wins}
              losses={user.losses}
              history={user.history}
            />
            <PrimaryButton onClick={handlePlayClick}>PLAY</PrimaryButton>
            <PlayArena
              username={user.username}
              opponentImage={selectedBot?.image ?? null}
              opponentName={selectedBot?.name}
              playerImage={user.avatar}
            />
          </div>

          <div
            className="
              pt-8
              flex
              justify-center
              col-span-1
            "
          >
            <div
              className="
                flex
                flex-col
                items-center
                justify-start
                pt-5
                px-2
                xl:px-5
                w-full
                max-w-[320px]
                xl:max-w-full
              "
            >
              <GameModeSelector />
            </div>
          </div>

          <div
            className="
              pt-4
              flex
              flex-col
              items-end
              col-span-1
              max-w-[220px]
              ml-auto
            "
          >
            <h2
              className="
                text-lg
                font-semibold
                mb-2
                text-right
                drop-shadow-[0_0_8px_red]
              "
            >
              Players
            </h2>
            <PlayersList players={players} />
          </div>
        </div>

        <div
          className="
            flex
            xl:hidden
            flex-col
            items-center
            px-4
            gap-4
          "
        >
          <div
            className="
              w-full
              max-w-md
            "
          >
            <WinLossChart history={user.history} />
          </div>

          <UserHeader
            username={user.username}
            avatar={user.avatar}
            wins={user.wins}
            losses={user.losses}
            history={user.history}
          />
          <PrimaryButton onClick={handlePlayClick}>PLAY</PrimaryButton>
          <PlayArena
            username={user.username}
            opponentImage={selectedBot?.image ?? null}
            opponentName={selectedBot?.name}
            playerImage={user.avatar}
          />

          <div
            className="
              w-full
              max-w-xs
              mt-4
            "
          >
            <GameModeSelector />
          </div>

          <div
            className="
              w-full
              flex
              flex-col
              sm:flex-row
              sm:justify-between
              gap-4
            "
          >
            <div
              className="
                w-full
                sm:w-1/2
                min-w-0
              "
            >
              <h2
                className="
                  text-lg
                  font-semibold
                  mb-2
                  text-left
                  drop-shadow-[0_0_8px_red]
                "
              >
                Friends
              </h2>
              <EnhancedFriendsList friends={friends} />
            </div>
            <div
              className="
                w-full
                sm:w-1/2
                min-w-0
                flex
                flex-col
                items-end
              "
            >
              <h2
                className="
                  text-lg
                  font-semibold
                  mb-2
                  text-right
                  drop-shadow-[0_0_8px_red]
                "
              >
                Players
              </h2>
              <PlayersList players={players} />
            </div>
          </div>
        </div>

        <div
          className="
            bg-gray-900
            bg-opacity-70
            w-full
            flex
            flex-col
            text-center
            pt-2
            px-4
            pb-5
            mt-4
          "
        >
          <p
            className="
              text-lg
              text-purple-400
              font-extrabold
              uppercase
              tracking-wide
              drop-shadow-[0_0_8px_white]
            "
          >
            Fighters — choose your rival!
          </p>

          <div className="pt-2">
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
                gap-3
                w-full
                px-2
                sm:px-4
              "
            >
              {bots.map((bot, idx) => (
                <BotCard
                  key={idx}
                  {...bot}
                  onSelect={() => setSelectedBot(bot)}
                  selected={selectedBot?.image === bot.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ProfileModal
          onClose={() => setIsModalOpen(false)}
          userData={{
            avatar: user.avatar,
            username: user.username,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
          }}
          onSave={handleSaveProfile}
        />
      )}
    </>
  );
};

export default Profile;



// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/ProfileActions.tsx

import React from 'react';

interface ProfileActionsProps {
	username: string;
	online: boolean;
	onProfileClick: () => void;
  }
  

const ProfileActions: React.FC<ProfileActionsProps> = ({ username, online, onProfileClick }) => {
	const handleLogout = () => alert('Logging out...');

	return (
		<div className="flex
                    items-center
                    gap-4">
			<span className={`text-sm
                  font-bold
                  ${online ? 'text-green-400' : 'text-gray-400'}`}>
				{username}
			</span>
				
			{/* PROFILE */}
			<button
				onClick={onProfileClick}
				className="px-4
							py-2
							rounded-2xl 
							text-base 
							font-bold 
							bg-transparent 
							outline-3 
							outline-offset-2 
							outline-double 
							border
							border-emerald-200
							text-white 
							transition-all 
							duration-300 
							ease-in-out 
							hover:scale-110"
				style={{ 
					textShadow:`
					0 0 4px rgba(102, 0, 255, 0.9),
					0 0 8px rgba(102, 0, 255, 0.7),
					0 0 16px rgba(102, 0, 255, 0.5),
					0 0 32px rgba(102, 0, 255, 0.3)
					`,
				}}
			
			>
				Profile
			</button>
			
			{/* LogOut */}
			<button
				onClick={handleLogout}
				className="px-4
							py-2
							rounded-2xl 
							text-base 
							font-bold 
							bg-transparent 
							outline-3 
							outline-offset-2 
							outline-double 
							border
							border-emerald-200
							text-white 
							transition-all 
							duration-300 
							ease-in-out 
							hover:scale-110"
				style={{ 
					textShadow:`
					0 0 4px rgba(102, 0, 255, 0.9),
					0 0 8px rgba(102, 0, 255, 0.7),
					0 0 16px rgba(102, 0, 255, 0.5),
					0 0 32px rgba(102, 0, 255, 0.3)
					`,
				}}
			
			>
				LogOut
			</button>
		</div>
	);
};

export default ProfileActions;




// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/ProfileModal.tsx

import React, { useState } from "react";
import { UserInfo } from "./types/UserInfo";

interface ProfileModalProps {
  onClose: () => void;
  onSave: (data: {
    avatar: string;
    username: string;
    email: string;
    password: string;
  }) => void;
  userData: Pick<UserInfo, "avatar" | "username" | "email" | "firstName" | "lastName">;
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  onClose,
  onSave,
  userData,
}) => {
  const [avatar, setAvatar] = useState(userData.avatar);
  const [username, setUsername] = useState(userData.username);
  const [email, setEmail] = useState(userData.email);
  const [password, setPassword] = useState("");

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black
        bg-opacity-60
      "
    >
      <div
        className="
          bg-gray-900
          text-white
          rounded-xl
          p-6
          w-full
          max-w-md
          space-y-4
          shadow-2xl
        "
      >
        <h2 className="text-2xl font-bold text-center">Edit Profile</h2>

        {/* Avatar */}
        <div className="flex flex-col items-center gap-2">
          <img
            src={avatar}
            alt="Avatar"
            className="w-24 h-24 rounded-full object-cover border-2 border-white"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="text-sm text-gray-300"
          />
        </div>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
        />

        {/* Static fields */}
        <div className="text-sm text-gray-400 space-y-1">
          <p>First Name: {userData.firstName}</p>
          <p>Last Name: {userData.lastName}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded"
          >
            Cancel
          </button>
          <button
            onClick={() =>
              onSave({
                avatar,
                username,
                email,
                password,
              })
            }
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;






// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/UserHeader.tsx


import React from "react";
import Avatar from "./Avatar";
import { MatchResult, calculateUserStats } from "./types/UserInfo";

interface UserHeaderProps {
	username: string;
	avatar: string;
	wins: number;
	losses: number | string;
	history?: MatchResult[];
	className?: string;
}

const UserHeader: React.FC<UserHeaderProps> = ({
	username,
	avatar,
	wins,
	losses,
	history = [],
	className,
}) => {
	const { winRate, latestDate, winsToday, lossesToday } = calculateUserStats(
		wins,
		losses,
		history
	);

	return (
		<div
			className={`
      flex
      flex-col
      items-center
      text-center
      gap-3
      ${className ?? ""}
    `}
		>
			<Avatar
				src={avatar}
				username={username}
				className="
          w-32
          h-32
          sm:w-40
          sm:h-40
          md:w-44
          md:h-44
          xl:w-48
          xl:h-48
        "
			/>
			<h1
				className="
        text-xl
        sm:text-2xl
        font-bold
      "
			>
				{username}
			</h1>
			<p
				className="
        text-gray-300
        text-sm
        sm:text-base
      "
			>
				Wins: {wins} |{" "}
				{typeof losses === "number" ? `Winrate: ${winRate}%` : `Losses: ${losses}`}
			</p>
			{latestDate && (
				<p
					className="
          text-sm
          text-purple-300
        "
				>
					Last Game: {latestDate} — Wins: {winsToday}, Losses: {lossesToday}
				</p>
			)}
		</div>
	);
};

export default UserHeader;


  
  
  
  
  

  // /Users/olegoman/WORK/HIVE/ft_transendense/client/src/App.tsx

  import AppRouter from './router/AppRouter'
  import './index.css';
  import Profile from './pages/Profile/Profile';
  import { Toaster } from 'react-hot-toast';
  import NeonCursor from './components/NeonCursor';
  
  function App() {
  
	return (
	  <>
		{/* <AppRouter/> */}
		<NeonCursor />
		<Profile />
		<Toaster position="top-right" reverseOrder={false} />
	  </>
	  
	)
  }
  
  export default App
  


// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    color: white;
    overflow-x: auto;
    overflow-y: auto;
  }

  body {
    background-color: #1a0a2d;
    background-image: 
      radial-gradient(circle at 20% 30%, rgba(255, 153, 255, 0.4), transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(102, 255, 255, 0.3), transparent 50%),
      radial-gradient(circle at 50% 80%, rgba(255, 255, 204, 0.2), transparent 50%),
      linear-gradient(135deg, #4b0082, #6a0dad, #1f0036);
    background-blend-mode: screen, overlay;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  /* Скрываем стандартный курсор только для устройств без сенсорного ввода */
  @media (hover: hover) {
    body {
      cursor: none;
    }
  }
}



// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

