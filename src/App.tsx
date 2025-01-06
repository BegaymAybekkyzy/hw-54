import { useState } from 'react'
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import PlayItem from './components/GameBoard/PlayItem/PlayItem';
import Counter from './components/Counter/Counter';

const App = () => {
  interface IItems {
    hasItem: boolean;
    clicked: boolean;
  }

  const playItemCreation = () => {
    const items: IItems[] = [];
    for (let i = 0; i < 36; i++) {
      items.push({
        hasItem: false,
        clicked: false,
      });
    }

    const randoCage = Math.floor(Math.random() * items.length);
    items[randoCage].hasItem = true;
    return items;
  };

  const [items, setItems] = useState<IItems[]>(playItemCreation());
  console.log(items);
  const [clickCount, setClickCount] = useState(0);

  const showingAndHidingItem = (index: number) => {
    const copyItems = [...items];
    if (!copyItems[index].clicked) {
      copyItems[index] = {
        ...copyItems[index],
        clicked: true,
      };
      setItems(copyItems);
      setClickCount((prev) => prev + 1);
    }

  };

  return (
    <>
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
      <br/>
      <Counter count={clickCount}/>
    </>
  );

};

export default App;
