// client/public/boots_img

//* all bots img

// client/public/prof_img/avatar1.webp



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



//!HOOKS

// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/hooks/useAuth.ts

import { useMemo } from "react";
import { getAuthHeaders } from "../types/api";

// Hook for accessing authentication headers
export const useAuth = () => {
  const headers = useMemo(() => getAuthHeaders(), []);
  return { headers };
};



// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/hooks/useBots.ts


import { useState } from "react";
import { bots } from "../types/botsData";

/**
 * Hook that stores selected bot.
 */
export const useBots = () => {
  const [selectedBot, setSelectedBot] = useState<(typeof bots)[0] | null>(null);
  return { selectedBot, setSelectedBot } as const;
};



// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/hooks/useFriends.ts

import { useState, useCallback } from "react";
import { toast } from "react-hot-toast";
import { UserInfo } from "../types/UserInfo";

/* ------------------------------------------------------------------ *
 * mapUser – converts a raw DB record into our strongly typed
 *           UserInfo object (without any “action” callbacks).
 * ------------------------------------------------------------------ */
const mapUser = (u: any): UserInfo => ({
  id: String(u.id),
  username: u.username || u.name || "Unknown",
  email:    u.email    || "",
  name:     u.name     || "",
  avatar:
    u.image && u.image_type
      ? `data:${u.image_type};base64,${u.image}`   // inline base64 from DB
      : "/prof_img/avatar1.png",                   // fallback avatar
  password: "",                                    // never expose
  wins:     u.wins   || 0,
  losses:   u.losses || 0,
  online:   !!u.online,
  history:  [],
});

/* Helper that pushes ONLINE users to the top of the list               */
const sortByOnline = (a: UserInfo, b: UserInfo) =>
  Number(b.online) - Number(a.online);

/* ====================================================================== */
/*  Main hook – returns two lists (friends / other players)               */
/*  plus helper callbacks to mutate and re-sync them.                     */
/* ====================================================================== */
export const useFriends = (
  user: UserInfo | null,
  headers: Record<string, string>
) => {
  /* ------------------------------------------------------------------ */
  /*  Local state                                                        */
  /* ------------------------------------------------------------------ */
  const [friends, setFriends] = useState<UserInfo[]>([]);
  const [players, setPlayers] = useState<UserInfo[]>([]);

  /* Decorators that inject correct “remove / add” handlers ------------- */
  const withRemove = (u: UserInfo): UserInfo => ({
    ...u,
    onRemove: () => removeFriend(u),
    onAdd:    undefined,
  });
  const withAdd = (u: UserInfo): UserInfo => ({
    ...u,
    onAdd:    () => addFriend(u),
    onRemove: undefined,
  });

  /* ------------------------------------------------------------------ */
  /*  Network helpers (pure data fetchers, no state mutation)            */
  /* ------------------------------------------------------------------ */

  /** GET all confirmed friends */
  const loadFriends = useCallback(async (): Promise<UserInfo[]> => {
    if (!user) return [];

    const res  = await fetch("http://localhost:3000/myfriends", {
      method : "POST",
      headers: { "Content-Type": "application/json", ...headers },
      body   : JSON.stringify({ user_id: Number(user.id) }),
    });
    const data = await res.json();

    if (!res.ok) {
      toast.error(data.message || "Failed to load friends");
      return [];
    }
    return (data.myfriends || []).map(mapUser);
  }, [user, headers]);

  /** GET everyone except *me* (friends will be filtered out later) */
  const loadAllUsers = useCallback(async (): Promise<UserInfo[]> => {
    if (!user) return [];

    const res  = await fetch(`http://localhost:3000/users?t=${Date.now()}`, {
      headers: { "Content-Type": "application/json", ...headers },
    });
    const data = await res.json();

    if (!res.ok) {
      toast.error(data.message || "Failed to load players");
      return [];
    }
    return (data.users || [])
      .filter((u: any) => u.id !== user.id) // exclude myself
      .map(mapUser);
  }, [user, headers]);

  /* ------------------------------------------------------------------ */
  /*  Mutations (POST / DELETE)                                          */
  /* ------------------------------------------------------------------ */

  /** Add `target` to my friend list, then refresh both lists */
  const addFriend = useCallback(
    async (target: UserInfo) => {
      if (!user) return;

      const res = await fetch("http://localhost:3000/addFriends", {
        method : "POST",
        headers: { "Content-Type": "application/json", ...headers },
        body   : JSON.stringify({ user_id: Number(user.id), username: target.username }),
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to add friend");
        return;
      }

      toast.success(`Added ${target.username}`);
      await syncAll();
    },
    [user, headers]
  );

  /** Remove `target` from my friend list, then refresh both lists */
  const removeFriend = useCallback(
    async (target: UserInfo) => {
      if (!user) return;

      const res = await fetch("http://localhost:3000/deletefriend", {
        method : "DELETE",
        headers: { "Content-Type": "application/json", ...headers },
        body   : JSON.stringify({ user_id: Number(user.id), username: target.username }),
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to remove friend");
        return;
      }

      toast.success(`Removed ${target.username}`);
      await syncAll();
    },
    [user, headers]
  );

  /* ------------------------------------------------------------------ */
  /*  syncAll – keeps `friends` and `players` in lock-step               */
  /* ------------------------------------------------------------------ */
  const syncAll = useCallback(async () => {
    if (!user) return;

    /* 1️⃣  Friends (sorted with online users first) */
    const friendArr = (await loadFriends()).sort(sortByOnline);
    setFriends(friendArr.map(withRemove));

    /* 2️⃣  Players = everyone else minus friends (+ me) */
    const allUsers   = await loadAllUsers();
    const friendIds  = new Set(friendArr.map((f: UserInfo) => f.id));
    const playersArr = allUsers
      .filter((u: UserInfo) => !friendIds.has(u.id))
      .sort(sortByOnline);

    setPlayers(playersArr.map(withAdd));
  }, [user, loadFriends, loadAllUsers]);

  /* ------------------------------------------------------------------ */
  /*  Public API returned by the hook                                   */
  /* ------------------------------------------------------------------ */
  return {
    friends,       // always sorted: online → offline
    players,       // idem
    addFriend,     // call to send POST /addFriends
    removeFriend,  // call to send DELETE /deletefriend
    syncAll,       // manual full refresh
  } as const;
};



// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/hooks/useGame.ts

import { useCallback } from "react";
import { toast } from "react-hot-toast";
import { UserInfo, MatchResult } from "../types/UserInfo";
import { saveGameResult } from "../types/api";
import { bots } from "../types/botsData";

// Hook for managing game interactions
export const useGame = (
  user: UserInfo | null, // Current user information
  headers: Record<string, string>, // Authentication headers for API requests
  selectedBot: (typeof bots)[0] | null, // Selected bot opponent
  reloadUser: () => Promise<void> // Function to reload user data
) => {
  // Handles game completion, saving results and updating user data
  const gameEnd = useCallback(
    async (result: "win" | "loss", opponent: string) => {
      if (!user) return;
      const today = new Date().toISOString().split("T")[0];
      const weekday = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
      }).format(new Date());
      const payload: MatchResult = { date: today, weekday, result };
      try {
        await saveGameResult(payload, headers);
        toast.success(`Game over! You ${result} against ${opponent}!`);
        await reloadUser();
      } catch {
        toast.error("Failed to save game result");
      }
    },
    [user, headers, reloadUser]
  );

  // Initiates a game against a bot with a random outcome
  const play = useCallback(() => {
    const opponent = selectedBot || bots[Math.floor(Math.random() * bots.length)];
    const result = Math.random() > 0.5 ? "win" : "loss";
    gameEnd(result, opponent.name);
  }, [selectedBot, gameEnd]);

  // Expose the play function for external use
  return { play };
};



// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/hooks/useProfile.ts



import { useState, useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { UserInfo } from "../types/UserInfo";
import { useAuth } from "./useAuth";
import { useUser } from "./useUser";
import { useFriends } from "./useFriends";
import { useBots } from "./useBots";
import { useGame } from "./useGame";

export const useProfile = () => {
  /* Auth */
  const { headers } = useAuth();
  const navigate = useNavigate();
  const bootRef = useRef(false);

  /* User */
  const { user, loading, load, save } = useUser(headers);

  /* Friends */
  const { friends, players, syncAll } = useFriends(user, headers);

  /* Bots */
  const { selectedBot, setSelectedBot } = useBots();

  /* Game */
  const { play } = useGame(user, headers, selectedBot, load);

  /* UI state */
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* Save profile with sync and modal close */
  const handleSaveProfile = useCallback(
    async (data: Partial<UserInfo>) => {
      if (!user) return;
      const merged: UserInfo = { ...user, ...data, password: data.password || user.password };
      await save(merged);
      await syncAll();
      setIsModalOpen(false);
    },
    [user, save, syncAll]
  );

  /* Bootstrap */
  const bootstrap = useCallback(async () => {
    if (bootRef.current) return;
    bootRef.current = true;
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No token found. Redirecting to login.");
      navigate("/login");
      return;
    }
    try {
      await load();
      await syncAll();
    } catch {
      toast.error("Failed to load data. Please re-login.");
      localStorage.removeItem("token");
      navigate("/login");
    } finally {
      bootRef.current = false;
    }
  }, [load, syncAll, navigate]);

  useEffect(() => {
    bootstrap();
  }, [bootstrap]);

  /* Public API (identical to original) */
  return {
    user,
    friends,
    players,
    selectedBot,
    isModalOpen,
    isLoading: loading,
    setSelectedBot,
    setIsModalOpen,
    handleSaveProfile,
    handlePlay: play,
  };
};


// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/hooks/useUser.ts

import { useState, useCallback } from "react";
import { UserInfo } from "../types/UserInfo";
import { fetchUserData, updateUserProfile } from "../types/api";

/**
 * User data hook – loads the current user, exposes the save helper
 * to update profile and reload fresh data afterwards.
 */
export const useUser = (headers: Record<string, string>) => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);

  /** Fetch `/users/me` */
  const load = useCallback(async () => {
    setLoading(true);
    try {
      const me = await fetchUserData(headers);
      if (!me || !me.id) {
        throw new Error("Invalid user data received");
      }
      console.log("User data loaded:", { id: me.id, username: me.username });
      setUser(me);
    } catch (err: any) {
      console.error("Failed to load data:", err);
      throw err; // Let caller handle the error
    } finally {
      setLoading(false);
    }
  }, [headers]);

  /** PATCH `/updateProfile` & reload */
  const save = useCallback(
    async (updatedUser: UserInfo) => {
      const profileUpdates: Partial<UserInfo> = {};
      if (updatedUser.name !== user?.name) profileUpdates.name = updatedUser.name;
      if (updatedUser.username !== user?.username) profileUpdates.username = updatedUser.username;
      if (updatedUser.password !== user?.password) profileUpdates.password = updatedUser.password;

      await updateUserProfile(
        profileUpdates,
        updatedUser.avatar !== user?.avatar ? updatedUser.avatar : undefined,
        headers
      );
      await load();
    },
    [headers, load, user]
  );

  return { user, loading, load, save, setUser };
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

  let avatarSrc = "/prof_img/avatar1.png";
  if (currentUser.image && currentUser.image_type) {
    avatarSrc = `data:${currentUser.image_type};base64,${currentUser.image}`;
  }

  return {
    id: currentUser.id || "unknown",
    username: currentUser.username || currentUser.name || "Unknown",
    avatar: avatarSrc,
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
    const mimeType = avatar.match(/data:(image\/[a-z]+);base64,/)?.[1];
    if (!mimeType || !["image/jpeg", "image/png"].includes(mimeType)) {
      throw new Error("Invalid image format");
    }
    const blob = await (await fetch(avatar)).blob();
    const formData = new FormData();
    formData.append("file", blob, `avatar.${mimeType.split("/")[1]}`);

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
  const [imgSrc, setImgSrc] = useState<string>("/prof_img/avatar1.png");
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  useEffect(() => {
    console.log(`Avatar for ${user.username}: ${user.avatar}`);
    if (!user.avatar || !user.avatar.startsWith("data:image/")) {
      console.warn(`Invalid avatar format for ${user.username}: ${user.avatar}`);
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
              setImgSrc("/prof_img/avatar1.png");
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
import EnhancedFriendsList from "./EnhancedFriendsList";
import PlayersList from "./PlayersList";
import UserHeader from "./UserHeader";
import PlayArena from "./PlayArena";
import GameModeSelector from "./GameModeSelector";
import { PrimaryButton } from "./types/ui";
import { UserInfo } from "./types/UserInfo";
import { bots } from "./types/botsData";

interface DesktopLayoutProps {
  user: UserInfo;
  friends: UserInfo[];
  players: UserInfo[];
  selectedBot: (typeof bots)[0] | null;
  handlePlay: () => void;
}

const DesktopLayout: React.FC<DesktopLayoutProps> = ({
  user,
  friends,
  players,
  selectedBot,
  handlePlay,
}) => {
  return (
    <div
      className={`
        hidden
        xl:grid
        xl:grid-cols-6
        gap-4
        px-4
        flex-grow
      `}
      /* Main container: Creates a responsive grid layout visible only on extra-large screens */
    >
      <div
        className={`
          pt-4
          flex
          flex-col
          items-start
          col-span-1
          max-w-[220px]
        `}
        /* Friends section: Aligns the friends list vertically on the left side with constrained width */
      >
        <h2
          className={`
            text-lg
            font-semibold
            mb-2
            text-left
            drop-shadow-[0_0_8px_red]
          `}
          /* Friends title: Styles the heading for the friends list with a red glow */
        >
          Friends
        </h2>
        <EnhancedFriendsList friends={friends} />
      </div>

      <div
        className={`
          pt-6
          col-span-1
          mx-auto
        `}
        /* Video section: Centers the video container with top padding */
      >
        <div
          className={`
            w-full
            max-w-[750px]
            bg-gray-800
            bg-opacity-40
            rounded-lg
            p-1
            shadow-lg
            ml-14
            mt-32
          `}
          /* Video wrapper: Styles the video container with a semi-transparent background and shadow */
        >
          <video
            src="/videos/fight_gif.mp4"
            autoPlay
            loop
            muted
            playsInline
            className={`
              w-full
              h-auto
              rounded-lg
            `}
            /* Video: Ensures the video fills the container with rounded corners */
          />
        </div>
      </div>

      <div
        className={`
          pt-8
          flex
          flex-col
          items-center
          justify-start
          gap-6
          col-span-2
        `}
        /* Central section: Centers user info, play button, and arena with vertical spacing */
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
      </div>

      <div
        className={`
          pt-8
          flex
          justify-center
          col-span-1
        `}
        /* Game mode section: Centers the game mode selector */
      >
        <div
          className={`
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
          `}
          /* Game mode wrapper: Styles the container for the game mode selector with responsive padding */
        >
          <GameModeSelector />
        </div>
      </div>

      <div
        className={`
          pt-4
          flex
          flex-col
          items-end
          col-span-1
          max-w-[220px]
          ml-auto
        `}
        /* Players section: Aligns the players list vertically on the right side with constrained width */
      >
        <h2
          className={`
            text-lg
            font-semibold
            mb-2
            text-right
            drop-shadow-[0_0_8px_red]
          `}
          /* Players title: Styles the heading for the players list with a red glow */
        >
          Players
        </h2>
        <PlayersList players={players} />
      </div>
    </div>
  );
};

export default DesktopLayout;





// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/EnhancedFriendsList.tsx


import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import Avatar from "./Avatar";
import { CardWrapper } from "./types/ui";
import { UserInfo } from "./types/UserInfo";

interface Props {
  friends: UserInfo[];
}

const EnhancedFriendsList: React.FC<Props> = ({ friends }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
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
          <CardWrapper key={friend.id ?? index} onClick={() => toggleExpand(index)}>
            {/* Header: avatar, username, status */}
            <div
              className="
                flex
                justify-between
                items-center
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <Avatar
                  user={{ username: friend.username, avatar: friend.avatar }}
                  className="
                    w-8
                    h-8
                  "
                />
                <span
                  className="
                    font-bold
                    text-base
                  "
                >
                  {friend.username}
                </span>
              </div>
              <span
                className={`
                  text-sm
                  ${friend.online ? "text-green-400" : "text-gray-400"}
                `}
              >
                {friend.online ? "Online" : "Offline"}
              </span>
            </div>

            {/* Expandable PlayerCard */}
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





///Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/Header.tsx

import React from "react";
import ProfileActions from "./ProfileActions";
import { UserInfo } from "./types/UserInfo";

interface HeaderProps {
	user: Pick<UserInfo, "username" | "online" | "email">;
	onProfileClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onProfileClick }) => {
	return (
		<div
			className={`
        flex
        justify-between
        items-center
        px-6
        py-4
      `}
		/* Main container: Aligns the title and profile actions horizontally with padding */
		>
			<div
				className={`
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
        `}
				style={{
					textShadow:
						"0 0 20px rgba(255, 255, 255, 0.3), 0 0 32px rgba(255, 0, 255, 0.3)",
				}}
			/* Title: Styles the "NEON PONG" logo with a gradient, hover effect, and custom shadow */
			>
				NEON PONG
			</div>
			<ProfileActions user={user} onProfileClick={onProfileClick} />
		</div>
	);
};

export default Header;




// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/MobileLayout.tsx

import React from "react";
import EnhancedFriendsList from "./EnhancedFriendsList";
import PlayersList from "./PlayersList";
import UserHeader from "./UserHeader";
import PlayArena from "./PlayArena";
import GameModeSelector from "./GameModeSelector";
import { PrimaryButton } from "./types/ui";
import { UserInfo } from "./types/UserInfo";
import { bots } from "./types/botsData";

interface MobileLayoutProps {
  user: UserInfo;
  friends: UserInfo[];
  players: UserInfo[];
  selectedBot: (typeof bots)[0] | null;
  handlePlay: () => void;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({
  user,
  friends,
  players,
  selectedBot,
  handlePlay,
}) => {
  return (
    <div
      className={`
        flex
        xl:hidden
        flex-col
        items-center
        px-4
        gap-4
      `}
      /* Main container: Creates a centered, vertical layout for mobile screens, hidden on xl screens */
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
        className={`
          w-full
          max-w-xs
          mt-4
        `}
        /* Game mode section: Constrains the width of the game mode selector with top margin */
      >
        <GameModeSelector />
      </div>
      <div
        className={`
          w-full
          flex
          flex-col
          sm:flex-row
          sm:justify-between
          gap-4
        `}
        /* Friends and players container: Arranges friends and players lists vertically on mobile, horizontally on sm screens */
      >
        <div
          className={`
            w-full
            sm:w-1/2
            min-w-0
          `}
          /* Friends section: Styles the friends list container, taking half width on sm screens */
        >
          <h2
            className={`
              text-lg
              font-semibold
              mb-2
              text-left
              drop-shadow-[0_0_8px_red]
            `}
            /* Friends title: Styles the heading for the friends list with a red glow */
          >
            Friends
          </h2>
          <EnhancedFriendsList friends={friends} />
        </div>
        <div
          className={`
            w-full
            sm:w-1/2
            min-w-0
            flex
            flex-col
            items-end
          `}
          /* Players section: Styles the players list container, aligned right, taking half width on sm screens */
        >
          <h2
            className={`
              text-lg
              font-semibold
              mb-2
              text-right
              drop-shadow-[0_0_8px_red]
            `}
            /* Players title: Styles the heading for the players list with a red glow */
          >
            Players
          </h2>
          <PlayersList players={players} />
        </div>
      </div>
      <div
        className={`
          w-full
          mt-8
        `}
        /* Video section: Centers the video container with top margin */
      >
        <div
          className={`
            w-full
            max-w-[600px]
            bg-gray-800
            bg-opacity-50
            rounded-2xl
            p-4
            shadow-lg
            mx-auto
          `}
          /* Video wrapper: Styles the video container with a semi-transparent background and shadow */
        >
          <video
            src="/videos/fight_gif.mp4"
            autoPlay
            loop
            muted
            playsInline
            className={`
              w-full
              h-auto
              rounded-lg
            `}
            /* Video: Ensures the video fills the container with rounded corners */
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
  /* true — show button Remove, false — Add */
  const isRemove = !!user.onRemove;

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
          avatar:   user.avatar,
          wins:     user.wins,
          losses:   user.losses,
          history:  user.history,
        }}
      />

      {/* --- ACTION BUTTONS ------------------------------------------ */}
      <div
        className="
          flex
          gap-3
          justify-center
          flex-wrap
          pt-2
        "
      >
        {/* -------- Challenge (RED) ---------- */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            user.onChallenge
              ? user.onChallenge()
              : console.log(`Challenging ${user.username}`);
          }}
          className="
            px-4
            py-2
            rounded-md
            text-sm
            font-semibold
            text-red-300
            border-2
            border-red-400
            hover:bg-red-500
            hover:text-black
            transition
            duration-300
            shadow-[0_0_12px_#ff0000]
            hover:shadow-[0_0_18px_#ff0000]
          "
          style={{
            textShadow: `
              0 0 10px rgba(255, 0, 0, 0.8),
              0 0 20px rgba(255, 0, 0, 0.6)
            `,
            boxShadow:  `
              0 0 15px rgba(255, 0, 0, 0.5)
            `,
          }}
        >
          Challenge
        </button>

        {/* -------- Add / Remove (Green and Blue) ---------- */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (isRemove && user.onRemove)   user.onRemove();
            else if (user.onAdd)             user.onAdd();
            else console.log(`Adding ${user.username} as a friend`);
          }}
          className={`
            px-4
            py-2
            rounded-md
            text-sm
            font-semibold
            ${isRemove ? "text-blue-300"   : "text-green-300"}
            border-2
            ${isRemove ? "border-blue-400" : "border-green-400"}
            ${isRemove ? "hover:bg-blue-500"  : "hover:bg-green-500"}
            hover:text-black
            transition
            duration-300
            ${isRemove
              ? "shadow-[0_0_12px_#00bfff] hover:shadow-[0_0_18px_#00bfff]"
              : "shadow-[0_0_12px_#00ff00] hover:shadow-[0_0_18px_#00ff00]"
            }
          `}
          style={{
            textShadow: isRemove
              ? `
                  0 0 10px rgba(0, 191, 255, 0.8),
                  0 0 20px rgba(0, 191, 255, 0.6)
                `
              : `
                  0 0 10px rgba(0, 255, 0, 0.8),
                  0 0 20px rgba(0, 255, 0, 0.6)
                `,
            boxShadow: isRemove
              ? "0 0 15px rgba(0, 191, 255, 0.5)"
              : "0 0 15px rgba(0, 255, 0, 0.5)",
          }}
        >
          {isRemove ? "Remove" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;







// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/PlayersList.tsx



import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import Avatar from "./Avatar";
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
              <div className="flex items-center gap-2">
                <Avatar
                  user={{ username: player.username, avatar: player.avatar }}
                  className="w-8 h-8"
                />
                <div className="font-bold text-base">{player.username}</div>
              </div>
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




// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/Profile.tsx

import React from "react";
import ProfileModal from "./ProfileModal";
import Header from "./Header";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";
import BotSelector from "./BotSelector";
import { useProfile } from "./hooks/useProfile";

const Profile: React.FC = () => {
	const {
		user,
		friends,
		players,
		selectedBot,
		isModalOpen,
		isLoading,
		setSelectedBot,
		setIsModalOpen,
		handleSaveProfile,
		handlePlay,
	} = useProfile();

	if (isLoading) {
		return (
			<div
				className={`
          min-h-screen
          w-full
          flex
          items-center
          justify-center
          text-white
        `}
			/* Loading screen: Centers a loading message on a full-screen background */
			>
				Loading data, please wait...
			</div>
		);
	}

	if (!user) {
		return (
			<div
				className={`
          min-h-screen
          w-full
          flex
          items-center
          justify-center
          text-white
        `}
			/* Error screen: Centers an error message when user data fails to load */
			>
				Failed to load user data.
			</div>
		);
	}

	return (
		<>
			<div
				className={`
          min-h-screen
          w-full
          text-white
          flex
          flex-col
          overflow-y-auto
          justify-between
        `}
			/* Main container: Creates a full-screen, scrollable layout for the profile page */
			>
				<Header
					user={{
						username: user.username,
						online: user.online,
						email: user.email,
					}}
					onProfileClick={() => setIsModalOpen(true)}
				/>
				<DesktopLayout
					user={user}
					friends={friends}
					players={players}
					selectedBot={selectedBot}
					handlePlay={handlePlay}
				/>
				<MobileLayout
					user={user}
					friends={friends}
					players={players}
					selectedBot={selectedBot}
					handlePlay={handlePlay}
				/>
				<BotSelector
					selectedBot={selectedBot}
					setSelectedBot={setSelectedBot}
				/>
			</div>

			{isModalOpen && (
				<ProfileModal
					onClose={() => setIsModalOpen(false)}
					userData={{
						avatar: user.avatar,
						username: user.username,
						name: user.name,
					}}
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
import { useNavigate } from "react-router-dom";
import { getAuthHeaders } from "./types/api";
import SearchUsers from "./SearchUsers";

interface ProfileActionsProps {
  user: Pick<UserInfo, "username" | "online" | "email">;
  onProfileClick: () => void;
}

const ProfileActions: React.FC<ProfileActionsProps> = ({ user, onProfileClick }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...getAuthHeaders(),
        },
        body: JSON.stringify({ email: user.email }),
      });
      if (!response.ok) throw new Error("Failed to logout");
      toast.success("Logged out successfully!");
      localStorage.removeItem("token");
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
      toast.error("Failed to logout. Please try again.");
    }
  };

  return (
    <div
      className={`
        flex
        items-center
        gap-4
      `}
    >
      <span
        className={`
          text-sm
          font-bold
          ${user.online ? "text-green-400" : "text-gray-400"}
        `}
      >
        {user.username}
      </span>
      <SearchUsers />
      <button
        onClick={onProfileClick}
        className={`
          px-4
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
          hover:scale-110
        `}
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
      <button
        onClick={handleLogout}
        className={`
          px-4
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
          hover:scale-110
        `}
        style={{
          textShadow: `
            0 0 4px rgba(102, 0, 255, 0.9),
            0 0 8px rgba(102, 0, 255, 0.7),
            0 0 16px rgba(102, 0, 255, 0.5),
            0 0 32px rgba(102, 0, 255, 0.3)
          `,
        }}
      >
        Logout
      </button>
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
  const [avatar, setAvatar] = useState(userData.avatar);
  const [username, setUsername] = useState(userData.username);
  const [name, setName] = useState(userData.name);
  const [password, setPassword] = useState("");

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB max

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      toast.error("File is too big! Max size: 10 MB.");
      return;
    }

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      toast.error("Only PNG or JPEG images are allowed.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    console.log("Saving data:", { avatar, username, name, password });
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
      >
        <h2
          className={`
            text-2xl
            font-bold
            text-center
          `}
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
          />
          <input
            type="file"
            accept="image/jpeg,image/png"
            onChange={handleAvatarChange}
            className={`
              text-sm
              text-gray-300
            `}
          />
        </div>

        <div
          className={`
            flex
            flex-col
            gap-1
          `}
        >
          <label
            className={`
              text-sm
              text-gray-400
            `}
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
            `}
          />
        </div>

        <div
          className={`
            flex
            flex-col
            gap-1
          `}
        >
          <label
            className={`
              text-sm
              text-gray-400
            `}
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
            `}
          />
        </div>

        <div
          className={`
            flex
            flex-col
            gap-1
          `}
        >
          <label
            className={`
              text-sm
              text-gray-400
            `}
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
            `}
          />
        </div>

        <div
          className={`
            flex
            justify-end
            gap-3
            pt-4
          `}
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
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;


// /Users/olegoman/WORK/HIVE/ft_transendense/client/src/pages/Profile/SearchUsers.tsx

import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { getAuthHeaders } from './types/api';
import { UserInfo } from './types/UserInfo';
import Avatar from './Avatar';
import { CardWrapper } from './types/ui';

interface SearchUsersProps {
  // No props needed for now
}

const SearchUsers: React.FC<SearchUsersProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<UserInfo[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      toast.error('Enter a username to search');
      return;
    }

    try {
      setIsSearching(true);
      const response = await fetch('http://localhost:3000/searchUsers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders(),
        },
        body: JSON.stringify({ username: searchQuery.trim() }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Search error');
      }

      if (data.hasUser) {
        const foundUser: UserInfo = {
          id: String(data.hasUser.id),
          username: data.hasUser.username,
          email: data.hasUser.email || '',
          name: data.hasUser.name || '',
          avatar: data.hasUser.image && data.hasUser.image_type
            ? `data:${data.hasUser.image_type};base64,${data.hasUser.image}`
            : '/prof_img/avatar1.png',
          password: '',
          wins: data.hasUser.wins || 0,
          losses: data.hasUser.losses || 0,
          online: !!data.hasUser.online,
          history: [],
        };
        setSearchResults([foundUser]);
        toast.success('User found!');
      } else {
        setSearchResults([]);
        toast.error('User not found');
      }
    } catch (error: any) {
      toast.error(error.message || 'Error searching for user');
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleClear = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleUserClick = () => {
    setSearchResults([]); // Close the popup on click
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="
            px-3
            py-1
            rounded-lg
            bg-gray-800
            text-white
            border
            border-gray-600
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-800
            text-sm
          "
        />
        <button
          onClick={handleSearch}
          disabled={isSearching}
          className="
            px-3
            py-1
            rounded-lg
            bg-indigo-950
            hover:bg-indigo-800
            text-white
            text-sm
            font-medium
            transition
            duration-300
            disabled:opacity-50
          "
        >
          Search
        </button>
        <button
          onClick={handleClear}
          className="
            px-3
            py-1
            rounded-lg
            bg-gray-600
            hover:bg-gray-700
            text-white
            text-sm
            font-medium
            transition
            duration-300
          "
        >
          Clear
        </button>
      </div>

      {searchResults.length > 0 && (
        <div className="absolute top-16 right-8 z-50 bg-gray-900 rounded-lg p-4 max-h-96 overflow-y-auto">
          {searchResults.map((result) => (
            <CardWrapper
              key={result.id}
              onClick={handleUserClick}
              className="cursor-pointer hover:bg-gray-800 transition duration-200"
            >
              <div className="flex items-center gap-2">
                <Avatar
                  user={{ username: result.username, avatar: result.avatar }}
                  className="w-8 h-8"
                />
                <span className="font-bold text-base">{result.username}</span>
                <span className={`text-sm ${result.online ? 'text-green-400' : 'text-gray-400'}`}>
                  {result.online ? 'Online' : 'Offline'}
                </span>
              </div>
            </CardWrapper>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchUsers;



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
    height: 100 %;
    width: 100 %;
    margin: 0;
    padding: 0;
    font - family: system - ui, Avenir, Helvetica, Arial, sans - serif;
    color: white;
    overflow - x: auto;
    overflow - y: auto;
  }

  body {
    background - color: #1a0a2d;
    background - image:
    radial - gradient(circle at 20 % 30 %, rgba(255, 153, 255, 0.4), transparent 50 %),
      radial - gradient(circle at 80 % 70 %, rgba(102, 255, 255, 0.3), transparent 50 %),
      radial - gradient(circle at 50 % 80 %, rgba(255, 255, 204, 0.2), transparent 50 %),
      linear - gradient(135deg, #4b0082, #6a0dad, #1f0036);
    background - blend - mode: screen, overlay;
    background - size: cover;
    background - position: center;
    background - attachment: fixed;
  }

  @media(hover: hover) {
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

//!CONTROLLERS

// /home/ogoman/HIVE/Projects/ft_transcendence/server/controllers/auth.js


import db from "../database/database.js";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
      // path to avatar
      const defaultAvatarPath = path.join(__dirname, "..", "public", "prof_img", "avatar1.png");
      console.log("Attempting to load default avatar from:", defaultAvatarPath);
      let defaultAvatarBuffer = null;

      try {
        defaultAvatarBuffer = await fs.readFile(defaultAvatarPath);
        console.log("Default avatar loaded successfully, size:", defaultAvatarBuffer.length, "bytes");
      } catch (err) {
        console.error("Failed to read default avatar:", err.message);
        console.warn("Using null avatar as fallback");
        return reply.code(500).send({ message: "Failed to load default avatar" });
      }

      const users = db.prepare(
        "INSERT INTO users (name, username, email, password, image, image_type) VALUES (?, ?, ?, ?, ?, ?)"
      );
      const result = users.run(name, username, email, password, defaultAvatarBuffer, "image/png");
      console.log("User inserted into database, ID:", result.lastInsertRowid);

      const token = req.jwt.sign({ 
        id: result.lastInsertRowid 
      });

      console.log("TOKEN_ID", token);

	  // Set user online
      const online = db
        .prepare(`UPDATE users SET online = ? WHERE id = ?`)
        .run(1, result.lastInsertRowid);

	  // Verify online status
      const updated = db
        .prepare(`SELECT id, online, image, image_type FROM users WHERE id = ?`)
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
    console.log("Query result:", user);  // Log the result

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
      .prepare("SELECT id, name, username, email, online, image, image_type FROM users WHERE id = ?")
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
        image_type: user.image_type || "image/png"
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
    return reply.code(400).send({ message: "PLease fill in friend username" });

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
  
  const friend = db.prepare("SELECT * FROM users WHERE username = ?").get(username);
  if (!friend) {
    return reply.code(404).send({ message: "NO such as friend" }); 
  }

  console.log("ID=>>>>", friend.id);
  if (user_id === friend.id) {
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
    if (hasUser2) {
      const friendAlready1 = db
        .prepare(`SELECT * FROM friends WHERE user_id = ? AND friends_id = ? OR user_id = ? AND friends_id = ?`)
        .get(user_id, friend.id, friend.id, user_id);
      if (friendAlready1) {
        return reply.code(400).send({ message: "Friend already" });
      } else {
        const add = db
          .prepare(`INSERT INTO friends (user_id, friends_id, confirmReq) VALUES (?, ?, 1)`) //!
          .run(user_id, friend.id);
        return reply.code(200).send({ message: "Friend added successfully", add });
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
  // confirm just will be 1???
  const { user_id, username, confirmReq } = req.body;

  const friend = db.prepare("SELECT * FROM users WHERE username = ?").get(username);
  if (!friend) 
  {
    return reply.code(404).send({ message: "NO such as friend" }); 
  }

  // confirm can be accepted only from friend_id side
  try {
    const checkReq1 = db
      .prepare(`SELECT * FROM friends WHERE friends_id = ? AND user_id = ?`)
      .get(user_id, friend.id);
    if (checkReq1) {

      console.log("CoN=>", confirmReq);
      const confirmAccept1 = db
        .prepare(`UPDATE friends SET confirmReq = 1 WHERE user_id = ? AND friends_id = ?`) //!
        .run(friend.id, user_id); //!
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

///SEE the own friends  //!
export async function myFriends(req, reply) {
  console.log("WE IN MY FRIENDS");

  const { user_id } = req.body;

  try {
    const myfriends = db
      .prepare(`SELECT * FROM friends WHERE (user_id = ? OR friends_id = ?) AND confirmReq = 1`)
      .all(user_id, user_id);
    
    const friendsData = myfriends.map((f) => {
      const friendId = f.user_id === user_id ? f.friends_id : f.user_id;
      const friendData = db
        .prepare(`SELECT id, username, email, name, wins, losses, online, image, image_type FROM users WHERE id = ?`)
        .get(friendId);
      if (!friendData) {
        return null;
      }
      return {
        id: friendData.id,
        username: friendData.username,
        email: friendData.email || "",
        name: friendData.name || "",
        wins: friendData.wins || 0,
        losses: friendData.losses || 0,
        online: !!friendData.online,
        image: friendData.image ? Buffer.from(friendData.image).toString("base64") : null,
        image_type: friendData.image_type || "image/png",
      };
    }).filter((f) => f !== null);

    return reply.code(200).send({ myfriends: friendsData });
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}

/// delete from friends
export async function deleteFriend(req, reply) {
  console.log("WE IN MY DELETE FRIENDS");

  const { user_id, username } = req.body;

  const friend = db.prepare("SELECT * FROM users WHERE username = ?").get(username);
  if (!friend) {
    return reply.code(404).send({ message: "NO such as friend" }); 
  }

  try { //!
    const deleteFr = db
      .prepare(`DELETE FROM friends WHERE (user_id = ? AND friends_id = ?) OR (user_id = ? AND friends_id = ?)`) 
      .run(user_id, friend.id, friend.id, user_id); 
    if (deleteFr.changes === 0) {
      return reply.code(400).send({ message: "Friendship not found" });
    }
    return reply.code(200).send({ message: "Friend removed successfully" });
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

    db.prepare("UPDATE users SET image = ?, image_type = ? WHERE id = ?").run(buffer, data.mimetype, userId);
    return reply.code(200).send({ message: "Image uploaded", mimeType: data.mimetype });
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

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    name TEXT NOT NULL,
    password TEXT NOT NULL,
    online BOOL, 
    image BLOB,
    image_type TEXT,
    wins INTEGER default 3,
    losses INTEGER default 0,
    UNIQUE (id, username, email)
  );
`);
console.log("Database initialized and users table is ready.");

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
      const users = rows.map(user => ({
        ...user,
        image: user.image ? Buffer.from(user.image).toString("base64") : null,
        image_type: user.image_type || "image/png"
      }));
      return reply.code(200).send({ users });
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

import { z } from "zod";

export const usersSchema = z.object({
  username: z.string().max(20),
});

export const FriendsSchema = z.object({
  user_id: z.number(),
  username: z.string(),
  // username: z.string().max(20)
});

export const FriendsAccept = z.object({
  user_id: z.number(),
  username: z.string().max(20),
  confirmReq: z.number(), ///????? maybe int need to check
});

export const FriendsMy = z.object({
  user_id: z.number(),
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
