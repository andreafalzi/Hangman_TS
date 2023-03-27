import styled from './Keyboard.module.css';

const KEYS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disable?: boolean;
};

export const Keyboard = ({ activeLetters, inactiveLetters, addGuessedLetter, disable = false }: KeyboardProps) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
        gap: '.5rem',
        width: '100%',
      }}
    >
      {KEYS.map((key, index) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);

        return (
          <button onClick={() => addGuessedLetter(key)} className={`${styled.btn} ${isActive ? styled.active : ''} ${isInactive ? styled.inactive : ''}`} key={index} disabled={isActive || isInactive || disable}>
            {key}
          </button>
        );
      })}
    </div>
  );
};
