import React from "react";
import { useNavigate } from "react-router-dom";
import './Header.css'
import HeaderButton from "./HeaderButton";
import LOGO from "../LogotipoSVG.svg";

function Header(){

        const navigate = useNavigate();
        return(
            <div className="Header">

                <img className ="LOGO" src={LOGO}/>
                <HeaderButton text="VENTAS" no = "1" onClick={() => navigate("/ventas")}></HeaderButton>
                <HeaderButton text="ALQUILER" no = "2" onClick={() => navigate("/alquiler")}></HeaderButton>
                <HeaderButton text="SOBRE NOSOTROS" no = "3" onClick={() => navigate("/sobre_nosotros")}></HeaderButton>
                <HeaderButton text="CONTACTÁNOS" no = "4" onClick={() => navigate("/contacto")}></HeaderButton>
                
                
            </div>
        )
    }

export default Header;