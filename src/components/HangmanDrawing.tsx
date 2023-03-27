const HEAD = (
  <div
    style={{
      width: '50px',
      height: '50px',
      borderRadius: '100%',
      border: '10px solid black',
      position: 'absolute',
      top: ' 50px',
      right: '-30px',
    }}
  />
);
const BODY = (
  <div
    style={{
      width: '10px',
      height: '150px',
      background: 'black',
      position: 'absolute',
      top: '120px',
      right: '0',
    }}
  />
);
const RIGHT_ARM = (
  <div
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '150px',
      right: '-90px',
      rotate: '-30deg',
    }}
  />
);
const LEFT_ARM = (
  <div
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '150px',
      right: '0',
      rotate: '30deg',
    }}
  />
);
const LEFT_LEG = (
  <div
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '300px',
      right: '-25px',
      rotate: '-65deg',
    }}
  />
);
const RIGHT_LEG = (
  <div
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '300px',
      right: '-65px',
      rotate: '65deg',
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div style={{ position: 'relative' }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div style={{ height: '50px', width: '10px', background: 'black', position: 'absolute', top: 0, right: 0 }} />
      <div style={{ height: '10px', width: '250px', background: 'black', marginLeft: '120px' }} />
      <div style={{ height: '400px', width: '10px', background: 'black', marginLeft: '120px' }} />
      <div style={{ height: '10px', width: '250px', background: 'black' }} />
    </div>
  );
};
