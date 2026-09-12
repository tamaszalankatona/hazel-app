import { computed, Signal } from '@angular/core';

type PasswordStrengthTypes = 'weak' | 'fair' | 'good' | 'strong';

interface PasswordStrengthResult {
  score: number;
  strength: PasswordStrengthTypes;
  label: string;
}

export function checkPasswordStrength(password: string | null): PasswordStrengthResult {
  let score: number = 0;
  if (password) {
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
  }

  const visualScore = Math.ceil(score / 1.5);

  return scoreToResult(visualScore);
}

function scoreToResult(score: number): PasswordStrengthResult {
  if (score <= 1) {
    return {
      score,
      strength: 'weak',
      label: 'Weak',
    };
  }

  if (score === 2) {
    return {
      score,
      strength: 'fair',
      label: 'Fair',
    };
  }

  if (score === 3) {
    return {
      score,
      strength: 'good',
      label: 'Good',
    };
  }

  return {
    score: 4,
    strength: 'strong',
    label: 'Strong',
  };
}
