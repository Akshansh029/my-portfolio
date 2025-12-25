import { useEffect, useState, useCallback } from "react";
import confetti from "canvas-confetti";
import { toast } from "@/hooks/use-toast";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

export const useKonamiCode = () => {
  const [inputSequence, setInputSequence] = useState<string[]>([]);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const triggerEasterEgg = useCallback(() => {
    if (isUnlocked) return;

    setIsUnlocked(true);

    // Fire confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ["#00d4ff", "#7c3aed", "#22c55e", "#f59e0b", "#ec4899"];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    toast({
      title: "🎉 You found the easter egg!",
      description:
        "You've unlocked the secret Konami code! You're a true gamer.",
    });
  }, [isUnlocked]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.code;

      setInputSequence((prev) => {
        const newSequence = [...prev, key].slice(-KONAMI_CODE.length);

        if (newSequence.join(",") === KONAMI_CODE.join(",")) {
          triggerEasterEgg();
          return [];
        }

        return newSequence;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [triggerEasterEgg]);

  return { isUnlocked };
};
