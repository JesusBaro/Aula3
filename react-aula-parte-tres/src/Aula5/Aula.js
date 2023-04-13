// //10/04

// //useMemo

import React, { useState,useEffect } from "react";
// import styled from "styled-components";

// const Div = styled.div`
// border:solid black;
// height:20vh;
// `


// export default function UseMemo(){

//     //revisao
//     const [count,setCount] = useState(0)

//     const [animal,setAnimal] = useState("Elefante")
//     //sintaxe UseEffect -- similar didmount, didUpdate, ou seja ciclo de vida

//     // useEffect(()=>{
//     //  ação a ser executada = depende de quem para executar?
//     // },[array de dependencia])

//     //----Array de dependencia
//     //[ ] - array vazia não havera mudancas
//     // qunaod não existir array [], qualquer mudança atualiza o title
//     //[count] - array especificada ocorre mudanças em um botao específico

//     useEffect(()=>{
//         document.title = count
//     },[count]);
    
//     // useEffect(()=>{
//     // document.body.style.backgroundColor === "white" ?
//     // (document.body.style.backgroundColor = "orange") :
//     // (document.body.style.backgroundColor = "white")
//     // },[animal])


//     //usando varios ternarios
//     useEffect(() => {
//         document.body.style.backgroundColor === "white"
//           ? (document.body.style.backgroundColor = "lightgreen")
//           : document.body.style.backgroundColor === "lightgreen"
//           ? (document.body.style.backgroundColor = "lightgray")
//           : (document.body.style.backgroundColor = "lightgreen");
//       }, [animal]);


//     return(
//         <>
//         <h2>UseMemo</h2>
//         <h3>{count}</h3>
//         <button onClick={()=>{setCount(count +1)}}>somando </button>

//         <button onClick={()=>{setCount(count -1)}}>subtraindo </button>

//         <h3>{animal}</h3>
//         <button onClick={()=>{setAnimal(animal === "Elefante" ? "Jacare" : "Elefante")}}> trocar animal</button>
        

//         {/* testar */}
//         <Div> 

//         </Div>
//         {/* if/esle */}

//         </>
  

//     )

// }



export default function UseMemo(){

    const [tarefa,setTarefa] = useState ([]); //const armazena uma lista 
    const [input,setInput] = useState (""); // const para pegar as info digitadas no input

    function ButtonAdd(){
    setTarefa([...tarefa, {input, id: Date.now() }]) 
    //atualiza a tarefa 
    // ...  spread - junta as info em uma lista,  antigo concat
    // id: Date.now() - numeros aletorios
    setInput("") // retorna o input vazio 
    }

    function DeleteButton(id){ //
        setTarefa(
            tarefa.filter((item)=>{ //filtra todos os item da array [tarefas]
                return item.id !== id
            })
        );
    }



    return(
        <>
        <h2>Lista de Tarefas</h2>
        {/* adicionado a  */}
        <input 
        type="text" 
        value={input} 
        // adiconndo evento de mudanca
        onChange={(e)=>setInput(e.target.value)} /> 
        
            {/* ativanod a buttao e a função */}
        <button onClick={()=>ButtonAdd()}> tarefa</button> 


        {/* mapeando itens */}
        <ul>
            {tarefa.map((item)=>( //parametro item por padrao mas pode ser outro 
            // {/* // mais de um item  tem qu eenvolter com alguma tag pai*/}
            <div> 
                <li key = {item}> {item.input} </li> 
                {/* item.input  rastreia os itens digitados no input */}
                {/* cada item tem uma chave (key) */}

                {/* <li key = {item}> {item.id} </li>  */}
                {/* verificando o item pela id */}

                <button  onClick={()=>DeleteButton(item.id)}>detelar</button>
             </div>                
            ))}
        </ul>
        </>
    )
}
