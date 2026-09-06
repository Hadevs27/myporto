export const AUDIO_ASSETS = {
  UI: {
    CLICK: "/audio/click.ogg",
    CONFIRM: "/audio/confirm.ogg",
    OPEN: "/audio/open.ogg",
    CLOSE: "/audio/close.ogg",
    ERROR: "/audio/error.ogg",
    GLITCH: "/audio/glitch.ogg",
  },
  GAME: {
    LASER1: "/audio/laser1.ogg",
    LASER2: "/audio/laser2.ogg",
    HIT: "/audio/hit.ogg",
    EXPLOSION: "/audio/explosion.ogg",
    POWERUP: "/audio/powerup.ogg",
    WAVE_CLEAR: "/audio/wave-clear.ogg",
    GAME_OVER: "/audio/game-over.ogg",
    VICTORY: "/audio/victory.ogg",
  }
};

class AudioManager {
  private static instance: AudioManager;
  public soundEnabled: boolean = true;
  private cache: Map<string, HTMLAudioElement> = new Map();

  private constructor() {}

  public static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  public toggleSound(): boolean {
    this.soundEnabled = !this.soundEnabled;
    return this.soundEnabled;
  }

  public play(src: string, volume: number = 0.5) {
    if (!this.soundEnabled || typeof window === "undefined") return;

    try {
      let template = this.cache.get(src);
      if (!template) {
        template = new Audio(src);
        this.cache.set(src, template);
      }
      
      const audio = template.cloneNode() as HTMLAudioElement;
      audio.volume = volume;
      audio.play().catch((e) => {
        // Silently fail if browser blocks play
      });
    } catch (error) {
      // Safe fallback
    }
  }
}

export const audioManager = AudioManager.getInstance();

export const playAudio = (src: string, volume: number = 0.5) => {
  audioManager.play(src, volume);
};
