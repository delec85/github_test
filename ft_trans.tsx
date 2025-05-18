// client/public/boots_img

//* all bots img

// client/public/prof_img/avatar1.png



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
          textShadow: `
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

  const isAuthRoute = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div>
      <Outlet context={{ openModal }} />
      {isModalOpen && !isAuthRoute && <AuthPage mode={modalMode} onClose={closeModal} />}
    </div>
  );
};

export default Layout;







// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/components/LogIn_SignIn.tsx

import React from 'react';

const AuthButtons = ({ openModal }: { openModal: (mode: "login" | "signup") => void }) => {
  return (
    <div className="fixed top-4 right-8 z-50 flex gap-4">
      <button
        onClick={() => openModal("login")}
        className="px-2 py-1 rounded-lg font-bold bg-transparent outline-3 outline-offset-2 outline-double 
            border border-blue-300  text-white transition-all duration-300 ease-in-out hover:scale-110
            text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm"
        style={{
          textShadow: `
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
        onClick={() => openModal("signup")}
        className="px-2 py-1 rounded-lg font-bold bg-transparent outline-3 outline-offset-2 outline-double
             border border-blue-300  text-white transition-all duration-300 ease-in-out hover:scale-110
             text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm"
        style={{
          textShadow: `
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



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/components/NeonCursor.tsx


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





//! AUTHPAGE

// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/AuthPage/AuthPage.css

.form_wrap {
  width: 400px;
  margin: 2rem auto;
}

.form1 {
  display: flex;
  flex - direction: column;
  gap: 1rem;
}

.form_group {
  display: flex;
  flex - direction: column;
}

label {
  margin - bottom: 0.5rem;
  font - weight: bold;
}

.error_message {
  /* color: rgb(255, 0, 0); */
  font - size: 20px;
  margin - top: 10px;
}





// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/AuthPage/AuthPage.tsx

import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import SignInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";

const AuthPage = ({
  onClose,
  mode,
}: {
  onClose: () => void;
  mode: "login" | "signup";
}) => {
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
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"}
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
  onSuccess?: () => void; // Made optional if not always provided
  closeModal?: () => void; // Add closeModal prop
}

const SignUpForm = ({ onSuccess, closeModal }: SignUpFormProps) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
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
        body: JSON.stringify({ name, username, email, password }),
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
      <h2 className="text-2xl tracking-wide font-bold mb-5 text-center">
        Registration
      </h2>
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
            placeholder="username"
            className="w-full px-4 py-2 bg-black text-white bg-opacity-30 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
              onClick={() => openModal('login')}
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



//! GAMESELECTOR

// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/GameSelector/Tournament/TournamentBracket.tsx

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LocationState } from './types/tournament';
import { useTournament } from './utils/useTournament';
import BracketGrid from './components/BracketGrid';
import StartButton from './components/StartButton';
import './styles/neon.css';

const TournamentBracket:React.FC=()=>{
  const { state } = useLocation() as { state: LocationState };
  const navigate=useNavigate();
  const { players, rounds, loading, start } = useTournament(state);

  if(loading) return <div className="h-screen flex items-center justify-center bg-main-neon animate-pulse text-white">Loading tournament bracket…</div>;
  if(players.length<3) return(
    <div className="h-screen flex flex-col items-center justify-center bg-main-neon text-white">
      <p className="text-xl mb-4">Not enough players for the tournament (minimum 3)</p>
      <button onClick={()=>navigate(-1)} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">Back</button>
    </div>
  );
nge-300/60 to-amber-300/80',
  'from-blue-400/80 via-indigo-300/60 to-purple-400/80',
  'from-yellow-300/80 via-lime-400/60 to-green-400/80',
  'from-amber-300/80 via-yellow-400/60 to-orange-500/80',
];



///Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/GameSelector/Tournament/styles/neon.css 

.winner-glow {
  position: relative;
  animation: color-glow 3s infinite ease-in-out;
}
@keyframes color-glow {
  0% { box-shadow: 0 0 10px rgba(0,255,255,.8), 0 0 20px rgba(0,255,255,.6), 0 0 30px rgba(0,255,255,.4); }
  50%{ box-shadow: 0 0 15px rgba(255,0,255,.8), 0 0 30px rgba(255,0,255,.6), 0 0 45px rgba(255,0,255,.4); }
  100%{ box-shadow: 0 0 10px rgba(255,255,0,.8), 0 0 20px rgba(255,255,0,.6), 0 0 30px rgba(255,255,0,.4); }
}
.winner-glow::before,.winner-glow::after,.winner-glow>span::before,.winner-glow>span::after{
  content:"";position:absolute;width:8px;height:8px;border-radius:50%;animation:firework-spark 1.5s infinite linear;
}
.winner-glow::before{background:rgba(0,255,255,.8);top:50%;left:-10px;animation-delay:0s;transform:translateY(-50%);--spark-x:-80px;--spark-y:0;}
.winner-glow::after{background:rgba(255,0,255,.8);top:50%;right:-10px;animation-delay:.3s;transform:translateY(-50%);--spark-x:80px;--spark-y:0;}
.winner-glow>span::before{background:rgba(255,255,0,.8);top:-10px;left:50%;animation-delay:.6s;transform:translateX(-50%);--spark-x:0;--spark-y:-80px;}
.winner-glow>span::after{background:rgba(255,255,255,.8);bottom:-10px;left:50%;animation-delay:.9s;transform:translateX(-50%);--spark-x:0;--spark-y:80px;}
@keyframes firework-spark{0%{opacity:1;transform:translate(0,0)scale(1);}100%{opacity:0;transform:translate(var(--spark-x),var(--spark-y))scale(0);}}

.neon-button{animation:pulse-neon 1.5s infinite ease-in-out;}
@keyframes pulse-neon{0%,100%{box-shadow:0 0 10px rgba(34,197,94,.5),0 0 20px rgba(34,197,94,.3);}50%{box-shadow:0 0 20px rgba(34,197,94,.8),0 0 40px rgba(34,197,94,.6);}}



// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/GameSelector/Tournament/types/tournament.ts

/** Shared type definitions for the tournament feature. */

export interface LocationState {
  players?: string[];
  winner?: string;
}

export interface Slot {
  name: string;
  isPlayerX: boolean;
}


// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/GameSelector/Tournament/utils/array.ts

/** Utility helpers used across the tournament feature. */

/**
 * Returns a new array with the elements shuffled using Fisher‑Yates.
 */
export const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};



// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/GameSelector/Tournament/utils/useTournament.ts

import { useEffect, useState } fr
  return(
    <div className="w-full h-screen bg-main-neon relative">
      <StartButton onClick={start}/>
      <div className="flex flex-col items-center justify-center h-full px-2 sm:px-4">
        <BracketGrid rounds={rounds} playersCount={players.length}/>
        <button onClick={()=>navigate(-1)} className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-base sm:text-lg transition">← Back</button>
      </div>
    </div>
  );
};
export default TournamentBracket;



///Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/GameSelector/Tournament/api/mockDb.ts

/**
 * In‑memory store that imitates a real backend.
 * Replace this with real API calls once the server side is ready.
 */
export const mockDb = {
  players: [] as string[],
  winners: [] as { round: number; pair: number; winner: string }[],
};



// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/GameSelector/Tournament/api/tournamentApi.ts

/**
 * Thin wrapper around the mock DB.  All data‑access logic lives here so
 * we can swap the implementation later without touching UI code.
 */
import { mockDb } from './mockDb';

export const fetchPlayers = async (): Promise<string[]> => {
  try {
    return mockDb.players;
  } catch (error) {
    console.error('Error loading players:', error);
    return [];
  }
}

export const fetchWinners = async (): Promise<{ round: number; pair: number; winner: string }[]> => {
  try {
    return Promise.resolve(mockDb.winners);
  } catch (error) {
    console.error('Error loading winners:', error);
    return [];
  }
};

export const saveWinner = async (round: number, pair: number, winner: string): Promise<void> => {
  try {
    mockDb.winners.push({ round, pair, winner });
    return Promise.resolve();
  } catch (error) {
    console.error('Error saving winner:', error);
    throw error;
  }
};



// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/GameSelector/Tournament/components/BracketGrid.tsx

import React from 'react';
import { Slot } from '../types/tournament';
import RoundColumn from './RoundColumn';
import WinnerSlot from './WinnerSlot';

interface Props {
  rounds: Slot[][];
  playersCount: number;
}

const BracketGrid: React.FC<Props> = ({ rounds, playersCount }) => (
  <div
    className="grid gap-4 sm:gap-6 mx-auto w-[66.67%] min-h-[50vh]"
    style={{ gridTemplateColumns: `repeat(${rounds.length}, minmax(150px, 1fr))` }}
  >
    {rounds.map((slots,i)=>(
      i<rounds.length-1?
        <RoundColumn key={i} slots={slots} roundIndex={i} playersCount={playersCount}/>
        :<WinnerSlot key={i} slot={slots[0]}/>
    ))}
  </div>
);
export default BracketGrid;


// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/GameSelector/Tournament/components/RoundColumn.tsx

import React from 'react';
import SlotCard from './SlotCard';
import { Slot } from '../types/tournament';
import { gradients } from '../constants/gradients';

interface Props{slots:Slot[];roundIndex:number;playersCount:number;}

const RoundColumn:React.FC<Props>=({slots,roundIndex,playersCount})=>{
  const title=roundIndex===0?(playersCount>=5?'Quarter‑Final':'Semi‑Final'):
         roundIndex===1?(playersCount>=5?'Semi‑Final':'Final'):'Final';
  return(
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <h3 className="text-lg sm:text-xl text-center text-cyan-300 mb-4">{title}</h3>
      <div className="flex flex-col space-y-12 w-full">
        {Array.from({length:Math.ceil(slots.length/2)}).map((_,pairIdx)=>{
          const [a,b]=[slots[pairIdx*2],slots[pairIdx*2+1]];
          const grad=gradients[(roundIndex*10+pairIdx)%gradients.length];
          return(
            <div key={pairIdx} className="flex flex-col space-y-2 w-full">
              <SlotCard slot={a} className={`bg-gradient-to-br ${grad} h-[60px] sm:h-[80px]`}/>
              {b&&<SlotCard slot={b} className={`bg-gradient-to-br ${grad} h-[60px] sm:h-[80px]`}/>}  
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RoundColumn;



///Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/GameSelector/Tournament/components/SlotCard.tsx

/**
 * Visual card for a single slot inside the bracket grid.
 */
import React from 'react';
import { Slot } from '../types/tournament';

interface Props {
  slot: Slot;
  className?: string;
}

const SlotCard: React.FC<Props> = ({ slot, className = '' }) => (
  <div
    className={`p-3 sm:p-4 rounded-lg text-center italic text-lg sm:text-xl text-white drop-shadow-[0_0_12px_rgba(0,255,200,0.5)] flex items-center justify-center ${className}`}
  >
    {slot.isPlayerX ? 'PlayerX' : slot.name || '—'}
  </div>
);

export default SlotCard;




///Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/GameSelector/Tournament/components/StartButton.tsx

/**
 * Centrally positioned neon button that starts the tournament.
 */
import React from 'react';

interface Props {
  onClick: () => void;
}

const StartButton: React.FC<Props> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed top-[15%] left-1/2 transform -translate-x-1/2 px-16 py-8 bg-green-500 hover:bg-green-600 text-white rounded-lg text-2xl sm:text-3xl font-bold neon-button transition z-10"
  >
    Start
  </button>
);

export default StartButton;



// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/GameSelector/Tournament/components/TournamentModal.tsx

import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  names: string[];
  updateName: (idx: number, value: string) => void;
  onStart: () => void;
  canStart: boolean;
}

const TournamentModal: React.FC<Props> = ({
  isOpen,
  onClose,
  names,
  updateName,
  onStart,
  canStart,
}) => {
  if (!isOpen) return null;

  return (
    // Overlay: dim background and center the modal
    <div
      className={`
        fixed
        inset-0
        bg-black
        bg-opacity-70
        flex
        items-center
        justify-center
        z-50
      `}
    >
      {/* Modal container: neon gradient background with padding and rounded corners */}
      <div
        className={`
          bg-gradient-to-br
          from-purple-800
          via-indigo-900
          to-pink-800
          p-6
          rounded-2xl
          shadow-neon-lg
          w-full
          max-w-lg
        `}
      >
        {/* Title: gradient clipped text, centered, bold */}
        <h2
          className={`
            text-2xl
            text-center
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-cyan-300
            via-blue-400
            to-purple-500
            font-bold
            mb-4
          `}
        >
          Enter players for tournament
        </h2>

        {/* Input grid: two columns with gap */}
        <div
          className={`
            grid
            grid-cols-2
            gap-4
            mb-6
          `}
        >
          {names.map((value, idx) => (
            <input
              key={idx}
              type="text"
              value={value}
              onChange={e => updateName(idx, e.target.value)}
              placeholder={`Player ${idx + 1}`}
              className={`
                bg-gray-900
                bg-opacity-50
                text-white
                placeholder-gray-400
                p-2
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-purple-500
                transition-shadow
                duration-200
              `}
            />
          ))}
        </div>

        {/* Actions row: cancel and start buttons spaced apart */}
        <div
          className={`
            flex
            justify-between
          `}
        >
          {/* Cancel button: red outline turning solid on hover */}
          <button
            onClick={onClose}
            className={`
              px-4
              py-2
              rounded-xl
              border
              border-red-400
              text-red-400
              hover:bg-red-500
              hover:text-white
              transition
            `}
          >
            Cancel
          </button>

          {/* Start button: green when enabled, gray when disabled */}
          <button
            onClick={onStart}
            disabled={!canStart}
            className={`
              px-6
              py-2
              rounded-xl
              font-bold
              transition-all
              ${
                canStart
                  ? `
                    bg-green-400
                    hover:shadow-[0_0_15px_#4ade80]
                  `
                  : `
                    bg-gray-600
                    cursor-not-allowed
                    opacity-50
                  `
              }
            `}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default TournamentModal;




///Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/GameSelector/Tournament/components/WinnerSlot.tsx

import React from 'react';
import { Slot } from '../types/tournament';

const WinnerSlot:React.FC<{slot:Slot}> = ({slot}) => (
  <div className="flex flex-col items-center justify-center min-h-[50vh]">
    <h3 className="text-lg sm:text-xl text-center text-cyan-300 mb-4">Winner</h3>
    <div className="p-3 sm:p-4 rounded-lg text-center italic text-xl sm:text-2xl text-gray-900 bg-gradient-to-r from-green-400 to-teal-400 winner-glow w-full h-[60px] sm:h-[80px] flex items-center justify-center">
      <span>{slot.isPlayerX?'PlayerX':slot.name||'—'}</span>
    </div>
  </div>
);
export default WinnerSlot;



// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/GameSelector/Tournament/constants/gradients.ts

/**
 * Tailwind gradient utilities used to color code each pair in the bracket.
 * Keep visuals identical to the original implementation.
 */
export const gradients: string[] = [
  'from-pink-300/80 via-rose-300/60 to-red-500/80',
  'from-green-300/80 via-lime-300/60 to-emerald-300/80',
  'from-teal-400/80 via-cyan-300/60 to-blue-400/80',
  'from-fuchsia-400/80 via-pink-500/60 to-red-400/80',
  'from-red-300/80 via-oraom 'react';
import { fetchPlayers, fetchWinners, saveWinner } from '../api/tournamentApi';
import { shuffleArray } from './array';
import { LocationState, Slot } from '../types/tournament';

export interface UseTournament {
  players: string[];
  rounds: Slot[][];
  loading: boolean;
  start: () => void;
}

export const useTournament = (state: LocationState): UseTournament => {
  const [players, setPlayers] = useState<string[]>([]);
  const [winners, setWinners] = useState<{ round: number; pair: number; winner: string }[]>([]);
  const [rounds, setRounds] = useState<Slot[][]>([]);
  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(false);

  // helper: rebuild grid
  const buildRounds = (pl: string[], win: typeof winners) => {
    const shuffled = shuffleArray(pl);
    const grid: Slot[][] = [];
    const first: Slot[] = shuffled.map(p => ({ name: p, isPlayerX: false }));
    if ([3,5,7].includes(pl.length)) first.push({ name: 'PlayerX', isPlayerX: true });
    grid.push(first);

    const max = pl.length <= 4 ? 2 : 3;
    for (let i = 1; i < max; i++) {
      grid.push(Array(Math.ceil(grid[i-1].length/2)).fill({ name:'', isPlayerX:false }));
    }
    grid.push([{ name:'', isPlayerX:false }]);

    const merged = grid.map((round,rIdx)=>{
      if (rIdx===0) return round;
      const copy=[...round];
      win.filter(w=>w.round===rIdx).forEach(w=>{
        const ix=w.pair*(rIdx<max-1?2:1);
        copy[ix]={name:w.winner,isPlayerX:false};
      });
      return copy;
    });
    setRounds(merged);
  };

  // players
  useEffect(()=>{
    (async()=>{
      setLoading(true);
      let pl = await fetchPlayers();
      if(state?.players?.length&&state.players.length>=3&&state.players.length<=8) pl=state.players;
      if(pl.length>=3&&pl.length<=8) setPlayers(pl);
      setLoading(false);
    })();
  },[state.players]);

  // winners
  useEffect(()=>{(async()=>setWinners(await fetchWinners()))();},[]);

  // grid rebuild
  useEffect(()=>{ if(players.length>=3) buildRounds(players,winners); },[players,winners]);

  // auto‑advance & 3‑man semi
  useEffect(()=>{ if(!started||rounds.length===0) return;
    const advance=async()=>{
      const first=rounds[0];
      for(let i=0;i<first.length;i+=2){
        const [a,b]=[first[i],first[i+1]];
        if(a.isPlayerX&&b&&!b.isPlayerX) await saveWinner(1,i/2,b.name);
        else if(b?.isPlayerX&&!a.isPlayerX) await saveWinner(1,i/2,a.name);
      }
      setWinners(await fetchWinners());
    };
    advance();

    if(rounds[1]?.length===3){
      const real=rounds[1].filter(s=>!s.isPlayerX&&s.name);
      if(real.length===3){
        const finalist=real[Math.floor(Math.random()*real.length)];
        saveWinner(2,0,finalist.name).then(async()=>setWinners(await fetchWinners()));
      }
    }
  },[started,rounds]);

  // game callback
  useEffect(()=>{ if(!started||!state?.winner) return;
    (async()=>{
      const rIdx=rounds.findIndex(r=>r.some(s=>s.name===''&&!s.isPlayerX));
      if(rIdx>0){
        const pIdx=Math.floor(rounds[rIdx-1].findIndex(s=>s.name===state.winner)/2);
        await saveWinner(rIdx,pIdx,state.winner!);
        setWinners(await fetchWinners());
      }
    })();
  },[state.winner,started,rounds]);

  return { players, rounds, loading, start: ()=>setStarted(true) };
};




// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/GameSelector/GameSelector.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import GameModeSelector from "./GameModeSelector";
import TournamentModal from "./Tournament/components/TournamentModal";
import { useGameSelector } from "./useGameSelector";

const GameSelector: React.FC = () => {
  // Hook for navigation
  const navigate = useNavigate();

  // Manage tournament modal state and player name inputs
  const {
    isTournamentOpen,
    openTournament,
    closeTournament,
    names,
    updateName,
    canStart
  } = useGameSelector();

  // Called when "Start" is clicked: filter out empty entries and proceed
  const handleStart = () => {
    const playersList = names.filter(n => n.trim());
    console.log("Tournament names:", playersList);
    navigate('/tournament', { state: { players: playersList } });
    closeTournament();
  };

  // Stub handlers for other game modes
  const handleSingle = () => alert("Single Player clicked");
  const handleMulti  = () => alert("Multiplayer clicked");

  return (
    <>
      {/* Buttons to choose game mode */}
      <GameModeSelector
        onSingleClick={handleSingle}
        onMultiClick={handleMulti}
        onTournamentClick={openTournament}
      />

      {/* Modal for entering up to 8 player names */}
      <TournamentModal
        isOpen={isTournamentOpen}
        onClose={closeTournament}
        names={names}
        updateName={updateName}
        onStart={handleStart}
        canStart={canStart()}
      />
    </>
  );
};

export default GameSelector;







// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/GameSelector/GameModeSelector.tsx


import React from "react";

const modes = [
  { name: "Single Player", img: "/button_img/single.png" },
  { name: "Multiplayer",   img: "/button_img/mlti.png"   },
  { name: "Tournament",    img: "/button_img/tourn.png"  },
];

interface Props {
  onSingleClick: () => void;
  onMultiClick: () => void;
  onTournamentClick: () => void;
}

const GameModeSelector: React.FC<Props> = ({
  onSingleClick,
  onMultiClick,
  onTournamentClick
}) => {
  const handleClick = (modeName: string) => {
    switch (modeName) {
      case "Single Player": onSingleClick();     break;
      case "Multiplayer":   onMultiClick();     break;
      case "Tournament":    onTournamentClick(); break;
      default: break;
    }
  };

  return (
    <div className="flex flex-col items-center gap-9">
      {modes.map((mode) => (
        <button
          key={mode.name}
          onClick={() => handleClick(mode.name)}
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




// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/GameSelector/useGameSelector.tsx

import { useState } from "react";

export const useGameSelector = () => {
  const [isTournamentOpen, setTournamentOpen] = useState(false);
  const [names, setNames] = useState<string[]>(Array(8).fill(""));

  const openTournament = () => setTournamentOpen(true);
  const closeTournament = () => setTournamentOpen(false);

  const updateName = (idx: number, value: string) => {
    setNames(prev => {
      const next = [...prev];
      next[idx] = value;
      return next;
    });
  };

  const canStart = () => names.filter(n => n.trim()).length >= 3;

  return {
    isTournamentOpen, openTournament, closeTournament,
    names, updateName, canStart
  };
};




//!HOOKS


// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/hooks/useProfile.ts

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { UserInfo, MatchResult } from "../types/UserInfo";
import { fetchUserData, updateUserProfile, getAuthHeaders, saveGameResult } from "../types/api";
import { bots } from "../types/botsData";

// Custom hook to manage profile-related state and interactions
export const useProfile = () => {
  // Initialize state for user profile, bot selection, and UI controls
  const [selectedBot, setSelectedBot] = useState<(typeof bots)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserInfo | null>(null);
  const [friends, setFriends] = useState<UserInfo[]>([]);
  const [players, setPlayers] = useState<UserInfo[]>([]);
  const navigate = useNavigate();
  const isFetchingRef = useRef(false);

  // Memoize authentication headers for API requests
  const authHeaders = useMemo(() => getAuthHeaders(), []);

  // Validate Base64 strings for avatar processing
  const isValidBase64 = (str: string) => {
    try {
      return btoa(atob(str)) === str;
    } catch {
      return false;
    }
  };

  // Fetch and process all users, converting server data to UserInfo format
  const fetchAllUsers = useCallback(async () => {
    try {
      console.log("Fetching all users...");
      const response = await fetch(`http://localhost:3000/users?t=${Date.now()}`, {
        headers: {
          "Content-Type": "application/json",
          ...authHeaders,
        },
      });
      const data = await response.json();
      console.log("Fetched users data:", data);
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch users");
      }

      const mappedUsers: UserInfo[] = (data.users || []).map((u: any) => {
        let avatar = "/prof_img/avatar1.png"; // default avatar

        if (u.image) {
          if (typeof u.image === "string" && isValidBase64(u.image)) {
            avatar = `data:image/jpeg;base64,${u.image}`;
          } else if (
            typeof u.image === "object" &&
            Array.isArray((u.image as any).data)
          ) {
            const byteArray: number[] = (u.image as any).data;
            let binary = "";
            byteArray.forEach((byte) => {
              binary += String.fromCharCode(byte);
            });
            const base64String = btoa(binary);
            avatar = `data:image/jpeg;base64,${base64String}`;
          } else {
            console.warn(
              `Invalid avatar data for user ${u.username || u.id}:`,
              u.image
            );
          }
        }

        const userInfo: UserInfo = {
          id: (u.id || "").toString(),
          username: u.username || u.name || "Unknown",
          avatar,
          email: u.email || "",
          name: u.name || "",
          password: "",
          wins: u.wins || 0,
          losses: u.losses || 0,
          online: !!u.online,
          history: [],
        };
        console.log(`Mapped user ${userInfo.username} avatar:`, userInfo.avatar);
        return userInfo;
      });

      const sortedUsers = mappedUsers.sort((a, b) =>
        a.online === b.online ? 0 : a.online ? -1 : 1
      );

      console.log("Sorted players (online first):", sortedUsers);
      setPlayers(sortedUsers);
    } catch (err: any) {
      console.error("Failed to fetch users:", err);
      toast.error("Failed to load players list.");
    }
  }, [authHeaders]);

  // Load user data and players list with authentication checks
  const loadData = useCallback(async () => {
    if (isFetchingRef.current) {
      return;
    }
    isFetchingRef.current = true;

    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoading(false);
      toast.error("No token found. Please log in.");
      navigate("/login");
      isFetchingRef.current = false;
      return;
    }

    setIsLoading(true);
    try {
      const [userData] = await Promise.all([
        fetchUserData(authHeaders),
        fetchAllUsers(),
      ]);
      setUser(userData);
      setFriends([]); // Placeholder for friends (not implemented)
    } catch (err: any) {
      toast.error("Failed to load user data. Please log in again.");
      localStorage.removeItem("token");
      navigate("/login");
    } finally {
      setIsLoading(false);
      isFetchingRef.current = false;
    }
  }, [navigate, authHeaders, fetchAllUsers]);

  // Update user profile data and refresh related state
  const saveUserData = useCallback(
    async (updatedUser: UserInfo) => {
      const profileUpdates: Partial<UserInfo> = {};
      if (updatedUser.name !== user?.name) profileUpdates.name = updatedUser.name;
      if (updatedUser.username !== user?.username)
        profileUpdates.username = updatedUser.username;
      if (updatedUser.password !== user?.password)
        profileUpdates.password = updatedUser.password;

      await updateUserProfile(
        profileUpdates,
        updatedUser.avatar !== user?.avatar ? updatedUser.avatar : undefined,
        authHeaders
      );
      const updatedUserData = await fetchUserData(authHeaders);
      setUser(updatedUserData);
      console.log("Reloading all users after avatar update...");
      await fetchAllUsers(); // Reload players list after updating avatar
    },
    [user, authHeaders, fetchAllUsers]
  );

  // Handle profile updates and close the edit modal
  const handleSaveProfile = useCallback(
    async (data: Partial<UserInfo>) => {
      if (!user) return;
      const updatedUser: UserInfo = {
        ...user,
        ...data,
        password: data.password || user.password,
      };
      await saveUserData(updatedUser);
      setIsModalOpen(false);
    },
    [user, saveUserData]
  );

  // Process game results and update user stats
  const handleGameEnd = useCallback(
    async (result: "win" | "loss", opponent: string) => {
      if (!user) return;

      const today = new Date().toISOString().split("T")[0];
      const weekday = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
      }).format(new Date());

      const matchResult: MatchResult = { date: today, weekday, result };

      try {
        await saveGameResult(matchResult, authHeaders);
        const updatedUserData = await fetchUserData(authHeaders);
        setUser(updatedUserData);
        toast.success(`Game over! You ${result} against ${opponent}!`);
      } catch (err: any) {
        toast.error("Failed to save game result. Please try again.");
      }
    },
    [user, authHeaders]
  );

  // Simulate a game with a random bot and outcome
  const handlePlay = useCallback(() => {
    const opponent = selectedBot || bots[Math.floor(Math.random() * bots.length)];
    const result = Math.random() > 0.5 ? "win" : "loss";

    handleGameEnd(result, opponent.name);

    if (!selectedBot) {
      setSelectedBot(null);
    }
  }, [selectedBot, handleGameEnd]);

  // Initialize data fetching on component mount
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      if (isMounted) {
        await loadData();
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [loadData]);

  // Expose state and handlers for use in components
  return {
    user,
    friends,
    players,
    selectedBot,
    isModalOpen,
    isLoading,
    setSelectedBot,
    setIsModalOpen,
    setFriends,
    setPlayers,
    handleSaveProfile,
    handlePlay,
  };
};



//! TYPES



// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/types/api.ts

import axios, { AxiosInstance, AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { UserInfo, MatchResult } from "./UserInfo";

const BASE_URL = "http://localhost:3000";

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      toast.error("Session expired. Please log in again.");
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const getAuthHeaders = (): { Authorization: string } | {} => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const fetchUserData = async (
  headers: { Authorization: string } | {} = getAuthHeaders()
): Promise<UserInfo> => {
  const response = await api.get("/users/me", { headers });
  const currentUser = response.data.user;

  return {
    id: String(currentUser.id || "unknown"),
    username: currentUser.username || currentUser.name || "Unknown",
    avatar: currentUser.image ? `data:image/jpeg;base64,${currentUser.image}` : "/prof_img/avatar1.png",
    email: currentUser.email || "",
    name: currentUser.name || "",
    password: currentUser.password || "",
    wins: currentUser.wins || 0,
    losses: currentUser.losses || 0,
    online: !!currentUser.online,
    history: currentUser.history || [],
  };
};

export const updateUserProfile = async (
  profileUpdates: Partial<UserInfo>,
  avatar?: string,
  headers: { Authorization: string } | {} = getAuthHeaders()
): Promise<void> => {
  const updates: Partial<UserInfo> = {};
  if (profileUpdates.name) updates.name = profileUpdates.name;
  if (profileUpdates.username) updates.username = profileUpdates.username;
  if (profileUpdates.password) updates.password = profileUpdates.password;

  if (Object.keys(updates).length > 0) {
    await api.patch("/updateProfile", updates, { headers });
  }

  if (avatar && avatar.startsWith("data:image")) {
    const base64Data = avatar.split(",")[1];
    const blob = await (await fetch(`data:image/jpeg;base64,${base64Data}`)).blob();
    const formData = new FormData();
    formData.append("file", blob, "avatar.jpg");

    await api.post("/uploadPicture", formData, {
      headers: {
        ...headers,
        "Content-Type": "multipart/form-data",
      },
    });
  }
};

export const saveGameResult = async (
  matchResult: MatchResult,
  headers: { Authorization: string } | {} = getAuthHeaders()
): Promise<void> => {
  await api.post("/game/result", matchResult, { headers });
};



// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/types/botsData.ts
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
  onAdd?: () => void;
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
    console.log(`Avatar for ${user.username}: ${user.avatar}`);
    // Дополнительная отладка: проверяем, является ли avatar корректной строкой Base64
    if (user.avatar && !user.avatar.startsWith("data:image/jpeg;base64,")) {
      console.warn(`Invalid avatar format for ${user.username}: ${user.avatar}`);
      setImgSrc("/prof_img/avatar1.png");
      setIsImageLoaded(false);
    } else if (user.avatar.includes("[object Object]")) {
      console.warn(`Avatar is an object for ${user.username}, falling back to default`);
      setImgSrc("/prof_img/avatar1.png");
      setIsImageLoaded(false);
    } else {
      setImgSrc(user.avatar);
      setIsImageLoaded(true);
    }
  }, [user.avatar, user.username]);

  return (
    <div className="flex flex-col items-center">
      <div
        className={`
          rounded-full border-2 border-white overflow-hidden
          flex items-center justify-center bg-gray-800 text-white text-center ${className}`}
      >
        {isImageLoaded ? (
          <img
            src={imgSrc}
            alt={user.username}
            className="w-full h-full object-cover"
            onError={() => {
              console.log(`Failed to load image for ${user.username}, using fallback`);
              setIsImageLoaded(false);
            }}
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
		hover:shadow-[0_0_20px_#ff008c]

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




// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/BotSelector.tsx

import React from "react";
import BotCard from "./BotCard";
import { bots } from "./types/botsData";

interface BotSelectorProps {
	selectedBot: (typeof bots)[0] | null;
	setSelectedBot: (bot: (typeof bots)[0]) => void;
}

const BotSelector: React.FC<BotSelectorProps> = ({ selectedBot, setSelectedBot }) => {
	return (
		<div
			className={`
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
      `}
		/* Main container: Creates a semi-transparent dark background for the bot selector with centered content */
		>
			<p
				className={`
          text-lg
          text-purple-400
          font-extrabold
          uppercase
          tracking-wide
          drop-shadow-[0_0_8px_white]
        `}
			/* Title: Styles the heading text to highlight the bot selection prompt */
			>
				Fighters — Choose Your Opponent!
			</p>
			<div
				className={`
          pt-2
        `}
			/* Bot grid wrapper: Adds top padding to separate the title from the bot cards */
			>
				<div
					className={`
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
          `}
				/* Bot grid: Arranges bot cards in a responsive grid layout with varying columns by screen size */
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
	);
};

export default BotSelector;




// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/DesktopLayout.tsx


import React from "react";
import UserList from "./UserList";
import UserHeader from "./UserHeader";
import PlayArena from "./PlayArena";
import GameSelector from "./GameSelector/GameSelector";
import { PrimaryButton } from "./types/ui";
import { UserInfo } from "./types/UserInfo";
import { bots } from "./types/botsData";

// Define props for DesktopLayout component
interface DesktopLayoutProps {
  user: UserInfo; // Current user's data
  friends: UserInfo[]; // List of friends
  players: UserInfo[]; // List of other players
  selectedBot: (typeof bots)[0] | null; // Currently selected bot for gameplay
  handlePlay: () => void; // Callback to start the game
  expandUsername?: string; // Optional username to auto-expand a user's card in UserList
}

// DesktopLayout component for rendering the profile page layout on desktop screens
const DesktopLayout: React.FC<DesktopLayoutProps> = ({
  user,
  friends,
  players,
  selectedBot,
  handlePlay,
  expandUsername,
}) => {
  // Render a 6-column grid layout visible only on extra-large screens
  return (
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
      {/* Friends list section (left column) */}
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
        {/* Render list of friends with optional auto-expansion */}
        <UserList users={friends} variant="friends" expandUsername={expandUsername} />
      </div>

      {/* Video section (decorative animation) */}
      <div
        className="
          pt-6
          col-span-1
          mx-auto
        "
      >
        <div
          className="
            w-full
            max-w-[750px]
            bg-gray-800
            bg-opacity-40
            rounded-lg
            p-1
            shadow-lg
            ml-14
            mt-32
          "
        >
          {/* Auto-playing looped video for visual effect */}
          <video
            src="/videos/fight_gif.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="
              w-full
              h-auto
              rounded-lg
            "
          />
        </div>
      </div>

      {/* Central section: User info, play button, and game arena */}
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
        {/* Display user's profile header with stats */}
        <UserHeader
          user={{
            username: user.username,
            avatar: user.avatar,
            wins: user.wins,
            losses: user.losses,
            history: user.history,
          }}
        />
        {/* Button to trigger the game */}
        <PrimaryButton onClick={handlePlay}>PLAY</PrimaryButton>
        {/* Game arena displaying user and opponent (bot) info */}
        <PlayArena
          user={{ username: user.username, avatar: user.avatar }}
          opponentImage={selectedBot ? selectedBot.image : null}
          opponentName={selectedBot ? selectedBot.name : undefined}
        />
      </div>

      {/* Game mode selector section */}
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
          {/* Component for selecting game mode */}
          <GameSelector />
        </div>
      </div>

      {/* Players list section (right column) */}
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
        {/* Render list of players with optional auto-expansion */}
        <UserList users={players} variant="players" expandUsername={expandUsername} />
      </div>
    </div>
  );
};

export default DesktopLayout;






///Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/Header.tsx

import React from "react";
import ProfileActions from "./ProfileActions";
import { UserInfo } from "./types/UserInfo";

interface HeaderProps {
  user: Pick<UserInfo, "username" | "online" | "email">;
  onProfileClick: () => void;
  onSearch?: (username: string) => void;
}

const Header: React.FC<HeaderProps> = ({ user, onProfileClick, onSearch }) => {
  return (
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
          textShadow:
            "0 0 20px rgba(255, 255, 255, 0.3), 0 0 32px rgba(255, 0, 255, 0.3)",
        }}
      >
        NEON PONG
      </div>
      <ProfileActions user={user} onProfileClick={onProfileClick} onSearch={onSearch} />
    </div>
  );
};

export default Header;



// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/MobileLayout.tsx



import React from "react";
import UserList from "./UserList";
import UserHeader from "./UserHeader";
import PlayArena from "./PlayArena";
import GameSelector from "./GameSelector/GameSelector";
import { PrimaryButton } from "./types/ui";
import { UserInfo } from "./types/UserInfo";
import { bots } from "./types/botsData";

interface MobileLayoutProps {
  user: UserInfo;
  friends: UserInfo[];
  players: UserInfo[];
  selectedBot: (typeof bots)[0] | null;
  handlePlay: () => void;
  expandUsername?: string;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({
  user,
  friends,
  players,
  selectedBot,
  handlePlay,
  expandUsername,
}) => {
  return (
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
      <UserHeader
        user={{
          username: user.username,
          avatar: user.avatar,
          wins: user.wins,
          losses: user.losses,
          history: user.history,
        }}
      />
      <PrimaryButton onClick={handlePlay}>PLAY</PrimaryButton>
      <PlayArena
        user={{ username: user.username, avatar: user.avatar }}
        opponentImage={selectedBot ? selectedBot.image : null}
        opponentName={selectedBot ? selectedBot.name : undefined}
      />
      <div
        className="
          w-full
          max-w-xs
          mt-4
        "
      >
        <GameSelector />
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
          <UserList users={friends} variant="friends" expandUsername={expandUsername} />
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
          <UserList users={players} variant="players" expandUsername={expandUsername} />
        </div>
      </div>
      <div
        className="
          w-full
          mt-8
        "
      >
        <div
          className="
            w-full
            max-w-[600px]
            bg-gray-800
            bg-opacity-50
            rounded-2xl
            p-4
            shadow-lg
            mx-auto
          "
        >
          <video
            src="/videos/fight_gif.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="
              w-full
              h-auto
              rounded-lg
            "
          />
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;







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
        {user.onAdd && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              user.onAdd!();
            }}
            className="
              px-4
              py-2
              rounded-md
              text-sm
              font-semibold
              text-green-400
              border-2
              border-green-500
              hover:bg-green-600
              hover:text-white
              transition
              duration-300
              shadow-[0_0_12px_#00ff00]
              hover:shadow-[0_0_18px_#00ff00]
            "
          >
            Add
          </button>
        )}
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





// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/Profile.tsx

import React, { useState } from "react";
import ProfileModal from "./ProfileModal";
import Header from "./Header";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";
import BotSelector from "./BotSelector";
import { useProfile } from "./hooks/useProfile";
import { toast } from "react-hot-toast";

// Profile component serves as the main page for user profile management
const Profile: React.FC = () => {
  // Destructure user data, state, and handlers from custom useProfile hook
  const {
    user, // Current user's data
    friends, // List of friends
    players, // List of all players
    selectedBot, // Currently selected bot for gameplay
    isModalOpen, // State for profile modal visibility
    isLoading, // Loading state for data fetching
    setSelectedBot, // Function to update selected bot
    setIsModalOpen, // Function to toggle profile modal
    handleSaveProfile, // Handler to save profile changes
    handlePlay, // Handler to start a game
  } = useProfile();

  // State to store username for auto-expanding a user card
  const [expandUsername, setExpandUsername] = useState<string | undefined>(undefined);

  // Handle search for a user by username (case-insensitive)
  const handleSearch = (username: string) => {
    // Check if the username exists in players or friends lists
    const foundInPlayers = players.find(
      (p) => p.username.toLowerCase() === username.toLowerCase()
    );
    const foundInFriends = friends.find(
      (f) => f.username.toLowerCase() === username.toLowerCase()
    );

    // If found, set expandUsername to trigger card expansion and show success toast
    if (foundInPlayers || foundInFriends) {
      setExpandUsername(username);
      toast.success(`Found user: ${username}`);
    } else {
      // If not found, clear expandUsername and show error toast
      setExpandUsername(undefined);
      toast.error(`User ${username} not found`);
    }
  };

  // Display loading state while fetching data
  if (isLoading) {
    return (
      <div
        className="
          min-h-screen
          w-full
          flex
          items-center
          justify-center
          text-white
        "
      >
        Loading data, please wait...
      </div>
    );
  }

  // Display error if user data failed to load
  if (!user) {
    return (
      <div
        className="
          min-h-screen
          w-full
          flex
          items-center
          justify-center
          text-white
        "
      >
        Failed to load user data.
      </div>
    );
  }

  // Render the main profile page layout
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
        {/* Header with user info, profile toggle, and search functionality */}
        <Header
          user={{
            username: user.username,
            online: user.online,
            email: user.email,
          }}
          onProfileClick={() => setIsModalOpen(true)} // Open profile modal on click
          onSearch={handleSearch} // Pass search handler
        />
        {/* Desktop-specific layout for large screens */}
        <DesktopLayout
          user={user}
          friends={friends}
          players={players.filter((p) => p.id !== user.id)} // Exclude current user from players list
          selectedBot={selectedBot}
          handlePlay={handlePlay}
          expandUsername={expandUsername} // Pass username for card expansion
        />
        {/* Mobile-specific layout for smaller screens */}
        <MobileLayout
          user={user}
          friends={friends}
          players={players.filter((p) => p.id !== user.id)} // Exclude current user from players list
          selectedBot={selectedBot}
          handlePlay={handlePlay}
          expandUsername={expandUsername} // Pass username for card expansion
        />
        {/* Bot selector for choosing game opponent */}
        <BotSelector
          selectedBot={selectedBot}
          setSelectedBot={setSelectedBot}
        />
      </div>

      {/* Conditionally render profile modal for editing user data */}
      {isModalOpen && (
        <ProfileModal
          onClose={() => setIsModalOpen(false)} // Close modal on dismiss
          userData={{
            avatar: user.avatar,
            username: user.username,
            name: user.name,
          }}
          onSave={handleSaveProfile} // Save profile changes
        />
      )}
    </>
  );
};

export default Profile;




// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/ProfileActions.tsx

import React, { useState } from "react";
import { UserInfo } from "./types/UserInfo";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getAuthHeaders } from "./types/api";

// Define the props accepted by the ProfileActions component
interface ProfileActionsProps {
  user: Pick<UserInfo, "username" | "online" | "email">; // Basic user info for display and API calls
  onProfileClick: () => void;                           // Callback to open profile modal
  onSearch?: (username: string) => void;                // Optional callback for search action
}

// Main component rendering search, user info, and action buttons
const ProfileActions: React.FC<ProfileActionsProps> = ({
  user,
  onProfileClick,
  onSearch,
}) => {
  const navigate = useNavigate();               // Hook for navigation after logout
  const [searchQuery, setSearchQuery] = useState("");  // Local state for search input

  /**
   * Logout handler
   * Sends POST to /logout, clears token, and navigates to login on success
   */
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...getAuthHeaders(),                    // Attach authorization header
        },
        body: JSON.stringify({ email: user.email }),
      });
      if (!response.ok) throw new Error("Failed to logout");
      toast.success("Logged out successfully!");
      localStorage.removeItem("token");          // Remove JWT to prevent unauthorized access
      navigate("/login");                       // Redirect to login page
    } catch (err) {
      console.error("Logout error:", err);
      toast.error("Failed to logout. Please try again.");
    }
  };

  /**
   * Search handler
   * Validates input and calls parent onSearch callback
   */
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast.error("Please enter a username to search.");
      return;
    }
    onSearch?.(searchQuery.trim());             // Trigger search in parent component
  };

  /** Clear the current search input */
  const handleClear = () => {
    setSearchQuery("");
  };

  /**
   * Keyboard handler for search
   * Triggers search on Enter key press
   */
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    // Container: switches layout from column (mobile) to row (desktop)
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">

      {/*
        Search Group:
        - Input field for username
        - Search and Clear buttons
      */}
      <div className="flex items-center gap-2 flex-col sm:flex-row">
        <input
          type="text"
          placeholder="Search user..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="
            px-3
            py-1
            rounded-2xl
            text-sm
            bg-gray-800
            border
            border-emerald-200
            text-white
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-800
            transition-all
            duration-300
            ease-in-out
            hover:scale-105
            w-32
            sm:w-40
          "
          style={{
            textShadow: `
              0 0 4px rgba(102, 0, 255, 0.9),
              0 0 8px rgba(102, 0, 255, 0.7),
              0 0 16px rgba(102, 0, 255, 0.5),
              0 0 32px rgba(102, 0, 255, 0.3)
            `,
          }}
        />
        <div className="flex gap-2">
          <button
            onClick={handleSearch}
            className="
              px-3
              rounded-2xl
              text-sm
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
              hover:scale-110
            "
          >
            Search
          </button>
          <button
            onClick={handleClear}
            className="
              px-3
              rounded-2xl
              text-sm
              font-bold
              bg-transparent
              outline-3
              outline-offset-2
              outline-double
              border
              border-red-400
              text-white
              transition-all
              duration-300
              ease-in-out
              hover:scale-110
            "
          >
            Clear
          </button>
        </div>
      </div>

      {/*
        User Info & Actions:
        - Display username with online status color
        - Buttons for opening profile modal and logging out
      */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
        <span
          className={`
            text-xl
            sm:text-2xl
            font-bold
            ${user.online ? "text-green-400" : "text-gray-400"}
            truncate
            max-w-[150px]
            sm:max-w-[200px]
            sm:order-1
          `}
        >
          {user.username}
        </span>
        <div className="flex gap-3 sm:order-2">
          <button
            onClick={onProfileClick}
            className="
              px-3
              py-2
              rounded-2xl
              text-sm
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
              hover:scale-110
            "
          >
            Profile
          </button>
          <button
            onClick={handleLogout}
            className="
              px-3
              py-1
              rounded-2xl
              text-sm
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
              hover:scale-110
            "
          >
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileActions;







// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/ProfileModal.tsx


import React, { useState } from "react";
import { UserInfo } from "./types/UserInfo";
import { toast } from "react-hot-toast";

interface ProfileModalProps {
  onClose: () => void;
  onSave: (data: Partial<UserInfo>) => void;
  userData: Pick<UserInfo, "avatar" | "username" | "name">;
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  onClose,
  onSave,
  userData,
}) => {
  // State for form fields
  const [avatar, setAvatar] = useState(userData.avatar);
  const [username, setUsername] = useState(userData.username);
  const [name, setName] = useState(userData.name);
  const [password, setPassword] = useState("");
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // Maximum file size: 10 MB

  // Handler for avatar change
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      toast.error("File is too large! Maximum size is 10 MB.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Handler for saving changes
  const handleSave = () => {
    if (name.length < 2) {
      toast.error("Name must be at least 2 characters long.");
      return;
    }
    if (username.length < 2) {
      toast.error("Username must be at least 2 characters long.");
      return;
    }
    console.log("Saving data:", { avatar, username, name, password }); // Debugging
    onSave({ avatar, username, name, password });
  };

  return (
    <div
      className={`
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black
        bg-opacity-60
      `}
      // Modal overlay: darkens the screen and centers the content
    >
      <div
        className={`
          bg-gray-900
          text-white
          rounded-xl
          p-6
          w-full
          max-w-md
          space-y-4
          shadow-2xl
        `}
        // Modal container: dark background with rounded corners
      >
        <h2
          className={`
            text-2xl
            font-bold
            text-center
          `}
          // Header: centered "Edit Profile" text
        >
          Edit Profile
        </h2>

        <div
          className={`
            flex
            flex-col
            items-center
            gap-2
          `}
          // Avatar section: centers the image and file input
        >
          <img
            src={avatar}
            alt="Avatar"
            className={`
              w-24
              h-24
              rounded-full
              object-cover
              border-2
              border-white
            `}
            // Avatar image: circular with a white border
          />
          <input
            type="file"
            accept="image/jpeg,image/png"
            onChange={handleAvatarChange}
            className={`
              text-sm
              text-gray-300
            `}
            // File input: for selecting a new avatar
          />
        </div>

        <div
          className={`
            flex
            flex-col
            gap-1
          `}
          // Name field: contains label and text input
        >
          <label
            className={`
              text-sm
              text-gray-400
            `}
            // Label for the name field
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`
              w-full
              p-2
              rounded
              bg-gray-800
              border
              border-gray-600
              text-white
              focus:outline-none
              focus:ring-2
              focus:ring-indigo-800
            `}
            // Text input for editing the name
          />
        </div>

        <div
          className={`
            flex
            flex-col
            gap-1
          `}
          // Username field: contains label and text input
        >
          <label
            className={`
              text-sm
              text-gray-400
            `}
            // Label for the username field
          >
            Username
          </label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`
              w-full
              p-2
              rounded
              bg-gray-800
              border
              border-gray-600
              text-white
              focus:outline-none
              focus:ring-2
              focus:ring-indigo-800
            `}
            // Text input for editing the username
          />
        </div>

        <div
          className={`
            flex
            flex-col
            gap-1
          `}
          // Password field: contains label and password input
        >
          <label
            className={`
              text-sm
              text-gray-400
            `}
            // Label for the new password field
          >
            New Password
          </label>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`
              w-full
              p-2
              rounded
              bg-gray-800
              border
              border-gray-600
              text-white
              focus:outline-none
              focus:ring-2
              focus:ring-indigo-800
            `}
            // Input for entering a new password
          />
        </div>

        <div
          className={`
            flex
            justify-end
            gap-3
            pt-4
          `}
          // Button container: aligns buttons to the right
        >
          <button
            onClick={onClose}
            className={`
              px-4
              py-2
              bg-gray-600
              hover:bg-gray-700
              rounded
            `}
            // Cancel button: closes the modal
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className={`
              px-4
              py-2
              bg-green-500
              hover:bg-green-600
              text-white
              rounded
            `}
            // Save button: saves changes
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
			className={`
        flex
        flex-col
        items-center
        gap-4
        w-full
        max-w-md
        mx-auto
        text-center
      `}
		/* Header container: Centers user info vertically with constrained width */
		>
			<Avatar
				user={user}
				className={`
          w-32
          h-32
          sm:w-40
          sm:h-40
        `}
			/* Avatar: Displays a responsive user avatar with larger size on sm screens */
			/>
			<h2
				className={`
          text-xl
          sm:text-2xl
          font-bold
        `}
			/* Username: Styles the user's username with responsive font size */
			>
				{user.username}
			</h2>
			<div
				className={`
          text-sm
          sm:text-base
          space-y-1
        `}
			/* Stats container: Groups user statistics with responsive text size */
			>
				<p>
					Wins: <span
						className={`
              text-green-400
            `}
					/* Wins count: Highlights the number of wins in green */
					>
						{user.wins}
					</span> | Losses: <span
						className={`
              text-red-400
            `}
					/* Losses count: Highlights the number of losses in red */
					>
						{user.losses}
					</span>
				</p>
				<p>
					Win Rate: <span
						className={`
              text-cyan-400
            `}
					/* Win rate: Highlights the win rate percentage in cyan */
					>
						{winRate}%
					</span>
				</p>
				{latestDate && (
					<p>
						Last Game: {latestDate} — Wins: <span
							className={`
                text-green-400
              `}
						/* Today's wins: Highlights today's wins in green */
						>
							{winsToday}
						</span>, Losses: <span
							className={`
                text-red-400
              `}
						/* Today's losses: Highlights today's losses in red */
						>
							{lossesToday}
						</span>
					</p>
				)}
			</div>
		</div>
	);
};

export default UserHeader;




// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/UserList.tsx


import React, { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";
import { CardWrapper } from "./types/ui";
import { UserInfo } from "./types/UserInfo";

// Props definition for UserList component
// - users: array of UserInfo objects to display
// - variant: determines if this list is "players" or "friends"
// - expandUsername: optional username to auto-expand on render
interface Props {
  users: UserInfo[];
  variant: "players" | "friends";
  expandUsername?: string;
}

const UserList: React.FC<Props> = ({ users, variant, expandUsername }) => {
  // State for tracking which card index is expanded
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // When expandUsername changes, find matching user and auto-expand
  useEffect(() => {
    if (expandUsername) {
      const idx = users.findIndex(
        (u) => u.username.toLowerCase() === expandUsername.toLowerCase()
      );
      if (idx !== -1) {
        setExpandedIndex(idx);
      }
    }
  }, [expandUsername, users]);

  // Toggle expand/collapse state for a given index
  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  // Stub handlers for friend/player actions
  const handleAdd = (username: string) => console.log(`Add ${username}`);
  const handleRemove = (username: string) => console.log(`Remove ${username}`);
  const handleChallenge = (username: string) => console.log(`Challenge ${username}`);

  // If no users, render nothing
  if (users.length === 0) {
    return null;
  }

  return (
    <div
      className={
        `
        flex
        flex-col
        gap-2
        overflow-y-auto
        max-h-[500px]
        pr-1
        scrollbar-hidden
      `
      }
    >
      {users.map((user, idx) => {
        const isExpanded = expandedIndex === idx;
        const expandedStyle = {
          transition: "all 0.3s ease",
          overflow: "hidden",
          maxHeight: isExpanded ? "600px" : "0",
          marginTop: isExpanded ? "0.75rem" : "0",
        };

        // Determine avatar source, fallback to default if not base64 data
        const avatarSrc =
          user.avatar.startsWith("data:image")
            ? user.avatar
            : "/prof_img/avatar1.png";

        // Attach action callbacks based on list variant
        const userWithActions: UserInfo = {
          ...user,
          avatar: avatarSrc,
          onRemove:
            variant === "friends"
              ? () => handleRemove(user.username)
              : undefined,
          onChallenge: () => handleChallenge(user.username),
          onAdd:
            variant === "players"
              ? () => handleAdd(user.username)
              : undefined,
        };

        return (
          <CardWrapper key={user.id} onClick={() => toggleExpand(idx)}>
            {/* Header row: avatar, username, online status */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src={avatarSrc}
                  alt={user.username}
                  className="w-8 h-8 rounded-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/prof_img/avatar1.png";
                  }}
                />
                <span className="font-bold text-base">{user.username}</span>
              </div>
              <span
                className={
                  `text-sm ${
                    user.online ? "text-green-400" : "text-gray-400"
                  }`
                }
              >
                {user.online ? "Online" : "Offline"}
              </span>
            </div>

            {/* Expandable content container */}
            <div style={expandedStyle}>
              <PlayerCard user={userWithActions} />
            </div>
          </CardWrapper>
        );
      })}
    </div>
  );
};

export default UserList;





//! ROUTER

// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/router/AppRouter.tsx

import TournamentBracket from '../pages/Profile/GameSelector/Tournament/TournamentBracket'; //!
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
		  <Route path="/tournament" element={<TournamentBracket />} /> //!
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;





//! STYLE

// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/styles/cursor.css

.neon - cursor {
  position: fixed;
  width: 25px;
  height: 25px;
  background: radial - gradient(
    circle,
    rgba(255, 153, 255, 1) 20 %,
    rgba(102, 255, 255, 0.3) 80 %
	);
  border - radius: 50 %;
  pointer - events: none;
  z - index: 9999;
  transform: translate(-50 %, -50 %);
  box - shadow:
  0 0 15px rgba(255, 153, 255, 1),
    0 0 30px rgba(102, 255, 255, 0.7),
      0 0 50px rgba(255, 255, 204, 0.5);
  transition: transform 0.2s ease;
}
  

  .cursor - trail {
  position: fixed;
  width: 20px;
  height: 20px;
  background: radial - gradient(
    circle,
    rgba(255, 153, 255, 0.8) 20 %,
    rgba(102, 255, 255, 0.2) 70 %,
    transparent 80 %
	);
  border - radius: 50 %;
  pointer - events: none;
  z - index: 9998;
  transform: translate(-50 %, -50 %);
  animation: fade - out 1s ease - out forwards;
  box - shadow:
  0 0 10px rgba(255, 153, 255, 0.8),
    0 0 20px rgba(102, 255, 255, 0.5);
}


@keyframes fade - out {
  0 % {
    opacity: 0.8;
    transform: translate(-50 %, -50 %) scale(1);
  }
  100 % {
    opacity: 0;
    transform: translate(-50 %, -50 %) scale(0.3);
  }
}




//! SRC

// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/App.tsx

import AppRouter from './router/AppRouter'
import './index.css';
import { Toaster } from 'react-hot-toast';
import NeonCursor from './components/NeonCursor';
//import Profile from './pages/Profile/Profile';

function App() {
  return (
    <>
      <AppRouter />
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

    /* scrollbar invisible players/friends */
  .scrollbar-hidden {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE и Edge */
  }

  .scrollbar-hidden::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }
/* 
  @media (hover: hover) {
    body {
      cursor: none;
    }
  } */
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

//!CONTROLLERS

// /home/ogoman/HIVE/Projects/ft_transcendence/server/controllers/auth.js

import db from "../database/database.js"; // Using better-sqlite3

export async function signup(req, reply) {
  console.log("We are in SIGNUP middleware");

  const { name, username, email, password } = req.body;

  // Validate request body
  if (!name || !password || !email || !username) {

    return reply.code(400).send({ message: "No pass or name or email or username" });
  }

  try {
    const hasUser = db
      .prepare("SELECT * FROM users WHERE email = ? OR username = ?")
      .get(email, username);
    console.log("Has user", hasUser);
    if (!hasUser) {
      const users = db.prepare(
        "INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)"
      );
      const result = users.run(name, username, email, password);
      const token = req.jwt.sign({ 
        id: result.lastInsertRowid });

      console.log("TOKEN_ID", token);

      console.log("USER_ID =>", result.lastInsertRowid);

      // Set user online
      const online = db
        .prepare(`UPDATE users SET online = ? WHERE id = ?`)
        .run(1, result.lastInsertRowid);

      // Verify online status
      const updated = db
        .prepare(`SELECT id, online FROM users WHERE id = ?`)
        .get(result.lastInsertRowid);

      console.log("ONLINE? =>", updated);

      return reply.code(201).send({ message: "USER created", users, accessToken: token });
    } else {
      console.log("User already exists");
      return reply.code(400).send({ message: "User already exists" });
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
    const user = db.prepare(`SELECT * FROM users WHERE email = ?`).get(email);
    console.log("Query result:", user); // Log the result

    if (user) {
      console.log("Email", user.email);
      console.log("Pass", user.password);
      // reply.code(200).send({ message: "There is such a user", user });
      const kuku = db
        .prepare(`SELECT * FROM users WHERE email = ? AND password = ?`)
        .get(email, password);

      // const token = jwt.sign(
      //   { userId: user.id },
      //   { expiresIn: "2h" }
      // );
      // console.log("kuku", kuku);

      const token = req.jwt.sign({ 
        id: user.id 
      });
      if (kuku) {
        console.log("WE are logged in");
        const userOnline = db
          .prepare(`SELECT * FROM users WHERE id = ?`)
          .get(user.id);

        console.log("ID=>", user.id);
        // Put Online
        const online = db.prepare(`UPDATE users SET online = '1' WHERE id = ?`)
          .run(user.id);

        console.log("ONLINE =>", online.changes);

        return reply.code(200).send({ accessToken: token });
      } else {
        console.log("Wrong pass");
        return reply.code(401).send({ message: "Wrong pass" });
      }
    } else {
      return reply.code(400).send({ message: "No such user" });
    }
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}

export async function logout(req, reply) {
  const { email } = req.body;
  try {
    const user = db.prepare(`SELECT * FROM users WHERE email = ?`).get(email);

    if (!user) {
      return reply.code(400).send({ message: "No such user" });
    }

    console.log("ID=>", user.id);

    const offline = db
      .prepare("UPDATE users SET online = ? WHERE email = ?")
      .run(0, email);
    console.log("Offline =>", offline.changes);
    return reply.code(200).send({ message: "We are logged out" });
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}

export async function getCurrentUser(req, reply) {
  try {
    const userId = req.user.id;
    const user = db
      .prepare("SELECT id, name, username, email, online, image FROM users WHERE id = ?")
      .get(userId);

    if (!user) {
      return reply.code(404).send({ message: "User not found" });
    }

    return reply.code(200).send({
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        online: user.online,
        image: user.image ? Buffer.from(user.image).toString("base64") : null,
      },
    });
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}





// /home/ogoman/HIVE/Projects/ft_transcendence/server/controllers/friends.js

import db from "../database/database.js";
// import dbFriends from "../database/databaseFriends.js";

// see users but not friends
export async function friendsSearch(req, reply) {
  console.log("WE ARE IN FRIENDS");

  const { username } = req.body;

  if (!username)
    return reply.code(400).send({ message: "PLease fill in frien username" });

  try {
    const hasUser = db
      .prepare(`SELECT * FROM users WHERE username = ? `)
      .get(username);
    console.log("THERE is such username", hasUser);
    if (!hasUser) {
      return reply.code(400).send({ message: "Not such user" });
    }
    if (hasUser) {
      console.log("KUKU, lets add display user");
      return reply.code(200).send({ message: "we have this user", hasUser });
    }
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}

/////ADD friends
export async function friendsAdd(req, reply) {
  console.log("WE ARE IN ADDING FRIENDS");

  const { user_id, username } = req.body;
  console.log("id=>", user_id);
  console.log("username=>", username);

  if (!username)
    return reply.code(400).send({ message: "PLease fill in friend username" });
  
  const friend = db.prepare("SELECT * FROM users WHERE username = ?").get(username)
  if(!friend)
  {
    return reply.code(404).send({ message: "NO such as friebd" }); 
  }

  console.log("ID=>>>>", friend.id)
  if (user_id === friend.id)
  {
    return reply.code(400).send({ message: "Cannot add yourself" });
  }

  try {
      const hasUser2 = db
      .prepare(`SELECT * FROM users WHERE id = ?`)
      .get(friend.id);
    console.log("THERE is such username", hasUser2);

    if (!hasUser2) {
      return reply.code(400).send({ message: "Not such user" });
    }
    if (hasUser2 ) {
      const friendAlready1 = db
        .prepare(`SELECT * FROM friends WHERE user_id = ? AND friends_id = ? OR user_id = ? AND friends_id = ?`)
        .get(user_id, friend.id, friend.id, user_id);
      if (friendAlready1 ) {
        return reply.code(400).send({ message: "Friend already" });
      } else {
        const add = db
          .prepare(`INSERT INTO friends (user_id, friends_id) VALUES (?,? )`)
          .run(user_id, friend.id);
        return reply.code(200).send({ message: "we have this user", add });
      }
    }
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}

//Confirm friends
export async function confirmFriend(req, reply) {
  console.log("WE IN CONFIRM FRIEND");
/// confirm just will be 1???
  const { user_id, username, confirmReq } = req.body;


  const friend = db.prepare("SELECT * FROM users WHERE username = ?").get(username)
  if(!friend)
  {
    return reply.code(404).send({ message: "NO such as friebd" }); 
  }

  // confirm can be accepted only from friend_id side
  try {
    const checkReq1 = db
      .prepare(`SELECT * FROM friends WHERE friends_id = ? AND user_id = ?`)
      .get(user_id, friend.id);
    if (checkReq1) {

      console.log("CoN=>", confirmReq)
      const confirmAccept1 = db
      .prepare(`UPDATE friends SET confirmReq = 1 WHERE (user_id = ? AND friends_id = ?) 
           OR (user_id = ? AND friends_id = ?)`)
      .run(user_id, friend.id, friend.id, user_id);
      console.log("CONFIRM =>....", confirmAccept1);
      return reply.code(200).send({ message: "confirmed" });
    }
    if (!checkReq1) {
      return reply.code(400).send({ message: "No request" });
    }
    // confirmAccept.run();
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}

///SEE the own friends
export async function myFriends(req, reply) {
  console.log("WE IN MY FRIENDS");

  const { user_id } = req.body;

  try {
    const myfriends = db
      .prepare(`SELECT * FROM friends WHERE (user_id = ? OR friends_id = ?) AND confirmReq = 1`)
      .all(user_id, user_id);
      if(myfriends)
      {
        return reply.code(200).send({ myfriends });
      }
      else
      {
        return reply.code(200).send({ message: "No friends" });
      }

  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}

/// delete from friends
export async function deleteFriend(req, reply) {
  console.log("WE IN MY DELETE FRIENDS");

  const { user_id, username } = req.body;

  const friend = db.prepare("SELECT * FROM users WHERE username = ?").get(username)
  if(!friend)
  {
    return reply.code(404).send({ message: "NO such as friebd" }); 
  }
  try {
    const deleteFr = db
      .prepare(`DELETE FROM friends WHERE user_id = ? AND friends_id = ?`)
      .run(user_id, friend.id);
    return reply.code(200).send({ deleteFr });
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}




// /home/ogoman/HIVE/Projects/ft_transcendence/server/controllers/profile.js

import db from "../database/database.js";

export async function updateProfile(req, reply) {
  console.log("WE in Update Profile MW");
// <<<<<<< mainPage
//   const { name, username, id, password } = req.body;

//   if (!name && !username && !password) {
//     return reply.code(400).send({ message: "Notning to change" });
// =======
  const { name, username, password } = req.body;
  const userId = req.user.id;

  if (!name && !username && !password) {
    return reply.code(400).send({ message: "Nothing to change" });
// >>>>>>> testing
  }
  // // console.log("name", name);
  // console.log("idddd", id);
  try {
// <<<<<<< mainPage
//     console.log("id", id);
//     const user = db.prepare(`SELECT * FROM users WHERE id = ?`).get(id); ///Here we need id not id!!!!!!
// =======
    const user = db.prepare("SELECT * FROM users WHERE id = ?").get(userId); ///Here we need id not id!!!!!!
    console.log("user ok => ", user.id);
    if (!user) {
      return reply.code(404).send({ message: "User not found" });
    }
// <<<<<<< mainPage
//     if (user) {
//       if (name) {
//         const updateName = db
//           .prepare(`UPDATE users SET name = ? WHERE id = ?`)
//           .run(name, user.id);
//         console.log("NAME UPDATED =>", updateName);
//         // return reply.code(200).send({message: "Name updated"})
//       }
//       if (password) {
//         const updatePassword = db
//           .prepare(`UPDATE users SET password = ? WHERE id = ?`)
//           .run(password, id);
//         console.log("password UPDATED =>", updatePassword);
//         // return reply.code(200).send({message: "password updated"})
//       }
//       if (username) {
//         console.log("we are in nick change");
//         const nickExist = db
//           .prepare(`SELECT * FROM users WHERE username = ?`)
//           .get(username);
//         console.log("NickExist =>", nickExist);
//         if (nickExist) {
//           return reply.code(400).send({ message: "Nick already exists" });
//         } else {
//           const updateusername = db
//             .prepare(`UPDATE users SET username = ? WHERE id = ?`)
//             .run(username, id);
//           console.log("username UPDATED =>", updateusername);
//           // return reply.code(200).send({message: "Nick updated"})
//         }
// =======

    if (name) {
      const updateName = db
        .prepare("UPDATE users SET name = ? WHERE id = ?")
        .run(name, userId);
      console.log("NAME UPDATED =>", updateName);
      // return reply.code(200).send({message: "Name updated"})
    }
    if (password) {
      const updatePassword = db
        .prepare("UPDATE users SET password = ? WHERE id = ?")
        .run(password, userId);
      console.log("PASSWORD UPDATED =>", updatePassword);
      // return reply.code(200).send({message: "password updated"})
    }
    if (username) {
      console.log("we are in nick change");
      const nickExist = db
        .prepare("SELECT * FROM users WHERE username = ?")
        .get(username);
      console.log("NickExist =>", nickExist);
      if (nickExist) {
        return reply.code(400).send({ message: "Nick already exists" });
      } else {
        const updateUsername = db
          .prepare("UPDATE users SET username = ? WHERE id = ?")
          .run(username, userId);
        console.log("USERNAME UPDATED =>", updateUsername);
        // return reply.code(200).send({message: "Nick updated"})
// >>>>>>> testing
      }
    }
    return reply.code(200).send({ message: "Profile updated" });
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}

export async function uploadPicture(data, reply) {
  console.log("Kuku from upload pictures");
  const allowedTypes = ["image/jpeg", "image/png"];
  const userId = reply.request.user.id;

  if (!data) {
    return reply.code(400).send({ message: "No image to upload" });
  }

  if (!allowedTypes.includes(data.mimetype)) {
    return reply.code(400).send({ message: "Invalid image format" });
  }
  // const email = pic.fields?.email;
  // if (!email) {
  //   return reply.code(400).send({ message: "no email provided" });
  // }

  try {
    const user = db.prepare("SELECT * FROM users WHERE id = ?").get(userId);
    console.log("user ok => ", user.id);

    const buffer = await data.toBuffer();

    db.prepare("UPDATE users SET image = ? WHERE id = ?").run(buffer, userId);
    return reply.code(200).send({ message: "Image uploaded" });
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}




// /home/ogoman/HIVE/Projects/ft_transcendence/server/controllers/statistics.js

import db from "../database/database.js";

export async function statisticsAll(request, reply) {
  const stat = db.prepare(`
    SELECT id,nickname, wins, losses FROM users
  `).all();

  return reply.code(200).send({ stat });
}


export async function statisticsUser(req, reply) {
  console.log("WE IN USER STATISTICS");

  const { user_id } = req.body;

  try {
    const statUser = db
      .prepare(`SELECT * FROM users WHERE id = ?`)
      .get(user_id);
    console.log("USER STAT =>", statUser.wins);

    const wins = statUser.wins
    const losses = statUser.losses

    return reply.code(200).send({ "wins":wins, "losses": losses});
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}

export async function win(req, reply) {
  console.log("WE IN WIN");

  const { user_id } = req.body;

  try {
    const winUser = db.prepare(`SELECT * FROM users WHERE id = ?`).get(user_id);

    console.log("Wins =>", winUser.wins);
    console.log("Updated=>", winUser.wins + 1);
    const haha = winUser.wins + 1;
    const updateWins = db
      .prepare(`UPDATE users SET wins = ? WHERE id = ?`)
      .run(haha, user_id);

    return reply.code(200).send({ updateWins });
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}

export async function loseUser(req, reply) {
    console.log("WE IN WIN");
  
    const { user_id } = req.body;
  
    try {
      const loseUser = db.prepare(`SELECT * FROM users WHERE id = ?`).get(user_id);
  
      console.log("Wins =>", loseUser.losses);
      console.log("Updated=>", loseUser.losses + 1);
      const haha = loseUser.losses + 1;
      const updateLoses = db
        .prepare(`UPDATE users SET losses = ? WHERE id = ?`)
        .run(haha, user_id);
  
      return reply.code(200).send({ updateLoses });
    } catch (err) {
      console.error("Database error:", err.message);
      return reply.code(500).send({ message: "Something went wrong" });
    }
  }
  




// /home/ogoman/HIVE/Projects/ft_transcendence/server/controllers/users.js

import db from "../database/database.js";

export async function getCurrentUser(req, reply) {
  try {
    const userId = req.user.id;
    const user = db
      .prepare("SELECT id, name, username, email, online, image FROM users WHERE id = ?")
      .get(userId);

    if (!user) {
      return reply.code(404).send({ message: "User not found" });
    }

    return reply.code(200).send({
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        online: user.online,
        image: user.image ? Buffer.from(user.image).toString("base64") : null,
      },
    });
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}



//! DATABASE

// /home/ogoman/HIVE/Projects/ft_transcendence/server/database/database.js

import Database from "better-sqlite3";

const db = new Database("./database/database.db");
//nickname uniqy and email
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    name TEXT NOT NULL,
    password TEXT NOT NULL,
    online BOOL, 
    image BLOB,
    wins INTEGER default 3,
    losses INTEGER default 0,
    UNIQUE (id, username, email)
  );
`);
console.log("Database initialized and users table is ready.");

// const db = new Database("./database/friends.db");
db.exec(`
  CREATE TABLE IF NOT EXISTS friends (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    friends_id INTEGER NOT NULL,
    confirmReq BOOL NOT NULL default 0,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (friends_id) REFERENCES users(id)
  );
`);

console.log("Database initialized and friends table is ready.");


export default db;




//! ROUTES 

// /home/ogoman/HIVE/Projects/ft_transcendence/server/routes/AuthRoutes.js

import { signup, login, logout, getCurrentUser } from "../controllers/auth.js";
import db from "../database/database.js";
import { SignUpSchema, LoginSchema } from "../schema/user.schema.js";

async function authRoutes(fastify) {
  fastify.post("/login", async (req, reply) => {
    const validated = LoginSchema.safeParse(req.body);
    if (!validated.success) {
      return reply.code(400).send({
        message: "Validation error",
        errors: validated.error.errors,
      });
    }
    return login({ ...req, body: validated.data }, reply);
  });

  fastify.post("/signup", async (req, reply) => {
    const validated = SignUpSchema.safeParse(req.body);

    if (!validated.success) {
      return reply.code(400).send({
        message: "Validation error",
        errors: validated.error.errors,
      });
    }
    return signup({ ...req, body: validated.data }, reply);
  });

  fastify.post("/logout", logout);

  ///for debug???? or delete later
// <<<<<<< mainPage
//   fastify.get("/users", async (reply) => {
// =======
  fastify.get(
    "/users/me",
    {
      preHandler: fastify.authenticate,
    },
    getCurrentUser
  );

  // For debug, keep as is
  fastify.get("/users", async (req, reply) => {
// >>>>>>> testing
    try {
      const rows = db.prepare("SELECT * FROM users").all();
      // console.log("!!!!", rows);
      const users = rows.map(user => ({                                      //!
      ...user,                                                               //!
      image: user.image ? Buffer.from(user.image).toString("base64") : null, //!
      }));
      return reply.code(200).send({ users: rows });
    } catch (err) {
      console.error("Error fetching users:", err.message);
      return reply.code(500).send({ message: "Failed to fetch users" });
    }
  });
}

export default authRoutes;





// /home/ogoman/HIVE/Projects/ft_transcendence/server/routes/FriendsRoutes.js

import { FriendsAccept, usersSchema, FriendsMy, FriendsSchema} from "../schema/friends.schema.js";
import { friendsSearch, friendsAdd, confirmFriend, myFriends, deleteFriend } from "../controllers/friends.js";
async function friendsRoutes(fastify) {
  fastify.post("/searchUsers", async (req, reply) => {
    const validated = usersSchema.safeParse(req.body);
    if (!validated.success) {
      return reply.code(400).send({
        message: "Validation error",
        errors: validated.error.errors,
      });
    }
    return friendsSearch({ ...req, body: validated.data }, reply);
  });

  fastify.post(`/addFriends`, async (req, reply) => {
    const validated = FriendsSchema.safeParse(req.body);
    if (!validated.success) {
      return reply.code(400).send({
        message: "Validation error",
        errors: validated.error.errors,
      });
    }
    return friendsAdd({ ...req, body: validated.data }, reply);
  });
  fastify.post(`/confirmFriend`, async (req, reply) => {
    const validated = FriendsAccept.safeParse(req.body);
    if (!validated.success) {
      return reply.code(400).send({
        message: "Validation error",
        errors: validated.error.errors,
      });
    }
    return confirmFriend({ ...req, body: validated.data }, reply);
  });

  fastify.post(`/myfriends`, async (req, reply) => {
    console.log("we in my friends")
    const validated = FriendsMy.safeParse(req.body);
    if (!validated.success) {
      return reply.code(400).send({
        message: "Validation error",
        errors: validated.error.errors,
      });
    }
    return myFriends({ ...req, body: validated.data }, reply);
  });
  fastify.delete(`/deletefriend`, async (req, reply) => {
    console.log("we in my delete friends")
    const validated = FriendsSchema.safeParse(req.body);
    if (!validated.success) {
      return reply.code(400).send({
        message: "Validation error",
        errors: validated.error.errors,
      });
    }
    return deleteFriend({ ...req, body: validated.data }, reply);
  });
}

export default friendsRoutes;





// /home/ogoman/HIVE/Projects/ft_transcendence/server/routes/ProfileRoutes.js

import { ProfileSchema } from "../schema/profile.schema.js";
import fastifyMultipart from "@fastify/multipart";
import { updateProfile, uploadPicture } from "../controllers/profile.js";

async function profileRoutes(fastify) {
  fastify.register(fastifyMultipart, {
    limits: {
      fileSize: 10 * 1024 * 1024, //max (10MB)
    },
  });

  fastify.patch(
    "/updateProfile",
    {
      preHandler: fastify.authenticate,
    },
    async (req, reply) => {
      const validated = ProfileSchema.safeParse(req.body);
      if (!validated.success) {
        return reply.code(400).send({
          message: "Validation error",
          errors: validated.error.errors,
        });
      }
      return updateProfile({ ...req, body: validated.data }, reply);
    }
  );

  fastify.post(
    "/uploadPicture",
    {
      preHandler: fastify.authenticate,
      config: {
        multipart: true,
      },
    },
    async (req, reply) => {
      const data = await req.file();
      // const email = pic.fields?.email.value;
      // console.log("email:", email);
      if (!data) {
        return reply.code(400).send({ message: "No picture uploaded" });
      }

      // if (!email) {
      //   return reply.code(400).send({ message: "No email provided" });
      // }
      return uploadPicture(data, reply);
    }
  );
}

export default profileRoutes;




//!SCHEMA

// /home/ogoman/HIVE/Projects/ft_transcendence/server/schema/friends.schema.js

import { z } from "zod"; /// validation

export const FriendsSchema = z.object({
  username: z.string().max(20)
});

export const FriendsAddSchema = z.object({
  user_id: z.string(),
  friend_id: z.string()
  // nickname: z.string().max(20)
});

export const FriendsAccept = z.object({
  user_id: z.string(),
  friend_id: z.string(),
  confirmReq: z.string()///????? maybe int need to check
});

export const FriendsMy = z.object({
  user_id: z.string()
});

export const FriendsDelete = z.object({
  user_id: z.string(),
  friends_id: z.string(),
  // confirmReq:z.string()
});




// /home/ogoman/HIVE/Projects/ft_transcendence/server/routes/StatisticRoutes.js

import { statisticsSchema, winSchema } from "../schema/statisticSchema.js";
import { statisticsAll, statisticsUser, win, loseUser } from "../controllers/statistics.js";


async function statistics(fastify) {
  fastify.get("/statistics",statisticsAll);
  fastify.post("/statisticsUser", async (req, reply) => {
    const validated = statisticsSchema.safeParse(req.body);

    if (!validated.success) {
      return reply.code(400).send({
        message: "Validation error",
        errors: validated.error.errors,
      });
    }
    return statisticsUser({ ...req, body: validated.data }, reply);
  });

  fastify.post("/winUser", async (req, reply) => {
    const validated = winSchema.safeParse(req.body);

    if (!validated.success) {
      return reply.code(400).send({
        message: "Validation error",
        errors: validated.error.errors,
      });
    }
    return win({ ...req, body: validated.data }, reply);
  });
  fastify.post("/loseUser", async (req, reply) => {
    const validated = winSchema.safeParse(req.body);

    if (!validated.success) {
      return reply.code(400).send({
        message: "Validation error",
        errors: validated.error.errors,
      });
    }
    return loseUser({ ...req, body: validated.data }, reply);
  });
}

export default statistics;




//! SCHEMA

// /home/ogoman/HIVE/Projects/ft_transcendence/server/schema/friends.schema.js

import { z } from "zod"; /// validation


export const usersSchema = z.object({
  username: z.string().max(20)
});

export const FriendsSchema = z.object({
  user_id: z.string(),
  username:z.string()
  // username: z.string().max(20)
});

export const FriendsAccept = z.object({
  user_id: z.string(),
  username:z.string(),
  confirmReq: z.string()///????? maybe int need to check
});

export const FriendsMy = z.object({
  user_id: z.string()
});




// /home/ogoman/HIVE/Projects/ft_transcendence/server/schema/profile.schema.js

import { z } from "zod";


export const ProfileSchema = z
  .object({
    username: z.string().max(20).optional(),
    password: z.string().min(4).max(40).optional(),
    name: z.string().max(20).optional(),
    avatar: z.string().optional(),
  });



// /home/ogoman/HIVE/Projects/ft_transcendence/server/schema/statisticSchema.js

import { z } from "zod";

export const statisticsSchema = z.object({
  user_id: z.string(),
});

export const winSchema = z.object({
  user_id: z.string(),
});



// /home/ogoman/HIVE/Projects/ft_transcendence/server/schema/user.schema.js

import { z } from "zod"; /// validation

export const SignUpSchema = z.object({
  name: z.string().max(20),
  username: z.string().max(20),
  email: z.string().max(40).email(),
  password: z.string().min(4).max(40),
});

export const LoginSchema = z.object({
    email: z.string().max(40).email(),
    password: z.string().min(4).max(40),
  });
  



// /home/ogoman/HIVE/Projects/ft_transcendence/server/.env

PORT = 3000
JWT_SECRET_KEY = kuku



// /home/ogoman/HIVE/Projects/ft_transcendence/server/http-error.js

class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); /// add message property, super mena comes from parent
    this.code = errorCode; // add code property
  }
}

export default HttpError;




// /home/ogoman/HIVE/Projects/ft_transcendence/server/seed.js

// import sqlite3 from "better-sqlite3"
import Database from "better-sqlite3"
const db = new Database("./database/database.db")

db.exec(
  `DELETE FROM friends WHERE id=2`
)




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
          "@fastify/multipart": "^9.0.3",
            "@fastify/view": "^11.0.0",
              "axios": "^1.9.0",
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
import friendsRoutes from "./routes/FriendsRoutes.js"
import profileRoutes from "./routes/ProfileRoutes.js"
import statisticsRoutes from "./routes/StatisticRoutes.js";
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import jwt from '@fastify/jwt';


dotenv.config();

const fastify = Fastify({
  logger: true,
});

// JWT
fastify.register(jwt, { secret: "kuku" });

fastify.addHook("preHandler", (req, res, next) => {
  req.jwt = fastify.jwt;
  return next();
});

// JWT Authentication
fastify.decorate("authenticate", async (request, reply) => {
  try {
    await request.jwtVerify();
  } catch (err) {
    reply.code(401).send({ message: "Unauthorized" });
  }
});

// CORS
fastify.register(cors, {
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PATCH", "DELETE"],
});

// Routes
fastify.register(authRoutes);
fastify.register(friendsRoutes);
fastify.register(profileRoutes);
fastify.register(statisticsRoutes)

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
