// /home/ogoman/HIVE/Projects/ft_transcendence/client/public/boots_img

// /home/ogoman/HIVE/Projects/ft_transcendence/client/public/button_img

// /home/ogoman/HIVE/Projects/ft_transcendence/client/public/prof_img

// /home/ogoman/HIVE/Projects/ft_transcendence/client/public/videos

// /home/ogoman/HIVE/Projects/ft_transcendence/client/public/prof_img/avatar1.png



//! CLIENT

// /home/ogoman/HIVE/Projects/ft_transcendence/client/index.html

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Super Pong</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>



// /home/ogoman/HIVE/Projects/ft_transcendence/client/package.json

{
  "name": "trans",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "test": "vitest run"
  },
  "dependencies": {
    "@babylonjs/core": "^8.7.0",
    "@babylonjs/materials": "^8.7.0",
    "@fastify/multipart": "^9.0.3",
    "@tanstack/react-query": "^5.77.2",
    "axios": "^1.9.0",
    "buffer": "^6.0.3",
    "jsonwebtoken": "^9.0.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hot-toast": "^2.5.2",
    "react-router-dom": "^7.5.0",
    "recharts": "^2.15.3",
    "rollup": "^4.41.1",
    "tailwindcss-textshadow": "^2.1.3"
  },
  "devDependencies": {
    "@eslint/js": "^9.21.0",
    "@types/node": "^22.15.3",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@types/react-router-dom": "^5.3.3",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.14",
    "eslint": "^9.21.0",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^15.15.0",
    "jsdom": "^26.1.0",
    "lines-and-columns": "^2.0.4",
    "postcss": "^8.4.31",
    "tailwind-scrollbar": "^3.1.0",
    "tailwindcss": "^3.4.1",
    "typescript": "~5.7.2",
    "typescript-eslint": "^8.24.1",
    "vite": "^6.2.0",
    "vitest": "^3.1.4"
  },
  "description": "This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.",
  "main": "eslint.config.js",
  "keywords": [],
  "author": "",
  "license": "ISC"
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/postcss.config.js

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};


// /home/ogoman/HIVE/Projects/ft_transcendence/client/tailwind.config.js

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neon: `
          -8px -8px 60px rgba(255, 0, 255, 0.7),
           8px -8px 20px rgba(0, 255, 255, 0.7),
          -2px 2px 10px rgba(0, 252, 101, 0.7),
           8px 8px 20px rgba(113, 240, 2, 0.7),
           0 0 10px rgba(255, 0, 255, 0.6),
           0 0 20px rgba(255, 0, 255, 0.4),
           0 0 40px rgba(255, 0, 255, 0.2)
        `,
        'neon-btn': '0 0 15px 2px rgba(255, 0, 255, 0.5)',
      },
      colors: {
        neonPink: '#ff00ff',
        neonGreen: '#00fc65',
        neonCyan: '#00ffff',
        neonIndigo: '#6600ff',
                mainNeon: '#0a0a23',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // make sure this matches your file structure
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


// /home/ogoman/HIVE/Projects/ft_transcendence/client/vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, '../server/cert/key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, '../server/cert/cert.pem')),
    },
    port: 5173,
  },
})



// /home/ogoman/HIVE/Projects/ft_transcendence/client/vitest.config.ts

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
  },
});





//! SRC

// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/assets/mainPageImages


//! SRC/CHAT

// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/chat/components/ChatModal.css

.message-bubble {
  max-width: 70%;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.4);
  color: #e9f4fb;
  word-break: break-word;
  overflow-wrap: anywhere;
}

.message-bubble.sent {
  align-self: flex-end;
  border: 1px solid #40bfff;
  background-color: rgba(64, 191, 255, 0.2);
}

.message-bubble.received {
  align-self: flex-start;
  border: 1px solid #bd0e86;
  background-color: rgba(189, 14, 134, 0.2);
}

.conversation-item {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: #d3e0fb;
  margin-bottom: 0.25rem;
}

.conversation-item:hover {
  background-color: rgba(0, 162, 255, 0.1);
  color: #00a1ff;
}
.search-input {
  background-color: #1f2937;
  color: #e9f4fb;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}
.search-input:focus {
  outline: none;
  border: 2px solid #40bfff;
  box-shadow: 0 0 5px rgba(64, 191, 255, 0.7), 0 0 10px rgba(64, 191, 255, 0.9);
}
.search-input::placeholder {
  color: #9ca3af;
}

.search-highlight {
  background-color: rgba(64, 191, 255, 0.3);
  color: #e9f4fb;
  border-radius: 0.125rem;
  padding: 0 2px;
  text-shadow: 0 0 6px rgba(64, 191, 255, 0.8);
}

.system-messages {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  padding: 0.25rem;
  font-family: 'Orbitron', sans-serif;
  color: #d3e0fb;
}

.match-heading {
  color: #40bfff;
  text-shadow: 0 0 6px rgba(64, 191, 255, 0.9);
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/chat/components/ChatModal.tsx

import React, { useState, useRef, useEffect } from "react";
import { useEscapeKey } from "../../pong/hooks/useEscapeKey";
import { UserInfo } from "../../pages/Profile/types/UserInfo";
import { useChatContext } from "../context/ChatContext";
import ChatUserList from "./ChatUserList";
import SystemNotification from "./SystemNotification";
import { OverlayWrapper } from "../../pong/components/Overlays/OverlayWrapper";
import {
  OverlayCard,
  OverlayHeading,
  overlayOutlineClass,
} from "../../pong/components/Overlays/OverlayComponents";
import "./ChatModal.css";
import { MAX_MESSAGE_LENGTH } from "../../../../shared/chatConstants.js";
import ChatProfileModal from "./ChatProfileModal";
import { askForChallenge } from "../../pages/Profile/Challenge";
import { toast } from "react-hot-toast";

interface ChatModalProps {
  onClose: () => void;
  currentUserId: string;
  players: UserInfo[];
}

const ChatModal: React.FC<ChatModalProps> = ({ onClose, currentUserId, players }) => {
  const { state, selectUser, sendMessage, blockUser, unblockUser } = useChatContext();
  const { conversations, selected, blockedByMe } = state;
  const messages = selected ? conversations[Number(selected.id)] || [] : [];
  const blockedByYou = selected ? blockedByMe.includes(Number(selected.id)) : false;
  const isBlocked = blockedByYou;
  const [input, setInput] = useState("");
  const [cooldown, setCooldown] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const cooldownRef = useRef<NodeJS.Timeout | null>(null);
  const COOLDOWN_MS = 500;

  useEscapeKey(onClose);

  useEffect(() => {
    return () => {
      if (cooldownRef.current) clearTimeout(cooldownRef.current);
    };
  }, []);

  useEffect(() => {
    const el = messagesEndRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || !selected || cooldown || isBlocked) return;
    const text = input.trim();
    setInput("");
    setCooldown(true);
    cooldownRef.current = setTimeout(() => setCooldown(false), COOLDOWN_MS);
    sendMessage(text);
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  const handleBlockToggle = () => {
    if (!selected) return;
    if (blockedByYou) {
      unblockUser(Number(selected.id));
    } else {
      setInput("");
      blockUser(Number(selected.id));
    }
  };

  const handleChallenge = async () => {
    if (!selected) return;
    try {
      await askForChallenge(selected.username);
      toast.success(`Challenge sent to ${selected.username}`);
    } catch {
      toast.error("Failed to send challenge");
    }
  };

  return (
    <>
    <OverlayWrapper>
      <OverlayCard className="w-[90%] max-w-[800px] h-[80vh] flex flex-col overflow-hidden border-[#00a1ff] bg-gradient-to-br from-[#0a0e2a] to-black shadow-[0_0_20px_#00a1ff,0_0_40px_#00a1ff]">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-2 right-4 text-[#0A7FC9] hover:text-pink-500 text-lg font-bold font-orbitron"
        >
          ✕
        </button>
        <OverlayHeading className="text-2xl mb-4 text-[#e9f4fb] drop-shadow-[0_0_10px_#00a1ff] font-orbitron">
          Chat
        </OverlayHeading>
        <div className="flex flex-1 overflow-hidden rounded-lg bg-black bg-opacity-40">
          <div className="flex flex-col w-56 border-r border-gray-700">
            <ChatUserList players={players} onSelect={selectUser} />
            {state.systemMessages.size > 0 && (
              <div
                className={`system-messages p-2 overflow-y-auto text-xs text-blue-300 font-orbitron bg-black bg-opacity-30 rounded-md mt-2 ${overlayOutlineClass("blue")}`}
              >
                {Array.from(state.systemMessages.values()).map((msg) => (
                  <div key={msg.id} className="mb-2">
                    <SystemNotification id={msg.id} type={msg.type} text={msg.text} />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="chat-area flex flex-col flex-1">
            {selected && (
              <div className="p-2 border-b border-gray-700 flex justify-between items-center">
                <span className="font-orbitron">{selected.username}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowProfile(true)}
                    className="text-sm text-blue-400 hover:text-blue-200 font-orbitron flex items-center border border-blue-400 rounded px-2 py-1"
                  >
                    <i className="fa-solid fa-user mr-1" />
                    Profile
                  </button>
                  <button
                    onClick={handleChallenge}
                    className="text-sm text-blue-400 hover:text-blue-200 font-orbitron flex items-center border border-blue-400 rounded px-2 py-1"
                  >
                    <i className="fa-solid fa-gamepad mr-1" />
                    Invite
                  </button>
                  <button
                    onClick={handleBlockToggle}
                    className="text-sm text-blue-400 hover:text-blue-200 font-orbitron flex items-center border border-blue-400 rounded px-2 py-1"
                  >
                    <i className={`fa-solid ${blockedByYou ? 'fa-unlock' : 'fa-ban'} mr-1`} />
                    {blockedByYou ? 'Unblock' : 'Block'}
                  </button>
                </div>
              </div>
            )}
            <div
              className="chat-messages flex-1 p-2 overflow-y-auto flex flex-col font-ubuntu"
              ref={messagesEndRef}
            >
              {selected ? (
                messages.map((m) => (
                  <div
                    key={m.id}
                    className={`message-bubble ${
                      m.sender_id === Number(currentUserId) ? "sent" : "received"
                    }`}
                  >
                    <p className="break-words font-ubuntu">{m.text}</p>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-400 mt-4">
                  Select a user to start chatting
                </div>
              )}
            </div>
            {selected && (
              <div className="chat-input-container p-2 border-t border-gray-700">
                {blockedByYou && (
                  <div className="text-center text-gray-400 mb-1">You've blocked this user. You can no longer send messages.</div>
                )}
                <div className="flex items-end">
                  <input
                    className="search-input flex-grow mr-2 font-ubuntu focus:outline-none"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="Type a message..."
                    maxLength={MAX_MESSAGE_LENGTH}
                    disabled={isBlocked}
                  />
                  <button
                    onClick={handleSend}
                    disabled={input.trim().length === 0 || cooldown || isBlocked}
                    className="bg-gray-900 border border-blue-400 text-white px-4 py-2 rounded-lg shadow-blue-500 hover:bg-gray-800 disabled:opacity-50 font-orbitron"
                    aria-label="Send message"
                  >
                    <i className="fa-solid fa-paper-plane" />
                  </button>
                </div>
                <div className="text-right text-xs text-gray-400 mt-1">
                  {MAX_MESSAGE_LENGTH - input.length} left
                </div>
              </div>
            )}
          </div>
        </div>
      </OverlayCard>
    </OverlayWrapper>
    {showProfile && selected && (
      <ChatProfileModal
        user={selected}
        onClose={() => setShowProfile(false)}
        blocked={blockedByYou}
        onToggleBlock={handleBlockToggle}
      />
    )}
    </>
  );
};

export default ChatModal;


// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/chat/components/ChatProfileModal.tsx

import React, { useMemo, useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { UserInfo } from "../../pages/Profile/types/UserInfo";
import { addToFavorites } from "../../pages/Profile/AddFavorites";
import { deleteFromFavorites } from "../../pages/Profile/DeleteFavorites";
import { OverlayWrapper } from "../../pong/components/Overlays/OverlayWrapper";
import {
  OverlayCard,
  OverlayButton,
} from "../../pong/components/Overlays/OverlayComponents";
import Avatar from "../../pages/Profile/Avatar";
import { calculateUserStats } from "../../pages/Profile/types/UserInfo";
import { useEscapeKey } from "../../pong/hooks/useEscapeKey";
import StatsBlock from "./StatsBlock";
import RecentGamesList from "./RecentGamesList";


interface ChatProfileModalProps {
  user: UserInfo;
  onClose: () => void;
  blocked?: boolean;
  onToggleBlock?: () => void;
}

const ChatProfileModal: React.FC<ChatProfileModalProps> = ({
  user,
  onClose,
  blocked = false,
  onToggleBlock,
}) => {
  const recentHistory = useMemo(() => user.history.slice(-5).reverse(), [user.history]);
  const [isFriend, setIsFriend] = useState(false);
  const handleAddFavorite = useCallback(async () => {
    try {
      await addToFavorites(user.username);
      toast.success(`${user.username} added to favorites`);
      setIsFriend(true);
    } catch (err) {
      console.error("Failed to add favorite:", err);
      toast.error("Failed to add to favorites");
    }
  }, [user.username]);

  const handleRemoveFavorite = useCallback(async () => {
    try {
      await deleteFromFavorites(user.username);
      toast.success(`${user.username} removed from favorites`);
      setIsFriend(false);
    } catch (err) {
      console.error("Failed to remove favorite:", err);
      toast.error("Failed to remove from favorites");
    }
  }, [user.username]);

  useEscapeKey(onClose);

  const { winRate, latestDate, winsToday, lossesToday } = useMemo(
    () => calculateUserStats(user.wins, user.losses, user.history),
    [user.wins, user.losses, user.history]
  );
  return (
    <OverlayWrapper onBackdropClick={onClose}>
      <OverlayCard
        role="dialog"
        aria-modal="true"
        aria-labelledby="chat-profile-title"
        className="w-[90%] max-w-lg mx-4 pb-10 text-white font-ubuntu overflow-hidden text-left bg-gray-800/10 backdrop-blur-md p-0"
      >
        <div className="relative z-10 bg-gray-950 pb-6 flex flex-col md:flex-row items-center gap-6 border-b-2 border-blue-400/50">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-400">
              <Avatar
                user={{ avatar: user.avatar, username: user.username }}
                className="w-24 h-24"
              />
            </div>
            {user.online && (
              <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-green-500 border-2 border-gray-800" />
            )}
          </div>
          <div className="text-center md:text-left">
            <h2 id="chat-profile-title" className="text-2xl font-bold text-white font-orbitron">
              {user.username}
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
              <span className="text-blue-300">
                Games {user.wins + user.losses}
              </span>
              <div className="w-1 h-1 rounded-full bg-blue-300" />
              <span
                className={user.online ? "text-green-300" : "text-gray-400"}
              >
                {user.online ? "Online" : "Offline"}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-2 right-4 text-[#0A7FC9] hover:text-pink-500 text-lg font-bold font-orbitron"
          >
            ✕
          </button>
        </div>
          <div className="relative z-10 p-6 space-y-6">
            <StatsBlock winRate={winRate} latestDate={latestDate} winsToday={winsToday} lossesToday={lossesToday} totalMatches={user.wins + user.losses} totalWins={user.wins} />

          <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-600">
            <h3 className="text-lg font-semibold text-blue-300 mb-3 flex items-center font-orbitron">
              <i className="fa-solid fa-id-card mr-2" />
              Personal data
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Real name:</span>
                <span className="text-white font-medium">{user.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Email:</span>
                <span className="text-white font-medium">{user.email}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <OverlayButton
              color="blue"
              onClick={isFriend ? handleRemoveFavorite : handleAddFavorite}
              className="w-full flex items-center justify-center"
            >
              <i
                className={`fa-solid ${isFriend ? 'fa-user-minus' : 'fa-user-plus'} mr-2`}
              />
              {isFriend ? 'Remove friend' : 'Add friend'}
            </OverlayButton>
            {onToggleBlock && (
              <OverlayButton
                onClick={onToggleBlock}
                className="w-full flex items-center justify-center"
              >
                <i
                  className={`fa-solid ${blocked ? "fa-unlock" : "fa-ban"} mr-2`}
                />
                {blocked ? "Unblock" : "Block User"}
              </OverlayButton>
            )}
          </div>
        </div>
          <RecentGamesList history={recentHistory} />
      </OverlayCard>
    </OverlayWrapper>
  );
};

export default ChatProfileModal;



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/chat/components/ChatUserList.tsx

import React, { useState } from "react";
import { UserInfo } from "../../pages/Profile/types/UserInfo";
import "./ChatModal.css";

interface Props {
  players: UserInfo[];
  onSelect: (user: UserInfo) => void;
}

const ChatUserList: React.FC<Props> = ({ players, onSelect }) => {
  const [search, setSearch] = useState("");

  const highlightName = (name: string) => {
    if (!search) return name;
    const escaped = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escaped})`, "gi");
    return name.split(regex).map((part, i) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={i} className="search-highlight">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <div className="conversations-list p-2 overflow-y-auto flex-1 font-ubuntu">
      <div className="relative mb-2">
        <i className="fa-solid fa-search absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        <input
          className="search-input w-full pr-8 font-ubuntu focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search user..."
        />
      </div>
      {players
        .filter((u) => u.username.toLowerCase().includes(search.toLowerCase()))
        .map((u) => (
          <div
            key={u.id}
            className="conversation-item cursor-pointer hover:text-blue-300 font-ubuntu"
            onClick={() => {
              onSelect(u);
              setSearch("");
            }}
          >
            {highlightName(u.username)}
          </div>
        ))}
    </div>
  );
};

export default ChatUserList;



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/chat/components/ProgressRing.tsx

import React from "react";

interface ProgressRingProps {
  percent: number;
  label?: string;
}

const ProgressRing: React.FC<ProgressRingProps> = ({ percent, label = "Win rate" }) => {
  const size = 140;
  const stroke = 10;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = React.useState(circumference);

  React.useEffect(() => {
    const target = circumference * (1 - percent / 100);
    // trigger animation on the next frame so the transition is visible
    requestAnimationFrame(() => setOffset(target));
  }, [percent, circumference]);

  return (
    <svg width={size} height={size} className="overflow-visible">
      <defs>
        <filter
          id="glow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          filterUnits="userSpaceOnUse"
        >
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#00bfff" />
        </filter>
      </defs>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="rgba(255,255,255,0.1)"
        strokeWidth={10}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#00bfff"
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: "stroke-dashoffset 1.5s ease-out", filter: "url(#glow)" }}
      />
      <text
        x="50%"
        y="45%"
        dy="0.3em"
        textAnchor="middle"
        className="fill-white font-bold text-2xl font-orbitron"
      >
        {percent}%
      </text>
      <text
        x="50%"
        y="42%"
        dy="2.2em"
        textAnchor="middle"
        className="fill-blue-300 text-sm"
      >
        {label}
      </text>
    </svg>
  );
};

export default ProgressRing;



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/chat/components/RecentGamesList.tsx

import React from "react";
import { MatchResult } from "../../pages/Profile/types/UserInfo";

interface RecentGamesListProps {
  history: MatchResult[];
}

const RecentGamesList: React.FC<RecentGamesListProps> = ({ history }) => {
  if (history.length === 0) return null;
  return (
    <div className="relative z-10 px-6 pb-6 text-left text-sm text-gray-300">
      <p className="font-semibold mb-1 font-orbitron">Recent games:</p>
      <ul className="space-y-0.5">
        {history.map((h) => (
          <li key={h.date + h.result}>
            {h.date} - {h.result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentGamesList;



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/chat/components/StatsBlock.tsx

import React from "react";
import ProgressRing from "./ProgressRing";

interface StatsBlockProps {
  winRate: number;
  latestDate?: string;
  winsToday: number;
  lossesToday: number;
  totalMatches: number;
  totalWins: number;
}

const StatsBlock: React.FC<StatsBlockProps> = ({
  winRate,
  latestDate,
  winsToday,
  lossesToday,
  totalMatches,
  totalWins,
}) => (
  <div className="grid grid-cols-2 gap-4">
    <div className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center">
      <ProgressRing percent={winRate} />
      {latestDate && (
        <p className="text-xs text-gray-300">
          Last game: {latestDate} — Wins {winsToday}, Losses {lossesToday}
        </p>
      )}
    </div>
    <div className="col-span-2 sm:col-span-1 grid grid-rows-2 gap-4">
      <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600 text-center">
        <p className="text-gray-300 text-sm">Matches played</p>
        <p className="text-2xl font-bold text-white mt-1">{totalMatches}</p>
      </div>
      <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600 text-center">
        <p className="text-gray-300 text-sm">Wins</p>
        <p className="text-2xl font-bold text-white mt-1">{totalWins}</p>
      </div>
    </div>
  </div>
);

export default StatsBlock;



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/chat/components/SystemNotification.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { SystemNotification as Notification } from '../../../../shared/chatConstants.js';

type Props = Notification;

const SystemNotification: React.FC<Props> = ({ type, text }) => {
  const navigate = useNavigate();
  if (type === 'waiting') {
    return (
      <>
        <div className="match-heading text-[#40BFFF] font-bold mb-1 drop-shadow-[0_0_6px_#40BFFF]">MATCH FOUND!</div>
        <div>{text}</div>
        <button
          onClick={() => {
            navigate('/pong?mode=remote2p');
          }}
          className="text-xs text-[#40BFFF] font-orbitron border border-[#40BFFF] rounded px-2 py-1 mt-1 drop-shadow-[0_0_6px_#40BFFF]"
        >
          join match
        </button>
      </>
    );
  }
  return <>{text}</>;
};

export default SystemNotification;



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/chat/context/ChatContext.tsx

import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { UserInfo } from '../../pages/Profile/types/UserInfo';
import {
  ChatMessage,
  fetchChatMessages,
  blockUserRequest,
  unblockUserRequest,
  fetchBlockedUsers,
} from '../../pages/Profile/types/api';
import { sendMessage as sendChat, sendViaSocket } from '../services/chatService';
import { toast } from 'react-hot-toast';
import { useChatSocket } from '../hooks/useChatSocket';
import {
  SYSTEM_MESSAGE_TTL_MS,
  MAX_SYSTEM_MESSAGES,
} from '../../../../shared/chatConstants.js';
import type { SystemNotification } from '../../../../shared/chatConstants.js';

type SystemMessage = SystemNotification;

export interface ChatState {
  selected: UserInfo | null;
  /**
   * Store conversation history per other user.
   * Key is the other user's id and value is the array of chat messages.
   */
  conversations: Record<number, ChatMessage[]>;
  connected: boolean;
  /** Users this client has blocked */
  blockedByMe: number[];
  /** System notifications to show in chat */
  systemMessages: Map<string, SystemMessage>;
  }

type Action =
  | { type: 'select'; payload: UserInfo | null }
  | { type: 'setMessages'; userId: number; payload: ChatMessage[] }
  | { type: 'addMessage'; userId: number; payload: ChatMessage }
  | { type: 'setConnected'; payload: boolean }
  | { type: 'blockByMe'; userId: number }
  | { type: 'unblockByMe'; userId: number }
  | { type: 'setBlockedByMe'; ids: number[] }
  | { type: 'setSystemMessages'; payload: Map<string, SystemMessage> }
  | { type: 'addSystemMessage'; payload: SystemMessage }
  | { type: 'removeSystemMessage'; payload: string };

interface ChatContextType {
  state: ChatState;
  selectUser: (user: UserInfo | null) => void;
  sendMessage: (text: string) => Promise<void>;
  blockUser: (id: number) => Promise<void>;
  unblockUser: (id: number) => Promise<void>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function chatReducer(state: ChatState, action: Action): ChatState {
  switch (action.type) {
    case 'select':
      return { ...state, selected: action.payload };
    case 'setMessages': {
      return {
        ...state,
        conversations: { ...state.conversations, [action.userId]: action.payload },
      };
    }
    case 'addMessage': {
      const existing = state.conversations[action.userId] || [];
      return {
        ...state,
        conversations: {
          ...state.conversations,
          [action.userId]: [...existing, action.payload],
        },
      };
    }
    case 'setConnected':
      return { ...state, connected: action.payload };
    case 'blockByMe':
      if (state.blockedByMe.includes(action.userId)) return state;
      return { ...state, blockedByMe: [...state.blockedByMe, action.userId] };
    case 'unblockByMe':
      return {
        ...state,
        blockedByMe: state.blockedByMe.filter((id) => id !== action.userId),
      };
    case 'setBlockedByMe':
      return { ...state, blockedByMe: action.ids };
    case 'setSystemMessages':
      return { ...state, systemMessages: action.payload };
    case 'addSystemMessage': {
      const msgs = new Map(state.systemMessages);
      msgs.set(action.payload.id, action.payload);
      if (msgs.size > MAX_SYSTEM_MESSAGES) {
        const firstKey = msgs.keys().next().value;
        msgs.delete(firstKey);
      }
      return { ...state, systemMessages: msgs };
    }
    case 'removeSystemMessage': {
      const msgs = new Map(state.systemMessages);
      msgs.delete(action.payload);
      return { ...state, systemMessages: msgs };
    }
    default:
      return state;
  }
}

export const ChatProvider = ({ children, currentUserId }: { children: ReactNode; currentUserId: string }) => {
  const [state, dispatch] = useReducer(chatReducer, {
    selected: null,
    conversations: {},
    connected: false,
    blockedByMe: [],
    systemMessages: new Map<string, SystemMessage>(),
  });

  const systemTimers = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());
  const systemMessagesRef = useRef(state.systemMessages);

  useEffect(() => {
    systemMessagesRef.current = state.systemMessages;
  }, [state.systemMessages]);


  const handleIncoming = useCallback(
    (msg: ChatMessage) => {
      const otherId = msg.sender_id === Number(currentUserId) ? msg.receiver_id : msg.sender_id;
      dispatch({ type: 'addMessage', userId: otherId, payload: msg });
    },
    [currentUserId],
  );

  const handleStatus = useCallback((connected: boolean) => {
    dispatch({ type: 'setConnected', payload: connected });
  }, []);

  const handleSystem = useCallback((msg: SystemNotification) => {
    const msgs = new Map(systemMessagesRef.current);
    const existingTimer = systemTimers.current.get(msg.id);
    if (existingTimer) {
      clearTimeout(existingTimer);
      systemTimers.current.delete(msg.id);
    } else if (msgs.size >= MAX_SYSTEM_MESSAGES && !msgs.has(msg.id)) {
      const firstKey = msgs.keys().next().value as string;
      msgs.delete(firstKey);
      const oldTimer = systemTimers.current.get(firstKey);
      if (oldTimer) {
        clearTimeout(oldTimer);
        systemTimers.current.delete(firstKey);
      }
    }

    msgs.set(msg.id, msg);
    systemMessagesRef.current = msgs;
    dispatch({ type: 'setSystemMessages', payload: msgs });

    const timer = setTimeout(() => {
      systemTimers.current.delete(msg.id);
      const updated = new Map(systemMessagesRef.current);
      updated.delete(msg.id);
      systemMessagesRef.current = updated;
      dispatch({ type: 'setSystemMessages', payload: updated });
    }, SYSTEM_MESSAGE_TTL_MS);
    systemTimers.current.set(msg.id, timer);
  }, []);

  const handleSystemRemove = useCallback((id: string) => {
    const timer = systemTimers.current.get(id);
    if (timer) {
      clearTimeout(timer);
      systemTimers.current.delete(id);
    }
    const msgs = new Map(systemMessagesRef.current);
    msgs.delete(id);
    systemMessagesRef.current = msgs;
    dispatch({ type: 'setSystemMessages', payload: msgs });
  }, []);

  const socket = useChatSocket(
    currentUserId,
    handleIncoming,
    handleStatus,
    undefined,
    handleSystem,
    handleSystemRemove,
  );

  const selectUser = useCallback((user: UserInfo | null) => {
    dispatch({ type: 'select', payload: user });
  }, []);

  useEffect(() => {
    fetchBlockedUsers()
      .then((ids) => dispatch({ type: 'setBlockedByMe', ids }))
      .catch(() => {});
  }, [currentUserId]);

  const loadMessages = useCallback(
    (otherId: number) => {
      fetchChatMessages(Number(currentUserId), otherId, Number(currentUserId))
        .then((msgs) => dispatch({ type: 'setMessages', userId: otherId, payload: msgs }))
        .catch(() => dispatch({ type: 'setMessages', userId: otherId, payload: [] }));
    },
    [currentUserId],
  );

  useEffect(() => {
    if (!state.selected) return;
    const otherId = Number(state.selected.id);
    loadMessages(otherId);
  }, [state.selected, loadMessages]);

  useEffect(() => {
    return () => {
      systemTimers.current.forEach((t) => clearTimeout(t));
      systemTimers.current.clear();
    };
  }, []);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!state.selected) return;
      const message: ChatMessage = {
        id: Date.now(),
        sender_id: Number(currentUserId),
        receiver_id: Number(state.selected.id),
        text,
        created_at: new Date().toISOString(),
      };

      const sent = sendViaSocket(socket, state.selected.id, text);
      if (!sent) {
        try {
          await sendChat(
            socket,
            Number(currentUserId),
            Number(state.selected.id),
            text,
          );
          dispatch({
            type: 'addMessage',
            userId: Number(state.selected.id),
            payload: message,
          });
        } catch {
          toast.error('Failed to send message');
        }
      }
    },
    [socket, state.selected, currentUserId]
  );

  const blockUser = useCallback(
    async (id: number) => {
      try {
        await blockUserRequest(id);
        dispatch({ type: 'blockByMe', userId: id });
      } catch {
        // ignore errors
      }
    },
    [currentUserId]
  );

  const unblockUser = useCallback(
    async (id: number) => {
      try {
        await unblockUserRequest(id);
        dispatch({ type: 'unblockByMe', userId: id });
      } catch {
        // ignore errors
      }
    },
    [currentUserId]
  );

  const value = { state, selectUser, sendMessage, blockUser, unblockUser };
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChatContext = () => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error('useChatContext must be used within ChatProvider');
  return ctx;
};



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/chat/hooks/useChatSocket.ts

import { useEffect, useRef, useState } from "react";
import { ChatMessage } from "../../pages/Profile/types/api";
import type { SystemNotification } from "../../../../shared/chatConstants.js";
import { ChatMessageTypes } from "../../../../shared/chatMessageTypes.js";

export function useChatSocket(
  userId: string,
  onChatMessage: (msg: ChatMessage) => void,
  onStatusChange?: (connected: boolean) => void,
  onError?: (err: { code: number; message: string }) => void,
  onSystemMessage?: (msg: SystemNotification) => void,
  onSystemRemove?: (id: string) => void,
): WebSocket | null {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const reconnectRef = useRef<NodeJS.Timeout | null>(null);
  const activeRef = useRef(false);
  const attemptsRef = useRef(0);
  const MAX_RETRIES = 5;

  useEffect(() => {
    activeRef.current = true;
    let ws: WebSocket;

    const connect = () => {
      const token = localStorage.getItem("token");
      let url = `wss://localhost:3000/chat?user_id=${userId}`;
      if (token) url += `&token=${token}`;
      ws = new WebSocket(url);
      onStatusChange?.(false);

      ws.onmessage = (ev) => {
        try {
          const data = JSON.parse(ev.data);
          if (data.type === ChatMessageTypes.CHAT) {
            onChatMessage(data.message as ChatMessage);
          } else if (data.type === ChatMessageTypes.SYSTEM) {
            onSystemMessage?.(data.message as SystemNotification);
          } else if (data.type === ChatMessageTypes.SYSTEM_REMOVE) {
            onSystemRemove?.(data.id as string);
          } else if (data.type === ChatMessageTypes.ERROR) {
            onError?.(data as { code: number; message: string });
          }
        } catch {
          // ignore parse errors
        }
      };

      ws.onopen = () => {
        attemptsRef.current = 0;
        setSocket(ws);
        onStatusChange?.(true);
      };

      ws.onclose = (ev) => {
        try {
          onStatusChange?.(false);
        } catch (err) {
          console.error("Error handling ws.onclose:", err);
        }
        if (!activeRef.current) return;
        if (reconnectRef.current) clearTimeout(reconnectRef.current);
        if (!ev.wasClean && attemptsRef.current < MAX_RETRIES) {
          const delay = Math.min(30000, 2 ** attemptsRef.current * 1000);
          attemptsRef.current += 1;
          reconnectRef.current = setTimeout(connect, delay);
        } else if (attemptsRef.current >= MAX_RETRIES) {
          console.error("WebSocket reconnect failed: max retries reached");
        }
      };

      ws.onerror = () => {
        try {
          ws.close();
        } catch {
          // ignore error
        }
      };
    };

    connect();

    return () => {
      activeRef.current = false;
      if (reconnectRef.current) clearTimeout(reconnectRef.current);
      attemptsRef.current = 0;
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      } else if (ws.readyState === WebSocket.CONNECTING) {
        ws.addEventListener("open", () => ws.close());
      }
      onStatusChange?.(false);
    };
  }, [userId, onChatMessage, onStatusChange, onError, onSystemMessage, onSystemRemove]);

  return socket;
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/chat/services/chatService.ts

import { sendChatMessage } from "../../pages/Profile/types/api";
export const sendViaSocket = (
  socket: WebSocket | null,
  toId: string | number,
  text: string,
): boolean => {
  if (!socket || socket.readyState !== WebSocket.OPEN) return false;
  socket.send(
    JSON.stringify({
      type: 'chat',
      toId,
      text,
    }),
  );
  return true;
};

export { sendChatMessage as sendViaHttp } from '../../pages/Profile/types/api';

export const sendMessage = async (
  socket: WebSocket | null,
  fromId: number,
  toId: number,
  text: string,
) => {
  const sentViaSocket = sendViaSocket(socket, toId, text);
  if (!sentViaSocket) {
    await sendChatMessage(fromId, toId, text);
  }
};



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



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/components/TabButton.tsx

import React from "react";

export interface TabButtonProps<T>
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: T;
  active: boolean;
  onSelect: (val: T) => void;
  children: React.ReactNode;
}

function InnerTabButton<T>(
  { value, active, onSelect, className = "", children, ...rest }: TabButtonProps<T>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const base =
    "px-6 py-3 cursor-pointer border-b-2 transition-colors text-[#aaa] hover:text-white focus:outline-none focus:text-white";
  const activeClasses = active ? "text-[#00a1ff] border-b-[#00a1ff]" : "border-transparent";

  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      className={`${base} ${activeClasses} ${className}`}
      onClick={() => onSelect(value)}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
}

const TabButton = React.forwardRef(InnerTabButton) as <T>(
  props: TabButtonProps<T> & { ref?: React.Ref<HTMLButtonElement> }
) => JSX.Element;

export default TabButton;



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/context/AuthContext.tsx

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    console.log("User jwt: ", token);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    try {
     // const token = localStorage.getItem("token");
      const user_id = localStorage.getItem("id");
      console.log("YYYY=>", user_id);
      console.log(typeof user_id);
      //console.log("JWT in logout: ", token);
      const response = await fetch("https://localhost:3000/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ user_id }),
      });

      const responseData = await response.json();
      console.log("HERE=>", responseData);
      if (!response.ok) throw new Error("Failed to logout");

      toast.success("Logged out successfully!");
    } catch (err) {
      console.error("Logout error:", err);
      toast.error("Failed to logout. Please try again.");
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      setIsAuthenticated(false);
      navigate("/login", { replace: true }); // Avoid double push
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/AuthPage/AuthPage.tsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";

const AuthPage = ({
  onClose,
  mode,
}: {
  onClose?: () => void;
  mode: "login" | "signup";
}) => {
  const [isLogin, setIsLogin] = useState(mode === "login");
  const navigate = useNavigate();

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate("/"); // or whatever fallback route you want
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white bg-opacity-30 rounded-lg shadow-xl p-6 max-w-md w-full relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-blue-100 hover:text-red-500 text-lg font-bold"
        >
          ✕
        </button>
        {isLogin ? (
          <SignInForm onSuccess={handleClose} />
        ) : (
          <SignUpForm onSuccess={handleClose} />
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
import { useAuth } from '../../context/AuthContext';
import { validateEmail, validatePassword } from "../../utils/InputValidation";

const SignInForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    setEmailError(emailError);
    setPasswordError(passwordError);
    if (emailError || passwordError)
        return;

    try {
      const res = await fetch("https://localhost:3000/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      login(data.accessToken);
      localStorage.setItem("id", data.id); // Save user ID
      console.log("User ID saved:", data.id);
      
      toast.success("Successfully logged in!");
      onSuccess(); // Close modal or redirect
      navigate("/profile");
    } catch (error: any) {
      setError(error.message || "Login failed");
      //toast.error(error.message || "Login failed");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold font-orbitron mb-5 text-center tracking-[.10em]">
        LOGIN
      </h2>
      <form onSubmit={handleLogin} className="space-y-4">
        {err && <p className="text-red-500">{err}</p>}
        <div className="space-y-2">
          <input
            type="email"
            placeholder="Email"
            autoFocus
            className="w-full px-4 py-2 bg-black text-white bg-opacity-30 border rounded-lg focus:outline-none 
                    focus:ring-2 focus:ring-indigo-800"
            value={email}
            onChange={(e) =>{ 
              setEmail(e.target.value); 
              setEmailError(validateEmail(e.target.value));
            }}
            required
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
           <div className="relative">
            <input
              //type="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 bg-black text-white bg-opacity-30 border rounded-lg focus:outline-none 
                      focus:ring-2 focus:ring-indigo-800"
              value={password}
              onChange={(e) => {
                const value = e.target.value;
                setPassword(value);
                setPasswordError(validatePassword(value));
              }}
              required
            />
            {passwordError && (<p className="text-red-500 text-sm">{passwordError}</p>)}
            <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-2 text-gray-400 hover:text-white focus:outline-none"
                >
                  {showPassword ? "🙈" : "👁️"}
              </button>
           </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-1/2 bg-indigo-950 font-orbitron tracking-[.10em] hover:bg-rose-950 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
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
import { useAuth } from '../../context/AuthContext';
import { validateEmail, validatePassword, validateName, validateUsername } from "../../utils/InputValidation";

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
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [usernameError, setUsernameError] = useState<string | null>(null);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const nameError = validateName(name);
    const usernameError = validateUsername(username);
    setEmailError(emailError);
    setPasswordError(passwordError);
    setNameError(nameError);
    setUsernameError(usernameError);

    if (emailError || passwordError || nameError || usernameError)
      return;

    try {
      const res = await fetch("https://localhost:3000/signup", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, username, email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      login(data.accessToken);
      localStorage.setItem("id", data.id);
      onSuccess?.();
      closeModal?.();

      navigate("/profile");
    } catch (error: any) {
      setError(error.message || "Signup failed");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl tracking-[.10em] font-orbitron font-bold mb-5 text-center">
        REGISTRATION
      </h2>
      <form onSubmit={handleSignUp} className="space-y-4">
        {err && <p className="text-red-500 text-center">{err}</p>}
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Name"
            autoFocus
            className="w-full bg-black text-white bg-opacity-30 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800"
            value={name}
            //onChange={(e) => setName(e.target.value)}
             onChange={(e) => {
              const value = e.target.value;
              setName(value);
              setNameError(validateName(value));
            }}
            required
          />
          {nameError && (<p className="text-red-500 text-sm">{nameError}</p>)}
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 bg-black text-white bg-opacity-30 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800"
            value={username}
            //onChange={(e) => setUsername(e.target.value)}
            onChange={(e) => {
              const value = e.target.value;
              setUsername(value);
              setUsernameError(validateUsername(value));
            }}
            required
          />
          {usernameError && (<p className="text-red-500 text-sm">{usernameError}</p>)}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-black text-white bg-opacity-30 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800"
            value={email}
            //onChange={(e) => setEmail(e.target.value)}
            onChange={(e) =>{ 
                setEmail(e.target.value); 
                setEmailError(validateEmail(e.target.value));
            }}
            required
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          <div className="relative">
            <input
              //type="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 bg-black text-white bg-opacity-30 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800"
              value={password}
              //onChange={(e) => setPassword(e.target.value)}
               onChange={(e) => {
                const value = e.target.value;
                setPassword(value);
                setPasswordError(validatePassword(value));
              }}
              required
            />
            {passwordError && (<p className="text-red-500 text-sm">{passwordError}</p>)}
            <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-2 text-gray-400 hover:text-white focus:outline-none"
                >
                  {showPassword ? "🙈" : "👁️"}
              </button>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-1/2 bg-indigo-950 tracking-[.10em] font-orbitron hover:bg-rose-950 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/MainPage/MainPage.tsx

//import myImage from '../../assets/mainPageImages/Main_Image.png';
import { useOutletContext } from "react-router-dom";
import mainVideo from '../../assets/mainPageImages/Main_Video.mp4';
import { SpaceBackground } from "../../pong/components/SpaceBackground";


const MainPage = () => {
  const { openModal } = useOutletContext<{ openModal: (mode?: 'login' | 'signup') => void }>();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <SpaceBackground />
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center h-full relative z-10">
          <h1 className="animate-pulse [animation-duration:3s] p-16 
                  text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-orbitron 
                  text-[#D3E0FB] "
          style={{ textShadow: '0 0 12px #007BFF, 0 0 20px #007BFF' }}
          >
            SUPER PONG
          </h1>
        
          <div className="relative w-full">
            <video
              src={mainVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto rounded-xl transition-shadow duration-300 ease-in-out"
            />
          <div className=" absolute sm:bottom-2 bottom-2 md:bottom-2 lg:bottom-4 
                  right-20 sm:right-32 md:right-44 lg:right-64 xl:right-72 2xl:right-96 
                  transform -translate-x-1/2 z-20">
            <button
              className="rounded-xl o border-2 px-5 py-2 border-blue-300
                        lg:px-5 lg:py-2 md:px-5 md:py-2 2xl:px-5 2xl:py-3 xl:py-3
                        font-bold text-transparent text-md sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl
                        bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-300 to-sky-500
                        hover:from-red-50 hover:via-indigo-200 hover:to-purple-100
                        animate-bounce [animation-duration:1s] hover:animate-none
                        transition-all ease-in-out hover:scale-110 w-full sm:w-auto text-center
                       bg-black bg-opacity-40
                       text-[#40BFFF]
                        shadow-[0_0_15px_rgba(0,255,255,0.7)]"
              //   style={{
              //   textShadow: '2px 2px 10px rgba(209, 255, 249, 0.6)',
              //   boxShadow: '0 0 15px 6px rgba(117, 184, 255, 0.5)'
              // }}
              onClick={() => openModal('login')}
            >
              GO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/GameSelector/GameModeSelector.tsx

import React from "react";
import { OverlayButton } from "../../../pong/components/Overlays/OverlayComponents";


const modes = [
  { name: "Random Match", color: "green" }, 
  { name: "Local Duel", color: "blue" },
  { name: "Local Tournament", color: "magenta" },
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
  // Dispatch click to the correct handler based on mode name
  const handleClick = (modeName: string) => {
    switch (modeName) {
      case "Random Match":
        onSingleClick();
        break;
      case "Local Duel":
        onMultiClick();
        break;
      case "Local Tournament":
        onTournamentClick();
        break;
      default:
        break;
    }
  };

  return (
    // Vertical list of mode buttons with hover animations
    <div className="flex flex-col items-center gap-6">
      {modes.map((mode) => (
        <OverlayButton
          key={mode.name}
          color={mode.color} // Passing color for styling
          onClick={() => handleClick(mode.name)} // Handling button clicks
          className="w-full sm:w-[250px] md:w-[350px] xl:w-[400px] 2xl:w-[500px] py-4" // Adjust width
        >
          {mode.name}
        </OverlayButton>
      ))}
    </div>
  );
};

export default GameModeSelector;



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/GameSelector/GameSelector.tsx


import React from "react";
import GameModeSelector from "./GameModeSelector";
import { useNavigate } from "react-router-dom";

const GameSelector: React.FC = () => {
  const navigate = useNavigate();

  const handleSingle = () => navigate("/pong?mode=ai");
  const handleMulti = () => navigate("/pong?mode=local2p");
  const handleTournament = () => navigate("/pong?mode=tournament");

  return (
    <GameModeSelector
      onSingleClick={handleSingle}
      onMultiClick={handleMulti}
      onTournamentClick={handleTournament}
    />

  );
};

export default GameSelector;



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/hooks/useFavorites.ts

import { toast } from "react-hot-toast";
import { useCallback } from "react";
import { addToFavorites } from "../AddFavorites";
import { deleteFromFavorites } from "../DeleteFavorites";

export function useFavorites(fetchAllUsers: () => Promise<void>, friends: any[], setFriends: any, setPlayers: any) {
  const handleAdd = useCallback(async (username: string) => {
    try {
      await addToFavorites(username);
      toast.success(`${username} added to favorites`);
      await fetchAllUsers();
    } catch (err: any) {
      console.error("Failed to add favorite:", err);
      throw err;
    }
  }, [fetchAllUsers]);

  const handleRemove = useCallback(async (username: string) => {
    try {
      await deleteFromFavorites(username);
      setFriends((prev: any[]) => prev.filter(f => f.username !== username));
      setPlayers((prev: any[]) => [...prev, friends.find(f => f.username === username)!]);
      toast.success(`${username} removed from favorites`);
      await fetchAllUsers();
    } catch (err: any) {
      console.error("Failed to remove favorite:", err);
      throw err;
    }
  }, [friends, setFriends, setPlayers, fetchAllUsers]);

  return { handleAdd, handleRemove };
}


// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/hooks/useGame.ts

import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { MatchResult, UserInfo } from "../types/UserInfo";
import { saveGameResult } from "../types/api";
import { bots } from "../types/botsData";

export function useGame(user: UserInfo | null, fetchAllUsers: () => Promise<void>, authHeaders: any) {
  const [selectedBot, setSelectedBot] = useState<(typeof bots)[0] | null>(null);
  const navigate = useNavigate();

  const handleGameEnd = useCallback(async (result: "win" | "loss", opponent: string) => {
    if (!user) return;

    const today = new Date().toISOString().split("T")[0];
    const weekday = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(new Date());
    const matchResult: MatchResult = { date: today, weekday, result };

    try {
      await saveGameResult(matchResult, authHeaders);
      await fetchAllUsers();
      toast.success(`Game over! You ${result} against ${opponent}!`);
    } catch {
      toast.error("Failed to save game result. Please try again.");
    }
  }, [user, authHeaders, fetchAllUsers]);

  const handlePlay = useCallback(() => {
    const opponent = selectedBot || bots[Math.floor(Math.random() * bots.length)];
    const result = Math.random() > 0.5 ? "win" : "loss";

    handleGameEnd(result, opponent.name);
    if (!selectedBot) 
		setSelectedBot(null);
    navigate("/pong?mode=ai");
  }, [selectedBot, handleGameEnd, navigate]);

  return { selectedBot, setSelectedBot, handlePlay };
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/hooks/useNotification.ts

import { useState, useCallback, useRef, useEffect } from "react";
import { toast } from "react-hot-toast";
import api from "../types/api";

export function useNotifications(userId: string | null) {
  const [notifications, setNotifications] = useState<{ user_id: string; username: string }[]>([]);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

  const notificationsRef = useRef(notifications);
  useEffect(() => {
    notificationsRef.current = notifications;
  }, [notifications]);

  useEffect(() => {
  setIsNotificationModalOpen(true);
}, []);

  const checkNotifications = useCallback(async () => {
    if (!userId) return;
    try {
      const res = await api.post("/notification", { user_id: userId });
      const data = res.data;

    //   if (data.notification && Array.isArray(data.notification)) {
    //     const newNotifications = data.notification.filter(
    //       (notif: any) =>
    //         !notificationsRef.current.some(n => n.user_id === notif.user_id)
    //     ).map((notif: any) => ({
    //       user_id: notif.user_id,
    //       username: notif.username
    //     }));
	console.log("Existing notifications:", notificationsRef.current);
   	console.log("Backend notifications:", data.notification);
		
		if (data.notification && Array.isArray(data.notification)) {
        // Extract unique new notifications by friends_id
        const newNotifications = data.notification.filter((notif: any) => {
			console.log("Notif userId: ", notif.user_id);
          return !notificationsRef.current.some(n => n.user_id === notif.user_id);
        }).map((notif: any) => ({
          user_id: notif.user_id,
          username: notif.username
        }));

        if (newNotifications.length > 0) {
          setNotifications(prev => [...prev, ...newNotifications]);
          setIsNotificationModalOpen(true);
        }
      }
    } catch (err) {
      console.error("Notification check failed:", err);
    }
  }, [userId]);
  console.log("Notification length: ", notifications.length);

   useEffect(() => {
    if (!userId) return;

    // Check immediately on mount
    checkNotifications();

    // Poll every 10 seconds
    const interval = setInterval(() => {
      checkNotifications();
    }, 10000);

    return () => clearInterval(interval);
  }, [userId, checkNotifications]);

  const handleAcceptChallenge = useCallback(async (friendId: string) => {
    if (!userId) return;
    try {
      await api.post("/acceptRequest", {
        user_id: userId,
        friends_id: friendId,
      });
      toast.success("Challenge accepted!");
    } catch (err: any) {
      console.error(err);
      throw err;
    } finally {
      setNotifications(prev => prev.filter(n => n.user_id !== friendId));
      if (notifications.length <= 1) setIsNotificationModalOpen(false);
    }
  }, [userId, notifications.length]);

  const handleDeclineChallenge = useCallback(async (friendId: string) => {
    if (!userId) return;
    try {
      await api.post("/declineRequest", {
        user_id: userId,
        friends_id: friendId,
      });
      toast.success("Challenge declined.");
    } catch (err: any) {
      console.error(err);
      throw err;
    } finally {
      setNotifications(prev => prev.filter(n => n.user_id !== friendId));
      if (notifications.length <= 1) setIsNotificationModalOpen(false);
    }
  }, [userId, notifications.length]);

  return {
    notifications,
    isNotificationModalOpen,
    setIsNotificationModalOpen,
    checkNotifications,
    handleAcceptChallenge,
    handleDeclineChallenge,
  };
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/hooks/useProfile.ts

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {getAuthHeaders} from "../types/api";
import { useUserData } from "./useUserData";
import { useNotifications } from "./useNotification";
import { useFavorites } from "./useFavorites";
import { useProfileModal } from "./useProfileModal";
import { useGame } from "./useGame";

export const useProfile = () => {
  const { user, friends, players, fetchAllUsers, setFriends, setPlayers, setUser } = useUserData();
  const userId = user?.id || null;
  const authHeaders = getAuthHeaders();

  // Notifications
  const {
    notifications,
    isNotificationModalOpen,
    setIsNotificationModalOpen,
    //checkNotifications,
    handleAcceptChallenge,
    handleDeclineChallenge,
  } = useNotifications(userId);

  // Favorites
  const { handleAdd, handleRemove } = useFavorites(fetchAllUsers, friends, setFriends, setPlayers);

  // Profile modal
  const { isModalOpen, setIsModalOpen, handleSaveProfile } = useProfileModal(user, fetchAllUsers, authHeaders);

  // Game logic
  const navigate = useNavigate();
  const { selectedBot, setSelectedBot, handlePlay } = useGame(user, fetchAllUsers, authHeaders);

  // Refresh user data and notifications periodically
  useEffect(() => {
  // Only fetch users once on mount or when really needed
  fetchAllUsers();
}, [fetchAllUsers]);
  
  return {
    user,
    friends,
    players,
    notifications,
    isNotificationModalOpen,
    setIsNotificationModalOpen,
    handleAcceptChallenge,
    handleDeclineChallenge,
    handleAdd,
    handleRemove,
    isModalOpen,
    setIsModalOpen,
    handleSaveProfile,
    selectedBot,
    setSelectedBot,
    handlePlay,
    navigate,
    setUser,
  };
};



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/hooks/useProfileModal.ts

import { useState, useCallback } from "react";
import { UserInfo } from "../types/UserInfo";
import { updateUserProfile } from "../types/api";
import { toast } from "react-hot-toast";

export function useProfileModal(user: UserInfo | null, fetchAllUsers: () => Promise<void>, authHeaders: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const saveUserData = useCallback(async (updatedUser: UserInfo) => {
    if (!user) return;

    const profileUpdates: Partial<UserInfo> = {};
    if (updatedUser.name !== user.name) profileUpdates.name = updatedUser.name;
    if (updatedUser.username !== user.username) profileUpdates.username = updatedUser.username;
    if (updatedUser.password !== user.password) profileUpdates.password = updatedUser.password;

    try {
      await updateUserProfile(
        profileUpdates,
        updatedUser.avatar !== user.avatar ? updatedUser.avatar : undefined,
        authHeaders
      );
      await fetchAllUsers();
      toast.success("Profile updated successfully!");
    } catch {
      toast.error("Failed to update profile.");
    }
  }, [user, authHeaders, fetchAllUsers]);

  const handleSaveProfile = useCallback(async (data: Partial<UserInfo>) => {
    if (!user) return;
    const updatedUser: UserInfo = {
      ...user,
      ...data,
      password: data.password || user.password,
    };
    await saveUserData(updatedUser);
    setIsModalOpen(false);
  }, [user, saveUserData]);

  return { isModalOpen, setIsModalOpen, handleSaveProfile };
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/hooks/useUserData.ts

import {useState, useCallback, useMemo} from "react";
import {toast} from "react-hot-toast";
import api from "../types/api";
import { getAuthHeaders} from "../types/api";
import { UserInfo } from "../types/UserInfo";

const isValidBase64 = (str: string) => {
  try {
    return btoa(atob(str)) === str;
  } catch {
    return false;
  }
};

export function useUserData() {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [friends, setFriends] = useState<UserInfo[]>([]);
  const [players, setPlayers] = useState<UserInfo[]>([]);

  const authHeaders = useMemo(() => getAuthHeaders(), []);

  const fetchAllUsers = useCallback(async () => {
    try {
      const currentUserId = localStorage.getItem("id");
      if (!currentUserId) 
		return;

      const { data } = await api.get(`/users?t=${Date.now()}`, {
        headers: authHeaders,
      });

      let currentUser: UserInfo | null = null;

      const mappedUsers: UserInfo[] = data.users.map((u: any) => {
        let avatar = "/prof_img/avatar1.png";
        if (u.image) {
          	if (typeof u.image === "string" && isValidBase64(u.image)) {
            avatar = `data:image/jpeg;base64,${u.image}`;
         	 } else if (u.image?.data) {
            // const binary = String.fromCharCode(...u.image.data);
            // avatar = `data:image/jpeg;base64,${btoa(binary)}`;
			const dataArray = u.image.data;
			let binary = "";
			for (let i = 0; i < dataArray.length; i++) {
				binary += String.fromCharCode(dataArray[i]);
      		}
      		avatar = `data:image/jpeg;base64,${btoa(binary)}`;
          }
        };

        const userInfo: UserInfo = {
          id: String(u.id),
          username: u.username || "Unknown",
          avatar,
          email: u.email || "",
          name: u.name || "",
          password: "",
          wins: u.wins || 0,
          losses: u.losses || 0,
          online: !!u.online,
          history: [],
        };

        if (userInfo.id === currentUserId) 
			currentUser = userInfo;

        return userInfo;
      });

      // Fetch favorites
      const favRes = await api.get(`/favorites?user_id=${currentUserId}`);
      const favoriteUsernames: string[] = favRes.data.favoritesUser.map(
        (f: any) => f.username
      );
      const favoriteUsers = mappedUsers.filter(u =>
        favoriteUsernames.includes(u.username)
      );

      const playersList = mappedUsers
        .filter(u => u.id !== currentUserId)
        .filter(u => !favoriteUsernames.includes(u.username))
        .sort((a, b) => (a.online === b.online ? 0 : a.online ? -1 : 1));

      setUser(currentUser);
      setFriends(favoriteUsers);
      setPlayers(playersList);
    } catch (err: any) {
      console.error("Error fetching users:", err);
      toast.error(err.message || "Failed to load users.");
    }
  }, [authHeaders]);

  return { 
	user,
	friends,
	players, 
	fetchAllUsers, 
	setFriends, 
	setPlayers, 
	setUser };
};



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/types/api.ts

import axios, { AxiosInstance, AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { UserInfo, MatchResult } from "./UserInfo";

const BASE_URL = "https://localhost:3000";

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string }>) => {
    const backendMessage =
      error.response?.data?.message || error.message || "Something went wrong";

    if (error.response?.status === 401) {
      toast.error("Session expired. Please log in again.");
      localStorage.removeItem("token");
      window.location.href = "/login";
    } else {
      toast.error(backendMessage);
    }

    return Promise.reject(error);
  }
);

// api.interceptors.response.use(
//   (response) => response,
//   (error: AxiosError) => {
//     //toast.error(error.response?.data.message)/// need to fix
//     if (error.response?.status === 401) {
//       toast.error("Session expired. Please log in again.");
//       localStorage.removeItem("token");
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   },
// );

export const getAuthHeaders = ():
  | { Authorization: string }
  | Record<string, never> => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const updateUserProfile = async (
  profileUpdates: Partial<UserInfo>,
  avatar?: string,
  headers: { Authorization: string } | Record<string, never> = getAuthHeaders()
): Promise<void> => {
  try {
    const updates: Partial<UserInfo> = {};
    if (profileUpdates.name) updates.name = profileUpdates.name;
    if (profileUpdates.username) updates.username = profileUpdates.username;
    if (profileUpdates.password) updates.password = profileUpdates.password;

    if (Object.keys(updates).length > 0) {
      await api.patch("/updateProfile", updates, { headers });
    }

    if (avatar && avatar.startsWith("data:image")) {
      const base64Data = avatar.split(",")[1];
      const blob = await (
        await fetch(`data:image/jpeg;base64,${base64Data}`)
      ).blob();
      const formData = new FormData();
      formData.append("file", blob, "avatar.jpg");

      await api.post("/uploadPicture", formData, {
        headers: {
          ...headers,
          "Content-Type": "multipart/form-data",
        },
      });
    }
  } catch (error: unknown) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.data &&
      (error.response.data as { errors?: unknown }).errors
    ) {
      throw (error.response.data as { errors: unknown }).errors;
    }
    throw error;
  }
};

export const saveGameResult = async (
  matchResult: MatchResult,
  headers: { Authorization: string } | Record<string, never> = getAuthHeaders()
): Promise<void> => {
  await api.post("/game/result", matchResult, { headers });
};

export const getUserIdFromToken = (): number | null => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const id = payload.id;
    if (typeof id === "number") return id;
    const parsed = Number(id);
    return Number.isNaN(parsed) ? null : parsed;
  } catch {
    return null;
  }
};

export const recordWin = async (
  headers: { Authorization: string } | Record<string, never> = getAuthHeaders()
): Promise<void> => {
  const id = getUserIdFromToken();
  if (id === null) throw new Error("No user id");
  await api.post("/winUser", { user_id: id }, { headers });
};

export const recordLoss = async (
  headers: { Authorization: string } | Record<string, never> = getAuthHeaders()
): Promise<void> => {
  const id = getUserIdFromToken();
  if (id === null) throw new Error("No user id");
  await api.post("/loseUser", { user_id: id }, { headers });
};

export interface ChatMessage {
  id: number;
  sender_id: number;
  receiver_id: number;
  text: string;
  /** 1 when sent while blocked, otherwise 0 */
  blocked: number;
  created_at: string;
}

export const sendChatMessage = async (
  fromId: number,
  toId: number,
  text: string,
  headers: { Authorization: string } | Record<string, never> = getAuthHeaders()
): Promise<void> => {
  await api.post("/messages", { fromId, toId, text }, { headers });
};

export const fetchChatMessages = async (
  user1: number,
  user2: number,
  viewerId: number,
  headers: { Authorization: string } | Record<string, never> = getAuthHeaders()
): Promise<ChatMessage[]> => {
  const response = await api.get(
    `/messages?user1=${user1}&user2=${user2}&viewerId=${viewerId}`,
    { headers }
  );
  return response.data.messages as ChatMessage[];
};

export const blockUserRequest = async (
  blockedId: number,
  headers: { Authorization: string } | Record<string, never> = getAuthHeaders()
): Promise<void> => {
  await api.post("/block", { blockedId }, { headers });
};

export const unblockUserRequest = async (
  blockedId: number,
  headers: { Authorization: string } | Record<string, never> = getAuthHeaders()
): Promise<void> => {
  await api.post("/unblock", { blockedId }, { headers });
};

export const fetchBlockedUsers = async (
  headers: { Authorization: string } | Record<string, never> = getAuthHeaders()
): Promise<number[]> => {
  const response = await api.get("/blocked", { headers });
  return response.data.blocked as number[];
};
export default api;



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/types/botsData.ts

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
  ];



  // /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/types/ui.tsx

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
        font-orbitron
        tracking-[.10em]
        py-2
        px-8
        rounded
        text-xl
        xl:text-2xl
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
        min-w-[280px]
        
        sm:w-[280px]
        lg:w-[350px]
        2xl:w-[450px]
        
        duration-200
        ease-in-out
      "
      onClick={onClick}
    >
      {children}
    </div>
  );
};



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/types/UserInfo.ts

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



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/AddFavorites.tsx

import api from "./types/api";

export const addToFavorites = async (targetUsername: string): Promise<void> => {
  try {
    const token = localStorage.getItem("token");
    const user_id = localStorage.getItem("id");

    if (!token || !user_id) {
      throw new Error("User not authenticated");
    }
    console.log("Sending to server:", { user_id, username: targetUsername });

    const response = await api.post(
      "/addfavorites",
      { user_id, username: targetUsername },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Added to favorites:", response.data);
  } catch (err:any) {
    console.error("Failed to add to favorites:", err);
    throw err;
  }
};



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/Avatar.tsx

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
    <div
      className={`
        flex
        flex-col
        items-center
      `}
      /* Main container: Centers the avatar vertically and horizontally */
    >
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
        /* Avatar wrapper: Styles the circular avatar with border, background, and custom size */
      >
        {isImageLoaded ? (
          <img
            src={imgSrc}
            alt={user.username}
            className={`
              w-full
              h-full
              object-cover
            `}
            /* Avatar image: Ensures the image fills the circular container and covers it */
            onError={() => setIsImageLoaded(false)}
          />
        ) : (
          <span
            className={`
              text-sm
              font-semibold
              px-2
            `}
            /* Fallback text: Displays username in small, bold text when image fails to load */
          >
            {user.username}
          </span>
        )}
      </div>
    </div>
  );
};

export default Avatar;



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/BotCard.tsx



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
          font-ubuntu
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



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/BotSelector.tsx

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
		  md:text-xl
		  xl:text-2xl
		  2xl:text-3xl
          text-purple-400
          font-extrabold
		  font-orbitron
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
            lg:grid-cols-4
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



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/Challenge.tsx

import api from "./types/api";

export const askForChallenge = async (targetUsername: string): Promise<void> => {
  try {
    const token = localStorage.getItem("token");
    const user_id = localStorage.getItem("id");

    if (!token || !user_id) {
      throw new Error("User not authenticated");
    }
    console.log("Sending to server:", { user_id, username: targetUsername });

    const response = await api.post(
      "/challenge",{ user_id, username: targetUsername },
      {
        headers: {
          Authorization: `Bearer ${token}`, // attach token if your api doesn't auto-add it
        },
      }
    );

    console.log("You sent request for challenge:", response.data);
    }catch (err: any) {
    if (err.response) {
      console.error("Status:", err.response.status);
      console.error("Backend error message:", err.response.data);
    }
    console.error("Axios error:", err.message);
    throw err;
  }
};


// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/DeleteFavorites.tsx

import api from "./types/api";

export const deleteFromFavorites = async (targetUsername: string): Promise<void> => {
  try {
    const token = localStorage.getItem("token");
    const user_id = localStorage.getItem("id");

    if (!token || !user_id) {
      throw new Error("User not authenticated");
    }
     const response = await api.delete("/deletefavorites", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { user_id, username: targetUsername }, // DELETE body goes in `data`
    });
    console.log("Deleted from favorites:", response.data);
  } catch (err:any) {
    console.error("Failed to delete from favorites:", err);
    throw err;
  }
};


// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/DesktopLayout.tsx

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
  expandUsername?: string;
  handleRemove: (username: string) => void;
  handleAdd: (username: string) => void;
}

const DesktopLayout: React.FC<DesktopLayoutProps> = ({
  user,
  friends,
  players,
  selectedBot,
  handlePlay,
  expandUsername,
  handleRemove,
  handleAdd,
}) => {
  return (
    <div className="hidden xl:flex flex-col gap-8 px-4 flex-grow p-6">
      {/* Top row: Friends | User Info | Players */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Friends List */}
        <div className="flex flex-col items-start w-full">
          <h2 className="text-lg xl:text-xl  font-bold font-orbitron mb-2 text-left drop-shadow-[0_0_8px_pink] tracking-[.20em]">
            FRIENDS
          </h2>
          <UserList
            users={friends}
            variant="friends"
            expandUsername={expandUsername}
            onRemove={handleRemove}
            onAdd={handleAdd}
          />
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-center justify-start gap-6 w-full">
          <UserHeader
            user={{
              username: user.username,
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

        {/* Players List */}
        <div className="flex flex-col items-end w-full">
          <h2 className="text-lg xl:text-xl  font-semibold font-orbitron mb-2 text-right drop-shadow-[0_0_8px_pink] tracking-[.20em]">
            PLAYERS
          </h2>
          <UserList
            users={players}
            variant="players"
            expandUsername={expandUsername}
            onAdd={handleAdd}
          />
        </div>
      </div>

      {/* Bottom row: Game Mode Selector */}
      <div className="flex justify-center pt-4">
        <div className="w-full max-w-[720px]">
          <GameSelector />
        </div>
      </div>
    </div>
  );
};


export default DesktopLayout;



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/Header.tsx

import React from "react";
import ProfileActions from "./ProfileActions";
import { UserInfo } from "./types/UserInfo";

interface HeaderProps {
  user: Pick<UserInfo, "username" | "online" | "email">;
  onProfileClick: () => void;
  onSearch?: (username: string) => void;
  onOpenChat: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onProfileClick, onSearch, onOpenChat }) => {
  return (
    <div
      className="
        flex
        bg-gray-900
        bg-opacity-70
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
          from-red-200
          via-indigo-200
          to-green-200
          text-sm
          sm:text-base
          md:text-xl
          lg:text-2xl
          font-bold
          font-orbitron
          transition-transform
          duration-300
          ease-in-out
          tracking-[.10em]
        "
        style={{
          textShadow:
            "0 0 20px rgba(255, 255, 255, 0.3), 0 0 32px rgba(255, 0, 255, 0.3)",
        }}
      >
        SUPER PONG
      </div>
      <ProfileActions
        user={user}
        onProfileClick={onProfileClick}
        onSearch={onSearch}
        onOpenChat={onOpenChat}
      />
    </div>
  );
};

export default Header;



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/MobileLayout.tsx

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
  handleRemove: (username: string) => void;
  handleAdd: (username: string) => void;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({
  user,
  friends,
  players,
  selectedBot,
  handlePlay,
  expandUsername,
  handleRemove,
  handleAdd,
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
          //avatar: user.avatar,
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
            flex
            flex-col
            items-start
          "
        >
          <h2
            className="
              text-lg
              font-orbitron
              font-bold
              tracking-[.20em]
              mb-2
              text-left
              drop-shadow-[0_0_8px_red]
            "
          >
            FRIENDS
          </h2>
          <UserList users={friends} variant="friends" expandUsername={expandUsername} onRemove={handleRemove} onAdd={handleAdd}/>
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
              font-orbitron
              font-bold
              tracking-[.20em]
              mb-2
              text-right
              drop-shadow-[0_0_8px_red]
            "
          >
            PLAYERS
          </h2>
          <UserList users={players} variant="players" expandUsername={expandUsername}  onAdd={handleAdd}/>
        </div>
      </div>
      <div
        className="
          w-full
          mt-8
        "
      >
      </div>
    </div>
  );
};

export default MobileLayout;



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/NotificationModal.tsx

import React from "react";

interface Notification{
	user_id: string;
	username: string;
};

interface NotificationModalProps{
	notifications: Notification[];
	onAccept: (userId: string) => void;
	onDecline: (userId: string) => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({
	notifications,
	onAccept,
	onDecline,
}) => {
	if (!notifications.length)
		return null;
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
			<div className="bg-white rounded-xl p-6 text-center text-black w-full max-w-md max-h-[80vh] overflow-y-auto space-y-6">
				<h2 className="text-lg text-indigo-950 font-orbitron font-bold mb-4">
				CHALLENGE REQUESTS
				</h2>
				{notifications.map((notif) => (
				<div
					key={notif.user_id}
					className="border border-indigo-200 rounded-lg p-4 bg-white shadow"
				>
					<p className="mb-4 font-orbitron">
					{notif.username} has challenged you to a game!
					</p>
					<div className="flex justify-center gap-2">
					<button
						onClick={() => onDecline(notif.user_id)}
						className="px-4 py-2 font-orbitron bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
					>
						DECLINE
					</button>
					<button
						onClick={() => onAccept(notif.user_id)}
						className="px-4 py-2 font-orbitron bg-green-500 text-white rounded hover:bg-green-600"
					>
						ACCEPT
					</button>
					</div>
				</div>
				))}
			</div>
    	</div>
	);
};

export default NotificationModal;



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/PlayArena.tsx


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
        xl:w-56
        xl:h-56
        2xl:w-60
        2xl:h-60
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
        xl:w-56
        xl:h-56
        2xl:w-60
        2xl:h-60
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
            <span className="font-semibold xl:text-xl">Player 2</span>
            <span className="text-gray-300 xl:text-base mt-1">Waiting...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Arena;



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/PlayerCard.tsx

import React from "react";
//import React, { useState } from "react";
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
          //avatar: user.avatar,
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
              hover:bg-green-800
              hover:text-white
              transition
              duration-300
              shadow-[0_0_12px_#00ff00]
              hover:shadow-[0_0_18px_#00ff00]
            "
          >
            <span className="text-xl text-green-300 drop-shadow-[0_0_3px_#00ff00]">
                💚
            </span>
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


// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/Profile.tsx

import React, { useState } from "react";
import ProfileModal from "./ProfileModal";
import Header from "./Header";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";
import BotSelector from "./BotSelector";
import { useProfile } from "./hooks/useProfile";
import { toast } from "react-hot-toast";
import { SpaceBackground } from "../../pong/components/SpaceBackground";
import ChatModal from "../../chat/components/ChatModal";
import { ChatProvider } from "../../chat/context/ChatContext";
//import { UserInfo } from "./types/UserInfo";
import NotificationModal from "./NotificationModal";

// Profile component serves as the main page for user profile management
const Profile: React.FC = () => {
  // Destructure user data, state, and handlers from custom useProfile hook
  const {
    user, // Current user's data
    friends, // List of friends
    players, // List of all players
    selectedBot, // Currently selected bot for gameplay
    isModalOpen, // State for profile modal visibility
   // isLoading, // Loading state for data fetching
    setSelectedBot, // Function to update selected bot
    setIsModalOpen, // Function to toggle profile modal
    handleSaveProfile, // Handler to save profile changes
    handlePlay, // Handler to start a game
    handleRemove,
    notifications,
    isNotificationModalOpen,
    handleAcceptChallenge,
    handleDeclineChallenge,
    handleAdd,
  } = useProfile();

  const [isChatOpen, setIsChatOpen] = useState(false);

  // State to store username for auto-expanding a user card
  const [expandUsername, setExpandUsername] = useState<string | undefined>(
    undefined
  );

  // Handle search for a user by username (case-insensitive)
  const handleSearch = (username: string) => {
    // Check if the username exists in players or friends lists
    const foundInPlayers = players.find(
      (p) => p.username.toLowerCase() === username.toLowerCase()
    );
    const foundInFriends = friends.find(
      (f) => f.username.toLowerCase() === username.toLowerCase()
    );

    //If found, set expandUsername to trigger card expansion and show success toast
    if (foundInPlayers || foundInFriends) {
      setExpandUsername(username);
      toast.success(`Found user: ${username}`);
    } else {
      // If not found, clear expandUsername and show error toast
      setExpandUsername(undefined);
      toast.error(`User ${username} not found`);
    }
  };

  // Display error if user data failed to load
  if (!user) {
    return (
      <SpaceBackground>
        <div
          className="h-screen 
        w-full 
        flex 
        items-center 
        justify-center
         text-white"
        >
          Failed to load user data.
        </div>
      </SpaceBackground>
    );
  }

  // Render the main profile page layout
  return (
    <SpaceBackground>
      <div
        className="h-screen 
       w-full
       text-white 
       flex 
       flex-col 
       overflow-y-auto
       font-ubuntu"
      >
        {/* Header with user info, profile toggle, and search functionality */}
        <Header
          user={{
            username: user.username,
            online: user.online,
            email: user.email,
          }}
          onProfileClick={() => setIsModalOpen(true)}
          onSearch={handleSearch}
          onOpenChat={() => setIsChatOpen(true)}
        />

        {/* Desktop-specific layout for large screens */}
        <DesktopLayout
          user={user}
          friends={friends}
          players={players.filter((p) => p.id !== user.id)}
          selectedBot={selectedBot}
          handlePlay={handlePlay}
          expandUsername={expandUsername}
          handleRemove={handleRemove}
          handleAdd={handleAdd}
        />

        {/* Mobile-specific layout for smaller screens */}
        <MobileLayout
          user={user}
          friends={friends}
          players={players.filter((p) => p.id !== user.id)}
          selectedBot={selectedBot}
          handlePlay={handlePlay}
          expandUsername={expandUsername}
          handleRemove={handleRemove}
          handleAdd={handleAdd}
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
          onClose={() => setIsModalOpen(false)}
          userData={{
            avatar: user.avatar,
            username: user.username,
            name: user.name,
          }}
          onSave={handleSaveProfile}
        />
      )}
      {isNotificationModalOpen && notifications.length > 0 && (
        <NotificationModal
          notifications={notifications}
          onAccept={handleAcceptChallenge}
          onDecline={handleDeclineChallenge}
        />
      )}

      {isChatOpen && (
        <ChatProvider currentUserId={user.id}>
          <ChatModal
            onClose={() => setIsChatOpen(false)}
            currentUserId={user.id}
            players={players.filter((p) => p.id !== user.id)}
          />
        </ChatProvider>
      )}
    </SpaceBackground>
  );
};

export default Profile;



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/ProfileActions.tsx

import React, { useState } from "react";
import { UserInfo } from "./types/UserInfo";
import { toast } from "react-hot-toast";
//import { useNavigate } from "react-router-dom";
//import { getAuthHeaders } from "./types/api";
import { useAuth } from "../../context/AuthContext";


// Define the props accepted by the ProfileActions component
interface ProfileActionsProps {
  user: Pick<UserInfo, "username" | "online" | "email">; // Basic user info for display and API calls
  onProfileClick: () => void;                           // Callback to open profile modal
  onSearch?: (username: string) => void;                // Optional callback for search action
  onOpenChat: () => void;                               // Callback to open chat
}

// Main component rendering search, user info, and action buttons
const ProfileActions: React.FC<ProfileActionsProps> = ({
  user,
  onProfileClick,
  onSearch,
  onOpenChat,
}) => {
  //const navigate = useNavigate();               // Hook for navigation after logout
  const [searchQuery, setSearchQuery] = useState("");  // Local state for search input

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
  const { logout } = useAuth();
  return (
    // Container: switches layout from column (mobile) to row (desktop)
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">

      <div className="flex items-center gap-2 flex-col sm:flex-row">
        <div className="relative w-32 sm:w-40">
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
            text-xs
            sm:text-xs
            md:text-xs
            xl:text-sm
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
        {searchQuery && (
          <button
            onClick={handleClear}
            className="
              absolute
              right-2
              top-1/2
              transform
              -translate-y-1/2
              text-white
              text-sm
              hover:text-red-400
              transition
            "
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleSearch}
          >
            🔍
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
        <span
          className={`
            text-base
            sm:text-base
            md:text-xl
            xl:text-2xl
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
            onClick={onOpenChat}
            className="p-1 rounded-full bg-gray-800 hover:bg-gray-700 transition cursor-pointer"
            aria-label="Open chat"
          >
            <i className="fas fa-comments text-blue-300 w-6 h-6" />
          </button>
         

            <button
                onClick={onProfileClick}
                className="p-1 rounded-full bg-gray-800 hover:bg-gray-700 transition cursor-pointer"
                aria-label="Open settings"
              >
                <img
                  src="/button_img/user-settings.png" 
                  alt="Settings"
                  className="w-6 h-6 lg:w-7 lg:h-7 drop-shadow-[0_0_25px_rgba(255,215,0,1)] 
                            animate-crown-spin hover:animate-none"
                />
              </button>
          <button
            onClick={logout}
            className="
              px-3
              py-1
              sm:px-3
              sm:py-1
              md:px-3 md:py-1
              lg:px-3 lg:py-1
              xl:px-3 xl:py-1
              rounded-2xl
              text-xs
              bg-gray-800
         
              sm:text-xs
              md:text-xs
              lg:text-xs
              xl:text-sm
              
              font-orbitron
              border
              border-emerald-200
              focus:outline-none
              focus:ring-2
            focus:ring-indigo-800
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



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/ProfileModal.tsx

import React, { useState } from "react";
import { UserInfo } from "./types/UserInfo";
import { toast } from "react-hot-toast";
import { validatePassword, validateName, validateUsername } from "../../utils/InputValidation";

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
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // Maximum file size: 5 MB
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [usernameError, setUsernameError] = useState<string | null>(null);


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
    const passwordError = password ? validatePassword(password): null;
    const nameError = validateName(name);
    const usernameError = validateUsername(username);
    setPasswordError(passwordError);
    setNameError(nameError);
    setUsernameError(usernameError);
    
    if (passwordError || nameError || usernameError)
      return;

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
            font-orbitron
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
              font-ubuntu
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
              font-ubuntu
            `}
            // Label for the name field
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            //onChange={(e) => setName(e.target.value)}
            onChange={(e) => {
                const value = e.target.value;
                setName(value);
                setNameError(validateName(value));
            }}
            autoFocus
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
              font-ubuntu
            `}
            // Text input for editing the name
          />
          {nameError && (<p className="text-red-500 text-sm">{nameError}</p>)}
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
              font-ubuntu
            `}
            // Label for the username field
          >
            Username
          </label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            //onChange={(e) => setUsername(e.target.value)}
            onChange={(e) => {
                const value = e.target.value;
                setUsername(value);
                setUsernameError(validateUsername(value));
            }}
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
          {usernameError && (<p className="text-red-500 text-sm">{usernameError}</p>)}
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
              font-ubuntu
            `}
            // Label for the new password field
          >
            New Password
          </label>
          <div className="relative">
            <input
              //type="password"
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              value={password}
              //onChange={(e) => setPassword(e.target.value)}
              onChange={(e) => {
                  const value = e.target.value;
                  setPassword(value);
                  setPasswordError(value ? validatePassword(value): null);
              }}
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
            {passwordError && (<p className="text-red-500 text-sm">{passwordError}</p>)}
             <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-gray-400 hover:text-white focus:outline-none"
              >
                {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
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
              font-orbitron
            `}
            // Cancel button: closes the modal
          >
            CANCEL
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
              font-orbitron
            `}
            // Save button: saves changes
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/UserHeader.tsx

import React from "react";
//import Avatar from "./Avatar";
import { UserInfo, calculateUserStats } from "./types/UserInfo";

interface UserHeaderProps {
	user: Pick<UserInfo, "username"  | "wins" | "losses" | "history">;
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
			{/* <Avatar
				user={user}
				className={`
          w-32
          h-32
          sm:w-40
          sm:h-40
        `}
		
			
			/> */}
			<h2
				className={`
          text-2xl
          sm:text-2xl
		  xl:text-3xl
		  2xl:text-3xl
          font-bold
		  font-orbitron
        `}
			/* Username: Styles the user's username with responsive font size */
			>
				{user.username}
			</h2>
			<div
				className={`
          text-base
          sm:text-md
		  md:text-lg
		  lg:text-xl
		  2xl:text-2xl
		 

          space-y-1
        `}
			/* Stats container: Groups user statistics with responsive text size */
			>
				<p>
					Wins: <span
						className={`
              text-green-400
			  text-xl
            `}
					/* Wins count: Highlights the number of wins in green */
					>
						{user.wins}
					</span> | Losses: <span
						className={`
              text-red-400
			  text-xl
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


// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pages/Profile/UserList.tsx


import React, { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";
import { CardWrapper } from "./types/ui";
import { UserInfo } from "./types/UserInfo";
//import { addToFavorites } from "./AddFavorites";
import { askForChallenge } from "./Challenge";
import { toast } from "react-hot-toast";
//import { deleteFromFavorites } from "./DeleteFavorites";


// Props definition for UserList component
// - users: array of UserInfo objects to display
// - variant: determines if this list is "players" or "friends"
// - expandUsername: optional username to auto-expand on render
interface Props {
  users: UserInfo[];
  variant: "players" | "friends";
  expandUsername?: string;
  onAdd?: (username: string) => void;
  onRemove?: (username: string)=> void;
  onChallenge?: (username: string)=> void;
}

const UserList: React.FC<Props> = ({ users, variant, expandUsername, onRemove, onAdd}) => {
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
 // const handleAdd = (username: string) => console.log(`Add ${username}`);
  //  const handleAdd = async (username: string) => {
  //   try {
  //     await addToFavorites(username);
  //     console.log(`Added ${username} to favorites`);
  //     //await fetchAllUsers();
  //   } catch (err) {
  //     console.error("Failed to add favorite:", err);
  //   }
  // };
 
  const handleChallenge = async (username: string) => {
    try{
      await askForChallenge(username);
      console.log(`${username} asked for challenge`);
      toast.success(`You asked ${username} for challenge`);
    } catch (err:any) {
      console.error("Failed to ask for challenge:", err);
      //toast.error(`Failed to ask ${username} for challenge`);
      throw err;
    }
  };

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
            variant === "friends" && onRemove
              ? () => onRemove(user.username)
              : undefined,
          onChallenge: () => handleChallenge(user.username),
          onAdd:
            variant === "players" && onAdd
              ? () => onAdd(user.username)
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
                <span className="font-bold text-base md:text-lg lg:text-xl">{user.username}</span>
              </div>
              <span
                className={
                  `text-sm
                    sm:text-sm 
                    md:text-base ${
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




//! PONG

// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/BracketOverlay.tsx

import { useMemo } from "react";
import { OverlayWrapper } from "./components/Overlays/OverlayWrapper";
import {
  OverlayCard,
  OverlayButton,
} from "./components/Overlays/OverlayComponents";
import { useEnterKey } from "./hooks/useEnterKey";

/**
 * Centralised style definitions for easier tuning
 */
const textStyles = {
  playerName: {
    base: "text-[#D3E0FB] text-[20px] md:text-[18px] text-shadow-[0_0_4px_rgba(211,224,251,0.6)]",
    predicted:
      "italic text-orange-300 text-[20px] md:text-[18px] text-shadow-[0_0_4px_rgba(255,147,0,0.6)]",
  },
  vs: "text-[16px] md:text-[18px] text-[#743b91] text-shadow-[0_0_4px_rgba(147,51,234,0.6)]",
  winner:
    "mt-3 text-[16px] md:text-[18px] text-[#74C0FC] text-shadow-[0_0_4px_rgba(74,222,128,0.6)]",
  roundLabel:
    "mb-2 text-lg font-semibold text-[#D3E0FB] drop-shadow-[0_0_5px_rgba(211,224,251,0.6)]",
  heading:
    "mb-4 text-center text-2xl font-extrabold text-[#D3E0FB] drop-shadow-[0_0_10px_rgba(211,224,251,0.8)]",
};

export interface PlayerSlot {
  name: string;
  isPredicted?: boolean;
}

/** Single bracket match */
export interface BracketMatch {
  p1: PlayerSlot;
  p2: PlayerSlot;
  winner: PlayerSlot | null; // name of winner if match played
  /** reference to the match in the next round */
  nextMatch?: BracketMatch;
  /** which slot of the next match this winner fills */
  nextSlot?: "p1" | "p2";
}

/** Round: array of matches */
export type BracketRound = BracketMatch[];

interface BracketOverlayProps {
  rounds: BracketRound[];
  onClose: () => void;
}

function PlayerName({ name, isPredicted }: PlayerSlot) {
  const classes = isPredicted
    ? textStyles.playerName.predicted
    : textStyles.playerName.base;
  return <div className={classes}>{name || "TBD"}</div>;
}

export default function BracketOverlay({
  rounds,
  onClose,
}: BracketOverlayProps) {
  const currentMatch = useMemo(() => {
    for (let r = 0; r < rounds.length; r++) {
      for (let m = 0; m < rounds[r].length; m++) {
        const match = rounds[r][m];
        if (
          !match.winner &&
          match.p1.name !== "BYE" &&
          match.p2.name !== "BYE"
        ) {
          return { rIndex: r, mIndex: m };
        }
      }
    }
    return null;
  }, [rounds]);

  function getRoundLabel(rIndex: number, totalRounds: number): string {
    const roundStages: Record<number, string[]> = {
      1: ["Final"],
      2: ["Semifinals", "Final"],
      3: ["Quarterfinals", "Semifinals", "Final"],
    };

    const stages = roundStages[totalRounds];

    if (stages && rIndex < stages.length) {
      return stages[rIndex];
    }

    return `Round ${rIndex + 1}`;
  }

  const totalRounds = rounds.length;
  useEnterKey(onClose);

  const matchStyles: Record<string, string> = {
    Quarterfinals: `
                  border-2 border-[#BD0E86]
                  bg-black bg-opacity-30
                  shadow-[0_0_15px_rgba(255,29,153,0.7),0_0_24px_rgba(255,29,153,0.4)]
                  hover:scale-105 transition`,
    Semifinals: `
                  border-2 border-[#9010CE]
                  bg-black bg-opacity-30
                  shadow-[0_0_12px_rgba(192,38,211,0.7)]
                  hover:scale-105 transition`,
    Final: `
                  border-2 border-[#0A7FC9]
                  bg-black bg-opacity-30
                  shadow-[0_0_15px_rgba(0,255,255,0.7),0_0_24px_rgba(0,255,255,0.4)]
                  hover:scale-105 transition`,
  };

  const highlightStyles: Record<string, string> = {
    Quarterfinals: `
                            border-[#FF4CB5] border-4
                            ring-4 ring-[#FF4CB5]
                            shadow-[0_0_20px_rgba(255,76,181,0.9),0_0_32px_rgba(255,76,181,0.6)]`,
    Semifinals: `
                            border-[#B94CFF] border-4
                            ring-4 ring-[#B94CFF]
                            shadow-[0_0_20px_rgba(185,76,255,0.9),0_0_32px_rgba(185,76,255,0.6)]`,
    Final: `
                            border-[#40BFFF] border-4
                            ring-4 ring-[#40BFFF]
                            shadow-[0_0_20px_rgba(64,191,255,0.9),0_0_32px_rgba(64,191,255,0.6)]`,
  };

  return (
    <OverlayWrapper>
      <OverlayCard className="relative h-[90%] w-[90%] overflow-auto flex flex-col items-center">
        <h2 className={textStyles.heading}>COSMIC TOURNAMENT</h2>

        <div
          className="
            flex flex-col md:flex-row
            justify-center items-center
            gap-8 md:gap-20
            w-full h-full"
        >
          {rounds.map((round, rIndex) => {
            const label = getRoundLabel(rIndex, totalRounds);
            const matchStyle = matchStyles[label] ?? matchStyles.Final;

            return (
              <div
                key={rIndex}
                className="
                  flex flex-col items-center justify-center
                  w-full sm:w-[150px]"
              >
                <h3 className={textStyles.roundLabel}>{label}</h3>

                <div className="flex flex-col items-center justify-center gap-10">
                  {round.map((match, mIndex) => {
                    const { p1, p2 } = match;
                    const isCurrent =
                      currentMatch &&
                      currentMatch.rIndex === rIndex &&
                      currentMatch.mIndex === mIndex;

                    const highlightStyle =
                      highlightStyles[label] ?? highlightStyles.Final;

                    return (
                      <div
                        key={mIndex}
                        className={`
                          flex flex-col items-center
                          w-full sm:w-[198px]
                          rounded-xl p-4
                          ${matchStyle}
                          ${isCurrent ? highlightStyle : ""}
                        `}
                      >
                        <PlayerName {...p1} />
                        <div className={textStyles.vs}>vs</div>
                        <PlayerName {...p2} />
                        {match.winner && (
                          <div className={textStyles.winner}>
                            Winner: {match.winner.name}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <OverlayButton
          color="blue"
          onClick={onClose}
          className="absolute right-4 top-4"
        >
          Close
        </OverlayButton>
      </OverlayCard>
    </OverlayWrapper>
  );
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/modes.ts

// client/src/pong/modes.ts
import { resetScores, resetPositions } from "./physics";
import type { SceneObjects } from "./scene";
import { removeAllKeyListeners, setupKeyListeners } from "./utils";
import type { GameState } from "./pong";
import { GameMode } from "./pong";

/**
 * SINGLE vs AI
 */
export function startSinglePlayerAI(state: GameState, scene: SceneObjects) {
  removeAllKeyListeners(state);

  state.currentMode = GameMode.AI;
  resetScores(state);
  resetPositions(state, scene);
  state.gameStarted = true;
  state.paused = true;
  state.manualPaused = true;
  state.escMenuOpen = false;
  state.onPauseChange?.(true);
  state.onEscMenuChange?.(false);

  state.match.leftName = "YOU";
  state.match.rightName = "AI";
  // Notify React
  state.onPlayersUpdate?.(state.match.leftName, state.match.rightName);

  setupKeyListeners(state, { up: "ArrowUp", down: "ArrowDown" });
}

/**
 * LOCAL 2P
 */
export function startLocal2P(state: GameState, scene: SceneObjects) {
  removeAllKeyListeners(state);

  state.currentMode = GameMode.Local2P;
  resetScores(state);
  resetPositions(state, scene);
  state.gameStarted = true;
  state.paused = true;
  state.manualPaused = true;
  state.escMenuOpen = false;
  state.onPauseChange?.(true);
  state.onEscMenuChange?.(false);

  state.match.leftName = "PLAYER 1";
  state.match.rightName = "PLAYER 2";
  state.onPlayersUpdate?.(state.match.leftName, state.match.rightName);

  setupKeyListeners(
    state,
    { up: ["w", "W"], down: ["s", "S"] },
    { up: "ArrowUp", down: "ArrowDown" },
  );
}

/**
 * REMOTE 2P
 */
export async function startRemote2P(
  state: GameState,
  scene: SceneObjects,
  url = "wss://localhost:3000/ws",
) {
  removeAllKeyListeners(state);

  state.currentMode = GameMode.Remote2P;
  resetScores(state);
  // Reset scores for React so the UI starts from 0:0
  state.onScoreUpdate?.(state.match.playerScore, state.match.aiScore);
  resetPositions(state, scene, false);
  // Clear any stale remote game data from previous sessions
  state.remoteState = null;
  state.remoteBallDX = 0;
  state.remotePrevBallDX = 0;
  state.gameStarted = true;
  state.paused = true;
  state.manualPaused = true;
  state.escMenuOpen = false;
  state.onPauseChange?.(true);
  state.onEscMenuChange?.(false);

  state.match.leftName = "YOU";
  state.match.rightName = "OPPONENT";
  state.onPlayersUpdate?.(state.match.leftName, state.match.rightName);

  // Connection handled in remote.ts
  const { connect } = await import("./remote");
  let connectUrl = url;
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  if (id) {
    connectUrl += url.includes("?") ? `&user_id=${id}` : `?user_id=${id}`;
  }
  if (token) {
    connectUrl += connectUrl.includes("?") ? `&token=${token}` : `?token=${token}`;
  }
  state.remoteCleanup = connect(state, connectUrl, scene);
}

/**
 * TOURNAMENT match (p1Name, p2Name)
 */
export function startTournamentLocal2P(
  state: GameState,
  scene: SceneObjects,
  p1Name: string,
  p2Name: string,
  isFinal: boolean,
  onMatchEnd: (
    winnerName: string,
    loserName: string,
    winnerScore: number,
    loserScore: number,
  ) => void,
) {
  removeAllKeyListeners(state);

  state.currentMode = GameMode.Tournament;
  resetScores(state);
  // Reset scores for React
  state.onScoreUpdate?.(state.match.playerScore, state.match.aiScore);
  resetPositions(state, scene);

  state.gameStarted = true;
  state.paused = true;
  state.manualPaused = true;
  state.escMenuOpen = false;
  state.onPauseChange?.(true);
  state.onEscMenuChange?.(false);

  state.match.leftName = p1Name;
  state.match.rightName = p2Name;
  state.onPlayersUpdate?.(state.match.leftName, state.match.rightName);

  state.match.isFinalMatch = isFinal;
  state.onMatchEndCallback = onMatchEnd;

  // Controls same as local2p
  setupKeyListeners(
    state,
    { up: ["w", "W"], down: ["s", "S"] },
    { up: "ArrowUp", down: "ArrowDown" },
  );
}


// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/physics.ts

// client/src/pong/physics.ts
import * as BABYLON from "@babylonjs/core";
import type { SceneObjects } from "./scene";
import { boom, bigBoom } from "./scene";
import { clamp } from "./utils";
import type { GameState } from "./pong";
import { GameMode } from "./pong";
import { playPaddleSound } from "./sound";

export function stepPhysics(state: GameState, objs: SceneObjects, dt: number) {
  if (!state.gameStarted || state.paused) return;
  const { leftPaddle, rightPaddle, ball, scene } = objs;

  if (state.currentMode === GameMode.Remote2P) {
    const s = state.remoteState;
    if (s) {
      const scoreChanged =
        s.leftScore !== state.match.playerScore ||
        s.rightScore !== state.match.aiScore;
      leftPaddle.position.z = s.leftPaddleZ;
      rightPaddle.position.z = s.rightPaddleZ;
      ball.position.x = s.ballX;
      ball.position.z = s.ballZ;

      if (
        typeof state.remoteBallDX === 'number' &&
        typeof state.remotePrevBallDX === 'number'
      ) {
        const leftX = -state.physics.FIELD_WIDTH + 1.5;
        const rightX = state.physics.FIELD_WIDTH - 1.5;
        if (
          Math.sign(state.remoteBallDX) !== Math.sign(state.remotePrevBallDX)
        ) {
          if (
            Math.abs(ball.position.x - leftX) < 1.2 ||
            Math.abs(ball.position.x - rightX) < 1.2
          ) {
            playPaddleSound();
          }
        }
        state.remotePrevBallDX = state.remoteBallDX;
      }

      state.match.playerScore = s.leftScore;
      state.match.aiScore = s.rightScore;
      if (scoreChanged) {
        state.onScoreUpdate?.(state.match.playerScore, state.match.aiScore);
        playRemoteGoalAnimation(state, objs);
      }
    }
    return;
  }

  leftPaddle.position.z = clamp(
    leftPaddle.position.z + state.input.playerDzLeft,
    -state.physics.FIELD_HEIGHT + 1.5,
    state.physics.FIELD_HEIGHT - 1.5,
  );

  if (state.currentMode === GameMode.AI) {
    state.input.aiTimer += dt;
    if (state.input.aiTimer >= 1) {
      state.input.aiTimer = 0;
      state.input.aiTargetZ = ball.position.z;
    }
    const diff = state.input.aiTargetZ - rightPaddle.position.z;
    if (Math.abs(diff) > 0.4) {
      rightPaddle.position.z = clamp(
        rightPaddle.position.z +
          (diff > 0 ? state.physics.AI_SPEED : -state.physics.AI_SPEED),
        -state.physics.FIELD_HEIGHT + 1.5,
        state.physics.FIELD_HEIGHT - 1.5,
      );
    }
  } else {
    rightPaddle.position.z = clamp(
      rightPaddle.position.z + state.input.playerDzRight,
      -state.physics.FIELD_HEIGHT + 1.5,
      state.physics.FIELD_HEIGHT - 1.5,
    );
  }

  ball.position.x += state.input.ballDX;
  ball.position.z += state.input.ballDZ;

  if (Math.abs(ball.position.z) > state.physics.FIELD_HEIGHT - 0.5) {
    ball.position.z =
      Math.sign(ball.position.z) * (state.physics.FIELD_HEIGHT - 0.5);
    state.input.ballDZ *= -1;
    boom(scene, ball.position);
  }

  if (ball.position.x < -state.physics.FIELD_WIDTH) {
    state.match.aiScore++;
    state.onScoreUpdate?.(state.match.playerScore, state.match.aiScore);
    checkWin(state);
    if (state.gameStarted) playGoalAnimation(state, objs);
  } else if (ball.position.x > state.physics.FIELD_WIDTH) {
    state.match.playerScore++;
    state.onScoreUpdate?.(state.match.playerScore, state.match.aiScore);
    checkWin(state);
    if (state.gameStarted) playGoalAnimation(state, objs);
  }

  if (hitPaddle(ball, leftPaddle, 1)) {
    state.input.ballDX = Math.abs(state.input.ballDX);
    boom(scene, ball.position);
    playPaddleSound();
  }
  if (hitPaddle(ball, rightPaddle, -1)) {
    state.input.ballDX = -Math.abs(state.input.ballDX);
    boom(scene, ball.position);
    playPaddleSound();
  }
}

function hitPaddle(ball: BABYLON.Mesh, p: BABYLON.Mesh, dir: number) {
  return (
    Math.abs(ball.position.z - p.position.z) < 2.5 &&
    Math.sign(ball.position.x - p.position.x) === dir &&
    Math.abs(ball.position.x - p.position.x) < 1.0
  );
}

function checkWin(state: GameState) {
  if (state.match.playerScore >= state.physics.WINNING_SCORE) {
    endGame(state, "left");
  } else if (state.match.aiScore >= state.physics.WINNING_SCORE) {
    endGame(state, "right");
  }
}

function endGame(state: GameState, winnerSide: "left" | "right") {
  state.gameStarted = false;
  state.paused = false;
  state.escMenuOpen = false;
  state.onPauseChange?.(false);
  state.onEscMenuChange?.(false);

  const winnerName =
    winnerSide === "left" ? state.match.leftName : state.match.rightName;
  const loserName =
    winnerSide === "left" ? state.match.rightName : state.match.leftName;
  const winnerScore =
    winnerSide === "left" ? state.match.playerScore : state.match.aiScore;
  const loserScore =
    winnerSide === "left" ? state.match.aiScore : state.match.playerScore;

  if (state.currentMode === GameMode.Tournament) {
    // tournament => call onMatchEndCallback
    if (typeof state.onMatchEndCallback === "function") {
      state.onMatchEndCallback(winnerName, loserName, winnerScore, loserScore);
    }
    return;
  }

  state.onMatchOver?.(
    state.currentMode,
    winnerName,
    state.match.playerScore,
    state.match.aiScore,
  );
}

export function resetBall(state: GameState, objs: SceneObjects) {
  const { ball } = objs;
  ball.position.set(0, 0.5, 0);
  const dx = state.physics.BALL_SPEED * (Math.random() > 0.5 ? 1 : -1);
  const dz = state.physics.BALL_SPEED * (Math.random() > 0.5 ? 1 : -1);
  state.input.ballDX = 0;
  state.input.ballDZ = 0;
  if (state.ballSpawnTimeout) clearTimeout(state.ballSpawnTimeout);
  state.ballSpawnTimeout = setTimeout(() => {
    state.input.ballDX = dx;
    state.input.ballDZ = dz;
    state.ballSpawnTimeout = null;
  }, 1000);
}

export function spawnBall(objs: SceneObjects) {
  const { ball, scene } = objs;
  const FR = 60;
  if (typeof scene.beginAnimation !== "function") return;
  boom(scene, ball.position);
  ball.scaling = new BABYLON.Vector3(0, 0, 0);
  const anim = new BABYLON.Animation(
    "spawn",
    "scaling",
    FR,
    BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
    BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
  );
  anim.setKeys([
    { frame: 0, value: new BABYLON.Vector3(0, 0, 0) },
    { frame: FR * 0.5, value: new BABYLON.Vector3(1, 1, 1) },
  ]);
  ball.animations = [anim];
  scene.beginAnimation(ball, 0, FR * 0.5, false);
}

export function resetScores(state: GameState) {
  state.match.playerScore = 0;
  state.match.aiScore = 0;
}

export function resetPositions(
  state: GameState,
  objs: SceneObjects,
  animate = true,
) {
  const { leftPaddle, rightPaddle } = objs;
  leftPaddle.position.set(-state.physics.FIELD_WIDTH + 1.5, 0.5, 0);
  rightPaddle.position.set(state.physics.FIELD_WIDTH - 1.5, 0.5, 0);
  resetBall(state, objs);
  if (animate) spawnBall(objs);
}

export function playGoalAnimation(state: GameState, objs: SceneObjects) {
  const { ball, scene } = objs;
  const FR = 60;

  state.paused = true;
  bigBoom(scene, ball.position);
  const scaleDown = new BABYLON.Animation(
    "goalDown",
    "scaling",
    FR,
    BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
    BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
  );
  scaleDown.setKeys([
    { frame: 0, value: ball.scaling.clone() },
    { frame: FR * 0.1, value: new BABYLON.Vector3(0, 0, 0) },
  ]);
  ball.animations = [scaleDown];
  scene.beginAnimation(ball, 0, FR * 0.1, false);

  if (state.goalTimeout) clearTimeout(state.goalTimeout);
  state.goalTimeout = setTimeout(() => {
    resetBall(state, objs);
    spawnBall(objs);
    state.goalTimeout = null;
    state.paused = state.manualPaused;
    state.onPauseChange?.(state.paused);
  }, 1000);
}

export function playRemoteGoalAnimation(state: GameState, objs: SceneObjects) {
  const { ball, scene } = objs;
  const FR = 60;

  state.paused = true;
  bigBoom(scene, ball.position);
  const scaleDown = new BABYLON.Animation(
    "remoteGoalDown",
    "scaling",
    FR,
    BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
    BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
  );
  scaleDown.setKeys([
    { frame: 0, value: ball.scaling.clone() },
    { frame: FR * 0.1, value: new BABYLON.Vector3(0, 0, 0) },
  ]);
  ball.animations = [scaleDown];
  scene.beginAnimation(ball, 0, FR * 0.1, false);

  // Spawn the ball immediately so it waits one second before moving
  spawnBall(objs);

  if (state.goalTimeout) clearTimeout(state.goalTimeout);
  state.goalTimeout = setTimeout(() => {
    state.goalTimeout = null;
    state.paused = state.manualPaused;
    state.onPauseChange?.(state.paused);
  }, 1000);
}


// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/pong.ts

// client/src/pong/pong.ts
import * as BABYLON from "@babylonjs/core";
import { createScene, fitFieldToCamera, type SceneObjects } from "./scene";
import { stepPhysics, resetScores, resetPositions } from "./physics";
import type { PhysicsParams, MatchInfo, InputState } from "./types";
import {
  startSinglePlayerAI,
  startLocal2P,
  startTournamentLocal2P,
  startRemote2P as startRemote2PMode,
} from "./modes";
import { removeAllKeyListeners } from "./utils";
import {
  FIELD_WIDTH,
  FIELD_HEIGHT,
  PADDLE_SPEED,
  BALL_SPEED,
  WINNING_SCORE,
} from "../../../shared/constants.js";

export enum GameMode {
  AI = "ai",
  Local2P = "local2p",
  Tournament = "tournament",
  Remote2P = "remote2p",
}

export interface GameState {
  physics: PhysicsParams;
  match: MatchInfo;
  input: InputState;

  FIXED_DT: number;
  accumulator: number;

  gameStarted: boolean;
  currentMode: GameMode;
  paused: boolean;
  /** Whether the pause was initiated by the player */
  manualPaused: boolean;
  escMenuOpen: boolean;

  onScoreUpdate?: (plScore: number, aiScore: number) => void;
  onPauseChange?: (paused: boolean) => void;
  onEscMenuChange?: (show: boolean) => void;
  onMatchOver?: (
    mode: GameMode,
    winnerName: string,
    plScore: number,
    aiScore: number,
    message?: string,
  ) => void;
  onPlayersUpdate?: (leftName: string, rightName: string) => void;

  /** Remote play events */
  onRemoteWaitingChange?: (waiting: boolean) => void;
  onRemoteCountdown?: (seconds: number) => void;
  onRemoteError?: () => void;

  onMatchEndCallback?: (
    winner: string,
    loser: string,
    winnerScore: number,
    loserScore: number,
  ) => void;

  keyDownHandler: ((e: KeyboardEvent) => void) | null;
  keyUpHandler: ((e: KeyboardEvent) => void) | null;

  goalTimeout: ReturnType<typeof setTimeout> | null;
  /** Delay timer for ball movement after spawn */
  ballSpawnTimeout: ReturnType<typeof setTimeout> | null;

  /** Remote play fields */
  ws?: WebSocket;
  playerSide?: "left" | "right";
  remoteState?: {
    ballX: number;
    ballZ: number;
    leftPaddleZ: number;
    rightPaddleZ: number;
    leftScore: number;
    rightScore: number;
  } | null;
  remoteBallDX?: number;
  remotePrevBallDX?: number;
  remoteCleanup?: () => void;
}

export interface GameAPI {
  startSinglePlayerAI: () => void;
  startLocal2P: () => void;
  startRemote2P: (url?: string) => void;
  startTournamentMatch: (
    p1Name: string,
    p2Name: string,
    isFinal: boolean,
    onMatchEnd: (
      winner: string,
      loser: string,
      winnerScore: number,
      loserScore: number,
    ) => void,
  ) => void;
  backToMenu: () => void;

  restartCurrentMatch?: () => void;
  unpause?: () => void;
  dispose: () => void;
}

export interface PongCallbacks {
  onScoreUpdate?: (plScore: number, aiScore: number) => void;
  onPauseChange?: (paused: boolean) => void;
  onEscMenuChange?: (show: boolean) => void;
  onMatchOver?: (
    mode: GameMode,
    winnerName: string,
    plScore: number,
    aiScore: number,
    message?: string,
  ) => void;
  onPlayersUpdate?: (leftName: string, rightName: string) => void;
  onRemoteWaitingChange?: (waiting: boolean) => void;
  onRemoteCountdown?: (seconds: number) => void;
  onRemoteError?: () => void;
}

export function initGame(
  canvas: HTMLCanvasElement,
  callbacks?: PongCallbacks,
): GameAPI {
  const engine = new BABYLON.Engine(canvas, true);

  const state: GameState = {
    physics: {
      FIELD_WIDTH,
      FIELD_HEIGHT,
      PADDLE_SPEED,
      AI_SPEED: 0.3,
      BALL_SPEED,
      WINNING_SCORE,
    },
    match: {
      playerScore: 0,
      aiScore: 0,
      leftName: "PLAYER",
      rightName: "AI",
      isFinalMatch: false,
    },
    input: {
      playerDzLeft: 0,
      playerDzRight: 0,
      aiTimer: 0,
      aiTargetZ: 0,
      ballDX: 0,
      ballDZ: 0,
    },

    FIXED_DT: 1 / 60,
    accumulator: 0,

    gameStarted: false,
    currentMode: GameMode.AI,
    paused: false,
    manualPaused: false,
    escMenuOpen: false,

    onScoreUpdate: callbacks?.onScoreUpdate,
    onPauseChange: callbacks?.onPauseChange,
    onEscMenuChange: callbacks?.onEscMenuChange,
    onMatchOver: callbacks?.onMatchOver,
    onPlayersUpdate: callbacks?.onPlayersUpdate,
    onRemoteWaitingChange: callbacks?.onRemoteWaitingChange,
    onRemoteCountdown: callbacks?.onRemoteCountdown,
    onRemoteError: callbacks?.onRemoteError,

    onMatchEndCallback: undefined,

    keyDownHandler: null,
    keyUpHandler: null,
    goalTimeout: null,
    ballSpawnTimeout: null,

    ws: undefined,
    playerSide: undefined,
    remoteState: null,
    remoteBallDX: 0,
    remotePrevBallDX: 0,
    remoteCleanup: undefined,
  };

  const sceneObjects: SceneObjects = createScene(engine, canvas, state.physics);

  state.input.ballDX = state.physics.BALL_SPEED;
  state.input.ballDZ = state.physics.BALL_SPEED;

  engine.runRenderLoop(() => {
    const dt = engine.getDeltaTime() / 1000;
    state.accumulator += dt;
    while (state.accumulator >= state.FIXED_DT) {
      stepPhysics(state, sceneObjects, state.FIXED_DT);
      state.accumulator -= state.FIXED_DT;
    }
    engine.scenes[0]?.render();
  });

  const resizeHandler = () => {
    engine.resize();
    fitFieldToCamera(
      sceneObjects.camera,
      state.physics.FIELD_WIDTH,
      state.physics.FIELD_HEIGHT,
    );
  };
  window.addEventListener("resize", resizeHandler);

  // ESC / Space
  const keydownHandler = (e: KeyboardEvent) => {
    if (!state.gameStarted) return;
    if (e.key === "Escape") {
      if (state.currentMode === GameMode.Remote2P) {
        state.escMenuOpen = !state.escMenuOpen;
        state.onEscMenuChange?.(state.escMenuOpen);
        return;
      }
      if (!state.escMenuOpen) {
        state.escMenuOpen = true;
        state.paused = true;
        state.manualPaused = true;
        state.onPauseChange?.(true);
        state.onEscMenuChange?.(true);
      } else {
        if (state.goalTimeout) return; // keep paused until goal reset
        state.escMenuOpen = false;
        state.paused = false;
        state.manualPaused = false;
        state.onPauseChange?.(false);
        state.onEscMenuChange?.(false);
      }
      return;
    }
    if (e.code === "Space") {
      if (state.currentMode === GameMode.Remote2P) return;
      if (state.escMenuOpen) return;
      if (state.goalTimeout) {
        state.manualPaused = true;
        return;
      }
      state.paused = !state.paused;
      state.manualPaused = state.paused;
      state.onPauseChange?.(state.paused);
    }
  };
  window.addEventListener("keydown", keydownHandler);

  const api: GameAPI = {
    startSinglePlayerAI: () => {
      startSinglePlayerAI(state, sceneObjects);
      state.manualPaused = true;
    },
    startLocal2P: () => {
      startLocal2P(state, sceneObjects);
      state.manualPaused = true;
    },
    startRemote2P: (url) => {
      void startRemote2PMode(state, sceneObjects, url);
      state.manualPaused = true;
    },
    startTournamentMatch: (p1, p2, isF, cb) => {
      startTournamentLocal2P(state, sceneObjects, p1, p2, isF, cb);
      state.manualPaused = true;
    },
    backToMenu: () => {
      removeAllKeyListeners(state);
      resetScores(state);
      resetPositions(state, sceneObjects);
      if (state.remoteCleanup) {
        state.remoteCleanup();
        state.remoteCleanup = undefined;
        } else if (state.ws) {
          try {
            state.ws.close();
          } catch {
            /* ignore close errors */
          }
        state.ws = undefined;
      }
      state.gameStarted = false;
      state.paused = false;
      state.manualPaused = false;
      state.escMenuOpen = false;
      state.onPauseChange?.(false);
      state.onEscMenuChange?.(false);
    },
    restartCurrentMatch: () => {
      removeAllKeyListeners(state);
      resetScores(state);
      state.onScoreUpdate?.(state.match.playerScore, state.match.aiScore);
      resetPositions(state, sceneObjects);

      state.gameStarted = true;
      state.paused = true;
      state.manualPaused = true;
      state.escMenuOpen = false;
      state.onPauseChange?.(true);
      state.onEscMenuChange?.(false);

      if (state.currentMode === GameMode.Remote2P && state.remoteCleanup) {
        state.remoteCleanup();
        state.remoteCleanup = undefined;
      }

      if (state.currentMode === GameMode.AI) {
        startSinglePlayerAI(state, sceneObjects);
      } else if (state.currentMode === GameMode.Local2P) {
        startLocal2P(state, sceneObjects);
      } else if (state.currentMode === GameMode.Remote2P) {
        void startRemote2PMode(state, sceneObjects);
      }
    },
    unpause: () => {
      if (state.goalTimeout) return;
      state.paused = false;
      state.manualPaused = false;
      state.escMenuOpen = false;
      state.onPauseChange?.(false);
      state.onEscMenuChange?.(false);
    },
    dispose: () => {
      engine.stopRenderLoop();
      engine.dispose();
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("keydown", keydownHandler);
      removeAllKeyListeners(state);
      if (state.remoteCleanup) {
        state.remoteCleanup();
        state.remoteCleanup = undefined;
      }
    },
  };

  // Expose internal state for tests
  (api as GameAPI & { __state: GameState }).__state = state;

  return api;
}



//  /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/Pong3D.tsx

import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { initGame, GameAPI, PongCallbacks, GameMode, type GameState } from "./pong";
import { recordWin, recordLoss } from "../pages/Profile/types/api";
import BracketOverlay from "./BracketOverlay";
import { ByeOverlay } from "./components/Overlays/ByeOverlay";
import { MatchResultOverlay } from "./components/Overlays/MatchResultOverlay";
import { GameOverOverlay } from "./components/Overlays/GameOverOverlay";
import { TournamentWinnerOverlay } from "./components/Overlays/TournamentWinnerOverlay";
import { StartScreen } from "./components/StartScreen";
import { TournamentSetup } from "./components/TournamentSetup";
import { PauseOverlay } from "./components/Overlays/PauseOverlay";
import { RemoteStatusOverlay } from "./components/Overlays/RemoteStatusOverlay";
import { RemoteErrorOverlay } from "./components/Overlays/RemoteErrorOverlay";
import { Scoreboard } from "./components/Scoreboard";
import { GoalBanner } from "./components/GoalBanner";
import { EscMenu } from "./components/Overlays/EscMenu";
import { OnlinePlayOverlay } from "./components/Overlays/OnlinePlayOverlay";

import { useTournament } from "./hooks/useTournament";
import "./pongGame.css";

type GameApiWithState = GameAPI & { __state?: GameState };


const INVALID_NAME_REGEX = /[^a-zA-Z0-9 _-]/;

type MatchOverData = {
  mode: GameMode;
  winnerName: string;
  playerScore: number;
  aiScore: number;
  message?: string;
};

export default function Pong3D() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const startMode = query.get("mode");

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Score
  const [scoreLeft, setScoreLeft] = useState(0);
  const [scoreRight, setScoreRight] = useState(0);
  const [showGoal, setShowGoal] = useState(false);
  const goalTimeout = useRef<NodeJS.Timeout | null>(null);
  const prevScore = useRef({ left: 0, right: 0 });

  // Pause / ESC
  const [isPaused, setIsPaused] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [menuIndex, setMenuIndex] = useState(0);
  const [waitingStart, setWaitingStart] = useState(false);
  const [remoteWaiting, setRemoteWaiting] = useState(false);
  const [remoteCountdown, setRemoteCountdown] = useState<number | null>(null);
  const [remoteError, setRemoteError] = useState(false);

  // Main menu / tournament
  const [showStartScreen, setShowStartScreen] = useState(!startMode);
  const [showSetup, setShowSetup] = useState(startMode === GameMode.Tournament);
  const [showOnline, setShowOnline] = useState(false);
  const [players, setPlayers] = useState<string[]>(["Player 1", "Player 2"]);
  const [nameError, setNameError] = useState(false);
  const [duplicateError, setDuplicateError] = useState(false);
  const [emptyError, setEmptyError] = useState(false);

  function validateNames(arr: string[]) {
    const invalid = arr.some((n) => INVALID_NAME_REGEX.test(n));
    const empty = arr.some((n) => n.trim() === "");
    const normalized = arr
      .map((n) => n.trim().toLowerCase())
      .filter((n) => n !== "");
    const dup = new Set(normalized).size !== normalized.length;
    setNameError(invalid);
    setEmptyError(empty);
    setDuplicateError(dup);
    return !(invalid || empty || dup);
  }

  // Babylon Game API
  const [gameApi, setGameApi] = useState<GameApiWithState | null>(null);

  // Single mode
  const [matchOver, setMatchOver] = useState<MatchOverData | null>(null);

  // Scoreboard names
  const [leftLabel, setLeftLabel] = useState("PLAYER");
  const [rightLabel, setRightLabel] = useState("AI");

  // Tournament overlays
  const {
    rounds,
    winner,
    showBracket,
    setShowBracket,
    byeInfo,
    matchInfo,
    startTourney,
    continueBye,
    continueMatch,
    acknowledgeWinner,
    resetTourney,
    tournamentEnded,
  } = useTournament(gameApi);

  // Ensure waiting overlay is shown when a new tournament match starts
  function handleContinueBye() {
    continueBye();
    setWaitingStart(true);
  }

  function handleContinueMatch() {
    continueMatch();
    setWaitingStart(true);
  }

  // --- Babylon init
  useEffect(() => {
    if (!canvasRef.current) return;

    const callbacks: PongCallbacks = {
      onScoreUpdate: (pl, ai) => {
        setScoreLeft(pl);
        setScoreRight(ai);
        const changed =
          pl !== prevScore.current.left || ai !== prevScore.current.right;
        prevScore.current = { left: pl, right: ai };
        if (changed) {
          setShowGoal(true);
          if (goalTimeout.current) clearTimeout(goalTimeout.current);
          goalTimeout.current = setTimeout(() => setShowGoal(false), 1000);
        }
      },
      onPauseChange: (paused) => {
        setIsPaused(paused);
      },
      onEscMenuChange: (show) => {
        setShowMenu(show);
        if (show) setMenuIndex(0);
      },
      onMatchOver: (mode, winner, plScore, aiScore, message) => {
        setMatchOver({
          mode,
          winnerName: winner,
          playerScore: plScore,
          aiScore,
          message,
        });

        if (mode === GameMode.AI) {
          const isPlayerWinner =
            winner.toLowerCase() === "you" || winner.toLowerCase() === "player";
          (isPlayerWinner ? recordWin : recordLoss)().catch((err) => {
            console.error("Failed to update stats", err);
          });
        }
      },
      onPlayersUpdate: (l, r) => {
        setLeftLabel(l);
        setRightLabel(r);
      },
      onRemoteWaitingChange: (w) => {
        setRemoteWaiting(w);
      },
      onRemoteCountdown: (sec) => {
        if (sec <= 0) setRemoteCountdown(null);
        else setRemoteCountdown(sec);
      },
      onRemoteError: () => {
        setRemoteError(true);
      },
    };
    const game = initGame(canvasRef.current, callbacks);
    setGameApi(game);
    return () => {
      game.dispose();
    };
  }, []);


  useEffect(() => {
    if (!gameApi) return;
    const query = new URLSearchParams(location.search);
    const mode = query.get("mode");
    if (mode === GameMode.AI) {
      setShowStartScreen(false);
      gameApi.startSinglePlayerAI();
      setWaitingStart(true);
    } else if (mode === GameMode.Local2P) {
      setShowStartScreen(false);
      gameApi.startLocal2P();
      setWaitingStart(true);
    } else if (mode === GameMode.Tournament) {
      setShowStartScreen(false);
      setShowSetup(true);
    } else if (mode === GameMode.Remote2P) {
      setShowStartScreen(false);
      prevScore.current = { left: 0, right: 0 };
      gameApi.startRemote2P();
      setScoreLeft(0);
      setScoreRight(0);
      setLeftLabel("YOU");
      setRightLabel("OPPONENT");
      setRemoteWaiting(true);
      setRemoteCountdown(null);
    }
  }, [gameApi, location.search]);

  // --- ESC MENU
  useEffect(() => {
    if (!showMenu) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setMenuIndex(
          (i) => (i - 1 + getMenuItems().length) % getMenuItems().length,
        );
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setMenuIndex((i) => (i + 1) % getMenuItems().length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        menuAction(menuIndex);
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showMenu, menuIndex]);

    function getMenuItems() {
      const state = gameApi?.__state;
    const active = state?.gameStarted;
    const mode = state?.currentMode;
    if (active) {
      if (mode === GameMode.Remote2P) {
        return ["Back to match", "Quit match"];
      }
      if (rounds.length > 0) {
        const arr = ["Resume"];
        if (!winner) {
          arr.push("Show bracket");
        }
        arr.push("Switch game mode", "Quit to profile");
        return arr;
      }
      return ["Resume", "Restart match", "Switch game mode", "Quit to profile"];
    }
    return ["Switch game mode", "Quit to profile"];
  }
  function menuAction(idx: number) {
    const arr = getMenuItems();
    const chosen = arr[idx];
    if (chosen === "Resume" || chosen === "Back to match") {
      gameApi?.unpause?.();
    } else if (chosen === "Restart match") {
      // Clear previous score to avoid spurious goal banners
      prevScore.current = { left: 0, right: 0 };
      gameApi?.restartCurrentMatch?.();
      setWaitingStart(true);
    } else if (chosen === "Show bracket") {
      setShowBracket(true);
    } else if (chosen === "Switch game mode") {
      resetAllToMainMenu();
    } else if (chosen === "Quit match") {
      resetAllToMainMenu();
    } else if (chosen === "Quit to profile") {
      navigate("/profile");
    }
  }

  function resetAllToMainMenu() {
    setShowStartScreen(true);
    setScoreLeft(0);
    setScoreRight(0);
    prevScore.current = { left: 0, right: 0 };
    setLeftLabel("PLAYER");
    setRightLabel("AI");
    resetTourney();
    gameApi?.backToMenu();
    setWaitingStart(false);
    setRemoteWaiting(false);
    setRemoteCountdown(null);
  }

  // --- MAIN SCREEN
  function startAI() {
    setShowStartScreen(false);
    gameApi?.startSinglePlayerAI();
    prevScore.current = { left: 0, right: 0 };
    setLeftLabel("YOU");
    setRightLabel("AI");
    setWaitingStart(true);
  }
  function startLocal() {
    setShowStartScreen(false);
    gameApi?.startLocal2P();
    prevScore.current = { left: 0, right: 0 };
    setLeftLabel("PLAYER 1");
    setRightLabel("PLAYER 2");
    setWaitingStart(true);
  }
  function openTournament() {
    const initial = ["Player 1", "Player 2"];
    setPlayers(initial);
    validateNames(initial);
    setShowStartScreen(false);
    setShowSetup(true);
  }

  function openOnline() {
    setShowStartScreen(false);
    setShowOnline(true);
  }

  function closeOnline() {
    setShowOnline(false);
    resetAllToMainMenu();
  }

  function startRandomMatch() {
    setShowOnline(false);
    startRemoteDuel();
  }

  function startRemoteDuel() {
    setShowStartScreen(false);
    // Reset score tracking before starting a new remote game
    prevScore.current = { left: 0, right: 0 };
    gameApi?.startRemote2P();
    // Reset UI scores before the server sends the initial state
    setScoreLeft(0);
    setScoreRight(0);
    setLeftLabel("YOU");
    setRightLabel("OPPONENT");
    setRemoteWaiting(true);
    setRemoteCountdown(null);
  }


  function addPlayer() {
    const MAX_PLAYERS = 8;
    if (players.length < MAX_PLAYERS) {
      const arr = [...players, `Player ${players.length + 1}`];
      setPlayers(arr);
      validateNames(arr);
    }
  }

  function removePlayer(index: number) {
    const arr = players.filter((_, i) => i !== index);
    setPlayers(arr);
    validateNames(arr);
  }

  function cancelTournamentSetup() {
    setShowSetup(false);
    resetAllToMainMenu();
  }

  // --- START TOURNAMENT
  function beginTourney() {
    if (!validateNames(players)) return;
    setShowSetup(false);
    setShowStartScreen(false);
    prevScore.current = { left: 0, right: 0 };
    startTourney(players);
    setWaitingStart(true);
  }

  // --- Solo matchOver (non-tournament)
  function closeMatchOver() {
    setMatchOver(null);
    resetAllToMainMenu();
  }

  // Block input while bracket overlay is visible
  useEffect(() => {
    if (!showBracket) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape" || e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        setShowBracket(false);
        if (tournamentEnded) {
          resetAllToMainMenu();
        } else {
          setShowMenu(true);
        }
        return;
      }

      if (
        [
          " ",
          "Tab",
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
        ].includes(e.key)
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    }

    window.addEventListener("keydown", handleKey, true);
    return () => {
      window.removeEventListener("keydown", handleKey, true);
    };
  }, [showBracket, tournamentEnded]);

  // Unpause on any key when waiting to start
    useEffect(() => {
      if (!waitingStart) return;
      if (gameApi?.__state?.currentMode === GameMode.Remote2P) return;
    function handleStart() {
      setWaitingStart(false);
      gameApi?.unpause?.();
    }
    window.addEventListener("keydown", handleStart, { once: true });
    return () => window.removeEventListener("keydown", handleStart);
  }, [waitingStart, gameApi]);

  useEffect(() => {
    return () => {
      if (goalTimeout.current) clearTimeout(goalTimeout.current);
    };
  }, []);

  return (
    <div
      className="
      font-orbitron
      relative
      h-screen
      w-screen
      bg-black
      text-white"
    >
      {/* CANVAS */}
      <canvas
        ref={canvasRef}
        className="
          h-full
          w-full
          rounded-lg
          border-4
          border-purple-600"
      />
      {/* SCORE */}
      <Scoreboard
        leftLabel={leftLabel}
        rightLabel={rightLabel}
        scoreLeft={scoreLeft}
        scoreRight={scoreRight}
      />
      <GoalBanner visible={showGoal} />
      {/* PAUSE overlay */}
      {isPaused && !showMenu && <PauseOverlay waitingStart={waitingStart} />}
      {/* Remote status overlay */}
      {(remoteWaiting || remoteCountdown !== null) && (
        <RemoteStatusOverlay waiting={remoteWaiting} countdown={remoteCountdown} />
      )}
      {remoteError && (
        <RemoteErrorOverlay
          onExit={() => {
            setRemoteError(false);
            navigate('/profile');
          }}
        />
      )}
      {/* ESC MENU */}
      {showMenu && (
        <EscMenu
          menuItems={getMenuItems()}
          menuIndex={menuIndex}
          setMenuIndex={setMenuIndex}
          onMenuAction={menuAction}
        />
      )}
      {/* BRACKET Overlay */}
      {showBracket && (
        <BracketOverlay
          rounds={rounds}
          onClose={() => {
            setShowBracket(false);
            if (tournamentEnded) {
              resetAllToMainMenu();
            }
          }}
        />
      )}
      {/* Single matchOver */}
      {matchOver && (
        <GameOverOverlay
          winnerName={matchOver.winnerName}
          playerScore={matchOver.playerScore}
          aiScore={matchOver.aiScore}
          message={matchOver.message}
          onOk={closeMatchOver}
        />
      )}
      {/* BYE overlay */}
      {byeInfo && (
        <ByeOverlay
          winner={byeInfo.winner}
          nextPair={byeInfo.nextPair}
          onContinue={handleContinueBye}
        />
      )}
      {/* REAL MATCH overlay */}
      {matchInfo && (
        <MatchResultOverlay
          winner={matchInfo.winner}
          loser={matchInfo.loser}
          winnerScore={matchInfo.winnerScore}
          loserScore={matchInfo.loserScore}
          isFinal={matchInfo.isFinal}
          nextPair={matchInfo.nextPair}
          onContinue={handleContinueMatch}
        />
      )}
      {/* TOURNAMENT WINNER */}
      {winner && (
        <TournamentWinnerOverlay
          winner={winner}
          onClose={() => {
            acknowledgeWinner();
            setShowBracket(true);
          }}
        />
      )}
      {/* START SCREEN */}
      {showStartScreen && (
        <StartScreen
          onSingleAI={startAI}
          onLocal2P={startLocal}
          onTournament={openTournament}
          onOnlinePlay={openOnline}
          onClose={() => {
            setShowStartScreen(false);
            setShowMenu(true);
          }}
        />
      )}
      {/* ONLINE PLAY */}
      {showOnline && (
        <OnlinePlayOverlay
          onClose={closeOnline}
          onRandomMatch={startRandomMatch}
        />
      )}
      {/* TOURNAMENT SETUP */}
      {showSetup && (
        <TournamentSetup
          players={players}
          nameError={nameError}
          duplicateError={duplicateError}
          emptyError={emptyError}
          onChangePlayerName={(index, val) => {
            const arr = [...players];
            arr[index] = val;
            setPlayers(arr);
            validateNames(arr);
          }}
          onAddPlayer={addPlayer}
          onRemovePlayer={removePlayer}
          onStartTournament={beginTourney}
          onClose={cancelTournamentSetup}
        />
      )}
    </div>
  );
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/pongGame.css

/* client/src/pong/PongGame.css */

@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap");

.font-orbitron {
  font-family: "Orbitron", sans-serif;
}

.glow {
  text-shadow: 0 0 5px cyan;
}
.score-glow {
  text-shadow: 0 0 5px white;
}
.menu-btn {
  font-family: "Orbitron", sans-serif;
}


.tournament-container {
  margin-top: 2rem;
  position: relative;
  min-height: 400px; 
}


.round {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 40px;
}


.match {
  position: relative;
  margin: 20px 0;
  width: 200px; /* or w-48 in Tailwind */
}


.player {
  position: relative;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(0, 162, 255, 0.3);
  color: white;
  padding: 12px 20px;
  margin: 5px 0;
  border-radius: 6px;
  transition: all 0.3s ease;
  overflow: hidden;
}

.player:hover {
  box-shadow: 0 0 10px #00a1ff;
}

.player.winner {
  background: rgba(0, 50, 100, 0.6);
  border-color: #00a1ff;
  box-shadow: 0 0 10px #00a1ff;
}

.goal-banner {
  animation: goal-pop 1s ease-out forwards;
}

@keyframes goal-pop {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  20% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
    transform: scale(1.2);
  }
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/remote.ts

import type {
  RemoteState,
  InitMessage,
  StateMessage,
  EndMessage,
  ServerMessage,
} from "../../../shared/messages.js";
import { MessageTypes } from "../../../shared/messages.js";
import type { SceneObjects } from "./scene";
import { spawnBall } from "./physics";
import type { GameState } from "./pong";
import { removeAllKeyListeners } from "./utils";

const COUNTDOWN_INTERVAL_MS = 250;

export function connect(
  state: GameState,
  url: string,
  objs: SceneObjects,
): () => void {
  const ws = new WebSocket(url);
  state.ws = ws;
  let receivedInit = false;
  let countdownInterval: ReturnType<typeof setInterval> | null = null;
  let cleaned = false;

  const clearCountdown = () => {
    if (countdownInterval) {
      clearInterval(countdownInterval);
      countdownInterval = null;
    }
  };

  const sendInput = (dir: number) => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: 'input', dir }));
    }
  };

  const handleInitMessage = (msg: InitMessage) => {
    receivedInit = true;
    clearCountdown();
    state.playerSide = msg.side;
    if (msg.leftName && msg.rightName) {
      state.match.leftName = msg.leftName;
      state.match.rightName = msg.rightName;
      state.onPlayersUpdate?.(msg.leftName, msg.rightName);
    }
    state.onRemoteWaitingChange?.(false);

    const serverTime =
      typeof msg.serverTime === 'number' ? msg.serverTime : Date.now();
    const startTime =
      typeof msg.startTime === 'number'
        ? Date.now() + (msg.startTime - serverTime)
        : Date.now();

    const tick = () => {
      const diff = startTime - Date.now();
      const remaining = Math.ceil(diff / 1000);
      if (diff > 0) {
        state.onRemoteCountdown?.(remaining);
      } else {
        clearCountdown();
        state.onRemoteCountdown?.(0);
        spawnBall(objs);
        state.paused = false;
        state.manualPaused = false;
        state.onPauseChange?.(false);
      }
    };

    tick();
    countdownInterval = setInterval(tick, COUNTDOWN_INTERVAL_MS);
  };

  const handleStateMessage = (msg: StateMessage) => {
    const newState = msg.state as RemoteState;
    if (state.remoteState) {
      state.remotePrevBallDX = state.remoteBallDX;
      state.remoteBallDX = newState.ballX - state.remoteState.ballX;
    } else {
      state.remotePrevBallDX = 0;
      state.remoteBallDX = 0;
    }
    state.remoteState = newState;
  };

  const handleEndMessage = (msg: EndMessage) => {
    state.remoteState = msg.state as RemoteState;
    state.gameStarted = false;
    state.paused = false;

    const winnerName =
      msg.winner === 'left' ? state.match.leftName : state.match.rightName;

    const message =
      msg.reason === 'opponent_left' ? 'Opponent left the match' : undefined;

    state.onMatchOver?.(
      state.currentMode,
      winnerName,
      msg.state.leftScore,
      msg.state.rightScore,
      message,
    );
  };

  const cleanup = () => {
    if (cleaned) return;
    cleaned = true;
    state.gameStarted = false;
    state.paused = false;
    state.onRemoteWaitingChange?.(false);
    state.onRemoteCountdown?.(0);
    clearCountdown();
    removeAllKeyListeners(state);
    if (
      ws.readyState !== WebSocket.CLOSED &&
      ws.readyState !== WebSocket.CLOSING
    ) {
      ws.close();
    }
  };

  ws.onopen = () => {
    state.onRemoteWaitingChange?.(true);
  };

  ws.onmessage = (ev) => {
    let msg: ServerMessage;
    try {
      msg = JSON.parse(ev.data) as ServerMessage;
    } catch {
      return;
    }
    switch (msg.type) {
      case MessageTypes.INIT:
        handleInitMessage(msg as InitMessage);
        break;
      case MessageTypes.STATE:
        handleStateMessage(msg as StateMessage);
        break;
      case MessageTypes.END:
        handleEndMessage(msg as EndMessage);
        break;
    }
  };

  ws.onclose = () => {
    if (!receivedInit) {
      state.onRemoteError?.();
    }
    cleanup();
  };

  ws.onerror = () => {
    if (!receivedInit) {
      state.onRemoteError?.();
    }
    cleanup();
    state.onMatchOver?.(
      state.currentMode,
      state.match.leftName,
      state.match.playerScore,
      state.match.aiScore,
      'Connection lost',
    );
  };

  state.keyDownHandler = (e: KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      sendInput(1);
    } else if (e.key === 'ArrowDown') {
      sendInput(-1);
    }
  };
  state.keyUpHandler = (e: KeyboardEvent) => {
    if (['ArrowUp', 'ArrowDown'].includes(e.key)) {
      sendInput(0);
    }
  };

  window.addEventListener('keydown', state.keyDownHandler);
  window.addEventListener('keyup', state.keyUpHandler);

  return cleanup;
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/scene.ts

// client/src/pong/scene.ts
import * as BABYLON from "@babylonjs/core";
import { GridMaterial } from "@babylonjs/materials";
import type { PhysicsParams } from "./types";

export interface SceneObjects {
  scene: BABYLON.Scene;
  camera: BABYLON.ArcRotateCamera;
  leftPaddle: BABYLON.Mesh;
  rightPaddle: BABYLON.Mesh;
  ball: BABYLON.Mesh;
}

type Config = PhysicsParams;

export function createScene(
  engine: BABYLON.Engine,
  canvas: HTMLCanvasElement,
  config: Config,
): SceneObjects {
  const scene = new BABYLON.Scene(engine);

  const camera = new BABYLON.ArcRotateCamera(
    "arcCamera",
    0,
    1.2,
    30,
    BABYLON.Vector3.Zero(),
    scene,
  );
  camera.attachControl(canvas, true);

  camera.keysUp = [];
  camera.keysDown = [];
  camera.keysLeft = [];
  camera.keysRight = [];
  camera.lowerBetaLimit = 0.3;
  camera.upperBetaLimit = Math.PI / 2;
  camera.useFramingBehavior = true;
  if (camera.framingBehavior) {
    camera.framingBehavior.elevationReturnTime = -1;
  }

  new BABYLON.HemisphericLight(
    "hemi",
    new BABYLON.Vector3(0, 1, 0),
    scene,
  ).intensity = 0.8;

  const pipe = new BABYLON.DefaultRenderingPipeline("pipe", true, scene, [
    camera,
  ]);
  pipe.bloomEnabled = true;
  pipe.bloomThreshold = 0.3;
  pipe.bloomWeight = 0.2;
  pipe.chromaticAberrationEnabled = true;
  pipe.chromaticAberration.aberrationAmount = 2;

  // skybox
  const sky = BABYLON.MeshBuilder.CreateBox("sky", { size: 1000 }, scene);
  const skyMat = new BABYLON.StandardMaterial("skyMat", scene);
  skyMat.backFaceCulling = false;
  skyMat.reflectionTexture = new BABYLON.CubeTexture(
    "https://assets.babylonjs.com/environments/space",
    scene,
  );
  skyMat.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
  skyMat.diffuseColor = new BABYLON.Color3(0, 0, 0);
  skyMat.specularColor = new BABYLON.Color3(0, 0, 0);
  sky.material = skyMat;

  // ground
  const ground = BABYLON.MeshBuilder.CreateGround(
    "ground",
    {
      width: config.FIELD_WIDTH * 2,
      height: config.FIELD_HEIGHT * 2,
    },
    scene,
  );
  const gmat = new GridMaterial("gridMat", scene);
  gmat.mainColor = new BABYLON.Color3(0, 0, 0);
  gmat.lineColor = new BABYLON.Color3(0.2, 1, 0.8);
  gmat.opacity = 0.85;
  ground.material = gmat;

  // paddles
  const paddleSize = { width: 1, height: 0.5, depth: 3 };
  const leftPaddle = BABYLON.MeshBuilder.CreateBox("pL", paddleSize, scene);
  const rightPaddle = BABYLON.MeshBuilder.CreateBox("pR", paddleSize, scene);
  leftPaddle.position.set(-config.FIELD_WIDTH + 1.5, 0.5, 0);
  leftPaddle.material = neonMat(scene, 0.8, 0.2, 0.8);
  rightPaddle.position.set(config.FIELD_WIDTH - 1.5, 0.5, 0);
  rightPaddle.material = neonMat(scene, 0.2, 0.8, 0.7);

  // ball
  const ball = BABYLON.MeshBuilder.CreateSphere("ball", { diameter: 1 }, scene);
  ball.position.set(0, 0.5, 0);
  ball.material = neonMat(scene, 0.8, 0.8, 0.2);

  // trail
  const trail = new BABYLON.ParticleSystem("trail", 1000, scene);
  trail.particleTexture = new BABYLON.Texture(
    "https://assets.babylonjs.com/textures/flare.png",
    scene,
  );
  trail.emitter = ball;
  trail.minEmitBox = trail.maxEmitBox = new BABYLON.Vector3(0, 0, 0);
  trail.color1 = new BABYLON.Color4(0.2, 1, 0.8, 1);
  trail.color2 = new BABYLON.Color4(0.2, 1, 0.8, 0.5);
  trail.colorDead = new BABYLON.Color4(0, 0, 0, 0);
  trail.minSize = 0.2;
  trail.maxSize = 0.5;
  trail.minLifeTime = 0.3;
  trail.maxLifeTime = 0.6;
  trail.emitRate = 60;
  trail.updateSpeed = 0.02;
  trail.start();

  new BABYLON.GlowLayer("glow", scene, {
    mainTextureFixedSize: 512,
    blurKernelSize: 32,
  }).intensity = 0.2;

  scene.executeWhenReady(() => {
    fitFieldToCamera(camera, config.FIELD_WIDTH, config.FIELD_HEIGHT);
  });

  return { scene, camera, leftPaddle, rightPaddle, ball };
}

export function fitFieldToCamera(
  camera: BABYLON.ArcRotateCamera,
  FW: number,
  FH: number,
) {
  if (!camera.framingBehavior) return;
  camera.alpha = -Math.PI / 2;
  const min = new BABYLON.Vector3(-FH, 0, -FW);
  const max = new BABYLON.Vector3(FH, 2, FW);
  camera.framingBehavior.zoomOnBoundingInfo(min, max);
}

export function neonMat(s: BABYLON.Scene, r: number, g: number, b: number) {
  const m = new BABYLON.StandardMaterial("m", s);
  m.diffuseColor = new BABYLON.Color3(0, 0, 0);
  m.emissiveColor = new BABYLON.Color3(r, g, b);
  return m;
}

export function boom(scene: BABYLON.Scene, pos: BABYLON.Vector3) {
  const ex = new BABYLON.ParticleSystem("boom", 50, scene);
  ex.particleTexture = new BABYLON.Texture(
    "https://assets.babylonjs.com/textures/flare.png",
    scene,
  );
  ex.emitter = pos.clone();
  ex.minEmitBox = ex.maxEmitBox = new BABYLON.Vector3(0, 0, 0);
  ex.color1 = new BABYLON.Color4(1, 0.6, 0, 1);
  ex.color2 = new BABYLON.Color4(1, 1, 0, 1);
  ex.colorDead = new BABYLON.Color4(0, 0, 0, 0);
  ex.minSize = 0.1;
  ex.maxSize = 0.5;
  ex.minLifeTime = 0.2;
  ex.maxLifeTime = 0.4;
  ex.emitRate = 100;
  ex.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;
  ex.gravity = new BABYLON.Vector3(0, -2, 0);
  ex.direction1 = new BABYLON.Vector3(-1, 1, -1);
  ex.direction2 = new BABYLON.Vector3(1, 1, 1);
  ex.minEmitPower = 1;
  ex.maxEmitPower = 2;
  ex.targetStopDuration = 0.2;
  ex.disposeOnStop = true;
  ex.start();
}

export function bigBoom(scene: BABYLON.Scene, pos: BABYLON.Vector3) {
  const ex = new BABYLON.ParticleSystem("bigBoom", 150, scene);
  ex.particleTexture = new BABYLON.Texture(
    "https://assets.babylonjs.com/textures/flare.png",
    scene,
  );
  ex.emitter = pos.clone();
  ex.minEmitBox = ex.maxEmitBox = new BABYLON.Vector3(0, 0, 0);
  ex.color1 = new BABYLON.Color4(1, 0.6, 0, 1);
  ex.color2 = new BABYLON.Color4(1, 1, 0, 1);
  ex.colorDead = new BABYLON.Color4(0, 0, 0, 0);
  ex.minSize = 0.3;
  ex.maxSize = 0.8;
  ex.minLifeTime = 0.1;
  ex.maxLifeTime = 0.2;
  ex.emitRate = 200;
  ex.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;
  ex.gravity = new BABYLON.Vector3(0, -2, 0);
  ex.direction1 = new BABYLON.Vector3(-1, 1, -1);
  ex.direction2 = new BABYLON.Vector3(1, 1, 1);
  ex.minEmitPower = 2;
  ex.maxEmitPower = 3;
  ex.targetStopDuration = 0.1;
  ex.disposeOnStop = true;
  ex.start();
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/sound.ts

let ctx: AudioContext | null = null;

export function playPaddleSound(): void {
  if (typeof window === 'undefined') return;
  if (!ctx) {
    type WindowWithAudio = Window & { webkitAudioContext?: typeof AudioContext };
    const win = window as WindowWithAudio;
    const AudioCtx = window.AudioContext || win.webkitAudioContext;
    if (!AudioCtx) return;
    ctx = new AudioCtx();
  }

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(800, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.3);

  gain.gain.setValueAtTime(0.15, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.3);
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/tournamentLogic.ts

import type { BracketRound, BracketMatch } from "./BracketOverlay";

export function buildSingleElimNoDoubleByeSym(
  players: string[],
): BracketRound[] {
  const round1 = createFirstRound(players);
  const rounds = createSubsequentRounds(round1);
  return rounds;
}

function createFirstRound(players: string[]): BracketMatch[] {
  const total = players.length;
  const real = players.filter((p) => p !== "BYE");
  let byeCount = total - real.length;

  shuffle(real);

  if (byeCount > real.length) byeCount = real.length;

  let leftover = real.length - byeCount;
  if (leftover % 2 !== 0 && byeCount > 0) {
    leftover++;
    byeCount--;
  }
  if (leftover < 0) leftover = 0;

  const chosen = real.slice(0, byeCount);
  const leftoverPlayers = real.slice(byeCount);

  const round: BracketMatch[] = [];
  for (const p of chosen) {
    round.push({ p1: { name: p }, p2: { name: "BYE" }, winner: null });
  }

  for (let i = 0; i < leftoverPlayers.length; i += 2) {
    round.push({
      p1: { name: leftoverPlayers[i] },
      p2: { name: leftoverPlayers[i + 1] },
      winner: null,
    });
  }

  shuffleRound1(round);
  return round;
}

function createSubsequentRounds(round1: BracketMatch[]): BracketRound[] {
  const rounds: BracketRound[] = [round1];
  let prev = round1;
  while (prev.length > 1) {
    const nextRound: BracketMatch[] = [];
    for (let i = 0; i < prev.length; i += 2) {
      const m1 = prev[i];
      const m2 = prev[i + 1];
      const nextMatch: BracketMatch = {
        p1: predictFrom(m1),
        p2: m2 ? predictFrom(m2) : { name: "" },
        winner: null,
      };
      m1.nextMatch = nextMatch;
      m1.nextSlot = "p1";
      if (m2) {
        m2.nextMatch = nextMatch;
        m2.nextSlot = "p2";
      }
      nextRound.push(nextMatch);
    }
    rounds.push(nextRound);
    prev = nextRound;
  }
  return rounds;
}

function predictFrom(match: BracketMatch) {
  if (match.p1.name === "BYE" && match.p2.name !== "BYE") {
    return { name: match.p2.name, isPredicted: true };
  }
  if (match.p2.name === "BYE" && match.p1.name !== "BYE") {
    return { name: match.p1.name, isPredicted: true };
  }
  return { name: "" };
}

export function shuffle<T>(arr: T[]): void {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

export function shuffleRound1(round: BracketMatch[]): void {
  shuffle(round);
}

export function findNextPair(
  rounds: BracketRound[],
  rIndex: number,
  mIndex: number,
): string | undefined {
  for (let r = rIndex; r < rounds.length; r++) {
    for (let m = r === rIndex ? mIndex + 1 : 0; m < rounds[r].length; m++) {
      const nm = rounds[r][m];
      if (
        nm.p1.name !== "" &&
        nm.p2.name !== "" &&
        nm.p1.name !== "BYE" &&
        nm.p2.name !== "BYE"
      ) {
        return nm.p1.name + " vs " + nm.p2.name;
      }
    }
  }
  return undefined;
}




// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/types.ts

export interface PhysicsParams {
  FIELD_WIDTH: number;
  FIELD_HEIGHT: number;
  PADDLE_SPEED: number;
  AI_SPEED: number;
  BALL_SPEED: number;
  WINNING_SCORE: number;
}

export interface MatchInfo {
  playerScore: number;
  aiScore: number;
  leftName: string;
  rightName: string;
  isFinalMatch: boolean;
}

export interface InputState {
  playerDzLeft: number;
  playerDzRight: number;
  aiTimer: number;
  aiTargetZ: number;
  ballDX: number;
  ballDZ: number;
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/utils.ts


import type { GameState } from './pong';

export function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

export function resetInput(state: GameState) {
  state.input.playerDzLeft = 0;
  state.input.playerDzRight = 0;
}

export function removeAllKeyListeners(state: GameState) {
  if (state.keyDownHandler) {
    window.removeEventListener('keydown', state.keyDownHandler);
    state.keyDownHandler = null;
  }
  if (state.keyUpHandler) {
    window.removeEventListener('keyup', state.keyUpHandler);
    state.keyUpHandler = null;
  }
  resetInput(state);
}

export interface PaddleKeys {
  up: string | string[];
  down: string | string[];
}

function keyMatch(target: string, keys: string | string[]) {
  return Array.isArray(keys) ? keys.includes(target) : target === keys;
}

export function setupKeyListeners(
  state: GameState,
  left: PaddleKeys,
  right?: PaddleKeys,
) {
  state.keyDownHandler = (e: KeyboardEvent) => {
    if (keyMatch(e.key, left.up))
      state.input.playerDzLeft = state.physics.PADDLE_SPEED;
    if (keyMatch(e.key, left.down))
      state.input.playerDzLeft = -state.physics.PADDLE_SPEED;

    if (right) {
      if (keyMatch(e.key, right.up))
        state.input.playerDzRight = state.physics.PADDLE_SPEED;
      if (keyMatch(e.key, right.down))
        state.input.playerDzRight = -state.physics.PADDLE_SPEED;
    }
  };

  state.keyUpHandler = (e: KeyboardEvent) => {
    if (keyMatch(e.key, left.up) || keyMatch(e.key, left.down))
      state.input.playerDzLeft = 0;

    if (
      right &&
      (keyMatch(e.key, right.up) || keyMatch(e.key, right.down))
    )
      state.input.playerDzRight = 0;
  };

  window.addEventListener('keydown', state.keyDownHandler!);
  window.addEventListener('keyup', state.keyUpHandler!);
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/App.tsx


import AppRouter from './router/AppRouter'
import './index.css';
import { Toaster } from 'react-hot-toast';
// import NeonCursor from './components/NeonCursor';
//import Profile from './pages/Profile/Profile';

function App() {
  return (
    <>
      <AppRouter/>
	    {/* <NeonCursor /> */}
      {/* <Profile /> */}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;


// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/index.css

@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;


@layer base {
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    color: white;
    overflow-x: auto;
    overflow-y: auto;
    font-family: ubuntu, sans-serif;
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


// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);


// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/vite-env.d.ts

/// <reference types="vite/client" />








// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/components/Overlays/ByeOverlay.tsx

import { useEnterKey } from "../../hooks/useEnterKey";
import { OverlayWrapper } from "./OverlayWrapper";
import {
  OverlayCard,
  OverlayButton,
  OverlayHeading,
  OverlayText,
} from "./OverlayComponents";

interface ByeOverlayProps {
  winner: string;
  nextPair?: string;
  onContinue: () => void;
}

export function ByeOverlay({ winner, nextPair, onContinue }: ByeOverlayProps) {
  useEnterKey(onContinue);
  return (
    <OverlayWrapper>
      <OverlayCard>
        <OverlayHeading className="text-2xl">BYE Match</OverlayHeading>
        <OverlayText className="text-lg">
          Player <b className="text-[#74C0FC]">{winner}</b> gets a pass to next round!
        </OverlayText>
        {nextPair && (
          <p
            className="
              mb-4
              text-md
              text-[#743b91]
              drop-shadow-[0_0_5px_rgba(147,51,234,0.6)]
            "
          >
            Next match: {nextPair}
          </p>
        )}
        <OverlayButton onClick={onContinue}>Continue</OverlayButton>
      </OverlayCard>
    </OverlayWrapper>
  );
}


// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/components/Overlays/EscMenu.tsx

import React, { useEffect } from "react";
import { OverlayWrapper } from "./OverlayWrapper";

interface EscMenuProps {
  menuItems: string[];
  menuIndex: number;
  setMenuIndex: React.Dispatch<React.SetStateAction<number>>;
  onMenuAction: (index: number) => void;
}

export function EscMenu({ menuItems, menuIndex, setMenuIndex, onMenuAction }: EscMenuProps) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setMenuIndex((i) => (i - 1 + menuItems.length) % menuItems.length);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setMenuIndex((i) => (i + 1) % menuItems.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        onMenuAction(menuIndex);
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuIndex, menuItems, onMenuAction, setMenuIndex]);

  const styles: { base: string; active: string }[] = [
    {
      base:
        "border-[#0A7FC9] text-[#D3E0FB] shadow-[0_0_15px_rgba(0,255,255,0.7)] hover:bg-cyan-900 hover:bg-opacity-30",
      active: "bg-cyan-900 bg-opacity-30",
    },
    {
      base:
        "border-[#BD0E86] text-[#832264] shadow-[0_0_15px_rgba(255,29,153,0.7)] hover:bg-pink-900 hover:bg-opacity-30",
      active: "bg-pink-900 bg-opacity-30",
    },
    {
      base:
        "border-[#9010CE] text-[#743b91] shadow-[0_0_12px_rgba(192,38,211,0.7)] hover:bg-purple-900 hover:bg-opacity-30",
      active: "bg-purple-900 bg-opacity-30",
    },
    {
      base:
        "border-[#74C0FC] text-[#297db1] shadow-[0_0_15px_rgba(74,192,252,0.7)] hover:bg-blue-900 hover:bg-opacity-30",
      active: "bg-blue-900 bg-opacity-30",
    },
    {
      base:
        "border-[#74C0FC] text-[#297db1] shadow-[0_0_15px_rgba(74,192,252,0.7)] hover:bg-blue-900 hover:bg-opacity-30",
      active: "bg-blue-900 bg-opacity-30",
    },
    {
      base:
        "border-[#BD0E86] text-[#832264] shadow-[0_0_15px_rgba(255,29,153,0.7)] hover:bg-pink-900 hover:bg-opacity-30",
      active: "bg-pink-900 bg-opacity-30",
    },
  ];

  return (
    <OverlayWrapper>
      <div className="flex flex-col items-center space-y-6 text-center">
        {menuItems.map((text, idx) => {
          const style = styles[idx] ?? styles[0];
          return (
            <button
              key={idx}
              onMouseEnter={() => setMenuIndex(idx)}
              onClick={() => onMenuAction(idx)}
              className={`menu-btn w-[400px] py-4 text-lg font-bold border-2 rounded-xl bg-black bg-opacity-10 transition-transform duration-200 hover:scale-105 ${style.base} ${menuIndex === idx ? style.active + ' scale-105' : ''}`}
            >
              {text}
            </button>
          );
        })}
      </div>
    </OverlayWrapper>
  );
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/components/Overlays/GameOverOverlay.tsx

import { OverlayWrapper } from "./OverlayWrapper";
import { useEnterKey } from "../../hooks/useEnterKey";
import {
  OverlayCard,
  OverlayButton,
  OverlayHeading,
  OverlayText,
} from "./OverlayComponents";

interface GameOverOverlayProps {
  winnerName: string;
  playerScore: number;
  aiScore: number;
  onOk: () => void;
  message?: string;
}

export function GameOverOverlay({
  winnerName,
  playerScore,
  aiScore,
  onOk,
  message,
}: GameOverOverlayProps) {
  useEnterKey(onOk);
  return (
    <OverlayWrapper>
      <OverlayCard>
        <OverlayHeading className="text-3xl">GAME OVER</OverlayHeading>
        {message && (
          <OverlayText className="text-lg mb-2">{message}</OverlayText>
        )}
        <OverlayText className="text-xl">
          Winner: <b className="text-[#74C0FC]">{winnerName}</b>
          <br />
          Score: {playerScore}:{aiScore}
        </OverlayText>
        <OverlayButton onClick={onOk}>OK</OverlayButton>
      </OverlayCard>
    </OverlayWrapper>
  );
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/components/Overlays/MatchResultOverlay.tsx

import { OverlayWrapper } from "./OverlayWrapper";
import { useEnterKey } from "../../hooks/useEnterKey";
import {
  OverlayCard,
  OverlayButton,
  OverlayHeading,
  OverlayText,
} from "./OverlayComponents";

interface MatchResultOverlayProps {
  winner: string;
  loser: string;
  winnerScore: number;
  loserScore: number;
  isFinal: boolean;
  nextPair?: string;
  onContinue: () => void;
}

export function MatchResultOverlay({
  winner,
  loser,
  winnerScore,
  loserScore,
  isFinal,
  nextPair,
  onContinue,
}: MatchResultOverlayProps) {
  useEnterKey(onContinue);
  return (
    <OverlayWrapper>
      <OverlayCard>
        <OverlayHeading className="mb-2 text-2xl">Match result</OverlayHeading>
        <OverlayText className="text-lg">
          Winner: <b className="text-[#74C0FC]">{winner}</b>
          <br />
          Loser: <b className="text-[#743b91]">{loser}</b>
          <br />
          Score: {winnerScore}:{loserScore}
        </OverlayText>
        {isFinal ? (
          <p
            className="
              mb-4
              text-lg
              text-[#74C0FC]
              drop-shadow-[0_0_5px_rgba(74,222,128,0.6)]
            "
          >
            This was final!
          </p>
        ) : nextPair ? (
          <p
            className="
              mb-4
              text-md
              text-[#743b91]
              drop-shadow-[0_0_5px_rgba(147,51,234,0.6)]
            "
          >
            Next match: {nextPair}
          </p>
        ) : (
          <p
            className="
              mb-4
              text-md
              text-[#743b91]
              drop-shadow-[0_0_5px_rgba(147,51,234,0.6)]
            "
          >
            Next match is coming...
          </p>
        )}
        <OverlayButton onClick={onContinue}>Continue</OverlayButton>
      </OverlayCard>
    </OverlayWrapper>
  );
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/components/Overlays/OnlinePlayOverlay.css



.online-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.online-option {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid #00a1ff;
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.online-option:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 15px #00a1ff;
  background: rgba(0, 162, 255, 0.1);
}

.online-option h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #00a1ff;
}

.online-option p {
  color: #aaa;
  font-size: 0.9rem;
}

.tournament-list {
  margin-top: 2rem;
}

.tournament-item {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid #ff00e6;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.tournament-item:hover {
  background: rgba(255, 0, 230, 0.1);
  transform: translateX(5px);
}

.tournament-info h4 {
  color: #ff00e6;
  margin-bottom: 0.25rem;
}

.tournament-info p {
  color: #aaa;
  font-size: 0.8rem;
}

.tournament-status {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: bold;
}

.status-joining {
  background-color: rgba(0, 255, 0, 0.2);
  color: #00ff00;
}

.status-in-progress {
  background-color: rgba(255, 165, 0, 0.2);
  color: #ffa500;
}

.status-finished {
  background-color: rgba(255, 0, 0, 0.2);
  color: #ff0000;
}


.player-list {
  margin-top: 1rem;
  max-height: 200px;
  overflow-y: auto;
}

.player-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid rgba(0, 162, 255, 0.2);
}

.player-item:last-child {
  border-bottom: none;
}

.player-name {
  color: #00a1ff;
}

.player-rating {
  color: #00ffaa;
  font-size: 0.8rem;
}


.search-bar {
  width: 100%;
  padding: 0.75rem;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid #00a1ff;
  border-radius: 4px;
  color: white;
  margin-bottom: 1rem;
}

.search-bar::placeholder {
  color: rgba(255, 255, 255, 0.5);
}


@media (max-width: 768px) {
  .online-options {
    grid-template-columns: 1fr;
  }

}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/components/Overlays/OnlinePlayOverlay.tsx

import React, { useEffect, useRef, useState } from "react";
import { OverlayWrapper } from "./OverlayWrapper";
import { OverlayCard, OverlayHeading } from "./OverlayComponents";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import "./OnlinePlayOverlay.css";
import TabButton from "../../../components/TabButton";
import { QuickPlayTab } from "./QuickPlayTab";
import { TournamentsTab } from "./TournamentsTab";
import { PlayersTab } from "./PlayersTab";

interface OnlinePlayOverlayProps {
  onClose: () => void;
  /** Start a random remote duel */
  onRandomMatch: () => void;
}

type Tab = "quick" | "tournaments" | "players";

export function OnlinePlayOverlay({ onClose, onRandomMatch }: OnlinePlayOverlayProps) {
  const tabValues: Tab[] = ["quick", "tournaments", "players"];
  const [tab, setTab] = useState<Tab>("quick");
  const [index, setIndex] = useState(0);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  useEscapeKey(onClose);

  useEffect(() => {
    btnRefs.current[index]?.focus();
  }, [index]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      const total = tabValues.length;
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setIndex((i) => (i - 1 + total) % total);
      } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setIndex((i) => (i + 1) % total);
      } else if (e.key === "Tab") {
        e.preventDefault();
        if (e.shiftKey) setIndex((i) => (i - 1 + total) % total);
        else setIndex((i) => (i + 1) % total);
      } else if (e.key === "Enter") {
        e.preventDefault();
        setTab(tabValues[index]);
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, tabValues]);

  return (
    <OverlayWrapper>
      <OverlayCard className="w-[90%] max-w-[800px] max-h-[90vh] overflow-y-auto border-[#00a1ff] bg-gradient-to-br from-[#0a0e2a] to-black shadow-[0_0_20px_#00a1ff,0_0_40px_#00a1ff] md:p-8">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-2 right-4 text-[#0A7FC9] hover:text-pink-500 text-lg font-bold"
        >
          ✕
        </button>
        <OverlayHeading className="text-3xl mb-6 text-center text-[#e9f4fb] drop-shadow-[0_0_10px_#00a1ff]">
          ONLINE PLAY
        </OverlayHeading>

        <div
          className="flex mb-6 border-b border-[rgba(0,162,255,0.3)]"
          role="tablist"
        >
          <TabButton
            ref={(el) => (btnRefs.current[0] = el)}
            tabIndex={0}
            onFocus={() => setIndex(0)}
            onMouseEnter={() => setIndex(0)}
            value="quick"
            active={tab === "quick"}
            onSelect={setTab}
          >
            Quick play
          </TabButton>
          <TabButton
            ref={(el) => (btnRefs.current[1] = el)}
            tabIndex={0}
            onFocus={() => setIndex(1)}
            onMouseEnter={() => setIndex(1)}
            value="tournaments"
            active={tab === "tournaments"}
            onSelect={setTab}
          >
            Tournaments
          </TabButton>
          <TabButton
            ref={(el) => (btnRefs.current[2] = el)}
            tabIndex={0}
            onFocus={() => setIndex(2)}
            onMouseEnter={() => setIndex(2)}
            value="players"
            active={tab === "players"}
            onSelect={setTab}
          >
            Players
          </TabButton>
        </div>

        {tab === "quick" && <QuickPlayTab onRandomMatch={onRandomMatch} />}
        {tab === "tournaments" && <TournamentsTab />}
        {tab === "players" && <PlayersTab onClose={onClose} />}
      </OverlayCard>
    </OverlayWrapper>
  );
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/components/Overlays/OverlayComponents.tsx

import React from "react";

interface OverlayCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function OverlayCard({ children, className = "", ...rest }: OverlayCardProps) {
  return (
    <div
      {...rest}
      className={`pointer-events-auto relative z-10 rounded-2xl border-2 border-[#0A7FC9] p-6 text-center bg-black bg-opacity-30 shadow-[0_0_15px_rgba(0,255,255,0.7)] ${className}`}
    >
      {children}
    </div>
  );
}

interface OverlayButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  color?: "magenta" | "blue" | "green";
}

const colorClasses: Record<string, string> = {
  magenta: `
    border-[#BD0E86]
    bg-black bg-opacity-40
    text-[#832264]
    shadow-[0_0_15px_rgba(255,29,153,0.7)]
    hover:scale-105 transition
  `,
  blue: `
    border-[#40BFFF]
    bg-black bg-opacity-40
    text-[#40BFFF]
    shadow-[0_0_15px_rgba(0,255,255,0.7)]
    hover:scale-105 transition
  `,
  green: `
    border-[#00ffaa]
    bg-black bg-opacity-40
    text-[#00ffaa]
    shadow-[0_0_15px_rgba(0,255,200,0.5)]
    hover:scale-105 transition
  `,
};

const outlineColorClasses: Record<string, string> = {
  magenta: `
    border-2 border-[#BD0E86]
    shadow-[0_0_15px_rgba(255,29,153,0.7)]
  `,
  blue: `
    border-2 border-[#40BFFF]
    shadow-[0_0_15px_rgba(0,255,255,0.7)]
  `,
  green: `
    border-2 border-[#00ffaa]
    shadow-[0_0_15px_rgba(0,255,200,0.5)]
  `,
};

/**
 * OverlayButton
 *
 * A stylized button component for overlays with color variants.
 *
 * Props:
 * - color: "magenta" | "blue" | "green" (optional) — defines button theme. Defaults to "magenta".
 * - className: (optional) — append custom classes if needed.
 *
 * Example usage:
 * <OverlayButton>Play again</OverlayButton>         // magenta (default)
 * <OverlayButton color="blue">Close</OverlayButton> // blue themed
 */
export function OverlayButton({
  children,
  className = "",
  color = "magenta",
  ...rest
}: OverlayButtonProps) {
  return (
    <button
      type="button"
      {...rest}
      className={`
        mt-2 px-6 py-2 rounded-xl border-2  lg:px-6 lg:py-2 md:px-6 md:py-2  xl:py-3 xl:px-6
              text-md sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl
        ${colorClasses[color] || ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

/**
 * overlayOutlineClass
 *
 * Returns Tailwind classes for a neon border around any element.
 *
 * Example usage:
 * <div className={overlayOutlineClass("blue")}>...</div>
 */
export function overlayOutlineClass(
  color: "magenta" | "blue" | "green" = "magenta"
) {
  return outlineColorClasses[color] || "";
}

interface OverlayHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function OverlayHeading({
  children,
  className = "",
}: OverlayHeadingProps) {
  return (
    <h2
      className={`mb-4 font-extrabold text-[#D3E0FB] drop-shadow-[0_0_10px_rgba(211,224,251,0.8)] ${className}`}
    >
      {children}
    </h2>
  );
}

interface OverlayTextProps {
  children: React.ReactNode;
  className?: string;
}

export function OverlayText({ children, className = "" }: OverlayTextProps) {
  return <p className={`mb-4 text-[#D3E0FB] ${className}`}>{children}</p>;
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/components/Overlays/OverlayWrapper.tsx

import React from "react";
import { SpaceBackground } from "../SpaceBackground";

interface OverlayWrapperProps {
  children: React.ReactNode;
  /** Called when the dark background is clicked */
  onBackdropClick?: () => void;
}

/**
 * Provides a full screen backdrop with centered content.
 */
export function OverlayWrapper({ children, onBackdropClick }: OverlayWrapperProps) {
  return (
    <SpaceBackground>
      {/* transparent layer for capturing backdrop clicks */}
      {onBackdropClick && (
        <div
          className="absolute inset-0 z-0"
          onClick={onBackdropClick}
        />
      )}
      <div
        className="relative z-10 flex items-center justify-center h-full w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </SpaceBackground>
  );
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/components/Overlays/PauseOverlay.tsx

import { OverlayWrapper } from "./OverlayWrapper";

interface PauseOverlayProps {
  waitingStart: boolean;
}

export function PauseOverlay({ waitingStart }: PauseOverlayProps) {
  return (
    <OverlayWrapper>
      {waitingStart ? (
        <div className="space-y-4 text-center">
          <div
            className="text-4xl font-bold text-cyan-300 text-shadow-[0_0_4px_rgba(0,255,255,0.6)]"
          >
            Press any key to start
          </div>
          <div className="text-lg text-white">
            <p>Controls:</p>
            <p>Player 1: W / S</p>
            <p>Player 2: ↑ / ↓</p>
            <p>Single player: ↑ / ↓</p>
          </div>
        </div>
      ) : (
        <div
          className="text-4xl font-bold text-cyan-300 text-shadow-[0_0_4px_rgba(0,255,255,0.6)]"
        >
          PAUSED
        </div>
      )}
    </OverlayWrapper>
  );
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/components/Overlays/PlayersTab.tsx

import React, { useState, useMemo } from "react";
import { OverlayButton } from "./OverlayComponents";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import { usePlayers } from "../../hooks/usePlayers";

interface PlayersTabProps {
  onClose: () => void;
}

const SEARCH_INVALID_REGEX = /[^a-zA-Z0-9 _-]/g;
const MAX_SEARCH_LENGTH = 20;

export function PlayersTab({ onClose }: PlayersTabProps) {
  const { players, loading, error } = usePlayers();
  const [search, setSearch] = useState("");
  const [tooLong, setTooLong] = useState(false);

  useEscapeKey(onClose);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value.replace(SEARCH_INVALID_REGEX, "");
    if (value.length > MAX_SEARCH_LENGTH) {
      value = value.slice(0, MAX_SEARCH_LENGTH);
      setTooLong(true);
    } else {
      setTooLong(false);
    }
    setSearch(value);
  }

  const normalized = search.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!normalized) {
      return players;
    }

    const priority = (name: string) => {
      if (name === normalized) return 0;
      if (name.startsWith(normalized)) return 1;
      return 2;
    };

    return players
      .filter((p) => p.username.toLowerCase().includes(normalized))
      .sort((a, b) => {
        const aName = a.username.toLowerCase();
        const bName = b.username.toLowerCase();
        const diff = priority(aName) - priority(bName);
        return diff !== 0 ? diff : aName.localeCompare(bName);
      });
  }, [players, normalized]);

  return (
    <div>
      <h3 className="text-xl mb-4 text-center text-cyan-400">ONLINE PLAYERS</h3>
      <input
        type="text"
        placeholder="Search for players..."
        className="search-bar"
        value={search}
        onChange={handleSearchChange}
        maxLength={MAX_SEARCH_LENGTH}
      />
      {tooLong && (
        <p className="text-yellow-300 text-sm mb-1 text-center">
          Query too long (max {MAX_SEARCH_LENGTH} characters)
        </p>
      )}
      {loading && <p className="text-center text-cyan-300">Loading players...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && (
        <ul className="player-list">
          {filtered.length === 0 && search.trim() !== "" ? (
            <li className="text-center text-red-500">Nobody online with that name</li>
          ) : (
            filtered.map((p) => {
              const games = p.wins + p.losses;
              const winRate = games ? Math.round((p.wins / games) * 100) : 0;
              return (
                <li key={p.username} className="player-item">
                  <div>
                    <span className="player-name">{p.username}</span>
                    <span className="player-rating ml-2">
                      {games} games • {winRate}% win rate
                    </span>
                  </div>
                  <OverlayButton color="green" className="mt-0 px-3 py-1 text-xs">
                    CHALLENGE
                  </OverlayButton>
                </li>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
}


// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/components/Overlays/QuickPlayTab.tsx

import React from "react";

interface QuickPlayTabProps {
  onRandomMatch: () => void;
}

export function QuickPlayTab({ onRandomMatch }: QuickPlayTabProps) {
  return (
    <div>
      <div className="online-options">
        <button
          type="button"
          className="online-option"
          onClick={onRandomMatch}
        >
          <h3>Random match</h3>
          <p>Find a random opponent online</p>
        </button>
      </div>
    </div>
  );
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/components/Overlays/RemoteErrorOverlay.tsx

import { OverlayWrapper } from "./OverlayWrapper";
import { OverlayCard, OverlayHeading, OverlayText } from "./OverlayComponents";
import { useEscapeKey } from "../../hooks/useEscapeKey";

interface RemoteErrorOverlayProps {
  onExit: () => void;
}

export function RemoteErrorOverlay({ onExit }: RemoteErrorOverlayProps) {
  useEscapeKey(onExit);
  return (
    <OverlayWrapper>
      <OverlayCard>
        <OverlayHeading className="text-2xl">
          Active game detected
        </OverlayHeading>
        <OverlayText className="text-md">
          You already have an active remote match.
        </OverlayText>
        <OverlayText className="text-md">
          Press ESC to return to profile.
        </OverlayText>
      </OverlayCard>
    </OverlayWrapper>
  );
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/components/Overlays/RemoteStatusOverlay.tsx

import React from "react";
import { OverlayWrapper } from "./OverlayWrapper";
import { OverlayCard, OverlayHeading, OverlayText } from "./OverlayComponents";

interface RemoteStatusOverlayProps {
  waiting: boolean;
  countdown: number | null;
}

export function RemoteStatusOverlay({ waiting, countdown }: RemoteStatusOverlayProps) {
  let heading: React.ReactNode = null;
  if (waiting) {
    heading = (
      <OverlayHeading className="text-2xl">Waiting for opponent...</OverlayHeading>
    );
  } else if (countdown !== null) {
    heading = (
      <OverlayHeading className="text-2xl">Game starts in {countdown}...</OverlayHeading>
    );
  }

  return heading ? (
    <OverlayWrapper>
      <OverlayCard>
        {heading}
        <OverlayText className="text-md">
          Use ↑ and ↓ to move. ESC to exit.
        </OverlayText>
      </OverlayCard>
    </OverlayWrapper>
  ) : null;
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/components/Overlays/TournamentsTab.tsx

import React from "react";
import { OverlayButton } from "./OverlayComponents";

interface TournamentInfo {
  title: string;
  info: string;
  status: "JOINING" | "IN PROGRESS" | "FINISHED";
  button: string;
  color: "magenta" | "blue" | "green";
  disabled?: boolean;
}

const tournaments: TournamentInfo[] = [
  {
    title: "Git push origin pong",
    info: "2/8 • Single Elimination • Prize: +50 Rating",
    status: "JOINING",
    button: "JOIN",
    color: "green",
  },
  {
    title: "The Void Cup",
    info: "3/8 • Single Elimination • Prize: +50 Rating",
    status: "JOINING",
    button: "JOIN",
    color: "green",
  },
  {
    title: "Shlöp Cup 3000",
    info: "8/8 • Single Elimination • Prize: +150 Rating",
    status: "IN PROGRESS",
    button: "WATCH",
    color: "blue",
    disabled: true,
  },
  {
    title: "No mercy, just pong",
    info: "6/8 • Single Elimination • Prize: +100 Rating",
    status: "FINISHED",
    button: "VIEW RESULTS",
    color: "magenta",
    disabled: true,
  },
];

export function TournamentsTab() {
  return (
    <div>
      <div className="online-option mb-4">
        <h3>Create tournament</h3>
        <p>Organize your own competition</p>
      </div>
      <h3 className="text-xl mb-4 text-center text-purple-400">
        ACTIVE TOURNAMENTS
      </h3>
      <div className="tournament-list">
        {tournaments.map((t) => (
          <div className="tournament-item" key={t.title}>
            <div className="tournament-info">
              <h4>{t.title}</h4>
              <p>{t.info}</p>
              <span
                className={`tournament-status status-${t.status
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {t.status}
              </span>
            </div>
            <OverlayButton
              color={t.color}
              className="mt-0 px-4 py-1 text-sm"
              disabled={t.disabled}
            >
              {t.button}
            </OverlayButton>
          </div>
        ))}
      </div>
    </div>
  );
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/components/Overlays/TournamentWinnerOverlay.css

@keyframes firework-scale {
  0%   { transform: scale(0.5); opacity: 0.7; }
  50%  { transform: scale(1.2); opacity: 1;   }
  100% { transform: scale(0.5); opacity: 0.7; }
}
@keyframes firework-color {
  0%   { background: radial-gradient(circle, #FFD700 20%, #FF1493 80%); }
  33%  { background: radial-gradient(circle, #FF1493 20%, #00FFFF 80%); }
  66%  { background: radial-gradient(circle, #00FFFF 20%, #FFD700 80%); }
  100% { background: radial-gradient(circle, #FFD700 20%, #FF1493 80%); }
}
.animate-firework {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  position: absolute;
  animation:
    firework-scale 2s ease-in-out infinite,
    firework-color 3s linear infinite;
}

@keyframes crown-spin {
  from { transform: perspective(400px) rotateY(0deg); }
  to   { transform: perspective(400px) rotateY(360deg); }
}
.animate-crown-spin {
  animation: crown-spin 4s linear infinite;
  transform-style: preserve-3d;
  backface-visibility: visible;
}

@keyframes neon-border {
  0% {
    box-shadow:
      0 0 10px #FF1493,
      0 0 20px #00FFFF,
      0 0 30px #FFD700;
  }
  50% {
    box-shadow:
      0 0 10px #00FFFF,
      0 0 20px #FFD700,
      0 0 30px #FF1493;
  }
  100% {
    box-shadow:
      0 0 10px #FFD700,
      0 0 20px #FF1493,
      0 0 30px #00FFFF;
  }
}
.animate-neon-border {
  animation: neon-border 3s linear infinite;
}

@keyframes pulse-slow {
  0%, 100% { transform: scale(1);   opacity: 1; }
  50%      { transform: scale(1.05); opacity: 0.9; }
}
.animate-pulse-slow {
  animation: pulse-slow 1.5s ease-in-out infinite;
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/components/Overlays/TournamentWinnerOverlay.tsx

import { useMemo } from "react";
import { OverlayWrapper } from "./OverlayWrapper";
import {
  OverlayHeading,
  OverlayText,
} from "./OverlayComponents";
import { useEnterKey } from "../../hooks/useEnterKey";
import crownIcon from "../../png_icons/crown.png";
import "./TournamentWinnerOverlay.css";

interface TournamentWinnerOverlayProps {
  winner: string;
  onClose: () => void;
}

export function TournamentWinnerOverlay({
  winner,
  onClose,
}: TournamentWinnerOverlayProps) {
  useEnterKey(onClose);

  const fireworks = useMemo<React.CSSProperties[]>(
    () =>
      Array.from({ length: 70 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${(Math.random() * 3).toFixed(2)}s`,
      })),
    []
  );

  return (
    <OverlayWrapper>
      {/* Fireworks */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {fireworks.map((style, i) => (
          <div key={i} className="animate-firework" style={style} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center space-y-8 px-4">
        <img
          src={crownIcon}
          alt="Crown"
          className="w-1/2 max-w-[400px] drop-shadow-[0_0_25px_rgba(255,215,0,1)] animate-crown-spin"
        />

        <OverlayHeading
          className="
            text-5xl md:text-6xl
            bg-clip-text text-transparent
            bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300
            animate-pulse-slow
            drop-shadow-[0_0_30px_rgba(255,215,0,0.8),0_0_40px_rgba(255,105,180,0.6)]
          "
        >
          TOURNAMENT WINNER
        </OverlayHeading>

        <OverlayText
          className="text-3xl md:text-4xl font-semibold text-[#69ff6c] drop-shadow-[0_0_15px_rgba(105,255,108,0.8)]"
        >
          {winner}
        </OverlayText>

        <button
          onClick={onClose}
          className="
            px-8 py-4 text-xl md:text-2xl font-bold rounded-full bg-transparent
            animate-neon-border
            drop-shadow-[0_0_20px_rgba(255,20,147,0.9),0_0_40px_rgba(0,255,255,0.6)]
            hover:scale-110 transition-transform
          "
          autoFocus
        >
          OK
        </button>
      </div>
    </OverlayWrapper>
  );
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/components/GoalBanner.tsx

import React from "react";

interface GoalBannerProps {
  visible: boolean;
}

export function GoalBanner({ visible }: GoalBannerProps) {
  if (!visible) return null;
  return (
    <div className="absolute left-0 right-0 top-24 flex justify-center pointer-events-none z-20">
      <div className="goal-banner text-6xl font-bold text-yellow-300 drop-shadow-[0_0_4px_rgba(255,255,0,0.8)]">
        Goal!
      </div>
    </div>
  );
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/components/Scoreboard.tsx

import React from "react";

interface ScoreboardProps {
  leftLabel: string;
  rightLabel: string;
  scoreLeft: number;
  scoreRight: number;
}

export function Scoreboard({ leftLabel, rightLabel, scoreLeft, scoreRight }: ScoreboardProps) {
  return (
    <div className="absolute left-0 right-0 top-4 flex justify-between px-8">
      <div className="score-container rounded-lg px-6 py-3">
        <h2 className="text-xl text-blue-300">{leftLabel}</h2>
        <div className="score-glow text-4xl font-bold text-blue-400">{scoreLeft}</div>
      </div>
      <div className="score-container rounded-lg px-6 py-3">
        <h2 className="text-xl text-purple-300">{rightLabel}</h2>
        <div className="score-glow text-4xl font-bold text-purple-400">{scoreRight}</div>
      </div>
    </div>
  );
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/components/SpaceBackground.css

.noise-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.12;
  mix-blend-mode: screen;

  /*background-image: url("../png_icons/tv-noise5.png");*/
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  
  animation: noise-flicker 2s infinite;
  
}

@keyframes noise-flicker {
  0%,100% { opacity: 0.10; }
  50%     { opacity: 0.16; }
}

.cosmic-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
  z-index: -1;
}

/* base gradient background */
.space-gradient {
  background: radial-gradient(ellipse at bottom, #050b33 0%, #1b133d 100%);
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/components/SpaceBackground.tsx

import { StarryBackground } from "./StarryBackground";
import "./SpaceBackground.css";
import noiseImg from "../png_icons/tv-noise5.png";

export interface SpaceBackgroundProps {
  children?: React.ReactNode;
  stars?: boolean;
  noise?: boolean;
  gradients?: boolean;
}

export function SpaceBackground({
  children,
  stars = true,
  noise = true,
  gradients = true,
}: SpaceBackgroundProps) {
  return (
    <div
      className="absolute inset-0 z-[80] overflow-hidden flex items-center justify-center space-gradient"
    >
      {/* animated starry backdrop */}
      {stars && <StarryBackground />}

      {/* full-screen noise overlay */}
      {noise && (
        <div
          className="noise-overlay"
          style={{
            backgroundImage: `url(${noiseImg})`,
            backgroundSize: "cover",
          }}
        />
      )}

      {/* decorative glows */}
      {gradients && (
        <div className="pointer-events-none z-0">
          <div className="cosmic-circle bg-blue-500 w-96 h-96 -left-40 -top-40" />
          <div className="cosmic-circle bg-purple-600 w-96 h-96 opacity-20 -right-40 bottom-20" />
          <div className="cosmic-circle bg-pink-500 w-64 h-64 opacity-15 right-40 top-1/3" />
        </div>
      )}

      {children}
    </div>
  );
}


// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/components/StarryBackground.tsx

import { useEffect, useRef } from "react";

/*
  tuning 
  -----------------------------------------------------------
  • STAR_DENSITY        – stars per CSS‑pixel² (0.00015 ≈ 180 stars on 1920×1080).
  • Radius distribution – const r = 0.5 + Math.pow(Math.random(), 5) * 1.5;
                            ↑ exponent – higher ⇒ fewer big stars, more tiny dust.
  • SPEED_RANGE         – drift speed in visual px / s.
  • TWINKLE_RANGE       – period of subtle brightness pulse, in seconds.
  • Glow sprite size    – inside makeSprite(): sprite = r * 5, halo = r * 2.5.
  • Colour palette      – hue around 200° (cool white) ± 15°, 60 % saturation.
*/

// ---------------------------------------------------------------------------
// CONFIG --------------------------------------------------------------------
// ---------------------------------------------------------------------------
const STAR_DENSITY   = 0.00038;  
const SPEED_RANGE    = [.3, 1]; // slow drift
const TWINKLE_RANGE  = [3, 12];    // long pulse

// ---------------------------------------------------------------------------
interface Star {
  xn: number; yn: number; r: number; tw: number; phase: number;
  vxPx: number; vyPx: number; sprite: HTMLCanvasElement;
}


// simplified sprite without blur
const makeSprite = (r: number, hue: number): HTMLCanvasElement => {

  const size = Math.ceil(r * 2);
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d')!;


  ctx.fillStyle = `hsla(${hue},60%,100%,1)`;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, r, 0, Math.PI * 2);
  ctx.fill();

  return c;
};


// ---------------------------------------------------------------------------
export function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef  = useRef<Star[]>([]);
  const rafId     = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext("2d")!;
    const dpr    = window.devicePixelRatio || 1;

    // ---------- resize helper ---------------------------------------------
    const fitCanvas = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width  = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); 
    };

    // ---------- star factory ----------------------------------------------
    const makeStar = (): Star => {
      const [sMin, sMax] = SPEED_RANGE;
      //const speedPx = sMin + Math.random() * (sMax - sMin);
      const r   = 0.5 + Math.pow(Math.random(), 1.5) * 1.5; // higher value => fewer big stars
      const hue = 200 + (Math.random() - 0.5) * 30;       // 185‑215° 
      const angle = Math.random() * Math.PI * 2;     // flight direction
      const speed = sMin + Math.random() * (sMax - sMin); // speed in px/s

      return {
        xn: Math.random(),
        yn: Math.random(),
        r,
        tw: TWINKLE_RANGE[0] + Math.random() * (TWINKLE_RANGE[1] - TWINKLE_RANGE[0]),
        phase: Math.random() * Math.PI * 2,
        vxPx: Math.cos(angle) * speed,
        vyPx: Math.sin(angle) * speed,
        sprite: makeSprite(r, hue),
      };
    };

    // ---------- initial setup ---------------------------------------------
    fitCanvas();

    const targetCount = () =>
      Math.round(window.innerWidth * window.innerHeight * STAR_DENSITY);

    const stars = starsRef.current;
    while (stars.length < targetCount()) stars.push(makeStar());

    // ---------- animation loop -------------------------------------------
    let prev = performance.now();
    const PREFERS_REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const loop = (t: number) => {
      if (document.hidden || PREFERS_REDUCED) {
        prev = t;
        rafId.current = requestAnimationFrame(loop);
        return;
      }
      const dt = (t - prev) / 1000;
      prev = t;

      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      for (const s of stars) {
        s.xn = (s.xn + (s.vxPx * dt) / window.innerWidth  + 1) % 1;
        s.yn = (s.yn + (s.vyPx * dt) / window.innerHeight + 1) % 1;
        const progress = ((t / 1000) + s.phase) / s.tw;
        const alpha = 0.5 * (1 + Math.sin(progress * Math.PI * 2));
        ctx.globalAlpha = alpha;
        ctx.drawImage(
          s.sprite,
          s.xn * window.innerWidth  - s.sprite.width  / 2,
          s.yn * window.innerHeight - s.sprite.height / 2
        );
      }
      ctx.globalAlpha = 1;
      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);

    // ---------- adaptive resize ------------------------------------------
    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        fitCanvas();
        const need = targetCount();
        if (stars.length < need) while (stars.length < need) stars.push(makeStar());
        else if (stars.length > need) stars.length = need;
      }, 120);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10 bg-inherit" />;
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/components/StartScreen.tsx

import { useEffect, useRef, useState } from "react";
import { SpaceBackground } from "./SpaceBackground";
// icons replaced with Font Awesome classes

interface StartScreenProps {
  onSingleAI: () => void;
  onLocal2P: () => void;
  onTournament: () => void;
  /** Open the online play modal */
  onOnlinePlay: () => void;
  onClose: () => void;
}

export function StartScreen({
  onSingleAI,
  onLocal2P,
  onTournament,
  onOnlinePlay,
  onClose,
}: StartScreenProps) {
  const [index, setIndex] = useState(0);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    btnRefs.current[index]?.focus();
  }, [index]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      const total = 4;
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        setIndex((i) => (i - 1 + total) % total);
      } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        setIndex((i) => (i + 1) % total);
      } else if (e.key === "Tab") {
        e.preventDefault();
        if (e.shiftKey) setIndex((i) => (i - 1 + total) % total);
        else setIndex((i) => (i + 1) % total);
      } else if (e.key === "Enter") {
        e.preventDefault();
        [onSingleAI, onLocal2P, onTournament, onOnlinePlay][index]();
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, onClose, onSingleAI, onLocal2P, onTournament, onOnlinePlay]);
  return (
    <SpaceBackground>
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-[#0A7FC9] hover:text-red-400 text-lg font-bold"
      >
        ✕
      </button>
      {/* top-left corner brackets */}
      <div className="absolute top-4 left-4 w-8 h-8 -translate-x-0 md:top-10 md:left-1/4 md:w-12 md:h-12 md:-translate-x-16 lg:top-20 lg:w-16 lg:h-16 lg:-translate-x-20">
        <div
          className="
            absolute top-0 left-0
            w-8 md:w-12 lg:w-16 h-1
            bg-[#0A7FC9]
            shadow-[0_0_12px_rgba(10,127,201,0.7),0_0_24px_rgba(10,127,201,0.4)]
          "
        />
        <div
          className="
            absolute top-0 left-0
            w-1 h-8 md:h-12 lg:h-16
            bg-[#0A7FC9]
            shadow-[0_0_12px_rgba(10,127,201,0.7),0_0_24px_rgba(10,127,201,0.4)]
          "
        />
      </div>

      {/* top-right corner brackets */}
      <div className="absolute top-4 right-4 w-8 h-8 translate-x-0 md:top-10 md:right-1/4 md:w-12 md:h-12 md:translate-x-16 lg:top-20 lg:w-16 lg:h-16 lg:translate-x-20">
        <div
          className="
            absolute top-0 right-0
            w-8 md:w-12 lg:w-16 h-1
            bg-[#0A7FC9]
            shadow-[0_0_12px_rgba(10,127,201,0.7),0_0_24px_rgba(10,127,201,0.4)]
          "
        />
        <div
          className="
            absolute top-0 right-0
            w-1 h-8 md:h-12 lg:h-16
            bg-[#0A7FC9]
            shadow-[0_0_12px_rgba(10,127,201,0.7),0_0_24px_rgba(10,127,201,0.4)]
          "
        />
      </div>

      {/* bottom-left corner brackets */}
      <div className="absolute bottom-4 left-4 w-8 h-8 -translate-x-0 md:bottom-10 md:left-1/4 md:w-12 md:h-12 md:-translate-x-16 lg:bottom-20 lg:w-16 lg:h-16 lg:-translate-x-20">
        <div
          className="
            absolute bottom-0 left-0
            w-8 md:w-12 lg:w-16 h-1
            bg-[#0A7FC9]
            shadow-[0_0_12px_rgba(10,127,201,0.7),0_0_24px_rgba(10,127,201,0.4)]
          "
        />
        <div
          className="
            absolute bottom-0 left-0
            w-1 h-8 md:h-12 lg:h-16
            bg-[#0A7FC9]
            shadow-[0_0_12px_rgba(10,127,201,0.7),0_0_24px_rgba(10,127,201,0.4)]
          "
        />
      </div>

      {/* bottom-right corner brackets */}
      <div className="absolute bottom-4 right-4 w-8 h-8 translate-x-0 md:bottom-10 md:right-1/4 md:w-12 md:h-12 md:translate-x-16 lg:bottom-20 lg:w-16 lg:h-16 lg:translate-x-20">
        <div
          className="
            absolute bottom-0 right-0
            w-8 md:w-12 lg:w-16 h-1
            bg-[#0A7FC9]
            shadow-[0_0_12px_rgba(10,127,201,0.7),0_0_24px_rgba(10,127,201,0.4)]
          "
        />
        <div
          className="
            absolute bottom-0 right-0
            w-1 h-8 md:h-12 lg:h-16
            bg-[#0A7FC9]
            shadow-[0_0_12px_rgba(10,127,201,0.7),0_0_24px_rgba(10,127,201,0.4)]
          "
        />
      </div>

      {/* main title */}
      <h1
        className="
          mt-16
          absolute top-12 left-1/2 -translate-x-1/2
          text-center
          text-5xl sm:text-7xl md:text-8xl
          font-extrabold
          text-[#D3E0FB]
          drop-shadow-[0_0_20px_rgba(211,224,251,1)]
          px-4
        "
      >
        SUPER PONG
      </h1>

      {/* action buttons arranged vertically */}
      <div className="absolute inset-0 flex items-center justify-center mt-20 px-4">
        <div className="flex flex-col gap-4 sm:gap-8 w-full max-w-md">
          {/* Play vs AI */}
          <button
            ref={(el) => (btnRefs.current[0] = el)}
            tabIndex={0}
            onFocus={() => setIndex(0)}
            onMouseEnter={() => setIndex(0)}
            onClick={onSingleAI}
            className={`
              w-full flex items-center justify-center gap-4 whitespace-nowrap
              rounded-xl border-2 border-[#0A7FC9]
              bg-black bg-opacity-30
              px-6 py-4 sm:px-10 sm:py-6
              text-xl sm:text-2xl font-semibold text-[#88c0e3]
              shadow-[0_0_15px_rgba(0,255,255,0.7),0_0_24px_rgba(0,255,255,0.4)]
              hover:scale-105 transition focus:outline-none
              ${index === 0 ? "scale-105 ring-2 ring-cyan-300" : ""}
            `}
          >
            <i className="fa-solid fa-robot text-xl sm:text-2xl" />
            AI VS PLAYER
          </button>

          {/* Local Duel */}
          <button
            ref={(el) => (btnRefs.current[1] = el)}
            tabIndex={0}
            onFocus={() => setIndex(1)}
            onMouseEnter={() => setIndex(1)}
            onClick={onLocal2P}
            className={`
              w-full flex items-center justify-center gap-4 whitespace-nowrap
              rounded-xl border-2 border-[#9010CE]
              bg-black bg-opacity-30
              px-6 py-4 sm:px-10 sm:py-6
              text-xl sm:text-2xl font-semibold text-[#bc92d2]
              shadow-[0_0_15px_rgba(192,38,211,0.7),0_0_24px_rgba(192,38,211,0.4)]
              hover:scale-105 transition focus:outline-none
              ${index === 1 ? "scale-105 ring-2 ring-purple-300" : ""}
            `}
          >
            <i className="fa-solid fa-users text-xl sm:text-2xl" />
            LOCAL DUEL
          </button>

          {/* Local Tournament */}
          <button
            ref={(el) => (btnRefs.current[2] = el)}
            tabIndex={0}
            onFocus={() => setIndex(2)}
            onMouseEnter={() => setIndex(2)}
            onClick={onTournament}
            className={`
              w-full flex items-center justify-center gap-4 whitespace-nowrap
              rounded-xl border-2 border-[#BD0E86]
              bg-black bg-opacity-30
              px-6 py-4 sm:px-10 sm:py-6
              text-xl sm:text-2xl font-semibold text-[#db76bb]
              shadow-[0_0_15px_rgba(255,29,153,0.7),0_0_24px_rgba(255,29,153,0.4)]
              hover:scale-105 transition focus:outline-none
              ${index === 2 ? "scale-105 ring-2 ring-pink-300" : ""}
            `}
          >
            <i className="fa-solid fa-trophy text-xl sm:text-2xl" />
            LOCAL TOURNAMENT
          </button>

          {/* Online play */}
          <button
            ref={(el) => (btnRefs.current[3] = el)}
            tabIndex={0}
            onFocus={() => setIndex(3)}
            onMouseEnter={() => setIndex(3)}
            onClick={onOnlinePlay}
            className={`
              w-full flex items-center justify-center gap-4 whitespace-nowrap
              rounded-xl border-2 border-[#0AC9B7]
              bg-black bg-opacity-30
              px-6 py-4 sm:px-10 sm:py-6
              text-xl sm:text-2xl font-semibold text-[#84ddd3]
              shadow-[0_0_15px_rgba(10,201,183,0.7),0_0_24px_rgba(10,201,183,0.4)]
              hover:scale-105 transition focus:outline-none
              ${index === 3 ? "scale-105 ring-2 ring-teal-300" : ""}
            `}
          >
            <i className="fa-solid fa-globe text-xl sm:text-2xl" />
            PLAY ONLINE
          </button>
        </div>
      </div>
      <p className="absolute bottom-16 left-1/2 -translate-x-1/2 text-sm text-[#6b94c6]">
        Use ↑/↓ or Tab to select, Enter to confirm, Esc to close
      </p>
    </SpaceBackground>
  );
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/components/TournamentSetup.tsx

import { useEffect, useRef, useState } from "react";
import { SpaceBackground } from "./SpaceBackground";

interface TournamentSetupProps {
  players: string[];
  nameError: boolean;
  duplicateError: boolean;
  emptyError: boolean;
  onChangePlayerName: (index: number, value: string) => void;
  onAddPlayer: () => void;
  onRemovePlayer: (index: number) => void;
  onStartTournament: () => void;
  onClose: () => void;
}

const MAX_PLAYERS = 8;
const MIN_PLAYERS = 2;
const MAX_NAME_LENGTH = 10;

export function TournamentSetup({
  players,
  nameError,
  duplicateError,
  emptyError,
  onChangePlayerName,
  onAddPlayer,
  onRemovePlayer,
  onStartTournament,
  onClose,
}: TournamentSetupProps) {
  const [index, setIndex] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const addRef = useRef<HTMLButtonElement>(null);
  const startRef = useRef<HTMLButtonElement>(null);

  const lengthLimitReached = players.some((p) => p.length >= MAX_NAME_LENGTH);

  const allFilled = players.every((p) => p.trim().length > 0);
  const validCount =
    allFilled && players.length >= MIN_PLAYERS && players.length <= MAX_PLAYERS;

  useEffect(() => {
    if (index > players.length + 1) {
      setIndex(players.length + 1);
    }
  }, [players.length, index]);

  useEffect(() => {
    const el =
      index < players.length
        ? inputRefs.current[index]
        : index === players.length
        ? addRef.current
        : startRef.current;
    el?.focus();
  }, [index, players.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const total = players.length + 2;
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setIndex((i) => (i - 1 + total) % total);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setIndex((i) => (i + 1) % total);
      } else if (e.key === "Tab") {
        e.preventDefault();
        if (e.shiftKey) setIndex((i) => (i - 1 + total) % total);
        else setIndex((i) => (i + 1) % total);
      } else if (e.key === "Enter") {
        if (index === players.length) {
          e.preventDefault();
          onAddPlayer();
        } else if (index === players.length + 1) {
          e.preventDefault();
          if (validCount && !nameError && !duplicateError && !emptyError)
            onStartTournament();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [
    index,
    players.length,
    onAddPlayer,
    onStartTournament,
    validCount,
    nameError,
    duplicateError,
    emptyError,
  ]);
  return (
    <SpaceBackground>
      {/* interactive panel (inputs & buttons) with higher z-index */}
      <SpaceBackground>
        {/* interactive panel (inputs & buttons) with higher z-index */}
        <div
          className="
          relative
          z-10
          pointer-events-auto
          rounded-lg
          border-2
          border-[#0A7FC9]
          bg-black
          bg-opacity-30
          p-12
          z-10
          pointer-events-auto
          rounded-lg
          border-2
          border-[#0A7FC9]
          bg-black
          bg-opacity-30
          p-12
          text-center
          shadow-[0_0_15px_rgba(0,255,255,0.7)]
          w-[80%]
          max-w-[800px]
          shadow-[0_0_15px_rgba(0,255,255,0.7)]
          w-[80%]
          max-w-[800px]
        "
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-[#0A7FC9] hover:text-red-400 text-lg font-bold"
          >
            ✕
          </button>
          {/* Title */}
          <h2
            className="
            mb-6
            text-4xl
            font-extrabold
            text-[#D3E0FB]
            drop-shadow-[0_0_10px_rgba(211,224,251,0.8)]
            text-4xl
            font-extrabold
            text-[#D3E0FB]
            drop-shadow-[0_0_10px_rgba(211,224,251,0.8)]
          "
          >
            Tournament setup
          </h2>

          {/* Input list */}
          <div className="flex flex-col space-y-4 items-center">
            {players.map((alias, i) => (
              <div key={i} className="relative w-96">
                <input
                  ref={(el) => (inputRefs.current[i] = el)}
                  tabIndex={0}
                  onFocus={() => setIndex(i)}
                  onMouseEnter={() => setIndex(i)}
                  value={alias}
                  onChange={(e) => onChangePlayerName(i, e.target.value)}
                  placeholder={`Player ${i + 1}`}
                  maxLength={MAX_NAME_LENGTH}
                  className="
                  w-full
                  rounded-xl
                  border-2
                  border-[#297db1]
                  bg-black
                  bg-opacity-50
                  px-4
                  py-2
                  pr-8
                  text-center
                  text-[#D3E0FB]
                  shadow-[0_0_8px_rgba(0,255,255,0.5)]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#0A7FC9]
                  transition
                "
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#297db1] hover:text-red-400"
                  onClick={() => onRemovePlayer(i)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          {nameError && (
            <p className="text-red-400 text-sm mb-1">
              Allowed characters: letters, numbers, spaces, underscores and
              dashes
            </p>
          )}
          {duplicateError && (
            <p className="text-red-400 text-sm mb-1">Names must be unique</p>
          )}
          {emptyError && (
            <p className="text-red-400 text-sm mb-1">Name cannot be empty</p>
          )}
          {lengthLimitReached && (
            <p className="text-yellow-300 text-sm mb-1">
              Maximum of {MAX_NAME_LENGTH} characters reached
            </p>
          )}

          {/* Actions */}
          <div className="mt-8 flex justify-center gap-6">
            <button
              ref={addRef}
              tabIndex={0}
              onFocus={() => setIndex(players.length)}
              onMouseEnter={() => setIndex(players.length)}
              onClick={onAddPlayer}
              disabled={players.length >= MAX_PLAYERS}
              className="
              rounded-xl
              border-2
              border-[#9010CE]
              bg-black
              bg-opacity-30
              px-6
              py-3
              text-xl
              font-semibold
              text-[#743b91]
              shadow-[0_0_12px_rgba(192,38,211,0.7)]
              border-2
              border-[#9010CE]
              bg-black
              bg-opacity-30
              px-6
              py-3
              text-xl
              font-semibold
              text-[#743b91]
              shadow-[0_0_12px_rgba(192,38,211,0.7)]
              hover:scale-105
              transition
              disabled:opacity-50 disabled:cursor-not-allowed
            "
            >
              + Add player
            </button>
            <button
              ref={startRef}
              tabIndex={0}
              onFocus={() => setIndex(players.length + 1)}
              onMouseEnter={() => setIndex(players.length + 1)}
              onClick={onStartTournament}
              disabled={
                !validCount || nameError || duplicateError || emptyError
              }
              className="
              rounded-xl
              border-2
              border-[#BD0E86]
              bg-black
              bg-opacity-30
              px-10
              py-3
              text-2xl
              font-semibold
              text-[#832264]
              shadow-[0_0_15px_rgba(255,29,153,0.7),0_0_24px_rgba(255,29,153,0.4)]
              border-2
              border-[#BD0E86]
              bg-black
              bg-opacity-30
              px-10
              py-3
              text-2xl
              font-semibold
              text-[#832264]
              shadow-[0_0_15px_rgba(255,29,153,0.7),0_0_24px_rgba(255,29,153,0.4)]
              hover:scale-105
              transition
              disabled:opacity-50 disabled:cursor-not-allowed
            "
            >
              START
            </button>
          </div>
          {!validCount && (
            <p className="mt-4 text-pink-200 text-sm">
              Enter between {MIN_PLAYERS} and {MAX_PLAYERS} players
            </p>
          )}
        </div>
      </SpaceBackground>
    </SpaceBackground>
  );
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/hooks/matchPhase.ts

import { useState } from "react";

export type MatchPhase = "idle" | "playing" | "bye" | "result" | "ended";

export function useMatchPhase(initial: MatchPhase = "idle") {
  const [phase, setPhase] = useState<MatchPhase>(initial);
  return { phase, setPhase } as const;
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/hooks/tournamentHelpers.ts

import type { BracketRound } from "../BracketOverlay";
import { findNextPair } from "../tournamentLogic";
import type { GameAPI } from "../pong";
import type { BetweenMatchesData, ByeOverlayData } from "./tournamentTypes";
import type { MatchPhase } from "./matchPhase";

interface Callbacks {
  onRoundsUpdate: (rounds: BracketRound[]) => void;
  onBye: (info: ByeOverlayData) => void;
  onMatch: (info: BetweenMatchesData) => void;
  onWinner: (name: string) => void;
  setPhase: (phase: MatchPhase) => void;
}

export function startNextMatch(
  rounds: BracketRound[],
  rIndex: number,
  mIndex: number,
  gameApi: GameAPI | null,
  cb: Callbacks,
): void {
  const { onRoundsUpdate, onBye, onMatch, onWinner, setPhase } = cb;

  if (rIndex >= rounds.length) return;
  if (mIndex >= rounds[rIndex].length) {
    const nr = rIndex + 1;
    if (nr >= rounds.length) {
      const finalM = rounds[rIndex][0];
      onWinner(finalM.winner ? finalM.winner.name : "???");
      setPhase("ended");
    } else {
      startNextMatch(rounds, nr, 0, gameApi, cb);
    }
    return;
  }

  const match = rounds[rIndex][mIndex];

  if (match.p1.name === "BYE" && match.p2.name === "BYE") {
    rounds[rIndex][mIndex].winner = { name: "(No match)" };
    onRoundsUpdate([...rounds]);
    startNextMatch(rounds, rIndex, mIndex + 1, gameApi, cb);
    return;
  }

  if (match.p1.name === "BYE") {
    rounds[rIndex][mIndex].winner = {
      name: match.p2.name,
      isPredicted: true,
    };
    if (match.nextMatch && match.nextSlot) {
      match.nextMatch[match.nextSlot] = {
        name: match.p2.name,
        isPredicted: true,
      };
    }
    onRoundsUpdate([...rounds]);
    const nextPair = findNextPair(rounds, rIndex, mIndex);
    setPhase("bye");
    onBye({ winner: match.p2.name, rIndex, mIndex, nextPair });
    return;
  }
  if (match.p2.name === "BYE") {
    rounds[rIndex][mIndex].winner = {
      name: match.p1.name,
      isPredicted: true,
    };
    if (match.nextMatch && match.nextSlot) {
      match.nextMatch[match.nextSlot] = {
        name: match.p1.name,
        isPredicted: true,
      };
    }
    onRoundsUpdate([...rounds]);
    const nextPair = findNextPair(rounds, rIndex, mIndex);
    setPhase("bye");
    onBye({ winner: match.p1.name, rIndex, mIndex, nextPair });
    return;
  }

  const isFinal =
    rIndex === rounds.length - 1 && mIndex === rounds[rIndex].length - 1;
  setPhase("playing");
  gameApi?.startTournamentMatch(
    match.p1.name,
    match.p2.name,
    isFinal,
    (w, l, ws, ls) => {
      rounds[rIndex][mIndex].winner = { name: w };
      if (match.nextMatch && match.nextSlot) {
        match.nextMatch[match.nextSlot] = { name: w };
      }
      const updated = [...rounds];
      onRoundsUpdate(updated);
      const nextPair = findNextPair(updated, rIndex, mIndex);
      setPhase("result");
      onMatch({
        winner: w,
        loser: l,
        winnerScore: ws,
        loserScore: ls,
        isFinal,
        nextPair,
        rIndex,
        mIndex,
      });
    },
  );
}


// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/hooks/tournamentTypes.ts

export interface BetweenMatchesData {
  winner: string;
  loser: string;
  winnerScore: number;
  loserScore: number;
  isFinal: boolean;
  nextPair?: string;
  rIndex: number;
  mIndex: number;
}

export interface ByeOverlayData {
  winner: string;
  rIndex: number;
  mIndex: number;
  nextPair?: string;
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/hooks/useEnterKey.ts

import { useEffect } from "react";

export function useEnterKey(callback: () => void) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Enter") {
        e.preventDefault();
        callback();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [callback]);
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/hooks/useEscapeKey.ts

import { useEffect } from "react";

export function useEscapeKey(callback: () => void) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        callback();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [callback]);
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/hooks/usePlayers.ts

import { useState, useEffect } from "react";

export interface PlayerInfo {
  username: string;
  wins: number;
  losses: number;
}

export function usePlayers() {
  const [players, setPlayers] = useState<PlayerInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchPlayers() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://localhost:3000/users?t=${Date.now()}`);
        const data = await res.json();
        interface RawUser {
          online: boolean;
          username?: string;
          name?: string;
          wins?: number;
          losses?: number;
        }
        const online: PlayerInfo[] = (data.users || ([] as RawUser[]))
          .filter((u: RawUser) => u.online)
          .map((u: RawUser) => ({
            username: u.username || u.name || "",
            wins: u.wins || 0,
            losses: u.losses || 0,
          }));
        if (isMounted) {
          setPlayers(online);
        }
      } catch {
        if (isMounted) {
          setError("Failed to fetch players");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    fetchPlayers();
    return () => {
      isMounted = false;
    };
  }, []);

  return { players, loading, error };
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/hooks/useTournament.ts

import { useState } from "react";
import { buildSingleElimNoDoubleByeSym } from "../tournamentLogic";
import type { BracketRound } from "../BracketOverlay";
import type { GameAPI } from "../pong";
import { useMatchPhase } from "./matchPhase";
import {
  startNextMatch as startNextMatchHelper,
} from "./tournamentHelpers";
import type { BetweenMatchesData, ByeOverlayData } from "./tournamentTypes";


export function useTournament(gameApi: GameAPI | null) {
  const [rounds, setRounds] = useState<BracketRound[]>([]);
  const [winner, setWinner] = useState<string | null>(null);
  const [showBracket, setShowBracket] = useState(false);
  const [byeInfo, setByeInfo] = useState<ByeOverlayData | null>(null);
  const [matchInfo, setMatchInfo] = useState<BetweenMatchesData | null>(null);
  const [tournamentEnded, setTournamentEnded] = useState(false);
  const { phase, setPhase } = useMatchPhase();

  function runNextMatch(bRounds: BracketRound[], rIndex: number, mIndex: number) {
    startNextMatchHelper(bRounds, rIndex, mIndex, gameApi, {
      onRoundsUpdate: setRounds,
      onBye: setByeInfo,
      onMatch: setMatchInfo,
      onWinner: setWinner,
      setPhase,
    });
  }

  function startTourney(players: string[]) {
    const arr = players.map((s) => s.trim()).filter((s) => s.length > 0);
    if (arr.length < 2) {
      alert("Need at least 2 players!");
      return;
    }
    const n = arr.length;
    const np = Math.pow(2, Math.ceil(Math.log2(n)));
    while (arr.length < np) {
      arr.push("BYE");
    }
    const bracket = buildSingleElimNoDoubleByeSym(arr);
    setRounds(bracket);
    setWinner(null);
    setTournamentEnded(false);
    runNextMatch(bracket, 0, 0);
  }


  function continueBye() {
    if (!byeInfo) return;
    const { rIndex, mIndex } = byeInfo;
    setByeInfo(null);
    const clone = [...rounds];
    const w = clone[rIndex][mIndex].winner;
    const realName = w?.name ?? "";
    clone[rIndex][mIndex].winner = { name: realName };
    const match = clone[rIndex][mIndex];
    if (match.nextMatch && match.nextSlot) {
      match.nextMatch[match.nextSlot] = { name: realName };
    }
    setRounds(clone);
    setPhase("playing");
    runNextMatch(clone, rIndex, mIndex + 1);
  }

  function continueMatch() {
    if (!matchInfo) return;
    const { rIndex, mIndex, isFinal } = matchInfo;
    setMatchInfo(null);
    if (!isFinal) {
      setPhase("playing");
      runNextMatch(rounds, rIndex, mIndex + 1);
    } else {
      const finalMat = rounds[rIndex][mIndex];
      setWinner(finalMat.winner ? finalMat.winner.name : "???");
      setTournamentEnded(true);
      setPhase("ended");
    }
  }

  function acknowledgeWinner() {
    setWinner(null);
  }

  function resetTourney() {
    setRounds([]);
    setWinner(null);
    setByeInfo(null);
    setMatchInfo(null);
    setTournamentEnded(false);
    setShowBracket(false);
    setPhase("idle");
  }

  return {
    rounds,
    winner,
    showBracket,
    setShowBracket,
    phase,
    byeInfo,
    matchInfo,
    startTourney,
    continueBye,
    continueMatch,
    acknowledgeWinner,
    resetTourney,
    tournamentEnded,
    setPhase,
  } as const;
}



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/pong/png_icons



//! ROUTER

// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/router/AppRouter.tsx

import MainPage from '../pages/MainPage/MainPage';
import Profile from '../pages/Profile/Profile';
import AuthPage from '../pages/AuthPage/AuthPage';
import PongGame from '../pong/Pong3D';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import ProtectedRoute from './ProtectedRoute';
import { useAuth } from '../context/AuthContext';

const AppRouter = () => {
  const { isAuthenticated } = useAuth();
  return (
    
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={
             isAuthenticated ? (
            <Navigate to="/profile" replace />
          ) : (
             <MainPage/>
          )
          } />

          <Route path="/profile" 
          element={
            <ProtectedRoute>
                <Profile />
            </ProtectedRoute>
          } 
          />

          <Route path="/pong" 
            element={
              <ProtectedRoute>
                <PongGame />
              </ProtectedRoute>
          } />

          <Route path="/login" element={
           isAuthenticated ? (
            <Navigate to="/profile" replace />
          ) : (
            <AuthPage mode="login" />
          )
          } />

          <Route path="/signup" 
            element={
              <ProtectedRoute>
                <AuthPage mode="signup" onClose={() => {}} />
              </ProtectedRoute>
          } />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
   
  );
};

export default AppRouter;



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/router/ProtectedRoute.tsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;



// /home/ogoman/HIVE/Projects/ft_transcendence/client/src/utils/InputValidation.tsx

export const validateEmail = (email: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) 
	return "Email is required.";
  if (/\s/.test(email))
	return "Email cannot contain spaces.";
  if (!emailRegex.test(email)) 
	return "Invalid email format.";
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) 
	return "Password is required.";
  if (password.length < 4) 
	return "Password must be at least 4 characters.";
  if (/\s/.test(password)) 
    return "Password cannot contain spaces.";
  return null;
};

export const validateUsername = (username: string): string | null => {
  if (!username) 
	return "Username is required.";
  if (username.length < 2) 
	return "Username must be at least 2 characters.";
  if (/^\s/.test(username)) 
    return "Username cannot start with a whitespace.";
  if (!/^[a-zA-Z0-9_]+$/.test(username)) 
	return "Username can only contain letters, numbers, and underscores.";
  return null;
};

export const validateName = (name: string): string | null => {
  if (!name) 
	return "Name is required.";
  if (name.length < 2) 
	return "Name must be at least 2 characters.";
  if (/^\s/.test(name)) 
    return "Name cannot start with a whitespace.";
  if (!/^[a-zA-Z\s\-']+$/.test(name)) 
	return "Name can only contain letters, spaces, hyphens, or apostrophes.";
  return null;
};





//! SERVER

// /home/ogoman/HIVE/Projects/ft_transcendence/server/chatWsServer.js

import { WebSocketServer, WebSocket } from 'ws';
import { handleChatMessage } from './services/chatMessages.js';
import HttpError from './utils/http-error.js';
import wsAuth from './utils/wsAuth.js';
import { SYSTEM_MESSAGE_TTL_MS, MAX_SYSTEM_MESSAGES } from '../shared/chatConstants.js';
import { ChatMessageTypes } from '../shared/chatMessageTypes.js';

/**
 * @typedef {object} SystemNotification
 * @property {string} id
 * @property {'waiting' | 'info'} type
 * @property {string} text
 * @property {number} [userId]
 */


// Map of userId -> Set of WebSocket connections
export const clients = new Map();
// Active system notifications that should be sent to newly connected clients
// Map of id -> { message, timeout }
export const activeSystemMessages = new Map();

function broadcastPayload(payload, target = null, excludeUsers = null) {
  const data = typeof payload === 'string' ? payload : JSON.stringify(payload);
  const send = (ws) => {
    if (ws.readyState === WebSocket.OPEN) {
      try {
        ws.send(data);
      } catch (err) {
        console.error('Error broadcasting payload:', err.message);
      }
    }
  };

  if (target) {
    if (target instanceof Set) {
      for (const ws of target) send(ws);
    } else {
      send(target);
    }
    return;
  }

  for (const [id, set] of clients.entries()) {
    if (excludeUsers && excludeUsers.includes(id)) continue;
    for (const ws of set) {
      send(ws);
    }
  }
}

function removeSystemMessage(id) {
  const info = activeSystemMessages.get(id);
  if (info?.timeout) clearTimeout(info.timeout);
  activeSystemMessages.delete(id);
  broadcastPayload({ type: ChatMessageTypes.SYSTEM_REMOVE, id });
}

/**
 * Broadcast a system notification to all connected clients and store it so
 * newly connected clients receive it as well.
 *
 * @param {SystemNotification} message - Notification to broadcast.
 * @param {{ remove?: boolean }} [options]
 */
export function broadcastSystemMessage(message, { remove = false, excludeUsers = [] } = {}) {
  if (remove) {
    removeSystemMessage(message.id);
    return;
  } else {
    if (!activeSystemMessages.has(message.id) &&
        activeSystemMessages.size >= MAX_SYSTEM_MESSAGES) {
      const oldestId = activeSystemMessages.keys().next().value;
      if (oldestId) removeSystemMessage(oldestId);
    }
    const existing = activeSystemMessages.get(message.id);
    if (existing?.timeout) clearTimeout(existing.timeout);
    const timeout = setTimeout(
      () => removeSystemMessage(message.id),
      SYSTEM_MESSAGE_TTL_MS,
    );
    activeSystemMessages.set(message.id, { message, timeout });
    broadcastPayload({ type: ChatMessageTypes.SYSTEM, message }, null, excludeUsers);
  }
}

function sendActiveSystemMessages(ws) {
  for (const [, info] of activeSystemMessages) {
    if (info.message.userId !== ws.user_id) {
      broadcastPayload(
        { type: ChatMessageTypes.SYSTEM, message: info.message },
        ws,
      );
    }
  }
}

export function broadcastChatMessage(message, { toReceiver = true } = {}) {
  const send = (ws) => {
    try {
      ws.send(
        JSON.stringify({ type: ChatMessageTypes.CHAT, message }),
      );
    } catch (err) {
      console.error('Error sending chat message:', err.message);
    }
  };

  const recipients = new Set();
  const fromSet = clients.get(message.sender_id);
  if (fromSet) {
    for (const ws of fromSet) recipients.add(ws);
  }

  if (toReceiver) {
    const toSet = clients.get(message.receiver_id);
    if (toSet) {
      for (const ws of toSet) recipients.add(ws);
    }
  }

  for (const ws of recipients) {
    if (ws.readyState === WebSocket.OPEN) send(ws);
  }
}

export function initChatWsServer() {
  const wss = new WebSocketServer({ noServer: true });

  wss.on('connection', (ws, req) => {
    const info = wsAuth(req, { requireToken: true });
    if (!info) {
      ws.close();
      return;
    }
    ws.user_id = info.userId;
    if (info.username) ws.username = info.username;
    let set = clients.get(ws.user_id);
    if (!set) {
      set = new Set();
      clients.set(ws.user_id, set);
    }
    set.add(ws);
    sendActiveSystemMessages(ws);

    ws.on('message', (data) => {
      let msg;
      try {
        msg = JSON.parse(data.toString());
      } catch {
        return;
      }
      if (msg.type !== ChatMessageTypes.CHAT) return;
      const fromId = ws.user_id;
      const toId = parseInt(msg.toId, 10);
      try {
        handleChatMessage(fromId, toId, msg.text);
      } catch (err) {
        const code = err instanceof HttpError ? err.code : 500;
        const message = err instanceof Error ? err.message : 'Unknown error';
        try {
          ws.send(
            JSON.stringify({
              type: ChatMessageTypes.ERROR,
              code,
              message,
            }),
          );
        } catch (sendErr) {
          console.error('Error sending ws error:', sendErr.message);
        }
        return;
      }
    });

    ws.on('close', () => {
      if (!ws.user_id) return;
      const set = clients.get(ws.user_id);
      if (!set) return;
      set.delete(ws);
      if (set.size === 0) clients.delete(ws.user_id);
    });
  });

  return wss;
}



// /home/ogoman/HIVE/Projects/ft_transcendence/server/generate-cert.sh

#!/bin/bash
# self-signed SSL certificates for local development
set -e
CERT_DIR="$(dirname "$0")/cert"
mkdir -p "$CERT_DIR"
openssl req -x509 -newkey rsa:2048 -sha256 -nodes \
  -keyout "$CERT_DIR/key.pem" \
  -out "$CERT_DIR/cert.pem" \
  -days 365 \
  -subj "/CN=localhost"

echo "Certificates generated in $CERT_DIR"



// /home/ogoman/HIVE/Projects/ft_transcendence/server/package.json

{
  "name": "server",
  "version": "1.0.0",
  "type": "module",
  "main": "server.js",
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js",
    "test": "node --test --test-concurrency=1"
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
    "bcrypt": "^5.1.1",
    "better-sqlite3": "^11.9.1",
    "dotenv": "^16.5.0",
    "ejs": "^3.1.10",
    "fastify": "^5.2.2",
    "jsonwebtoken": "^9.0.2",
    "zod": "^3.24.3",
    "ws": "^8.17.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.9"
  }
}


// /home/ogoman/HIVE/Projects/ft_transcendence/server/seed.js

// import sqlite3 from "better-sqlite3"
import Database from "better-sqlite3";
const db = new Database("./database/database.db");

db.exec(
  `DELETE FROM challenge WHERE  id < 60
  ` 
);



// /home/ogoman/HIVE/Projects/ft_transcendence/server/server.js

import Fastify from "fastify";
import authRoutes from "./routes/AuthRoutes.js";
// import friendsRoutes from "./routes/FriendsRoutes.js"
import favoriteRoutes from "./routes/FavoritesRoutes.js";
import profileRoutes from "./routes/ProfileRoutes.js";
import statisticsRoutes from "./routes/StatisticRoutes.js";
import challengeRoutes from "./routes/ChallangeRoutes.js";
import messageRoutes from "./routes/MessageRoutes.js";
import blockRoutes from "./routes/BlockRoutes.js";
import { initWsServer } from "./remote/wsServer.js";
import { initChatWsServer } from "./chatWsServer.js";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import jwt from "@fastify/jwt";
import fs from "fs";
import path from "path";

dotenv.config();

const fastify = Fastify({
  logger: true,
  https: {
    key: fs.readFileSync(path.resolve("cert", "key.pem")),
    cert: fs.readFileSync(path.resolve("cert", "cert.pem")),
  },
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
  origin: "https://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
});

// Routes
fastify.register(authRoutes);
// fastify.register(friendsRoutes);
fastify.register(favoriteRoutes);
fastify.register(profileRoutes);
fastify.register(statisticsRoutes);
fastify.register(challengeRoutes);
fastify.register(messageRoutes);
fastify.register(blockRoutes);

// Server start
const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 3000 });
    const gameWss = initWsServer();
    const chatWss = initChatWsServer();

    fastify.server.on('upgrade', (req, socket, head) => {
      const pathname = req.url.split('?')[0];
      if (pathname === '/ws') {
        gameWss.handleUpgrade(req, socket, head, ws => {
          gameWss.emit('connection', ws, req);
        });
      } else if (pathname === '/chat') {
        chatWss.handleUpgrade(req, socket, head, ws => {
          chatWss.emit('connection', ws, req);
        });
      }
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();


// /home/ogoman/HIVE/Projects/ft_transcendence/package.json

{
  "devDependencies": {
    "prettier": "^3.5.3"
  }
}



// /home/ogoman/HIVE/Projects/ft_transcendence/server/controllers/auth.js

import db from "../database/database.js"; 
import bcrypt from "bcrypt";
import hashedPassword from "../utils/hashedPass.js"

export async function signup(req, reply) {

  const { name, username, email, password } = req.body;


  if (!name || !password || !email || !username) {
    return reply.code(400).send({ message: "No pass or name or email or username" });
  }
  try {
    const hasUser = db
      .prepare("SELECT * FROM users WHERE email = ? OR username = ?")
      .get(email, username);
    if (!hasUser) {
      const users = db.prepare(
        "INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)"
      );
      const result = users.run(name, username, email,await hashedPassword(password));
      const token = req.jwt.sign({
        id: result.lastInsertRowid,
      });
      const online = db
        .prepare(`UPDATE users SET online = ? WHERE id = ?`)
        .run(1, result.lastInsertRowid);

      const updated = db
        .prepare(`SELECT id, online FROM users WHERE id = ?`)
        .get(result.lastInsertRowid);
      return reply.code(201).send({ message: "USER created", users, accessToken: token, id:result.lastInsertRowid});
    } else {
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

    if (user) {
      const compareHashed = await bcrypt.compare(password, user.password);

      if (compareHashed) {
        const token = req.jwt.sign({
          id: user.id,
        });
        const online = db
          .prepare(`UPDATE users SET online = '1' WHERE id = ?`)
          .run(user.id);

        return reply.code(200).send({ message: "We are logged in", accessToken: token, id:user.id});
      } else {
        return reply.code(400).send({ message: "Wrong pass" });
      }
    } else {
      return reply.code(400).send({ message: "No such as user" });
    }
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}

export async function logout(req, reply) {
  const { user_id } = req.body;
  try {
    const user = db.prepare(`SELECT * FROM users WHERE id = ?`).get(user_id);

    if (!user) {
      return reply.code(400).send({ message: "No such user" });
    }
    const offline = db.prepare("UPDATE users SET online = ? WHERE id = ?").run(0, user_id);
    return reply.code(200).send({ message: "We are logged out" });
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}

export async function getCurrentUser(req, reply) {
  try {
    const userId = req.user.id;
    const user = db.prepare("SELECT id, name, username, email, online, image FROM users WHERE id = ?").get(userId);

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



// /home/ogoman/HIVE/Projects/ft_transcendence/server/controllers/blocks.js

import { blockUser, unblockUser, listBlockedUsers } from '../services/blocks.js';
import HttpError from '../utils/http-error.js';

export function block(req, reply) {
  const { blockedId } = req.body;
  const authId = req.user?.id;
  try {
    const created = blockUser(authId, blockedId);
    return reply.code(created ? 201 : 200).send({ ok: true });
  } catch (err) {
    if (err instanceof HttpError) {
      return reply.code(err.code).send({ message: err.message });
    }
    console.error('Unexpected error blocking user:', err.message);
    return reply.code(500).send({ message: 'Failed to block user' });
  }
}

export function unblock(req, reply) {
  const { blockedId } = req.body;
  const authId = req.user?.id;
  try {
    const removed = unblockUser(authId, blockedId);
    if (!removed) {
      return reply.code(404).send({ message: 'Block not found' });
    }
    return reply.code(200).send({ ok: true });
  } catch (err) {
    if (err instanceof HttpError) {
      return reply.code(err.code).send({ message: err.message });
    }
    console.error('Unexpected error unblocking user:', err.message);
    return reply.code(500).send({ message: 'Failed to unblock user' });
  }
}

export function getBlocked(req, reply) {
  const blockerId = req.user?.id;
  try {
    const ids = listBlockedUsers(blockerId);
    return reply.code(200).send({ blocked: ids });
  } catch (err) {
    if (err instanceof HttpError) {
      return reply.code(err.code).send({ message: err.message });
    }
    console.error('Unexpected error fetching blocked users:', err.message);
    return reply.code(500).send({ message: 'Failed to fetch blocked users' });
  }
}



// /home/ogoman/HIVE/Projects/ft_transcendence/server/controllers/challenge.js

import db from "../database/database.js";

export async function challenge(req, reply) {
  const { user_id, username } = req.body;

  try {
    const friends_id = db
      .prepare(`SELECT * FROM users WHERE username = ? AND online = 1`)
      .get(username);

    if (!friends_id) {
      return reply.code(404).send({ message: "User not found online" });
    }
    const alreadyChallengedBefore = db
      .prepare(`SELECT * FROM challenge WHERE (user_id = ? AND friends_id = ?) OR (friends_id = ? AND user_id = ?)`)
      .get(user_id, friends_id.id, user_id, friends_id.id);
    if (!alreadyChallengedBefore) {
      const sendRequest = db
        .prepare(`INSERT INTO challenge (user_id, friends_id) VALUES (?,?)`)
        .run(user_id, friends_id.id);
      return reply
        .code(201)
        .send({ message: "Request sent", request: sendRequest });
    } else {
      return reply
        .code(400)
        .send({
          message:
            "Challenge has been called once",
        });
    }
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}

export async function notification(req, reply) {
  const { user_id } = req.body;

  try {
    const notification = db
      .prepare(
        `
        SELECT challenge.*, users.username
        FROM challenge 
        JOIN users ON challenge.user_id = users.id 
        WHERE challenge.friends_id = ? AND challenge.confirmReq = 2`
      )
      .all(user_id);

    console.log("notifications =>", notification);
    const accptedFromPartner = db
      .prepare(
        `SELECT challenge.*, users.username
      FROM challenge
      JOIN users ON challenge.user_id = users.id 
      WHERE challenge.user_id = ? AND challenge.confirmReq = 1 AND challenge.ok = 0`
      )
      .all(user_id);

      const notAcceptedFromPartner = db.prepare(
        `SELECT challenge.*, users.username
      FROM challenge
      JOIN users ON challenge.user_id = users.id 
      WHERE challenge.user_id = ? AND challenge.confirmReq = 0 AND challenge.ok = 0`
      )
      .all(user_id);

    const acceptedUsers = accptedFromPartner.map((ch) => {
      return {
        ...ch,
        partner: db
          .prepare(`SELECT username FROM users WHERE id = ?`)
          .get(ch.friends_id),
      };
    });
    const usernames = acceptedUsers.map((user) => ({
      username: user.partner.username,
    }));

        const notAcceptedUsers = notAcceptedFromPartner.map((ch) => {
      return {
        ...ch,
        partner: db
          .prepare(`SELECT username FROM users WHERE id = ?`)
          .get(ch.friends_id),
      };
    });
    const usernamesNotAccepted = notAcceptedUsers.map((user) => ({
      username: user.partner.username,
    }));
    console.log("Usernames not accepted", usernamesNotAccepted);


    //not really neeeded, delete later
    const acceptedSeen = db
      .prepare(
        `SELECT challenge.*, users.username
      FROM challenge
      JOIN users ON challenge.friends_id = users.id
      WHERE challenge.user_id = ? AND challenge.confirmReq = 1 AND challenge.ok = 1
    `)
      .all(user_id);

    console.log("SSSSSSSSSSSSS=>", acceptedSeen);

    if (notification.length === 0) {
      console.log("FFFFFFFFFFFFF");
      return reply.code(200).send({
          message: "No challenge found",notification: [],acceptedUsers,notAcceptedUsers, acceptedSeen, usernames,usernamesNotAccepted});
    } else {
      return reply.code(200).send({message: "There is request", friends_id: notification.user_id, notification});
    }
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}


export async function sawAccept(req, reply) {
  const { user_id, friends_id } = req.body;

  try {
    const sawOk = db
      .prepare(
        `UPDATE challenge SET ok = 1 WHERE user_id = ? AND friends_id = ?`
      )
      .run(user_id, friends_id);

    console.log("SSSS=>", sawOk);

    return reply.code(200).send({ message: "Saw ok", sawOk });
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}


export async function accept(req, reply) {
  const { user_id, friends_id } = req.body;

  console.log("IIIII=>", user_id)

  console.log("BBBB=>", friends_id)
  try {
    const acceptReq = db
      .prepare(
        `UPDATE challenge SET confirmReq = 1 WHERE user_id =? AND friends_id =?`
      )
      .run(friends_id, user_id);

    return reply.code(201).send({ message: "Accepted", acceptReq });
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}

export async function decline(req, reply) {
  const { user_id, friends_id } = req.body;

    console.log("IIIII=>", user_id)

  console.log("BBBB=>", friends_id)
  console.log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT")

  try {
    const declineReq = db
      .prepare(`UPDATE challenge SET confirmReq = 0 WHERE friends_id = ? AND user_id = ?`)
      .run(user_id, friends_id);

    return reply.code(200).send({ message: "Deleted", declineReq });
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}


// /home/ogoman/HIVE/Projects/ft_transcendence/server/controllers/favorites.js

import db from "../database/database.js";

export async function addfavorites(req, reply) {
  console.log("WE IN FAV");
  const { user_id, username } = req.body;
  try {
    const user = db.prepare(`SELECT * FROM users WHERE id = ?`).get(user_id);

    console.log(user.username);
    if (String(username) === String(user.username)) {
      return reply.code(400).send({ message: "Cannot add yourself" });
    }
    const alreadyFav = db
      .prepare(`SELECT * FROM favorites WHERE user_id = ? AND username = ?`)
      .get(user_id, username);
    if (!alreadyFav) {
      const addFav = db
        .prepare(`INSERT INTO favorites (user_id, username) VALUES (?,?)`)
        .run(user_id, username);
      return reply.code(201).send({ message: "Added to my favorite", addFav });
    } else {
      return reply.code(400).send({ message: "Already friends" });
    }
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}

export async function deletefavorites(req, reply) {
  console.log("we in delete");

  const {user_id, username} = req.body;

  try
  {
    const deleteFav = db.prepare(`DELETE FROM favorites WHERE user_id = ? AND username =?`).run(user_id, username)

        return reply.code(200).send({ deleteFav });
  }catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}

// export async function  favorites(request, reply) {
//     console.log();
//     try{
//       const favoritesUser = db.prepare(`SELECT * FROM favorites`).run();

//       return reply.code(200).send({  favoritesUser });

//     }catch (err) {
//     console.error("Database error:", err.message);
//     return reply.code(500).send({ message: "Something went wrong" });
//   }
// }

export async function favorites(request, reply) {
  const user_id = request.query.user_id;
  if (!user_id) {
    return reply.code(400).send({ message: "user_id is required" });
  }

  try {
    const favoritesUser = db
      .prepare(`SELECT * FROM favorites WHERE user_id = ?`)
      .all(user_id);

    return reply.code(200).send({ favoritesUser });
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
////FIX THIS THAT CANNOT ADD YOUERSELF!
export async function friendsAdd(req, reply) {
  console.log("WE ARE IN ADDING FRIENDS");

  const { user_id, username } = req.body;
  console.log("id=>", user_id);
  console.log("username=>", username);

  if (!username)
    return reply.code(400).send({ message: "PLease fill in friend username" });

  const friend = db
    .prepare("SELECT * FROM users WHERE username = ?")
    .get(username);
  if (!friend) {
    return reply.code(404).send({ message: "NO such as friebd" });
  }

  console.log("ID friend=>>>>", friend.id);
  console.log("ID=>>>>", user_id);
  if (Number(user_id) === Number(friend.id)) {
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
        .prepare(`SELECT * FROM friends WHERE (user_id = ? AND friends_id = ?) OR (user_id = ? AND friends_id = ?)`)
        .get(user_id, friend.id, friend.id, user_id);
      
      if (friendAlready1) {
        return reply.code(400).send({ message: "Friend already or already have sent request" });
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

  const friend = db
    .prepare("SELECT * FROM users WHERE username = ?")
    .get(username);
  if (!friend) {
    return reply.code(404).send({ message: "NO such as friebd" });
  }

  // confirm can be accepted only from friend_id side
  try {
    const checkReq1 = db
      .prepare(`SELECT * FROM friends WHERE friends_id = ? AND user_id = ?`)
      .get(user_id, friend.id);
    if (checkReq1) {
      console.log("CoN=>", confirmReq);
      const confirmAccept1 = db
        .prepare(
          `UPDATE friends SET confirmReq = 1 WHERE (user_id = ? AND friends_id = ?) 
           OR (user_id = ? AND friends_id = ?)`
        )
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

export async function requestFriend(req, reply) {
  console.log("WE in REQUESTTTT")
  const {user_id} = req.body;

  console.log("ISER=>", user_id)

  try {
    const checkRequest = db.prepare("SELECT * FROM friends WHERE friends_id = ? AND confirmReq = 0").all(user_id)
    console.log("YYYY=>", checkRequest)
    if(checkRequest)
    {
      console.log("TTTTT=>", checkRequest);
      return reply.code(200).send({ message: "There is request", checkRequest });
    }
    else
    {
      return reply.code(400).send({ message: "NO requests" });
    }

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
      .prepare(
        `SELECT * FROM friends WHERE (user_id = ? OR friends_id = ?) AND confirmReq = 1`
      )
      .all(user_id, user_id);
    if (myfriends) {
      return reply.code(200).send({ myfriends });
    } else {
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

  const friend = db
    .prepare("SELECT * FROM users WHERE username = ?")
    .get(username);
  if (!friend) {
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



// /home/ogoman/HIVE/Projects/ft_transcendence/server/controllers/messages.js

import db from '../database/database.js';
import { handleChatMessage } from '../services/chatMessages.js';
import HttpError from '../utils/http-error.js';

export async function sendMessage(req, reply) {
  const { toId, text } = req.body;
  const fromId = req.user?.id;
  try {
    const message = handleChatMessage(fromId, toId, text);
    return reply.code(201).send({ id: message.id });
  } catch (err) {
    if (err instanceof HttpError) {
      return reply.code(err.code).send({ message: err.message });
    }
    console.error('Unexpected error handling chat message:', err.message);
    return reply.code(500).send({ message: 'Failed to send message' });
  }
}

export async function getMessages(req, reply) {
  const { user1, user2 } = req.query;
  if (!user1 || !user2) {
    return reply.code(400).send({ message: "Missing parameters" });
  }
  try {
    const stmt = db.prepare(
      `SELECT id, sender_id, receiver_id, text, created_at
       FROM messages
       WHERE blocked = 0
         AND ((sender_id = ? AND receiver_id = ?)
           OR (sender_id = ? AND receiver_id = ?))
       ORDER BY created_at ASC`
    );
    const rows = stmt.all(user1, user2, user2, user1);
    return reply.code(200).send({ messages: rows });
  } catch (err) {
    console.error("Error fetching messages:", err.message);
    return reply.code(500).send({ message: "Failed to fetch messages" });
  }
}



// /home/ogoman/HIVE/Projects/ft_transcendence/server/controllers/profile.js

import db from "../database/database.js";
import { hashedPassword } from "../utils/hashedPass.js";

export async function updateProfile(req, reply) {

  const { name, username, password } = req.body;
  const userId = req.user.id;

  if (!name && !username && !password) {
    return reply.code(400).send({ message: "Nothing to change" });
  }
  try {
    const user = db.prepare("SELECT * FROM users WHERE id = ?").get(userId);
    if (!user) {
      return reply.code(404).send({ message: "User not found" });
    }
    if (name) {
      const updateName = db
        .prepare("UPDATE users SET name = ? WHERE id = ?")
        .run(name, userId);
    }
    if (password) {
      const updatePassword = db
        .prepare("UPDATE users SET password = ? WHERE id = ?")
        .run(await hashedPassword(password), userId);
    }
    if (username) {
      const nickExist = db
        .prepare("SELECT * FROM users WHERE username = ?")
        .get(username);
      if (nickExist) {
        return reply.code(400).send({ message: "Nick already exists" });
      } else {
        const updateUsername = db
          .prepare("UPDATE users SET username = ? WHERE id = ?")
          .run(username, userId);
      }
    }
    return reply.code(200).send({ message: "Profile updated" });
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}

export async function uploadPicture(data, reply) {
  const allowedTypes = ["image/jpeg", "image/png"];
  const userId = reply.request.user.id;

  if (!data) {
    return reply.code(400).send({ message: "No image to upload" });
  }

  if (!allowedTypes.includes(data.mimetype)) {
    return reply.code(400).send({ message: "Invalid image format" });
  }
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
  const stat = db.prepare(`SELECT id,nickname, wins, losses FROM users`).all();

  return reply.code(200).send({ stat });
}

export async function statisticsUser(req, reply) {
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

    const winValue = winUser.wins + 1;
    const updateWins = db.prepare(`UPDATE users SET wins = ? WHERE id = ?`).run(winValue, user_id);

    return reply.code(200).send({ updateWins });
  } catch (err) {
    console.error("Database error:", err.message);
    return reply.code(500).send({ message: "Something went wrong" });
  }
}

export async function loseUser(req, reply) {
    const { user_id } = req.body;
  
    try {
      const loseUser = db.prepare(`SELECT * FROM users WHERE id = ?`).get(user_id);

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

export async function allUsers(request, reply) {
  try {
    const rows = db.prepare("SELECT * FROM users").all();
    return reply.code(200).send({ users: rows });
  } catch (err) {
    console.error("Error fetching users:", err.message);
    return reply.code(500).send({ message: "Failed to fetch users" });
  }
}



// /home/ogoman/HIVE/Projects/ft_transcendence/server/database/database.js 

import Database from "better-sqlite3";

const db = new Database("./database/database.db");
// Ensure SQLite enforces foreign key constraints
db.pragma('foreign_keys = ON');
//nickname uniqy and email
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    password TEXT NOT NULL,
    online BOOL, 
    image BLOB,
    wins INTEGER default 0,
    losses INTEGER default 0
  );
`);
console.log("Database initialized and users table is ready.");

// const db = new Database("./database/friends.db");
// db.exec(`
//   CREATE TABLE IF NOT EXISTS friends (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     user_id INTEGER NOT NULL,
//     friends_id INTEGER NOT NULL,
//     confirmReq BOOL default 0,
//     FOREIGN KEY (user_id) REFERENCES users(id),
//     FOREIGN KEY (friends_id) REFERENCES users(id)
//   );
// `);
db.exec(`
  CREATE TABLE IF NOT EXISTS favorites (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    username TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (username) REFERENCES users(username)
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS challenge (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    friends_id INTEGER NOT NULL,
    confirmReq INTEGER default 2,
    ok BOOL default 0,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (friends_id) REFERENCES users(id)
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sender_id INTEGER NOT NULL,
    receiver_id INTEGER NOT NULL,
    text TEXT NOT NULL,
    blocked BOOLEAN NOT NULL DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (sender_id) REFERENCES users(id),
    FOREIGN KEY (receiver_id) REFERENCES users(id)
  );
`);

// If the messages table existed before the blocked column was introduced,
// add it so newer queries don't fail.
const messageColumns = db.prepare('PRAGMA table_info(messages);').all();
const hasBlockedColumn = messageColumns.some((c) => c.name === 'blocked');
if (!hasBlockedColumn) {
  db.exec('ALTER TABLE messages ADD COLUMN blocked BOOLEAN NOT NULL DEFAULT 0;');
}

db.exec(`
  CREATE TABLE IF NOT EXISTS blocks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    blocker_id INTEGER NOT NULL,
    blocked_id INTEGER NOT NULL,
    UNIQUE(blocker_id, blocked_id),
    FOREIGN KEY (blocker_id) REFERENCES users(id),
    FOREIGN KEY (blocked_id) REFERENCES users(id)
  );
`);

// Add indexes to optimize lookups by sender and receiver
db.exec("CREATE INDEX IF NOT EXISTS idx_messages_sender_id ON messages(sender_id);");
db.exec("CREATE INDEX IF NOT EXISTS idx_messages_receiver_id ON messages(receiver_id);");
db.exec("CREATE INDEX IF NOT EXISTS idx_blocks_blocker_id ON blocks(blocker_id);");
db.exec("CREATE INDEX IF NOT EXISTS idx_blocks_blocked_id ON blocks(blocked_id);");



console.log("Database initialized and favorites table is ready.");



export default db;



// /home/ogoman/HIVE/Projects/ft_transcendence/server/remote/gameLogic.js

import db from '../database/database.js';
import {
  FIELD_WIDTH,
  FIELD_HEIGHT,
  PADDLE_SPEED,
  BALL_SPEED,
  WINNING_SCORE,
} from '../../shared/constants.js';
import { createStateMessage, createEndMessage } from '../../shared/messages.js';
import {
  setInterval,
  clearInterval,
  setTimeout,
  clearTimeout,
} from 'node:timers';

function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v));
}

function hitPaddle(ballX, ballZ, paddleX, paddleZ) {
  return Math.abs(ballZ - paddleZ) < 2.5 && Math.abs(ballX - paddleX) < 1.0;
}

export function updateStats(winnerId, loserId) {
  if (winnerId) {
    const row = db.prepare('SELECT wins FROM users WHERE id = ?').get(winnerId);
    if (row) {
      db.prepare('UPDATE users SET wins = ? WHERE id = ?').run(row.wins + 1, winnerId);
    }
  }

  if (loserId) {
    const row = db.prepare('SELECT losses FROM users WHERE id = ?').get(loserId);
    if (row) {
      db.prepare('UPDATE users SET losses = ? WHERE id = ?').run(row.losses + 1, loserId);
    }
  }
}

export class Game {
  constructor(ws1, ws2) {
    this.players = [ws1, ws2];
    this.leftInput = 0;
    this.rightInput = 0;
    this.leftZ = 0;
    this.rightZ = 0;
    this.ballX = 0;
    this.ballZ = 0;
    this.ballDX = BALL_SPEED;
    this.ballDZ = BALL_SPEED;
    this.leftScore = 0;
    this.rightScore = 0;
    this.interval = null;
    this.startTimeout = null;
    this.ballSpawnTimeout = null;
    this.ended = false;
  }

  /**
   * Stop all running timers associated with the game instance.
   */
  stop() {
    clearInterval(this.interval);
    if (this.startTimeout) clearTimeout(this.startTimeout);
    if (this.ballSpawnTimeout) clearTimeout(this.ballSpawnTimeout);
  }

  start(startTime) {
    this.startTimeout = setTimeout(() => {
      this.resetBall();
      this.interval = setInterval(() => this.tick(), 1000 / 60);
    }, startTime - Date.now());
  }

  handleInput(side, dir) {
    if (side === 'left') this.leftInput = dir;
    else this.rightInput = dir;
  }

  tick() {
    if (this.ended) return;

    this.leftZ = clamp(
      this.leftZ + this.leftInput * PADDLE_SPEED,
      -FIELD_HEIGHT + 1.5,
      FIELD_HEIGHT - 1.5,
    );
    this.rightZ = clamp(
      this.rightZ + this.rightInput * PADDLE_SPEED,
      -FIELD_HEIGHT + 1.5,
      FIELD_HEIGHT - 1.5,
    );

    this.ballX += this.ballDX;
    this.ballZ += this.ballDZ;

    if (Math.abs(this.ballZ) > FIELD_HEIGHT - 0.5) {
      this.ballZ = Math.sign(this.ballZ) * (FIELD_HEIGHT - 0.5);
      this.ballDZ *= -1;
    }

    if (this.ballX < -FIELD_WIDTH) {
      this.rightScore++;
      this.resetBall();
    } else if (this.ballX > FIELD_WIDTH) {
      this.leftScore++;
      this.resetBall();
    }

    if (hitPaddle(this.ballX, this.ballZ, -FIELD_WIDTH + 1.5, this.leftZ) && this.ballDX < 0) {
      this.ballDX = Math.abs(this.ballDX);
    }
    if (hitPaddle(this.ballX, this.ballZ, FIELD_WIDTH - 1.5, this.rightZ) && this.ballDX > 0) {
      this.ballDX = -Math.abs(this.ballDX);
    }

    const state = {
      leftPaddleZ: this.leftZ,
      rightPaddleZ: this.rightZ,
      ballX: this.ballX,
      ballZ: this.ballZ,
      leftScore: this.leftScore,
      rightScore: this.rightScore,
    };

    for (const p of this.players) {
      p.send(JSON.stringify(createStateMessage(state)));
    }

    if (this.leftScore >= WINNING_SCORE || this.rightScore >= WINNING_SCORE) {
      const winnerSide = this.leftScore > this.rightScore ? 'left' : 'right';
      const winnerIndex = winnerSide === 'left' ? 0 : 1;
      const loserIndex = winnerSide === 'left' ? 1 : 0;

      this.ended = true;

      const winnerWs = this.players[winnerIndex];
      const loserWs = this.players[loserIndex];

      const winnerId = winnerWs.user_id ?? winnerWs.id;
      const loserId = loserWs.user_id ?? loserWs.id;
      updateStats(winnerId, loserId);

      for (const p of this.players) {
        p.send(JSON.stringify(createEndMessage(winnerSide, state)));
        p.close();
      }
      this.stop();
    }
  }

  resetBall() {
    this.ballX = 0;
    this.ballZ = 0;
    this.ballDX = 0;
    this.ballDZ = 0;
    if (this.ballSpawnTimeout) clearTimeout(this.ballSpawnTimeout);
    this.ballSpawnTimeout = setTimeout(() => {
      this.ballDX = BALL_SPEED * (Math.random() > 0.5 ? 1 : -1);
      this.ballDZ = BALL_SPEED * (Math.random() > 0.5 ? 1 : -1);
    }, 1000);
  }
}



// /home/ogoman/HIVE/Projects/ft_transcendence/server/remote/gameStarter.js

import { Game } from './gameLogic.js';
import { createInitMessage } from '../../shared/messages.js';

/**
 * Create a new `Game` instance and send initial messages to both players.
 * This helper keeps the setup logic separate from the WebSocket server code.
 * @param {import('ws').WebSocket} ws1 Left player socket
 * @param {import('ws').WebSocket} ws2 Right player socket
 * @returns {Game}
 */
export function startGame(ws1, ws2) {
  const game = new Game(ws1, ws2);
  ws1.side = 'left';
  ws2.side = 'right';
  ws1.game = game;
  ws2.game = game;

  const leftName = ws1.username || `Player-${ws1.user_id ?? 1}`;
  const rightName = ws2.username || `Player-${ws2.user_id ?? 2}`;
  const serverTime = Date.now();
  const startTime = serverTime + 5000;

  const initLeft = JSON.stringify(
    createInitMessage('left', leftName, rightName, startTime, serverTime),
  );
  const initRight = JSON.stringify(
    createInitMessage('right', leftName, rightName, startTime, serverTime),
  );

  ws1.send(initLeft);
  ws2.send(initRight);
  game.start(startTime);

  return game;
}



// /home/ogoman/HIVE/Projects/ft_transcendence/server/remote/playerQueue.js

export default class PlayerQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(ws) {
    this.queue.push({ ws });
  }

  dequeue() {
    const item = this.queue.shift();
    return item ? item.ws : undefined;
  }

  /**
   * Dequeue the first waiting player whose user_id differs from the given one.
   * If no such player exists, returns undefined without modifying the queue.
   *
   * @param {number|undefined} userId - id of the connecting user
   * @returns {import('ws').WebSocket|undefined}
   */
  dequeueDifferent(userId) {
    for (let i = 0; i < this.queue.length; i++) {
      const item = this.queue[i];
      if (item.ws.user_id !== userId) {
        this.queue.splice(i, 1);
        return item.ws;
      }
    }
    return undefined;
  }

  remove(ws) {
    this.queue = this.queue.filter((p) => p.ws !== ws);
  }

  get size() {
    return this.queue.length;
  }
}



// /home/ogoman/HIVE/Projects/ft_transcendence/server/remote/wsServer.js

import { WebSocketServer } from 'ws';
import { updateStats } from './gameLogic.js';
import PlayerQueue from './playerQueue.js';
import { createEndMessage } from '../../shared/messages.js';
import { startGame } from './gameStarter.js';
import { broadcastSystemMessage } from '../chatWsServer.js';
import { randomUUID } from 'crypto';
import { SYSTEM_MESSAGE_TTL_MS } from '../../shared/chatConstants.js';
import wsAuth from '../utils/wsAuth.js';
import { URLSearchParams } from 'node:url';
import { setInterval, clearInterval } from 'node:timers';

// Track active WebSocket connections by user id so that a single user
// cannot start multiple remote games at once.
const activeUsers = new Map();

export function initWsServer() {
  const wss = new WebSocketServer({ noServer: true });
  const waiting = new PlayerQueue();
  const refreshInterval = SYSTEM_MESSAGE_TTL_MS - 1000;

  wss.on('connection', (ws, req) => {
    ws.id = randomUUID();
    let token;
    const queryIdx = req.url.indexOf('?');
    if (queryIdx !== -1) {
      const params = new URLSearchParams(req.url.slice(queryIdx));
      token = params.get('token');
    }

    const info = wsAuth(req);
    if (token && !info) {
      ws.close();
      return;
    }
    if (info) {
      ws.user_id = info.userId;
      if (info.username) ws.username = info.username;
    }

    if (ws.user_id !== undefined) {
      const existing = activeUsers.get(ws.user_id);
      if (existing) {
        if (existing.game && !existing.game.ended) {
          // Refuse new connection while an active game exists
          ws.close();
          return;
        }
        try {
          existing.close();
        } catch {}
        activeUsers.delete(ws.user_id);
      }
      activeUsers.set(ws.user_id, ws);
    }
    ws.on('message', (data) => {
      let msg;
      try {
        msg = JSON.parse(data.toString());
      } catch {
        return;
      }
      const game = ws.game;
      if (!game || msg.type !== 'input') return;
      if (typeof msg.dir !== 'number' || ![-1, 0, 1].includes(msg.dir)) return;
      game.handleInput(ws.side, msg.dir);
    });

    ws.on('close', () => {
      // Remove from waiting queue if still waiting
      waiting.remove(ws);
      if (ws.waitingMessage) {
        broadcastSystemMessage(ws.waitingMessage, { remove: true });
        ws.waitingMessage = null;
        if (ws.waitingRefresh) clearInterval(ws.waitingRefresh);
        ws.waitingRefresh = null;
      }

      if (ws.user_id !== undefined && activeUsers.get(ws.user_id) === ws) {
        activeUsers.delete(ws.user_id);
      }

      const game = ws.game;
      if (!game || game.ended) return;

      game.ended = true;
      const leaverIndex = game.players.indexOf(ws);
      const winnerIndex = leaverIndex === 0 ? 1 : 0;
      const winnerSide = leaverIndex === 0 ? 'right' : 'left';
      const winnerWs = game.players[winnerIndex];

      const state = {
        leftPaddleZ: game.leftZ,
        rightPaddleZ: game.rightZ,
        ballX: game.ballX,
        ballZ: game.ballZ,
        leftScore: game.leftScore,
        rightScore: game.rightScore,
      };

      const winnerId = winnerWs.user_id ?? winnerWs.id;
      const loserId = ws.user_id ?? ws.id;
      updateStats(winnerId, loserId);

        try {
          winnerWs.send(
            JSON.stringify(createEndMessage(winnerSide, state, 'opponent_left')),
          );
          winnerWs.close();
        } catch {
          // Ignore errors if the winner disconnects early
        }

      game.stop();
    });

    if (waiting.size > 0) {
      const other = waiting.dequeueDifferent(ws.user_id);
      if (other) {
        if (other.waitingMessage) {
          broadcastSystemMessage(other.waitingMessage, { remove: true });
          other.waitingMessage = null;
          if (other.waitingRefresh) clearInterval(other.waitingRefresh);
          other.waitingRefresh = null;
        }
        startGame(other, ws);
      } else {
        waiting.enqueue(ws);
        const name = ws.username || `Player-${ws.user_id ?? ws.id}`;
        ws.waitingMessage = {
          id: randomUUID(),
          type: 'waiting',
          text: `${name} is waiting for an opponent`,
          userId: ws.user_id,
        };
        broadcastSystemMessage(ws.waitingMessage, { excludeUsers: ws.user_id !== undefined ? [ws.user_id] : [] });
        ws.waitingRefresh = setInterval(() => {
          if (ws.waitingMessage) {
            broadcastSystemMessage(ws.waitingMessage, { excludeUsers: ws.user_id !== undefined ? [ws.user_id] : [] });
          } else if (ws.waitingRefresh) {
            clearInterval(ws.waitingRefresh);
          }
        }, refreshInterval);
      }
    } else {
      waiting.enqueue(ws);
      const name = ws.username || `Player-${ws.user_id ?? ws.id}`;
      ws.waitingMessage = {
        id: randomUUID(),
        type: 'waiting',
        text: `${name} is waiting for an opponent`,
        userId: ws.user_id,
      };
      broadcastSystemMessage(ws.waitingMessage, { excludeUsers: ws.user_id !== undefined ? [ws.user_id] : [] });
      ws.waitingRefresh = setInterval(() => {
        if (ws.waitingMessage) {
          broadcastSystemMessage(ws.waitingMessage, { excludeUsers: ws.user_id !== undefined ? [ws.user_id] : [] });
        } else if (ws.waitingRefresh) {
          clearInterval(ws.waitingRefresh);
        }
      }, refreshInterval);
    }
  });

  return wss;
}



// /home/ogoman/HIVE/Projects/ft_transcendence/server/routes/AuthRoutes.js

import { signup, login, logout, getCurrentUser } from "../controllers/auth.js";
import { allUsers } from "../controllers/users.js";
import {SignUpSchema, LoginSchema,LogoutSchema,} from "../schema/user.schema.js";
import { validatedValues } from "../utils/validate.js";

async function authRoutes(fastify) {
  fastify.post("/login", async (req, reply) => {
    const validated = LoginSchema.safeParse(req.body);
    const data =await validatedValues(validated, reply);
    return login({ ...req, body: data }, reply);
  });

  fastify.post("/signup", async (req, reply) => {
    const validated = SignUpSchema.safeParse(req.body);
    const data = await validatedValues(validated, reply);
    return signup({ ...req, body: data }, reply);
  });

  fastify.post("/logout", async (req, reply) => {
    const validated = LogoutSchema.safeParse(req.body);
    const data =await validatedValues(validated, reply);
    return logout({ ...req, body: data }, reply);
  });

  fastify.get("/users/me", { preHandler: fastify.authenticate },getCurrentUser);

  fastify.get("/users", allUsers);
}

export default authRoutes;



// /home/ogoman/HIVE/Projects/ft_transcendence/server/routes/BlockRoutes.js

import { BlockSchema } from '../schema/block.schema.js';
import { block, unblock, getBlocked } from '../controllers/blocks.js';
import { validatedValues } from '../utils/validate.js';

async function blockRoutes(fastify) {
  fastify.post('/block', { preHandler: fastify.authenticate }, async (req, reply) => {
    const validated = BlockSchema.safeParse(req.body);
    const data = await validatedValues(validated, reply);
    return block({ ...req, body: data }, reply);
  });

  fastify.post('/unblock', { preHandler: fastify.authenticate }, async (req, reply) => {
    const validated = BlockSchema.safeParse(req.body);
    const data = await validatedValues(validated, reply);
    return unblock({ ...req, body: data }, reply);
  });

  fastify.get('/blocked', { preHandler: fastify.authenticate }, getBlocked);
}

export default blockRoutes;



// /home/ogoman/HIVE/Projects/ft_transcendence/server/routes/ChallangeRoutes.js

import { challengeSchema, notificationSchema, acceptSchema } from "../schema/challenge.schema.js";
import { challenge,notification,accept,decline, sawAccept } from "../controllers/challenge.js";
import { validatedValues } from "../utils/validate.js";


async function challengeRoutes(fastify) {
  fastify.post("/challenge", async (req, reply) => {
    const validated = challengeSchema.safeParse(req.body);
    const data =await validatedValues(validated, reply);
    return challenge({ ...req, body: data }, reply);
  });

  fastify.post("/notification",async (req, reply) => {
    const validated = notificationSchema.safeParse(req.body);
    const data =await validatedValues(validated, reply);
    return notification({ ...req, body: data }, reply);
  });

  fastify.post("/acceptRequest",async (req, reply) => {
    const validated = acceptSchema.safeParse(req.body);
    const data =await validatedValues(validated, reply);
    return accept({ ...req, body: data }, reply);
  });
  
  fastify.post("/declineRequest",async (req, reply) => {
    const validated = acceptSchema.safeParse(req.body);
    const data =await validatedValues(validated, reply);
    return decline({ ...req, body: data }, reply);
  });
  fastify.post("/sawAccept",async (req, reply) => {
    const validated = acceptSchema.safeParse(req.body);
    const data =await validatedValues(validated, reply);
    return sawAccept({ ...req, body: data }, reply);
  });
}

export default challengeRoutes;



// /home/ogoman/HIVE/Projects/ft_transcendence/server/routes/FavoritesRoutes.js

import { favoritesSchema } from "../schema/favorites.schema.js";
// import { addfavorites, deletefavorites } from "../controllers/favorites.js";
// import { validatedValues } from "../utils/validate.js";
import { addfavorites, favorites, deletefavorites } from "../controllers/favorites.js";

async function favoriteRoutes(fastify) {
  fastify.post("/addfavorites", async (req, reply) => {
    console.log("Received request:", req.body);
    const validated = favoritesSchema.safeParse(req.body);
    if (!validated.success) {
      return reply.code(400).send({
        message: "Validation error",
        errors: validated.error.errors,
      });
    }
    return addfavorites({ ...req, body: validated.data }, reply);
  });
  
    fastify.get("/favorites", favorites);

    fastify.delete("/deletefavorites", async (req, reply) => {
    const validated = favoritesSchema.safeParse(req.body);
    // const data =await validatedValues(validated, reply);
    // if (!data) return;

    if (!validated.success) {
    return reply.code(400).send({
      message: "Validation error",
      errors: validated.error.errors,
    });
  }
    return deletefavorites({ ...req, body: validated.data }, reply);
    });
}

export default favoriteRoutes;



// /home/ogoman/HIVE/Projects/ft_transcendence/server/routes/FriendsRoutes.js

import { FriendsAccept, usersSchema, FriendsMy, FriendsSchema, FriendsRequest} from "../schema/friends.schema.js";
import { friendsSearch, friendsAdd, confirmFriend, myFriends, deleteFriend, requestFriend } from "../controllers/friends.js";
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
  fastify.post(`/request`, async (req, reply) => {
    const validated = FriendsRequest.safeParse(req.body);
    if (!validated.success) {
      return reply.code(400).send({
        message: "Validation error",
        errors: validated.error.errors,
      });
    }
    return requestFriend({ ...req, body: validated.data }, reply);
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



// /home/ogoman/HIVE/Projects/ft_transcendence/server/routes/MessageRoutes.js

import { sendMessage, getMessages } from "../controllers/messages.js";

async function messageRoutes(fastify) {
  fastify.post(
    "/messages",
    { preHandler: fastify.authenticate },
    sendMessage
  );
  fastify.get(
    "/messages",
    { preHandler: fastify.authenticate },
    getMessages
  );
}

export default messageRoutes;



// /home/ogoman/HIVE/Projects/ft_transcendence/server/routes/ProfileRoutes.js


import { ProfileSchema } from "../schema/profile.schema.js";
import fastifyMultipart from "@fastify/multipart";
import { updateProfile, uploadPicture } from "../controllers/profile.js";
import { validatedValues } from "../utils/validate.js";
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
      const data =await validatedValues(validated, reply);
      return updateProfile({ ...req, body: data }, reply);
    }
  );

  fastify.post(
    "/uploadPicture",
    {
      preHandler: fastify.authenticate,
      config: {
        multipart: true,
      },
    },async (req, reply) => {
      const data = await req.file();
      if (!data) {
        return reply.code(400).send({ message: "No picture uploaded" });
      }
      return uploadPicture(data, reply);
    }
  );
}

export default profileRoutes;



// /home/ogoman/HIVE/Projects/ft_transcendence/server/routes/StatisticRoutes.js 

import { statisticsSchema, winSchema } from "../schema/statisticSchema.js";
import { statisticsAll, statisticsUser, win, loseUser } from "../controllers/statistics.js";
import { validatedValues } from "../utils/validate.js";

async function statistics(fastify) {
  fastify.get("/statistics",statisticsAll);
  fastify.post("/statisticsUser", async (req, reply) => {
    const validated = statisticsSchema.safeParse(req.body);
    const data =await validatedValues(validated, reply);
    return statisticsUser({ ...req, body: data }, reply);
  });

  fastify.post("/winUser", async (req, reply) => {
    const validated = winSchema.safeParse(req.body);
    const data =await validatedValues(validated, reply);
    return win({ ...req, body: data }, reply);
  });
  fastify.post("/loseUser", async (req, reply) => {
    const validated = winSchema.safeParse(req.body);
    const data =await validatedValues(validated, reply);
    return loseUser({ ...req, body: data }, reply);
  });
}

export default statistics;




// /home/ogoman/HIVE/Projects/ft_transcendence/server/schema/block.schema.js

import { z } from 'zod';

export const BlockSchema = z.object({
  blockedId: z.number().int().positive(),
});



// /home/ogoman/HIVE/Projects/ft_transcendence/server/schema/challenge.schema.js

import { z } from "zod"; /// validation


export const challengeSchema = z.object({
    user_id: z.coerce.number(),
    username: z.string()
});

export const notificationSchema = z.object({
     user_id: z.coerce.number(),
});

export const acceptSchema = z.object({
    user_id: z.coerce.number(),
    friends_id:z.number()
});


// /home/ogoman/HIVE/Projects/ft_transcendence/server/schema/favorites.schema.js

import { z } from "zod"; /// validation


// export const favoritesSchema = z.object({
//     user_id:z.number(),
//     username: z.string().max(20)
// });

export const favoritesSchema = z.object({
  user_id: z.string().min(1),
  username: z.string().max(20),
});



// /home/ogoman/HIVE/Projects/ft_transcendence/server/schema/friends.schema.js

import { z } from "zod"; /// validation


export const usersSchema = z.object({
  username: z.string().max(20)
});

export const FriendsSchema = z.object({
  user_id: z.number(),
  username:z.string()
  // username: z.string().max(20)
});

export const FriendsAccept = z.object({
  user_id: z.number(),
  username:z.string(),
  confirmReq: z.string()///????? maybe int need to check
});

export const FriendsRequest = z.object({
  user_id: z.number(),
  // username:z.string(),
  // confirmReq: z.string()///????? maybe int need to check
});

export const FriendsMy = z.object({
  user_id: z.number()
});



// /home/ogoman/HIVE/Projects/ft_transcendence/server/schema/profile.schema.js

import { z } from "zod";

export const ProfileSchema = z.object({
  username: z
    .string()
    .max(20)
    .refine((value) => value.trim().length > 0, "Name cannot be only spaces")
    .refine(
      (value) => /^[a-zA-Z0-9_]+$/.test(value),
      "Nickname only letters, numbers, underscore(no spaces)"
    ).optional(),
  password: z.string().min(4).max(40).optional(),
  name: z
    .string()
    .max(20)
    .optional()
    .refine((value) => value.trim().length > 0, "Name cannot be only spaces")
    .refine(
      (value) => /^\p{L}+(?:[- ]\p{L}+)*$/u.test(value),
      "Name can be only letters"
    ).optional(),
  avatar: z.string().optional(),
});



// /home/ogoman/HIVE/Projects/ft_transcendence/server/schema/statisticSchema.js

import { z } from "zod";

export const statisticsSchema = z.object({
  user_id: z.number(),
});

export const winSchema = z.object({
  user_id: z.number(),
});



// /home/ogoman/HIVE/Projects/ft_transcendence/server/schema/user.schema.js

import { z } from "zod"; /// validation

export const SignUpSchema = z.object({
  name: z.string().max(20)
  .refine((value) => value.trim().length > 0, 'Name cannot be only spaces')
  .refine((value) => /^\p{L}+(?:[- ]\p{L}+)*$/u.test(value),'Name can be only letters'),
  username: z.string().max(20)
  .refine((value) => value.trim().length > 0, 'Name cannot be only spaces')
  .refine((value) => /^[a-zA-Z0-9_]+$/.test(value),'Nickname only letters, numbers, underscore(no spaces)'),
  email: z.string().max(40).email(),
  password: z.string().min(4).max(40),
});

export const LoginSchema = z.object({
    email: z.string().max(40).email(),
    password: z.string().min(4).max(40),
  });
  
export const LogoutSchema = z.object({
    user_id: z.string(),
  });
  



// /home/ogoman/HIVE/Projects/ft_transcendence/server/services/blocks.js

import db from '../database/database.js';
import HttpError from '../utils/http-error.js';

export function blockUser(blockerId, blockedId) {
  if (!blockerId || !blockedId) {
    throw new HttpError('Missing parameters', 400);
  }
  if (blockerId === blockedId) {
    throw new HttpError('Cannot block yourself', 400);
  }
  const blockerExists = db
    .prepare('SELECT 1 FROM users WHERE id = ?')
    .get(blockerId);
  if (!blockerExists) {
    throw new HttpError('User not found', 404);
  }
  const userExists = db.prepare('SELECT 1 FROM users WHERE id = ?').get(blockedId);
  if (!userExists) {
    throw new HttpError('User not found', 404);
  }
  try {
    const result = db
      .prepare(
        'INSERT OR IGNORE INTO blocks (blocker_id, blocked_id) VALUES (?, ?)'
      )
      .run(blockerId, blockedId);
    return result.changes > 0;
  } catch (err) {
    console.error('Error blocking user:', err.message);
    throw new HttpError('Failed to block user', 500);
  }
}

export function unblockUser(blockerId, blockedId) {
  if (!blockerId || !blockedId) {
    throw new HttpError('Missing parameters', 400);
  }
  const blockerExists = db
    .prepare('SELECT 1 FROM users WHERE id = ?')
    .get(blockerId);
  if (!blockerExists) {
    throw new HttpError('User not found', 404);
  }
  const userExists = db.prepare('SELECT 1 FROM users WHERE id = ?').get(blockedId);
  if (!userExists) {
    throw new HttpError('User not found', 404);
  }
  try {
    const result = db
      .prepare('DELETE FROM blocks WHERE blocker_id = ? AND blocked_id = ?')
      .run(blockerId, blockedId);
    return result.changes > 0;
  } catch (err) {
    console.error('Error unblocking user:', err.message);
    throw new HttpError('Failed to unblock user', 500);
  }
}

export function isBlocked(id1, id2) {
  const row = db
    .prepare(
      `SELECT 1 FROM blocks 
       WHERE (blocker_id = ? AND blocked_id = ?)
          OR (blocker_id = ? AND blocked_id = ?)
       LIMIT 1`
    )
    .get(id1, id2, id2, id1);
  return !!row;
}

export function listBlockedUsers(blockerId) {
  if (!blockerId) {
    throw new HttpError('Missing parameters', 400);
  }
  try {
    const rows = db
      .prepare('SELECT blocked_id FROM blocks WHERE blocker_id = ?')
      .all(blockerId);
    return rows.map((r) => r.blocked_id);
  } catch (err) {
    console.error('Error fetching blocked users:', err.message);
    throw new HttpError('Failed to fetch blocked users', 500);
  }
}




// /home/ogoman/HIVE/Projects/ft_transcendence/server/services/chatMessages.js

import db from '../database/database.js';
import { broadcastChatMessage } from '../chatWsServer.js';
import { isBlocked } from './blocks.js';
import HttpError from '../utils/http-error.js';
import { MAX_MESSAGE_LENGTH } from '../../shared/chatConstants.js';
export { MAX_MESSAGE_LENGTH };

/**
 * Validate, store and broadcast a chat message.
 * @param {number} fromId
 * @param {number} toId
 * @param {string} text
 * @returns {object} The stored message
 */
export function handleChatMessage(fromId, toId, text) {
  const cleanText = text?.trim();
  if (!fromId || !toId || !cleanText) {
    throw new HttpError('Missing parameters', 400);
  }

  const blocked = isBlocked(fromId, toId);

  if (cleanText.length > MAX_MESSAGE_LENGTH) {
    console.warn(`Message from ${fromId} exceeds max length: ${cleanText.length}`);
    throw new HttpError('Message too long', 400);
  }

  if (/[<>]/.test(cleanText)) {
    console.warn(`Suspicious chat message from ${fromId} to ${toId}: ${cleanText}`);
  }

  try {
    const stmt = db.prepare(
      'INSERT INTO messages (sender_id, receiver_id, text, blocked) VALUES (?, ?, ?, ?)'
    );
    const result = stmt.run(fromId, toId, cleanText, blocked ? 1 : 0);
    const message = {
      id: result.lastInsertRowid,
      sender_id: fromId,
      receiver_id: toId,
      text: cleanText,
      blocked: blocked ? 1 : 0,
      created_at: new Date().toISOString(),
    };
    broadcastChatMessage(message, { toReceiver: !blocked });
    return message;
  } catch (err) {
    console.error('Error handling chat message:', err.message);
    throw new HttpError('Failed to send message', 500);
  }
}



// /home/ogoman/HIVE/Projects/ft_transcendence/server/utils/hashedPass.js

import bcrypt from "bcrypt";
export async function hashedPassword(password) {
  return await bcrypt.hash(password, 10);
}

export default hashedPassword



// /home/ogoman/HIVE/Projects/ft_transcendence/server/utils/http-error.js 

class HttpError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

export default HttpError;




// /home/ogoman/HIVE/Projects/ft_transcendence/server/utils/validate.js

export async function validatedValues(validated, reply) {
if (!validated.success) {
    const message =
      validated.error?.errors?.[0]?.message;
    reply.code(400).send({ message });
    throw new Error("Validation failed");
  }
  return validated.data;
}

export default validatedValues



// /home/ogoman/HIVE/Projects/ft_transcendence/server/utils/wsAuth.js

import jwt from 'jsonwebtoken';
import db from '../database/database.js';

const JWT_SECRET = process.env.JWT_SECRET_KEY || 'kuku';

/**
 * Extract user information from a WebSocket request.
 * @param {import('http').IncomingMessage} req
 * @param {Object} [opts]
 * @param {boolean} [opts.requireToken=false] When true, fail if token is missing
 * @returns {{userId:number, username?:string}|null}
 */
export function wsAuth(req, { requireToken = false } = {}) {
  const queryIdx = req.url.indexOf('?');
  if (queryIdx === -1) return null;

  const params = new URLSearchParams(req.url.slice(queryIdx));
  const idParam = params.get('user_id');
  const token = params.get('token');

  if (requireToken && !token) return null;

  let userId;
  if (token) {
    try {
      const payload = jwt.verify(token, JWT_SECRET);
      const idFromToken = payload.id;
      if (idParam && parseInt(idParam, 10) !== idFromToken) {
        return null;
      }
      userId = idFromToken;
    } catch {
      return null;
    }
  } else if (idParam) {
    userId = parseInt(idParam, 10);
  } else {
    return null;
  }

  let username;
  try {
    const row = db.prepare('SELECT username FROM users WHERE id = ?').get(userId);
    if (row) username = row.username;
  } catch {}

  return { userId, username };
}

export default wsAuth;



// /home/ogoman/HIVE/Projects/ft_transcendence/shared/chatConstants.d.ts

export const MAX_MESSAGE_LENGTH: number;
export const SYSTEM_MESSAGE_TTL_MS: number;
export const MAX_SYSTEM_MESSAGES: number;

export interface SystemNotification {
  id: string;
  type: 'waiting' | 'info';
  text: string;
}




// /home/ogoman/HIVE/Projects/ft_transcendence/shared/chatConstants.js

/**
 * Chat constants and shared JSDoc type declarations used by both the server
 * and client. The accompanying `chatConstants.d.ts` file provides the
 * TypeScript interface for editors.
 */

/**
 * @typedef {object} SystemNotification
 * @property {string} id
 * @property {'waiting' | 'info'} type
 * @property {string} text
 */

export const MAX_MESSAGE_LENGTH = 500;
// How long system notifications remain active before being removed
export const SYSTEM_MESSAGE_TTL_MS = 60_000;
// Maximum number of system notifications to keep in state
export const MAX_SYSTEM_MESSAGES = 10;




// /home/ogoman/HIVE/Projects/ft_transcendence/shared/chatMessageTypes.d.ts

export const ChatMessageTypes: {
  readonly CHAT: 'chat';
  readonly SYSTEM: 'system';
  readonly SYSTEM_REMOVE: 'system_remove';
  readonly ERROR: 'error';
};




// /home/ogoman/HIVE/Projects/ft_transcendence/shared/chatMessageTypes.js

export const ChatMessageTypes = {
  CHAT: 'chat',
  SYSTEM: 'system',
  SYSTEM_REMOVE: 'system_remove',
  ERROR: 'error',
};



// /home/ogoman/HIVE/Projects/ft_transcendence/shared/constants.d.ts

export const FIELD_WIDTH: number;
export const FIELD_HEIGHT: number;
export const PADDLE_SPEED: number;
export const BALL_SPEED: number;
export const WINNING_SCORE: number;



// /home/ogoman/HIVE/Projects/ft_transcendence/shared/constants.js

export const FIELD_WIDTH = 20;
export const FIELD_HEIGHT = 10;
export const PADDLE_SPEED = 0.3;
export const BALL_SPEED = 0.25;
export const WINNING_SCORE = 3;



// /home/ogoman/HIVE/Projects/ft_transcendence/shared/messages.d.ts

export type Side = 'left' | 'right';

export interface RemoteState {
  ballX: number;
  ballZ: number;
  leftPaddleZ: number;
  rightPaddleZ: number;
  leftScore: number;
  rightScore: number;
}

export interface InitMessage {
  type: 'init';
  side: Side;
  leftName?: string;
  rightName?: string;
  startTime?: number;
  serverTime?: number;
}

export interface StateMessage {
  type: 'state';
  state: RemoteState;
}

export interface EndMessage {
  type: 'end';
  winner: Side;
  state: RemoteState;
  reason?: 'opponent_left';
}

export type ServerMessage = InitMessage | StateMessage | EndMessage;

/**
 * Enum-like object with string constants for message types.
 */
export const MessageTypes: {
  readonly INIT: 'init';
  readonly STATE: 'state';
  readonly END: 'end';
};

export function createInitMessage(
  side: Side,
  leftName?: string,
  rightName?: string,
  startTime?: number,
  serverTime?: number,
): InitMessage;

export function createStateMessage(state: RemoteState): StateMessage;

export function createEndMessage(
  winner: Side,
  state: RemoteState,
  reason?: 'opponent_left',
): EndMessage;



// /home/ogoman/HIVE/Projects/ft_transcendence/shared/messages.js

/**
 * Shared message helpers and JSDoc type declarations for the remote pong game.
 * This module contains small helper functions for constructing messages so that
 * both server and client rely on the same schema.
 * The accompanying `messages.d.ts` file provides TypeScript typings.
 */

/**
 * @typedef {'left' | 'right'} Side
 */

/**
 * @typedef {object} RemoteState
 * @property {number} ballX
 * @property {number} ballZ
 * @property {number} leftPaddleZ
 * @property {number} rightPaddleZ
 * @property {number} leftScore
 * @property {number} rightScore
 */

/**
 * @typedef {object} InitMessage
 * @property {'init'} type
 * @property {Side} side
 * @property {string} [leftName]
 * @property {string} [rightName]
 * @property {number} [startTime]
 * @property {number} [serverTime]
 */

/**
 * @typedef {object} StateMessage
 * @property {'state'} type
 * @property {RemoteState} state
 */

/**
 * @typedef {object} EndMessage
 * @property {'end'} type
 * @property {Side} winner
 * @property {RemoteState} state
 * @property {'opponent_left'} [reason]
 */

/**
 * @typedef {InitMessage | StateMessage | EndMessage} ServerMessage
 */

/**
 * Enum-like object with message type strings used for server-client
 * communication. This allows both client and server to avoid
 * "magic strings" when working with WebSocket messages.
 */
export const MessageTypes = {
  INIT: 'init',
  STATE: 'state',
  END: 'end',
};

/**
 * Create an init message.
 * @param {Side} side
 * @param {string} [leftName]
 * @param {string} [rightName]
 * @param {number} [startTime]
 * @param {number} [serverTime]
 * @returns {InitMessage}
 */
export function createInitMessage(side, leftName, rightName, startTime, serverTime) {
  const msg = { type: 'init', side };
  if (leftName) msg.leftName = leftName;
  if (rightName) msg.rightName = rightName;
  if (typeof startTime === 'number') msg.startTime = startTime;
  if (typeof serverTime === 'number') msg.serverTime = serverTime;
  return msg;
}

/**
 * Create a state message.
 * @param {RemoteState} state
 * @returns {StateMessage}
 */
export function createStateMessage(state) {
  return { type: 'state', state };
}

/**
 * Create an end message.
 * @param {Side} winner
 * @param {RemoteState} state
 * @param {'opponent_left'} [reason]
 * @returns {EndMessage}
 */
export function createEndMessage(winner, state, reason) {
  return reason
    ? { type: 'end', winner, state, reason }
    : { type: 'end', winner, state };
}
