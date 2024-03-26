import { useState, useEffect, useRef } from 'react';
import Color from './Color';
import '../styles/Homepage.css';

const getRandomNumber = (min: number, max: number) => {
  let numPossibilities = max - min;
  let random = Math.random() * numPossibilities;
  random = Math.floor(random);
  return min + random;
};

const hexadecimal = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];

const getRandomColor = () => {
  let random_color = '';
  for (let i = 0; i < 6; i++) {
    const position = getRandomNumber(0, hexadecimal.length);
    random_color += hexadecimal[position];
  }
  return random_color;
};

function Homepage() {
  const [colors, setColors] = useState<Array<string>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const scrollContainerRef = useRef<HTMLDivElement>(null!);

  const createElementsWithColor = (count = 50) => {
    setIsLoading(true);
    let colorsList: Array<string> = [];
    for (let i = 0; i < count; i++) {
      colorsList.push(getRandomColor());
    }
    setColors([...colors, ...colorsList]);
    setIsLoading(false);
    setPage(page + 1);
  };

  const handleScroll = () => {
    const element = scrollContainerRef.current;
    const bottom =
      element.scrollHeight - element.scrollTop === element.clientHeight;
    if (bottom && !isLoading) {
      setIsLoading(true);
      createElementsWithColor();
    }
  };

  useEffect(() => {
    createElementsWithColor();
  }, []);

  return (
    <div>
      <h1 className="title">Lista de colores:</h1>
      <div
        className="container"
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        {colors.map((color, i) => (
          <Color key={i} color={color} />
        ))}
      </div>
      {isLoading ? <p>Cargando más colores...</p> : ''}
    </div>
  );
}

export default Homepage;
