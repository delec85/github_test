//!COMPONENTS

// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/components/HeaderButton.tsx

import { useNavigate } from "react-router-dom";

const HeaderButton = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-4 left-6 z-50">
      <button
        onClick={() => navigate("/")}
        className="text-transparent bg-clip-text 
             bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300
             text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold 
             bg-transparent 
             transition-transform duration-300 ease-in-out 
             hover:scale-110"
             style={{ 
              textShadow:`
                2px 2px 10px rgba(255, 255, 255, 0.3),
                0px 0px 25px rgba(209, 255, 249, 0.6)
                `,
            }}
      >
        NEON PONG
      </button>
    </div>
  );
};

export default HeaderButton;


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






// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/components/LogIn_SignIn.tsx

import React from 'react';

const AuthButtons = ({ openModal }: { openModal: (mode: "login" | "signup") => void }) => {
  return (
    <div className="fixed top-4 right-8 z-50 flex gap-4">
      <button
        onClick={()=> openModal("login")}
        className="px-2 py-1 rounded-lg font-bold bg-transparent outline-3 outline-offset-2 outline-double 
            border border-blue-300  text-white transition-all duration-300 ease-in-out hover:scale-110
            text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm"
		style={{ 
			textShadow:`
			  0 0 4px rgba(102, 0, 255, 0.9),
			  0 0 8px rgba(102, 0, 255, 0.7),
			  0 0 16px rgba(102, 0, 255, 0.5),
			  0 0 32px rgba(102, 0, 255, 0.3)
			  `,
		  }}
	    >
        LOG IN
      </button>
      <button
        onClick={()=> openModal("signup")}
        className="px-2 py-1 rounded-lg font-bold bg-transparent outline-3 outline-offset-2 outline-double
             border border-blue-300  text-white transition-all duration-300 ease-in-out hover:scale-110
             text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm"
		style={{ 
			textShadow:`
			  0 0 4px rgba(102, 0, 255, 0.9),
			  0 0 8px rgba(102, 0, 255, 0.7),
			  0 0 16px rgba(102, 0, 255, 0.5),
			  0 0 32px rgba(102, 0, 255, 0.3)
			  `,
		  }}
	    >
        SIGN UP
      </button>
    </div>
  );
};


export default AuthButtons;

// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/components/Layout.tsx

import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AuthPage from '../pages/AuthPage/AuthPage';

const Layout: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'login' | 'signup'>('login');
  const location = useLocation();

  const openModal = (mode: 'login' | 'signup' = 'login') => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Не показываем модальное окно, если текущий маршрут /login или /signup
  const isAuthRoute = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div>
      <Outlet context={{ openModal }} />
      {isModalOpen && !isAuthRoute && <AuthPage mode={modalMode} onClose={closeModal} />}
    </div>
  );
};

export default Layout;


//! ROUTER


// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/router/AppRouter.tsx

import MainPage from '../pages/MainPage/MainPage';
import Profile from '../pages/Profile/Profile';
import AuthPage from '../pages/AuthPage/AuthPage';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<AuthPage mode="login" onClose={() => {}} />} />
          <Route path="/signup" element={<AuthPage mode="signup" onClose={() => {}} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

// AUTHPAGE

// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/AuthPage/AuthPage.css

.form_wrap {
  width: 400px;
  margin: 2rem auto;
}

.form1 {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form_group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.error_message {
  /* color: rgb(255, 0, 0); */
  font-size: 20px;
  margin-top: 10px;
}




// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/AuthPage/AuthPage.tsx

import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import SignInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";

const AuthPage = ({ onClose, mode }: { onClose: () => void; mode: "login" | "signup" }) => {
  const [isLogin, setIsLogin] = useState(mode === "login");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white bg-opacity-30 rounded-lg shadow-xl p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-blue-100 hover:text-red-500 text-lg font-bold"
        >
          ✕
        </button>
        {isLogin ? (
          <SignInForm onSuccess={onClose} />
        ) : (
          <SignUpForm onSuccess={onClose} />
        )}
        <div className="text-center mt-4">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-200 hover:underline"
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;





// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/AuthPage/LogInForm.tsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SignInForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      localStorage.setItem("token", data.accessToken); // Store JWT token
      console.log("Logged in with JWT:", data.accessToken);
      toast.success("Successfully logged in!");
      onSuccess(); // Close modal or redirect
      navigate("/profile");
    } catch (error: any) {
      setError(error.message || "Login failed");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl tracking-wide font-bold mb-5 text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        {err && <p className="text-red-500">{err}</p>}
        <div className="space-y-2">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-black text-white bg-opacity-30 border rounded-lg focus:outline-none 
                    focus:ring-2 focus:ring-indigo-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-black text-white bg-opacity-30 border rounded-lg focus:outline-none 
                    focus:ring-2 focus:ring-indigo-800"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-1/2 bg-indigo-950 hover:bg-rose-950 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;




// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/AuthPage/SignUpForm.tsx


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SignUpFormProps {
  onSuccess?: () => void;  // Made optional if not always provided
  closeModal?: () => void;  // Add closeModal prop
}

const SignUpForm = ({ onSuccess, closeModal }: SignUpFormProps) => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, nickname, email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      localStorage.setItem("token", data.accessToken);
      console.log("Signed up with JWT:", data.accessToken);

      // Call both success handlers if they exist
      onSuccess?.();
      closeModal?.();

      navigate("/profile");
    } catch (error: any) {
      setError(error.message || "Signup failed");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl tracking-wide font-bold mb-5 text-center">Registration</h2>
      <form onSubmit={handleSignUp} className="space-y-4">
        {err && <p className="text-red-500 text-center">{err}</p>}
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-black text-white bg-opacity-30 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Nickname"
            className="w-full px-4 py-2 bg-black text-white bg-opacity-30 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-black text-white bg-opacity-30 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-black text-white bg-opacity-30 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-1/2 bg-indigo-950 hover:bg-rose-950 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;




//! MAINPAGE

// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/MainPage/MainPage.tsx

import React from 'react';
import myImage from '../../assets/mainPageImages/Main_Image.png';
import { useOutletContext } from "react-router-dom";

const MainPage = () => {
  const { openModal } = useOutletContext<{ openModal: (mode?: 'login' | 'signup') => void }>();
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="container mx-auto flex flex-col items-center justify-center relative">
        <div className="relative w-full pt-10">
          <img 
            src={myImage} 
            alt="Main Visual" 
            className="w-full h-auto rounded-xl shadow-neon transition-shadow duration-300 ease-in-out"
          />
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
            <button 
              className="rounded-lg outline-3 outline-offset-2 outline-double border-4 border-blue-300 
                        px-8 sm:px-10 md:px-14 py-4 sm:py-3 md:py-5
                        font-bold text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                        bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-300 to-sky-500
                        hover:from-red-50 hover:via-indigo-200 hover:to-purple-100
                        animate-pulse hover:animate-none
                        transition-all duration-300 ease-in-out hover:scale-110 w-full sm:w-auto text-center"
              style={{ 
                textShadow: '2px 2px 10px rgba(209, 255, 249, 0.6)', 
                boxShadow: '0 0 15px 6px rgba(117, 184, 255, 0.5)'
              }}
              onClick={() => openModal('login')} // Открываем логин по умолчанию
            >
              START GAME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;






//! CLIENT




// client/public/boots_img
 //* all bots img

 // client/public/prof_img/avatar1.webp


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
	id: string;
	username: string;
	avatar: string;
	email: string;
	name: string;
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
    name: "Zoe",
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
    name: "Mika",
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
    name: "Alex",
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
    name: "Tina",
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
import { UserInfo } from './types/UserInfo';

interface AvatarProps {
  user: Pick<UserInfo, "avatar" | "username">;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ user, className }) => {
  const [imgSrc, setImgSrc] = useState(user.avatar);
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  useEffect(() => {
    setImgSrc(user.avatar);
    setIsImageLoaded(true);
  }, [user.avatar]);

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
            alt={user.username}
            className="w-full h-full object-cover"
            onError={() => setIsImageLoaded(false)}
          />
        ) : (
          <span className="text-sm font-semibold px-2">{user.username}</span>
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

interface Props {
  friends: UserInfo[];
}

const EnhancedFriendsList: React.FC<Props> = ({ friends }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className="
        flex
        flex-col
        gap-2
        overflow-y-auto
        max-h-[500px]
        pr-1
        scrollbar-thin
        scrollbar-thumb-white/60
        scrollbar-track-transparent
      "
    >
      {friends.map((friend, index) => {
        const isExpanded = expandedIndex === index;

        return (
          <CardWrapper key={index} onClick={() => toggleExpand(index)}>
            <div className="flex justify-between items-center">
              <div className="font-bold text-base">{friend.username}</div>
              <div
                className={`text-sm ${friend.online ? "text-green-400" : "text-gray-400"}`}
              >
                {friend.online ? "Online" : "Offline"}
              </div>
            </div>
            <div
              className={`
                transition-all
                duration-300
                overflow-hidden
                ${isExpanded ? "max-h-[600px] mt-3" : "max-h-0"}
              `}
            >
              <PlayerCard user={friend} />
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
        gap-9
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
import { UserInfo } from './types/UserInfo';

interface ArenaProps {
  user: Pick<UserInfo, "username" | "avatar">;
  opponentImage?: string | null;
  opponentName?: string;
}

const Arena: React.FC<ArenaProps> = ({
  user,
  opponentImage,
  opponentName,
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
        {user.avatar ? (
          <img
            src={user.avatar}
            alt="Player 1"
            className="
              w-full
              h-full
              object-cover
              rounded-full"/>
        ) : (
          <div className="flex flex-col items-center text-xs">
            <span className="font-semibold">Player 1</span>
            <span className="text-gray-300 mt-1">{user.username}</span>
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
          <div className="flex flex-col items-center text-xs">
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
import { UserInfo } from "./types/UserInfo";

interface Props {
  user: UserInfo;
}

const PlayerCard: React.FC<Props> = ({ user }) => {
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
      <UserHeader
        user={{
          username: user.username,
          avatar: user.avatar,
          wins: user.wins,
          losses: user.losses,
          history: user.history,
        }}
      />
      <div
        className="
          flex
          gap-3
          justify-center
          flex-wrap
          pt-2
        "
      >
        {user.onRemove && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              user.onRemove!();
            }}
            className="
              px-4
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
              hover:shadow-[0_0_18px_#ff4d4d]
            "
          >
            Remove
          </button>
        )}
        {user.onChallenge && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              user.onChallenge!();
            }}
            className="
              px-4
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
              hover:shadow-[0_0_18px_#00ffff]
            "
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
import { UserInfo } from "./types/UserInfo";

type Props = {
  players: UserInfo[];
};

const PlayersList: React.FC<Props> = ({ players }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className="
        flex
        flex-col
        gap-2
        overflow-y-auto
        max-h-[500px]
        pr-1
        scrollbar-thin
        scrollbar-thumb-white/60
        scrollbar-track-transparent
      "
    >
      {players.map((player, index) => {
        const isExpanded = expandedIndex === index;

        return (
          <CardWrapper key={index} onClick={() => toggleExpand(index)}>
            <div className="flex justify-between items-center">
              <div className="font-bold text-base">{player.username}</div>
              <div
                className={`text-sm ${player.online ? "text-green-400" : "text-gray-400"}`}
              >
                {player.online ? "Online" : "Offline"}
              </div>
            </div>
            <div
              className={`
                transition-all
                duration-300
                overflow-hidden
                ${isExpanded ? "max-h-[600px] mt-3" : "max-h-0"}
              `}
            >
              <PlayerCard user={player} />
            </div>
          </CardWrapper>
        );
      })}
    </div>
  );
};

export default PlayersList;



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
import ProfileModal from "./ProfileModal";
import { PrimaryButton } from "./types/ui";
import GameModeSelector from "./GameModeSelector";
import UserHeader from "./UserHeader";
import { UserInfo, MatchResult } from "./types/UserInfo";
import { toast } from "react-hot-toast";
import { Buffer } from 'buffer';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const [selectedBot, setSelectedBot] = useState<(typeof bots)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserInfo | null>(null);
  const [friends, setFriends] = useState<UserInfo[]>([]);
  const [players, setPlayers] = useState<UserInfo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const decodeToken = (token: string) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      const decoded = JSON.parse(jsonPayload);
      console.log("Decoded token:", decoded);
      return decoded;
    } catch (e) {
      console.error("Failed to decode token:", e);
      return null; // Возвращаем null вместо ошибки
    }
  };

  const fetchDataFromServer = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found in localStorage");
      throw new Error("No token found, please log in.");
    }

    console.log("Fetching data with token:", token);
    const response = await fetch("http://localhost:3000/users", {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(`Server responded with status ${response.status}: ${response.statusText}`);
      throw new Error(`Failed to fetch users: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Server response:", data);

    if (!data.users || !Array.isArray(data.users)) {
      console.error("Invalid server response: 'users' field is missing or not an array");
      throw new Error("Invalid server response");
    }

    // Поскольку id в токене отсутствует, будем считать последнего зарегистрированного пользователя текущим
    const currentUser = data.users[data.users.length - 1]; // Временное решение: берём последнего пользователя
    if (!currentUser) {
      console.error("No users found in response:", data.users);
      throw new Error("Current user not found");
    }

    const userData: UserInfo = {
      id: currentUser.id || 'unknown',
      username: currentUser.nickname || currentUser.name || "Unknown",
      avatar: currentUser.image ? `data:image/jpeg;base64,${Buffer.from(currentUser.image).toString('base64')}` : "/prof_img/avatar1.png",
      email: currentUser.email || "",
      name: currentUser.name || "",
      password: "",
      wins: 0,
      losses: 0,
      online: !!currentUser.online,
      history: [],
    };

    // Оставляем friends и players пустыми
    const friendsData: UserInfo[] = [];
    const playersData: UserInfo[] = [];

    return { userData, friendsData, playersData };
  };

  const saveUserData = async (updatedUser: UserInfo) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
        throw new Error("No token found, please log in.");
      }

      await fetch("http://localhost:3000/updateProfile", {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: updatedUser.id,
          name: updatedUser.name,
          nickname: updatedUser.username,
          password: updatedUser.password || undefined,
        }),
      });

      if (updatedUser.avatar && updatedUser.avatar.startsWith("data:image")) {
        const base64Data = updatedUser.avatar.split(',')[1];
        const blob = await (await fetch(`data:image/jpeg;base64,${base64Data}`)).blob();
        const formData = new FormData();
        formData.append("id", updatedUser.id);
        formData.append("file", blob, "avatar.jpg");

        await fetch("http://localhost:3000/uploadPicture", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
          body: formData,
        });
      }

      setUser(updatedUser);
      toast.success('Profile updated successfully!');
    } catch (err) {
      console.error("Error saving data:", err);
      setError("Couldn’t save the data. Please try again.");
      toast.error("Couldn’t save the data. Please try again.");
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const { userData, friendsData, playersData } = await fetchDataFromServer();
        setUser(userData);
        setFriends(friendsData);
        setPlayers(playersData);
      } catch (err: any) {
        console.error("Detailed error:", err.message, err.stack);
        setError(`Couldn’t load data from the server: ${err.message}`);
        toast.error(`Couldn’t load data: ${err.message}`);
        if (err.message.includes("No token found") || err.message.includes("Current user not found")) {
          localStorage.removeItem("token");
          navigate("/signup");
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [navigate]);

  const handleSaveProfile = async (data: {
    avatar: string;
    username: string;
    password: string;
  }) => {
    if (!user) return;

    const updatedUser: UserInfo = {
      ...user,
      avatar: data.avatar,
      username: data.username,
      password: data.password || user.password,
    };
    await saveUserData(updatedUser);
    setIsModalOpen(false);
  };

  const handleGameEnd = async (result: "win" | "loss") => {
    if (!user) return;

    const today = new Date().toISOString().split("T")[0];
    const weekday = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(new Date());

    const updatedUser: UserInfo = {
      ...user,
      history: [...user.history, { date: today, weekday, result }],
      wins: result === "win" ? user.wins + 1 : user.wins,
      losses: result === "loss" ? user.losses + 1 : user.losses,
    };

    setUser(updatedUser);
  };

  const handlePlayClick = () => {
    if (!user) {
      toast.error("User data not loaded!");
      return;
    }

    if (!selectedBot) {
      toast.error("Please select a bot to play with first!");
      return;
    }

    const result = Math.random() > 0.5 ? "win" : "loss";
    handleGameEnd(result);
    toast.success(`Game over! You ${result === "win" ? "won" : "lost"} against ${selectedBot.name}!`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center text-white">
        Loading data, please wait...
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
        Couldn’t find user data.
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen w-full text-white flex flex-col overflow-y-auto justify-between">
        <div className="flex justify-between items-center px-6 py-4">
          <div
            className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-indigo-300 to-green-300 text-2xl sm:text-3xl font-bold transition-transform duration-300 ease-in-out hover:scale-110"
            style={{ textShadow: `0 0 20px rgba(255, 255, 255, 0.3), 0 0 32px rgba(255, 0, 255, 0.3)` }}
          >
            NEON PONG
          </div>
          <ProfileActions
            user={{ username: user.username, online: user.online, email: user.email }}
            onProfileClick={() => setIsModalOpen(true)}
          />
        </div>

        <div className="hidden xl:grid xl:grid-cols-6 gap-4 px-4 flex-grow">
          <div className="pt-4 flex flex-col items-start col-span-1 max-w-[220px]">
            <h2 className="text-lg font-semibold mb-2 text-left drop-shadow-[0_0_8px_red]">Friends</h2>
            <EnhancedFriendsList friends={friends} />
          </div>
          <div className="pt-6 col-span-1 mx-auto">
            <div className="w-full max-w-[750px] bg-gray-800 bg-opacity-40 rounded-lg p-1 shadow-lg ml-14 mt-32">
              <video src="/videos/fight_gif.mp4" autoPlay loop muted playsInline className="w-full h-auto rounded-lg" />
            </div>
          </div>
          <div className="pt-8 flex flex-col items-center justify-start gap-6 col-span-2">
            <UserHeader
              user={{ username: user.username, avatar: user.avatar, wins: user.wins, losses: user.losses, history: user.history }}
            />
            <PrimaryButton onClick={handlePlayClick}>PLAY</PrimaryButton>
            <PlayArena
              user={{ username: user.username, avatar: user.avatar }}
              opponentImage={selectedBot ? selectedBot.image : null}
              opponentName={selectedBot ? selectedBot.name : undefined}
            />
          </div>
          <div className="pt-8 flex justify-center col-span-1">
            <div className="flex flex-col items-center justify-start pt-5 px-2 xl:px-5 w-full max-w-[320px] xl:max-w-full">
              <GameModeSelector />
            </div>
          </div>
          <div className="pt-4 flex flex-col items-end col-span-1 max-w-[220px] ml-auto">
            <h2 className="text-lg font-semibold mb-2 text-right drop-shadow-[0_0_8px_red]">Players</h2>
            <PlayersList players={players} />
          </div>
        </div>

        <div className="flex xl:hidden flex-col items-center px-4 gap-4">
          <UserHeader
            user={{ username: user.username, avatar: user.avatar, wins: user.wins, losses: user.losses, history: user.history }}
          />
          <PrimaryButton onClick={handlePlayClick}>PLAY</PrimaryButton>
          <PlayArena
            user={{ username: user.username, avatar: user.avatar }}
            opponentImage={selectedBot ? selectedBot.image : null}
            opponentName={selectedBot ? selectedBot.name : undefined}
          />
          <div className="w-full max-w-xs mt-4">
            <GameModeSelector />
          </div>
          <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-4">
            <div className="w-full sm:w-1/2 min-w-0">
              <h2 className="text-lg font-semibold mb-2 text-left drop-shadow-[0_0_8px_red]">Friends</h2>
              <EnhancedFriendsList friends={friends} />
            </div>
            <div className="w-full sm:w-1/2 min-w-0 flex flex-col items-end">
              <h2 className="text-lg font-semibold mb-2 text-right drop-shadow-[0_0_8px_red]">Players</h2>
              <PlayersList players={players} />
            </div>
          </div>
          <div className="w-full mt-8">
            <div className="w-full max-w-[600px] bg-gray-800 bg-opacity-50 rounded-2xl p-4 shadow-lg mx-auto">
              <video src="/videos/fight_gif.mp4" autoPlay loop muted playsInline className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>

        <div className="bg-gray-900 bg-opacity-70 w-full flex flex-col text-center pt-2 px-4 pb-5 mt-4">
          <p className="text-lg text-purple-400 font-extrabold uppercase tracking-wide drop-shadow-[0_0_8px_white]">
            Fighters — choose your rival!
          </p>
          <div className="pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 w-full px-2 sm:px-4">
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
          userData={{ avatar: user.avatar, username: user.username, name: user.name }}
          onSave={handleSaveProfile}
        />
      )}
    </>
  );
};

export default Profile;






// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/ProfileActions.tsx
import React from "react";
import { UserInfo } from "./types/UserInfo";
import { toast } from "react-hot-toast";

interface ProfileActionsProps {
  user: Pick<UserInfo, "username" | "online" | "email">;
  onProfileClick: () => void;
}

const ProfileActions: React.FC<ProfileActionsProps> = ({ user, onProfileClick }) => {
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email }),
      });
      if (!response.ok) throw new Error("Failed to logout");
      toast.success("Logged out successfully!");
      // Можно добавить редирект на страницу логина, если есть
    } catch (err) {
      console.error("Logout error:", err);
      toast.error("Failed to logout. Please try again.");
    }
  };

  return (
    <div className="flex items-center gap-4">
      <span className={`text-sm font-bold ${user.online ? "text-green-400" : "text-gray-400"}`}>
        {user.username}
      </span>
      {/* PROFILE */}
      <button
        onClick={onProfileClick}
        className="px-4 py-2 rounded-2xl text-base font-bold bg-transparent outline-3 outline-offset-2 outline-double border border-emerald-200 text-white transition-all duration-300 ease-in-out hover:scale-110"
        style={{
          textShadow: `
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
        className="px-4 py-2 rounded-2xl text-base font-bold bg-transparent outline-3 outline-offset-2 outline-double border border-emerald-200 text-white transition-all duration-300 ease-in-out hover:scale-110"
        style={{
          textShadow: `
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
    password: string;
  }) => void;
  userData: Pick<UserInfo, "avatar" | "username" | "name">;
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  onClose,
  onSave,
  userData,
}) => {
  const [avatar, setAvatar] = useState(userData.avatar);
  const [username, setUsername] = useState(userData.username);
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
            <p>Name: {userData.name}</p>
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
import { UserInfo, calculateUserStats } from "./types/UserInfo";

interface UserHeaderProps {
  user: Pick<UserInfo, "username" | "avatar" | "wins" | "losses" | "history">;
}

const UserHeader: React.FC<UserHeaderProps> = ({ user }) => {
  const { winRate, latestDate, winsToday, lossesToday } = calculateUserStats(
    user.wins,
    user.losses,
    user.history
  );

  return (
    <div
      className="
        flex
        flex-col
        items-center
        gap-4
        w-full
        max-w-md
        mx-auto
        text-center
      "
    >
      <Avatar user={user} className="w-24 h-24 sm:w-32 sm:h-32" />
      <h2 className="text-xl sm:text-2xl font-bold">{user.username}</h2>
      <div className="text-sm sm:text-base space-y-1">
        <p>
          Wins: <span className="text-green-400">{user.wins}</span> | Losses:{" "}
          <span className="text-red-400">{user.losses}</span>
        </p>
        <p>
          Win Rate: <span className="text-cyan-400">{winRate}%</span>
        </p>
        {latestDate && (
          <p>
            Last Game: {latestDate} — Wins:{" "}
            <span className="text-green-400">{winsToday}</span>, Losses:{" "}
            <span className="text-red-400">{lossesToday}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default UserHeader;
  
  
  
  

  // /Users/olegoman/WORK/HIVE/ft_transendense/client/src/App.tsx

  import AppRouter from './router/AppRouter'
  import './index.css';
  import { Toaster } from 'react-hot-toast';
  import NeonCursor from './components/NeonCursor';
  //import Profile from './pages/Profile/Profile';
  
  function App() {
    return (
      <>
        <AppRouter/>
        <NeonCursor />
        {/* <Profile /> */}
        <Toaster position="top-right" reverseOrder={false} />
      </>
    );
  }
  
  export default App;
  


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






//! SERVER

// /home/ogoman/HIVE/Projects/ft_transcendence/server/controllers/auth.js

// import HttpError from "../http-error.js";
import db from "../database/database.js"; // Using better-sqlite3

export async function signup(req, reply) {
  console.log("We are in SIGNUP middleware");

  const { name, nickname, email, password } = req.body;

  // Validate request body
  if (!name || !password || !email || !nickname) {
    return reply.code(400).send({ message: "No pass or name or email" });
  }

  try {
    const hasUser = db
      .prepare("SELECT * FROM users WHERE email = ? OR nickname = ?")
      .get(email, nickname);
    console.log("Has user", hasUser);
    if (!hasUser) {
      const users = db.prepare(
        "INSERT INTO users (name, nickname, email, password) VALUES (?, ?, ?, ?)"
      );
      const result = users.run(name, nickname, email, password);
      const token  =  req.jwt.sign ({
        id: users.id
      })

      console.log("TOKEN_ID", token);

      console.log("22222 =>", result.lastInsertRowid);

      const online = db
        .prepare("UPDATE users SET online = ? WHERE id = ?")
        .run(1, result.lastInsertRowid);

      // JUST CHECKING ONLINE
      const updated = db
        .prepare("SELECT id, online FROM users WHERE id = ?")
        .get(result.lastInsertRowid);

      console.log("ONLINE? =>", updated);

      return reply.code(201).send({ message: "USER created", users, accessToken: token });// TOKEN DELETE LATER!!!!!!!!!!!!
    } else {
      console.log("User already exist");
      return reply.code(400).send({ message: "User already exist" });
    }
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}

export async function login(req, reply) {
  const { email, password } = req.body;

  if (!password || !email) {
    return reply.code(400).send({ message: "No pass or email" });
  }

  try {
    const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
    console.log("Query result:", user); // Log the result

    if (user) {
      console.log("Email", user.email);
      console.log("Pass", user.password);
      // reply.code(200).send({ message: "There is such a user", user });
      const kuku = db
        .prepare("SELECT * FROM users WHERE email = ? AND password = ?")
        .get(email, password);

        // const token = jwt.sign(
        //   { userId: user.id },
        //   { expiresIn: "2h" }
        // );
      // console.log("kuku", kuku);

      const token  =  req.jwt.sign ({
        id: user.id
      })
      if (kuku) {
        console.log("WE are logged in");
        const userOnline = db
          .prepare("SELECT * FROM users WHERE id = ?")
          .get(user.id);

        console.log("ID=>", user.id);
        // Put Online
        const online = db
          .prepare("UPDATE users SET online = '1' WHERE id = ?")
          .run(user.id);

        console.log("ONLINE =>", online.changes);

        return reply.code(200).send({ message: "We are logged in", accessToken: token });// TOKEN DELETE LATER
      } else {
        console.log("Wrong pass ");
        return reply.code(401).send({ message: "Wrong pass" });
      }
    } else {
      return reply.code(400).send({ message: "No such user?" });
    }
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}

export async function logout(req, reply) {
  const { email } = req.body;
  try {
    const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email);

    console.log("ID=>",user.id)

    // console.log(logout);
    const offline = db.prepare("UPDATE users SET online = ? WHERE email = ?").run(0, email)
    console.log("Offline =>",offline)
    return reply.code(200).send({ message: "We are logout", user });
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}




// /home/ogoman/HIVE/Projects/ft_transcendence/server/controllers/friends.js

import db from "../database/database.js";

export async function friendsSearch(req, reply) {
  console.log("WE ARE IN FRIENDS");

  const { nickname } = req.body;
  
  if(!nickname)
        return reply.code(400).send({message: "PLease fill in frien nickname"})

  try
  {
    const hasUser = db.prepare("SELECT * FROM users WHERE nickname = ? ").get(nickname);
    console.log("THERE is such nickname",hasUser);
    if(!hasUser)
    {
        return reply.code(400).send({ message: "Not such user" });
    }
    if(hasUser)
    {
        console.log("KUKU, lets add display user");
        return reply.code(200).send({ message: "we have this user", hasUser });
    }

  }catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}     

export async function friendsAdd(req, reply) {
    console.log("WE ARE IN ADDING FRIENDS");
  
    const {id, nickname } = req.body;
    
    if(!nickname || !id)
          return reply.code(400).send({message: "PLease fill in friend nickname"})
  
    try
    {
      const hasUser = db.prepare("SELECT * FROM users WHERE nickname = ? ").get(nickname);
      console.log("THERE is such nickname",hasUser);
      if(!hasUser)
      {
          return reply.code(400).send({ message: "Not such user" });
      }
      if(hasUser)
      {
          console.log("KUKU, lets add display user");
          return reply.code(200).send({ message: "we have this user", hasUser });
      }
  
    }catch (err) {
      console.error("Database error:", err.message);
      return reply.code(500).send({ message: "Something went wrong" });
    }
  }
  


  // /home/ogoman/HIVE/Projects/ft_transcendence/server/controllers/profile.js


  import db from "../database/database.js";

  export async function updateProfile(req, reply) {
    console.log("WE in Update Profile MW");
    const { name, nickname, id, password } = req.body;
  
    if (!name && !nickname && !password) {
      return reply.code(400).send({ message: "Notning to change" });
    }
    // console.log("name", name);
    console.log("idddd", id);
    try {
      console.log("id", id);
      const user = db.prepare("SELECT * FROM users WHERE id = ?").get(id); ///Here we need id not id!!!!!!
      console.log("user ok => ", user.id);
      if (!user) {
        return reply.code(400).send({ message: "Notning to change" });
      }
      if (user) {
        if (name) {
          const updateName = db
            .prepare("UPDATE users SET name = ? WHERE id = ?")
            .run(name, user.id);
          console.log("NAME UPDATED =>", updateName);
          // return reply.code(200).send({message: "Name updated"})
        }
        if (password) {
          const updatePassword = db
            .prepare("UPDATE users SET password = ? WHERE id = ?")
            .run(password, id);
          console.log("password UPDATED =>", updatePassword);
          // return reply.code(200).send({message: "password updated"})
        }
        if (nickname) {
          console.log("we are in nick change");
          const nickExist = db
            .prepare("SELECT * FROM users WHERE nickname = ?")
            .get(nickname);
          console.log("NickExist =>", nickExist);
          if (nickExist) {
            return reply.code(400).send({ message: "Nick already exists" });
          } else {
            const updateNickname = db
              .prepare("UPDATE users SET nickname = ? WHERE id = ?")
              .run(nickname, id);
            console.log("nickname UPDATED =>", updateNickname);
            // return reply.code(200).send({message: "Nick updated"})
          }
        }
        return reply.code(200).send({ message: "updated" });
      }
    } catch (err) {
      console.error("Database error:", err.message);
      return reply.code(500).send({ message: "Something went wrong" });
    }
  }
  
  
  
  
  
  
  export async function uploadPicture(pic,reply) {
    console.log("Kuku from upload pictures");
  
    const allowedTypes = ["image/jpeg", "image/png"];
  
    // const { image, email } = req.body;
  
    if (!pic) {
      return reply.code(400).send({ message: "no image to upload" });
    }
  
    if (!allowedTypes.includes(pic.mimetype)) {
      return reply.code(400).send({ message: "invalidddd" });
    }
    
    // const email = pic.fields?.email;
    // if (!email) {
    //   return reply.code(400).send({ message: "no email provided" });
    // }
    const id = pic.fields?.id.value;
    try {
      console.log("eeeeeeeeeeeeeee");
      console.log("id=>", id)
      const user = db.prepare("SELECT * FROM users WHERE id = ?").get(id); 
      console.log("user ok => ", user.id);
  
      const buffer = await pic.toBuffer();
  
      db.prepare("UPDATE users SET image = ? WHERE id = ?").run(buffer, user.id);
      return reply.code(200).send({ message: "Image uploaded" });
    } catch (err) {
      console.error("Database error:", err.message);
      return reply.code(500).send({ message: "Something went wrong" });
    }
  }

  





// /home/ogoman/HIVE/Projects/ft_transcendence/server/database/database.js

import Database from "better-sqlite3";

const db = new Database("./database/users.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nickname TEXT NOT NULL,
    email TEXT NOT NULL,
    name TEXT NOT NULL,
    password TEXT NOT NULL,
    online BOOL, 
    image BLOB
  );
`);

console.log("Database initialized and users table is ready.");

export default db;



// /home/ogoman/HIVE/Projects/ft_transcendence/server/database/users.db



// /home/ogoman/HIVE/Projects/ft_transcendence/server/routes/AuthRoutes.js

import { signup, login, logout } from "../controllers/auth.js";
import db from "../database/database.js";
import { SignUpSchema, LoginSchema} from "../schema/user.schema.js";

async function authRoutes(fastify) {
  fastify.post("/login", async (req, reply) =>
  {
    const validated = LoginSchema.safeParse(req.body);
    if(!validated.success)
    {
      return reply.code(400).send({
        message: "Validation error",
        errors: validated.error.errors,
      });
    }
    return login ({...req, body:validated.data}, reply);
  });

  fastify.post("/signup", async (req, reply) => {
    const validated = SignUpSchema.safeParse(req.body);

    if (!validated.success) {
      return reply.code(400).send({
        message: "Validation error",
        errors: validated.error.errors,
      });
    }
    return signup({...req, body:validated.data}, reply);
  });

  fastify.post("/logout", logout);

  ///for debug???? or delete later
  fastify.get("/users", async (req, reply) => {
    try {
      const rows = db.prepare("SELECT * FROM users").all();

      // console.log("!!!!", rows);
      return reply.code(200).send({ users: rows });
    } catch (err) {
      console.error("Error fetching users:", err.message);
      return reply.code(500).send({ message: "Failed to fetch users" });
    }
  });
}

export default authRoutes;




// /home/ogoman/HIVE/Projects/ft_transcendence/server/routes/FriendsRoutes.js



import {FriendsAddSchema, FriendsSchema} from "../schema/friends.schema.js"
import { friendsSearch } from "../controllers/friends.js";
async function friendsRoutes(fastify) {

    fastify.post ("/friends", async (req, reply) =>
    {
        const validated = FriendsSchema.safeParse(req.body);
            if(!validated.success)
            {
              return reply.code(400).send({
                message: "Validation error",
                errors: validated.error.errors,
              });
            }
            return friendsSearch ({...req, body:validated.data}, reply);
    })
    
    fastify.post ("/add_friends", async (req, reply) =>
        {
            const validated = FriendsAddSchema.safeParse(req.body);
                if(!validated.success)
                {
                  return reply.code(400).send({
                    message: "Validation error",
                    errors: validated.error.errors,
                  });
                }
                return friendsAdd ({...req, body:validated.data}, reply);
        })
}

export default friendsRoutes;




// /home/ogoman/HIVE/Projects/ft_transcendence/server/routes/ProfileRoutes.js

import { ProfileSchema } from "../schema/profile.schema.js";
import fastifyMultipart from "@fastify/multipart";
import { updateProfile, uploadPicture } from "../controllers/profile.js";

async function profileRoutes(fastify) {
  fastify.register(fastifyMultipart);

  fastify.patch("/updateProfile", async (req, reply) => {
    const validated = ProfileSchema.safeParse(req.body);
    if (!validated.success) {
      return reply.code(400).send({
        message: "Validation error",
        errors: validated.error.errors,
      });
    }
    return updateProfile({ ...req, body: validated.data }, reply);
  });
  fastify.post("/uploadPicture", async (req, reply) => {
    const pic = await req.file();
    // const email = pic.fields?.email.value;
    // console.log("email:", email);

    if (!pic) {
      return reply.code(400).send({ message: "No picture uploaded" });
    }

    // if (!email) {
    //   return reply.code(400).send({ message: "No email provided" });
    // }

    return uploadPicture(pic, reply);
  });
}

export default profileRoutes;



// /home/ogoman/HIVE/Projects/ft_transcendence/server/schema/friends.schema.js

import { z } from "zod"; /// validation

export const FriendsSchema = z.object({
  nickname: z.string().max(20)
});

export const FriendsAddSchema = z.object({
  id: z.string().max(),
  nickname: z.string().max(20)
});




// /home/ogoman/HIVE/Projects/ft_transcendence/server/schema/profile.schema.js

import { z } from "zod"

export const ProfileSchema = z.object
(
    {
        name: z.string().max(20),
        nickname: z.string().max(20),
        password: z.string().min(4).max(40),
        id: z.string(),
        // image: z.string(),
    }
)





// /home/ogoman/HIVE/Projects/ft_transcendence/server/schema/user.schema.js

import { z } from "zod"; /// validation

export const SignUpSchema = z.object({
  name: z.string().max(20),
  nickname: z.string().max(20),
  email: z.string().max(40).email(),
  password: z.string().min(4).max(40),
});

export const LoginSchema = z.object({
    email: z.string().max(40).email(),
    password: z.string().min(4).max(40),
  });
  

  

// /home/ogoman/HIVE/Projects/ft_transcendence/server/.env

PORT=3000
JWT_SECRET_KEY=kuku



// /home/ogoman/HIVE/Projects/ft_transcendence/server/http-error.js

class HttpError extends Error {
    constructor(message, errorCode) {
      super(message); /// add message property, super mena comes from parent
      this.code = errorCode; // add code property
    }
  }
  
  export default HttpError; 
  



// /home/ogoman/HIVE/Projects/ft_transcendence/server/package.json

{
  "name": "server",
  "version": "1.0.0",
  "type": "module",
  "main": "server.js",
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "@fastify/cookie": "^11.0.2",
    "@fastify/cors": "^11.0.1",
    "@fastify/jwt": "^9.1.0",
    "@fastify/view": "^11.0.0",
    "better-sqlite3": "^11.9.1",
    "dotenv": "^16.5.0",
    "ejs": "^3.1.10",
    "fastify": "^5.2.2",
    "jsonwebtoken": "^9.0.2",
    "zod": "^3.24.3"
  },
  "devDependencies": {
    "nodemon": "^3.1.9"
  }
}



// /home/ogoman/HIVE/Projects/ft_transcendence/server/server.js

import Fastify from "fastify";
import authRoutes from "./routes/AuthRoutes.js";
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import jwt from '@fastify/jwt';

dotenv.config();

const fastify = Fastify({
  logger: true,
});

// JWT
fastify.register(jwt, { secret: 'kuku' });

fastify.addHook('preHandler', (req, res, next) => {
  req.jwt = fastify.jwt;
  next();
});

// CORS
await fastify.register(cors, {
  origin: 'http://localhost:5173',
  credentials: true,
});

// Routes
fastify.register(authRoutes);

// Server start
const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();