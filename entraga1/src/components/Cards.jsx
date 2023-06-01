const Cards = ({ banda }) => {
    const cardStyle = {
      width: '200px',
      height: '200px',
      border: '1px solid #ccc',
      borderRadius: '10px', 
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f7f7f7', 
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
    };
  
    const nameStyle = {
      fontWeight: 'bold',
      textDecoration: 'underline',
      color: '#333', 
    };
  
    const songStyle = {
      fontWeight: 'bold',
      color: '#777', 
    };
  
    return (
      <div style={cardStyle}>
        ESTOS SON TUS DATOS:
        <h2 style={nameStyle}>Tu Nombre: {banda.miNombre}</h2>
        <p>Tu Banda Favorita: {banda.nombre}</p>
        <p style={songStyle}>Tu Tema favorito: {banda.tema}</p>
      </div>
    );
  };
  
  export default Cards;
  