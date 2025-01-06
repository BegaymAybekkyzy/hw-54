import * as React from "react";

interface Props {
  count: number;
}

const Counter: React.FC<Props> = ({ count }) => {
  return <div>Количество попыток: {count}</div>;
};

export default Counter;
