//organizar código E trocar fundo 

import React, {useEffect, useState} from "react";
import styled from "styled-components";

export default function UseEffectTeste() {

  const Div = styled.div`
  display:flex;
  justify-content:center;
  align-items: center;
  flex-direction:column;
  height: 70vh;
  background-color: ${props => props.cor || "#991629"}; //cor de inicio // pesquisar sintaxe
  `;
const H2Cor = styled.h2`
color:  ${props => props.tittle || "#000000"};
`
const[titulo,setTitulo] = useState("UseEffect")
const[fundo, setFundo]= useState("#991629"); //const associada a props de cor, cor de fundo inicial
const [pergunta,setPergunta] = useState("Oque é o Use Effect?")
const[descricao,setDescricao]= useState("");
const[corTitulo,SetCorTitulo] = useState("#000000");

  // useEffect(()=>{
  //   (document.body.style.backgroundColor === "white")?
  //   (document.body.style.backgroundColor = "black"):
  //   (document.body.style.backgroundColor = "white")
  // },); //array de dependencia por estar nomeda com a const fundo
  

  return (
    <>
    {/* propriedad cor criada  no estilo adicionada a const Fundo, foi colocada nessa div. pra que a funcao de cor ative nela */}
    <Div cor={fundo} > 
    <h2>Aula 3</h2>

    <H2Cor  tittle={corTitulo}>{titulo}</H2Cor >

    <H2Cor tittle={corTitulo} > {pergunta}</H2Cor>

    <H2Cor tittle={corTitulo} >{descricao}</H2Cor>



   <button onClick={()=>{setFundo( fundo === "#991629" ?"#fb8114":"#991629" ) //laranja
   }}> Trocar fundo </button>

<button onClick={()=>{setDescricao( descricao=== "" ? "Ele lida com efeitos e ciclo de vida. similar com didUpdate e didMount": "");
 setTitulo(titulo === "UseEffect" ? "Effect Use": "UseEffect")
} }>Resposta</button>

<button onClick={()=>{
    SetCorTitulo( "#FEFEFE");
    SetCorTitulo(corTitulo === "#000000" ?"#FEFEFE" :"#000000")
    } }>Mudar a cor da Resposta</button>

{/* <button onClick={()=>{SetCorTitulo(corTitulo === "#000000" ?"#FEFEFE" :"#000000")} }>Mudar a cor da Resposta ternario</button> */}

    </Div>
    </>
  )
};