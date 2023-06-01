  import { useState } from "react";
  import Cards from "./components/Cards";
  import "./estilos/App.css";
  import "./estilos/cards.css";

  function App() {

    // const [nombre,setNombre] = useState("")
    
    const [banda, setBanda] = useState({
      miNombre:"",
      nombre:"",
      tema:""
    }); 

    const [bandas, setBandas] = useState([]);

    const [errorMsg, setErrorMsg] = useState("");

    const [error, setError] = useState(false);



  
    const handleSubmit = (x) => {
      x.preventDefault();

      if (error) {
        setErrorMsg("Por favor chequea que la infomración sea correcta");
      } else {
        setBandas((prevState) => [...prevState, banda,]);
      }
    };


    const regex = /^[^\s][^\s]{2,}$/;

    const handleFirstInput = (x) => {
      if (!regex.test(x.target.value)) {
        setErrorMsg("Por favor chequea que la infomración sea correcta");
        setError(true);
      } else {
        setError(false);
        setErrorMsg("");

        setBanda((prevState) => ({
          ...prevState,
          miNombre: x.target.value,
        }));
      }
    };

    const handleSecondInput = (x) => {
      if (!regex.test(x.target.value)) {
        setErrorMsg("Por favor chequea que la infomración sea correcta");
        setError(true);
      } else {
        setError(false);
        setErrorMsg("");

        setBanda((prevState) => ({
          ...prevState,
          nombre: x.target.value,
        }));
      }
    };

    const handlethirdInput = (x) => {
      if (x.target.value.length < 6) {
        setErrorMsg("Por favor chequea que la infomración sea correcta");
        setError(true);
      } else {
        setError(false);
        setErrorMsg("");

        setBanda((prevState) => ({
          ...prevState,
          tema: x.target.value,
        }));
      }
    };


    return (
      <>
      <div className="container">
        <div>
          <h1>Tu Banda y Tema Favoritos</h1>
          <form
            onSubmit={handleSubmit}
          >

  <div>
              <label>Tu nomnbre</label>
              <input
                type="text"
                placeholder=""
                onChange={(x) => {
                  handleFirstInput(x);
                }}
              />
            </div>  

            <div>
              <label>Nombre De La Banda</label>
              <input
                type="text"
                placeholder=""
                onChange={(x) => {
                  handleSecondInput(x);
                }}
              />
            </div>

            <div>
              <label>Tema Favorito</label>
              <input
                type="text"
                placeholder=""
                onChange={(x) => {
                  handlethirdInput(x);
                }}
              />
    
            </div>
            <button>
            Ingresar Datos
            </button>
          </form>
        </div>

        {errorMsg && <span className="error">{errorMsg}</span>}


     
      </div>

<div>
{bandas.map((banda, index) => {
  return (
    <div className="cards" key={index}>
      <Cards banda={banda}  />
    </div>
  );
})}
</div>
</>
    );
  }

  export default App;