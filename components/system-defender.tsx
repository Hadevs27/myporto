"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Crosshair, SkipForward, X, Volume2, VolumeX } from "lucide-react";
import { playAudio, AUDIO_ASSETS, audioManager } from "@/lib/audio";

type GameState = "BOOT" | "MENU" | "PLAYING" | "WAVE_COMPLETE" | "GAME_OVER" | "VICTORY";

interface SystemDefenderProps {
  onGameEnd: (won: boolean, score: number, xp: number) => void;
  onSkip: () => void;
  lang: "en" | "id";
}

export function SystemDefender({ onGameEnd, onSkip, lang }: SystemDefenderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<GameState>("BOOT");
  const [score, setScore] = useState(0);
  const [xp, setXp] = useState(0);
  const [wave, setWave] = useState(1);
  const [bootText, setBootText] = useState("");
  const [soundOn, setSoundOn] = useState(audioManager.soundEnabled);
  
  // Controls
  const keys = useRef({ left: false, right: false, shoot: false });
  
  // Game parameters
  const GAME_WIDTH = 800;
  const GAME_HEIGHT = 600;
  const PLAYER_SPEED = 5;
  const BULLET_SPEED = 10;
  const ENEMY_SPEED_BASE = 1;
  const MAX_WAVES = 5;
  
  // Game State Refs
  const playerRef = useRef({ x: GAME_WIDTH / 2 - 20, y: GAME_HEIGHT - 60, w: 40, h: 30, color: "#38e8ff" });
  const bulletsRef = useRef<{x: number, y: number, w: number, h: number, isEnemy: boolean}[]>([]);
  const enemiesRef = useRef<{x: number, y: number, w: number, h: number, type: string}[]>([]);
  const enemyDirRef = useRef<number>(1);
  const lastShotRef = useRef<number>(0);
  
  const initWave = (currentWave: number) => {
    const cols = 6 + currentWave;
    const rows = 3 + Math.floor(currentWave / 2);
    const newEnemies = [];
    const types = ["BUG.EXE", "404", "NULL", "TIMEOUT", "MALWARE"];
    
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        newEnemies.push({
          x: 100 + c * 60,
          y: 50 + r * 50,
          w: 30,
          h: 20,
          type: types[r % types.length]
        });
      }
    }
    enemiesRef.current = newEnemies;
    bulletsRef.current = [];
    playerRef.current.x = GAME_WIDTH / 2 - 20;
  };
  
  useEffect(() => {
    playAudio(AUDIO_ASSETS.UI.OPEN, 0.4);
    let bootSequence = [
      "HARRY.EXE",
      "SYSTEM BOOTING...",
      "[OK] Developer profile",
      "[OK] Projects",
      "[OK] Skills",
      "[OK] Experience",
      "[OK] Achievements",
      "",
      "WARNING",
      "UNAUTHORIZED BUG ACTIVITY DETECTED",
      "SYSTEM DEFENSE REQUIRED"
    ];
    let currentText = "";
    let step = 0;
    
    const bootInterval = setInterval(() => {
      if (step < bootSequence.length) {
        currentText += bootSequence[step] + "\n";
        setBootText(currentText);
        if (step >= 8) {
          playAudio(AUDIO_ASSETS.UI.ERROR, 0.3);
        } else {
          playAudio(AUDIO_ASSETS.UI.CLICK, 0.1);
        }
        step++;
      } else {
        clearInterval(bootInterval);
        setTimeout(() => setGameState("MENU"), 500);
      }
    }, 150);
    
    return () => clearInterval(bootInterval);
  }, []);
  
  useEffect(() => {
    if (gameState !== "PLAYING") return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let animationFrameId: number;
    let lastTime = performance.now();
    
    const update = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;
      
      const p = playerRef.current;
      const b = bulletsRef.current;
      const e = enemiesRef.current;
      
      if (keys.current.left) p.x -= PLAYER_SPEED;
      if (keys.current.right) p.x += PLAYER_SPEED;
      if (p.x < 0) p.x = 0;
      if (p.x + p.w > GAME_WIDTH) p.x = GAME_WIDTH - p.w;
      
      if (keys.current.shoot && time - lastShotRef.current > 250) {
        b.push({ x: p.x + p.w / 2 - 2, y: p.y, w: 4, h: 10, isEnemy: false });
        lastShotRef.current = time;
        playAudio(AUDIO_ASSETS.GAME.LASER1, 0.2);
      }
      
      let hitEdge = false;
      const currentEnemySpeed = ENEMY_SPEED_BASE + (wave * 0.2);
      
      for (const enemy of e) {
        enemy.x += enemyDirRef.current * currentEnemySpeed;
        if (enemy.x + enemy.w > GAME_WIDTH - 20 || enemy.x < 20) {
          hitEdge = true;
        }
        if (Math.random() < 0.001 + (wave * 0.0005)) {
           b.push({ x: enemy.x + enemy.w / 2 - 2, y: enemy.y + enemy.h, w: 4, h: 10, isEnemy: true });
           playAudio(AUDIO_ASSETS.GAME.LASER2, 0.1);
        }
      }
      
      if (hitEdge) {
        enemyDirRef.current *= -1;
        for (const enemy of e) {
          enemy.y += 20;
          if (enemy.y + enemy.h >= p.y) {
            setGameState("GAME_OVER");
            playAudio(AUDIO_ASSETS.GAME.GAME_OVER, 0.5);
          }
        }
      }
      
      for (let i = b.length - 1; i >= 0; i--) {
        const bullet = b[i];
        bullet.y += bullet.isEnemy ? BULLET_SPEED / 2 : -BULLET_SPEED;
        
        if (bullet.y < 0 || bullet.y > GAME_HEIGHT) {
          b.splice(i, 1);
          continue;
        }
        
        if (!bullet.isEnemy) {
          for (let j = e.length - 1; j >= 0; j--) {
            const enemy = e[j];
            if (
              bullet.x < enemy.x + enemy.w &&
              bullet.x + bullet.w > enemy.x &&
              bullet.y < enemy.y + enemy.h &&
              bullet.y + bullet.h > enemy.y
            ) {
              e.splice(j, 1);
              b.splice(i, 1);
              setScore(s => s + 10 * wave);
              setXp(x => x + 25 * wave);
              playAudio(AUDIO_ASSETS.GAME.EXPLOSION, 0.3);
              break;
            }
          }
        } else {
          if (
            bullet.x < p.x + p.w &&
            bullet.x + bullet.w > p.x &&
            bullet.y < p.y + p.h &&
            bullet.y + bullet.h > p.y
          ) {
            setGameState("GAME_OVER");
            playAudio(AUDIO_ASSETS.GAME.GAME_OVER, 0.5);
          }
        }
      }
      
      if (e.length === 0) {
        if (wave >= MAX_WAVES) {
          setGameState("VICTORY");
          playAudio(AUDIO_ASSETS.GAME.VICTORY, 0.6);
        } else {
          setGameState("WAVE_COMPLETE");
          playAudio(AUDIO_ASSETS.GAME.WAVE_CLEAR, 0.5);
        }
      }
      
      draw(ctx);
      animationFrameId = requestAnimationFrame(update);
    };
    
    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, [gameState, wave]);
  
  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "#030507";
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    
    ctx.strokeStyle = "rgba(105, 255, 135, 0.05)";
    ctx.lineWidth = 1;
    for(let i=0; i<GAME_WIDTH; i+=40) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, GAME_HEIGHT); ctx.stroke();
    }
    for(let i=0; i<GAME_HEIGHT; i+=40) {
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(GAME_WIDTH, i); ctx.stroke();
    }
    
    const p = playerRef.current;
    
    ctx.fillStyle = p.color;
    ctx.shadowBlur = 10;
    ctx.shadowColor = p.color;
    ctx.fillRect(p.x + 15, p.y, 10, p.h);
    ctx.fillRect(p.x, p.y + 10, p.w, 10);
    ctx.fillRect(p.x - 5, p.y + 20, p.w + 10, 10);
    ctx.shadowBlur = 0;
    
    for (const enemy of enemiesRef.current) {
      ctx.fillStyle = "#ff3864";
      ctx.shadowBlur = 5;
      ctx.shadowColor = "#ff3864";
      ctx.fillRect(enemy.x, enemy.y, enemy.w, enemy.h);
      ctx.shadowBlur = 0;
      
      ctx.fillStyle = "#ffffff";
      ctx.font = "8px monospace";
      ctx.fillText(enemy.type, enemy.x, enemy.y - 2);
    }
    
    for (const bullet of bulletsRef.current) {
      ctx.fillStyle = bullet.isEnemy ? "#ff3864" : "#69ff87";
      ctx.shadowBlur = 8;
      ctx.shadowColor = ctx.fillStyle;
      ctx.fillRect(bullet.x, bullet.y, bullet.w, bullet.h);
      ctx.shadowBlur = 0;
    }
  };
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") keys.current.left = true;
      if (e.key === "ArrowRight") keys.current.right = true;
      if (e.key === " ") {
        keys.current.shoot = true;
        e.preventDefault();
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") keys.current.left = false;
      if (e.key === "ArrowRight") keys.current.right = false;
      if (e.key === " ") keys.current.shoot = false;
    };
    
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const startGame = () => {
    playAudio(AUDIO_ASSETS.UI.CONFIRM, 0.4);
    setScore(0);
    setXp(0);
    setWave(1);
    initWave(1);
    setGameState("PLAYING");
  };
  
  const nextWave = () => {
    setWave(w => w + 1);
    initWave(wave + 1);
    setGameState("PLAYING");
  };

  const handleMobileTouch = (action: string, isDown: boolean) => {
    if (action === "left") keys.current.left = isDown;
    if (action === "right") keys.current.right = isDown;
    if (action === "shoot") keys.current.shoot = isDown;
  };

  return (
    <div className="relative w-full h-full min-h-[500px] flex flex-col items-center justify-center bg-void font-mono overflow-hidden border border-cyanex/30 rounded-lg shadow-[0_0_20px_rgba(56,232,255,0.15)]">
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <button 
          onClick={() => {
            const newState = audioManager.toggleSound();
            setSoundOn(newState);
            if (newState) playAudio(AUDIO_ASSETS.UI.CONFIRM, 0.3);
          }}
          className="hud-button rounded px-3 py-1.5 text-xs text-matrix border border-matrix/50 flex items-center gap-2 bg-black/50 hover:bg-matrix/10"
        >
          {soundOn ? <Volume2 size={14} /> : <VolumeX size={14} />} {soundOn ? "ON" : "OFF"}
        </button>
        <button 
          onClick={() => {
            playAudio(AUDIO_ASSETS.UI.CLICK, 0.3);
            onSkip();
          }}
          className="hud-button rounded px-3 py-1.5 text-xs text-matrix border border-matrix/50 flex items-center gap-2 bg-black/50 hover:bg-matrix/10"
        >
          <SkipForward size={14} /> {lang === "id" ? "LEWATI GAME" : "SKIP GAME"}
        </button>
      </div>

      {gameState === "BOOT" && (
        <div className="text-left w-full max-w-md p-8 text-matrix whitespace-pre-line font-bold">
          {bootText}
        </div>
      )}
      
      {gameState === "MENU" && (
        <div className="text-center z-10 flex flex-col items-center p-8 bg-black/50 rounded-lg border border-cyanex/20 backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-cyanex mb-2 drop-shadow-[0_0_10px_rgba(56,232,255,0.8)]">HARRY.EXE</h2>
          <p className="text-matrix mb-8 tracking-[0.2em] font-bold">BUILD. DEBUG. DEFEND.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button 
              onClick={startGame}
              className="text-sm sm:text-base px-6 py-3 rounded border border-cyanex bg-cyanex/10 hover:bg-cyanex/30 transition-all text-cyanex font-bold shadow-[0_0_15px_rgba(56,232,255,0.4)]"
            >
              {lang === "id" ? "[ PERTAHANKAN SISTEM ]" : "[ DEFEND SYSTEM ]"}
            </button>
            <button 
              onClick={() => {
                playAudio(AUDIO_ASSETS.UI.CLICK, 0.3);
                onSkip();
              }}
              className="text-sm sm:text-base px-6 py-3 rounded border border-matrix bg-matrix/10 hover:bg-matrix/30 transition-all text-matrix font-bold shadow-[0_0_15px_rgba(105,255,135,0.4)]"
            >
              {lang === "id" ? "[ MASUK PORTOFOLIO ]" : "[ ENTER PORTFOLIO ]"}
            </button>
          </div>
        </div>
      )}

      {gameState === "PLAYING" && (
        <>
          <div className="absolute top-4 left-4 z-10 flex gap-6 text-sm font-bold bg-black/50 px-4 py-2 rounded border border-matrix/30">
            <div className="text-cyanex">SCORE <span className="text-white">{score.toString().padStart(6, '0')}</span></div>
            <div className="text-matrix">XP <span className="text-white">{xp.toString().padStart(6, '0')}</span></div>
            <div className="text-violetx">WAVE <span className="text-white">{wave.toString().padStart(2, '0')}</span></div>
          </div>
          <canvas 
            ref={canvasRef} 
            width={GAME_WIDTH} 
            height={GAME_HEIGHT} 
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-4 left-4 right-4 flex justify-between sm:hidden z-20">
            <div className="flex gap-2">
              <button 
                className="w-16 h-16 bg-cyanex/20 border border-cyanex/50 rounded flex items-center justify-center text-cyanex active:bg-cyanex/40"
                onTouchStart={() => handleMobileTouch("left", true)}
                onTouchEnd={() => handleMobileTouch("left", false)}
              >
                <ArrowLeft />
              </button>
              <button 
                className="w-16 h-16 bg-cyanex/20 border border-cyanex/50 rounded flex items-center justify-center text-cyanex active:bg-cyanex/40"
                onTouchStart={() => handleMobileTouch("right", true)}
                onTouchEnd={() => handleMobileTouch("right", false)}
              >
                <ArrowRight />
              </button>
            </div>
            <button 
              className="w-16 h-16 bg-matrix/20 border border-matrix/50 rounded-full flex items-center justify-center text-matrix active:bg-matrix/40"
              onTouchStart={() => handleMobileTouch("shoot", true)}
              onTouchEnd={() => handleMobileTouch("shoot", false)}
            >
              <Crosshair />
            </button>
          </div>
        </>
      )}

      {gameState === "WAVE_COMPLETE" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 z-20 text-center p-4">
          <h2 className="text-3xl text-matrix mb-4 font-bold">WAVE {wave} CLEARED</h2>
          <p className="text-cyanex mb-8">SYS_MOD_0{wave} UNLOCKED</p>
          <button 
            onClick={() => {
              playAudio(AUDIO_ASSETS.UI.CLICK, 0.3);
              const nextWave = wave + 1;
              setWave(nextWave);
              initWave(nextWave);
              setGameState("PLAYING");
            }}
            className="text-sm px-6 py-3 rounded border border-matrix bg-matrix/10 hover:bg-matrix/30 text-matrix font-bold transition-all"
          >
            [ NEXT WAVE ]
          </button>
        </div>
      )}

      {gameState === "GAME_OVER" && (
        <div className="text-center z-10 flex flex-col items-center bg-black/90 p-8 rounded border border-red-500 shadow-[0_0_30px_rgba(255,0,0,0.3)]">
          <h2 className="text-4xl font-bold text-red-500 mb-2 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">SYSTEM FAILURE</h2>
          <p className="text-white mb-2 font-bold tracking-widest">DEFENSE FAILED</p>
          <div className="flex gap-6 mb-8 text-sm text-gray-300 font-bold bg-white/5 px-4 py-2 rounded">
            <span>SCORE: {score}</span>
            <span>WAVE: {wave}</span>
          </div>
          <div className="flex gap-4 flex-col sm:flex-row">
            <button 
              onClick={() => {
                playAudio(AUDIO_ASSETS.UI.CLICK, 0.3);
                startGame();
              }}
              className="text-sm px-6 py-3 rounded border border-red-500 bg-red-500/10 hover:bg-red-500/30 text-red-500 font-bold transition-all"
            >
              [ RETRY ]
            </button>
            <button 
              onClick={() => {
                playAudio(AUDIO_ASSETS.UI.CLICK, 0.3);
                onGameEnd(false, score, xp);
              }}
              className="text-sm px-6 py-3 rounded border border-cyanex bg-cyanex/10 hover:bg-cyanex/30 text-cyanex font-bold transition-all"
            >
              [ EXIT TO PORTFOLIO ]
            </button>
          </div>
        </div>
      )}

      {gameState === "VICTORY" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 z-20 text-center p-4">
          <h2 className="text-4xl text-matrix mb-2 font-bold animate-pulse">SYSTEM SECURED</h2>
          <p className="text-matrix/70 mb-8">ALL THREATS ELIMINATED</p>
          <button 
            onClick={() => {
              playAudio(AUDIO_ASSETS.UI.CONFIRM, 0.4);
              onGameEnd(true, score, xp);
            }}
            className="text-sm px-6 py-3 rounded border border-cyanex bg-cyanex/10 hover:bg-cyanex/30 text-cyanex font-bold transition-all"
          >
            [ ENTER SECURE SYSTEM ]
          </button>
        </div>
      )}
    </div>
  );
}
