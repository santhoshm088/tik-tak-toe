import React, { useRef, useState } from "react";
import './TicTacToe.css';
import circle from '../Assests/circle.jpg';
import cross from '../Assests/cross.jpg';


let data=['','','','','','','','',''];
const TicTacToe = () =>
{

    let [count,setCount] = useState(0);
    let [lock,setLock] = useState(false);
    let title=useRef(null);
    let box1=useRef(null);
    let box2=useRef(null);
    let box3=useRef(null);
    let box4=useRef(null);
    let box6=useRef(null);
    let box7=useRef(null);
    let box8=useRef(null);
    let box5=useRef(null);
    let box9=useRef(null);
    let player=useRef(null);

    const toggle =(e,num) =>
    {
        if(lock)
        {
            return 0;
        }
        else if(count%2===0)
        {
            // e.target.innerHTML = `<img src='${cross}'>`;
            if(data[num]==='')
            {
            e.target.innerHTML = `<div class=''><h1 class='text-danger'>X<h1></div>`;
            data[num]='x';
            player.current.innerHTML=2;
            setCount(++count);
            checkwin();
            }
        }
        else
        {
            // e.target.innerHTML = `<img src='${circle}'>`;
            if(data[num]==='')
            {
            e.target.innerHTML = `<div ><h1 class='d-flex justify-content-evenly align-items-center  text-primary '>O<h1></div>`;
            data[num]='O';
            player.current.innerHTML=1;
            setCount(++count);
            checkwin();
            }
        }
        if(count===9)
        {
            let f=0;
            setCount(0);
            setLock(false);
            
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==''){
            won(data[0]);
            f=1;

        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!=='')
        {
            won(data[0]);
            f=1;

        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!=='')
        {
            won(data[0]);
            f=1;

        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!=='')
        {
            won(data[1]);
            f=1;
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!=='')
        {
            won(data[2]);
            f=1;

        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!=='')
        {
            won(data[2]);
            f=1;
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!=='')
        {

            won(data[3]);
            f=1;
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!=='')
        {
            won(data[6]);
            f=1;
        }

        if(f==0)
        {
            title.current.innerHTML='<h1>Match Draw</h1>';
            player.current.innerHTML='';
        }
        }

    }

    const checkwin = ()=>
    {
    
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==''){
            won(data[0]);

        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!=='')
        {
            won(data[0]);

        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!=='')
        {
            won(data[0]);

        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!=='')
        {
            won(data[1]);
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!=='')
        {
            won(data[2]);

        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!=='')
        {
            won(data[2]);
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!=='')
        {

            won(data[3]);
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!=='')
        {
            won(data[6]);
        }
    }

    const won =(t) =>
    {
        setLock(true);
        if(t==='x')
        {
             title.current.innerHTML='<h1>X Wins</h1>';
        }
        else{
            title.current.innerHTML='<h1>O Wins</h1>';
        }
        player.current.innerHTML='';
    }

    const reset = () =>
    {
        let choice=[box1,box2,box3,box4,box5,box6,box7,box8,box9];
        setLock(false);
        title.current.innerHTML=`<h1 class='text-primary'>Tik Tac Toe</h1>`;
        choice.map((e)=>{
            e.current.innerHTML='';
        })
        setCount(0);
       for(let i=0;i<data.length;i++)
       {

        data[i]='';
       }
       player.current.innerHTML=1;

    }
    return(
        <>
        <div className="text-center"><h1 className="text-primary" ref={title}>Tik Tac Toe</h1></div>
        <div className="text-center text-light"><h1>Now Player Playing <span ref={player} className="text-success">1</span></h1></div>
        <div className='full w-100 vh-100 p-0 m-0'>
         
         <div className='half d-flex align-items-center justify-content-center h-75'>
            <div className='game bg-warning row w-50 h-75'>
             
                <div className='bor col-4 h-auto' ref={box1} onClick={(e)=>{toggle(e,0)}}>
          
                </div>
                <div className='bor col-4' ref={box2}  onClick={(e)=>{toggle(e,1)}}>
                
                </div>
                <div className='bor col-4' ref={box3} onClick={(e)=>{toggle(e,2)}}>
                
                </div>
                <div className='bor col-4' ref={box4}  onClick={(e)=>{toggle(e,3)}}>
                
                </div>
                <div className='bor col-4' ref={box5}  onClick={(e)=>{toggle(e,4)}}>
                
                </div>
                <div className='bor col-4' ref={box6}  onClick={(e)=>{toggle(e,5)}}>
                
                </div>
                <div className='bor col-4' ref={box7} onClick={(e)=>{toggle(e,6)}}>
                
                </div>
                <div className='bor col-4' ref={box8} onClick={(e)=>{toggle(e,7)}}>
                
                </div>
                <div className='bor col-4' ref={box9} onClick={(e)=>{toggle(e,8)}}>
                
                </div>
                
             
         </div>
         </div>
         <div className='text-center'>
         <button id="btn" onClick={(e) => {reset()}}>Reset</button>
         </div>
        </div>
        </>
    )

}
export default TicTacToe;