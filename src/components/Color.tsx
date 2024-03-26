import '../styles/Color.css';
import { useNavigate } from 'react-router-dom';

// Tipado de prop que recibe desde el padre
const Color = ({ color }: { color: string }) => {
  let colorWithHash: string = '#';
  colorWithHash += color;

  const navigate = useNavigate();

  const handleColorClick = () => {
    navigate(`/color/${color}`, {
      state: { colorWithHash },
    });
  };

  return (
    <div
      onClick={handleColorClick}
      className="color-card"
      style={{
        backgroundColor: `${colorWithHash}`,
      }}
    ></div>
  );
};

export default Color;
