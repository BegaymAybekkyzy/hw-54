import React from "react";

interface Props {
  gameRestart: () => void;
  text: string;
}

const Buttons: React.FC<Props> = ({ gameRestart, text }) => {
  return <button onClick={gameRestart}>{text}</button>;
};

export default Buttons;
