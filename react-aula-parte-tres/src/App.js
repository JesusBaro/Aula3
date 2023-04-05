// aula 03/03
// 
// //sintax Hook UseEffect
//quando não utiliza arrar o useEffect é acionado quando exixtir qualquer mudança, 
//na array vazia nao ocorre mudanças
//quando ha um valor especifica na array  de dependencia[ ] o useEffect só muda quando houver alguma mudança
//{} onde colocamos a mudanca q deve ocorrer//sintax Hook UseEffect
//quando não utiliza arrar o useEffect é acionado quando exixtir qualquer mudança, 
//na array vazia nao ocorre mudanças
//quando ha um valor especifica na array  de dependencia[ ] o useEffect só muda quando houver alguma mudança
//{} onde colocamos a mudanca q deve ocorrer

// useEffect(()=>{
//     document.title = nome 
// },[nome]);

// import React, {useEffect, useState} from "react";
// import styled from "styled-components";
// // import from "";

// export default function App() {
//   //atualiza a cor de fundo quando acontece o botao é clicado
//   //condição (pergnuta) ? verdade : falso
//   const Div = styled.div`
//   background-color: ${props =>props.cor || "#991629"}; //cor de inicio // pesquisar sintaxe
//   `;
//   const[fundo, setFundo]= useState("#991629"); //const associada a props de cor, cor de fundo inicial
//   const [count,setCount] = useState (0);
//   const[nome,setNome] = useState("oi");

//   useEffect(()=>{
//     document.body.style.backgroundColor === "white" ?
//     //verdadeiro
//     document.body.style.backgroundColor = "black":
//     //falso
//     document.body.style.backgroundColor = "white"
// },[fundo,nome]); //array de dependencia por estar nomeda com a const fundo

// //Array de dependencia
// //.  -  sem array ele e atualizando a qualqer sinal
// // [] vazio atualiza uma fez só
// // [nome] - quando é nomeada por alguma const, só ativa uma vez quando  
//   return (
//     <>

//     <Div cor={fundo} >

//       <h1>Aula 03/03</h1>
//       <h2>{count}</h2>
//       <h2>{nome}</h2> 

//       <button onClick={()=>{
//         setCount(count +1);
//         setNome (nome === "oi" ? "tchau": "oi"); //pra troar de nome só colocar direto 
//         setFundo( "#edb7a3")//rosa
//       }}> Somar e  Nome </button>

//       <button onClick={()=>{setFundo("#fb8114") //laranja
//     }}> mudar de cor, setFundo</button>
//       {/* <button onClick={()=>{setBorda("#cab3b0")}}>cor 2</button> */}
//     </Div>
//     </>
//   )
// };

import React from "react";
import UseEffectTeste from "./UseEffect.js";
import Functions from "./Aula4/funtions.js";


export default function App(){

    return(

        <>
<Functions/>
<UseEffectTeste/>
        </>
    )

}
