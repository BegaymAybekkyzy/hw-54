import './PlayItem.css';
import * as React from 'react';
import { MouseEventHandler } from 'react';

interface Props {
  hasItem: boolean;
  clicked: boolean;
  clickedItem: MouseEventHandler<HTMLDivElement>;
}

const PlayItem: React.FC<Props> = ({hasItem, clicked, clickedItem}) => {
  return (
    <div className={`play-item ${clicked ? 'clicked-item' : 'untouched-item'}`}
         onClick={clickedItem}>
      {hasItem && clicked ? '🎯' : ''}
    </div>
  );
};

export default PlayItem;