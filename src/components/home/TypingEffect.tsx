'use client';

import React, { useState, useEffect } from 'react';

const phrases = [
  "Curious Minds",
  "Confident Leaders",
  "Creative Thinkers",
  "Responsible Citizens",
  "Future-Ready Individuals"
];

export function TypingEffect() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    const handleTyping = () => {
      const fullPhrase = phrases[currentPhraseIndex];
      
      if (!isDeleting) {
        // Typing phase
        setCurrentText(fullPhrase.substring(0, currentText.length + 1));
        setTypingSpeed(Math.random() * 30 + 50); // 50-80ms range

        if (currentText === fullPhrase) {
          // Finished typing, pause
          setIsDeleting(true);
          setTypingSpeed(1500); // 1.5s pause
        }
      } else {
        // Deleting phase
        setCurrentText(fullPhrase.substring(0, currentText.length - 1));
        setTypingSpeed(40); // Faster deletion

        if (currentText === '') {
          // Finished deleting, move to next phrase
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(300); // Small pause before next word
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, typingSpeed]);

  return (
    <div className="flex items-center justify-center gap-2 mt-4 h-12 animate-in fade-in duration-1000 delay-700">
      <span className="text-2xl md:text-3xl font-bold font-headline text-muted-foreground/80">
        Shaping
      </span>
      <div className="text-2xl md:text-3xl font-bold font-headline text-accent min-w-[200px] flex items-center">
        <span>{currentText}</span>
        <span className="inline-block w-[3px] h-[0.9em] bg-accent ml-1 animate-cursor-blink"></span>
      </div>
    </div>
  );
}
