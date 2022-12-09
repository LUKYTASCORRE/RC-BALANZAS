import React from "react";
import AutoLayoutExample from "./container-nuestra- empresa";
import GridPrimero from "./grid-primero";
import GridSegundo from "./grid-segundo";
import './nuestra-empresa.css';


const Empresa = () => {
    return (
        <div className="nuestra-empresa"style={{ margin:'0', width:'100vh' }}>

               <AutoLayoutExample/>
          <div className="Grids">
             <div className="seccion-segunda"><GridPrimero/></div>
             <div className="seccion-tercera"><GridSegundo/></div>
          </div>
        </div>
    )
}
export default Empresa;
