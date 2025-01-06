import PlayItem from "../GameBoard/PlayItem/PlayItem";
import GameBoard from "../GameBoard/GameBoard";
import React from "react";
import { IItems } from "../../types";

interface Props {
  items: IItems[];
  showingAndHidingItem: (index: number) => void;
}

const GameBoardWithItems: React.FC<Props> = ({
  items,
  showingAndHidingItem,
}) => {
  return (
    <GameBoard>
      {items.map((item, index) => (
        <PlayItem
          key={index}
          hasItem={item.hasItem}
          clicked={item.clicked}
          clickedItem={() => showingAndHidingItem(index)}
        />
      ))}
    </GameBoard>
  );
};

export default GameBoardWithItems;
