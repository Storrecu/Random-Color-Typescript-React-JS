import { Link, useLocation } from 'react-router-dom';

const ColorDetails = () => {
  const { state } = useLocation();

  return (
    <>
      <div
        className="color-details"
        style={{
          backgroundColor: `${state.colorWithHash}`,
          width: '100px',
          height: '100px',
        }}
      >
        Detalles del color {state.colorWithHash}
      </div>

      <Link to="/"> Volver al listado de colores</Link>
    </>
  );
};

export default ColorDetails;
