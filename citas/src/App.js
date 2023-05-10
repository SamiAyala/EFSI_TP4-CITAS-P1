// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Cita from './Cita.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1 className="titulo">Administrador de Pacientes</h1>
       <div className="container">
        <table>
          <td className="one-half-column">
            <h2>Crear Mi Cita</h2>
            <div className="widthColumn">
            <form>
            <label>Nombre Mascota</label><br></br><input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota"
                     value=""></input><br></br><label>Nombre Dueño</label><br></br><input type="text" name="propietario" class="u-full-width"
                     placeholder="Nombre dueño de la mascota" value=""></input><br></br><label>Fecha</label><br></br><input type="date" name="fecha"
                     class="u-full-width" value=""></input><br></br><label>hora</label><br></br><input type="time" name="hora" class="u-full-width"
                     value=""></input><br></br><label>Sintomas</label><br></br><textarea name="sintomas" class="u-full-width"></textarea><br></br><button type="submit"
                      class="u-full-width button-primary">Agregar Cita</button>
            </form>
            </div>
          </td>
          <td className="one-half-column">
            <h2>Administra tus Citas</h2>
            <div className="widthColumn">
            <Cita mascota="Nina" dueño="Martin" fecha="2021-08-05" hora="08:20" sintoma="Le duele la pierna"></Cita>
            <Cita mascota="Sifon" dueño="Flecha" fecha="2023-08-05" hora="09:24" sintoma="duerme mucho"></Cita>
            <Cita mascota="Floki" dueño="Ari" fecha="2023-08-05" hora="16:15" sintoma="No está comiendo"></Cita>
            </div>
          </td>
        </table>
       </div>
      </header>
    </div>
  );
}

export default App;
