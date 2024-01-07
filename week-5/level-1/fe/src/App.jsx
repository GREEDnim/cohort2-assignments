import {useState,useEffect} from 'react' 
import { getAllCards } from '../api/index'
import Cards from '../components/Cards';
export default function App(){

  const [cards,setCards]=useState([]);
  useEffect(()=>{
   (async ()=>{
      try{
        const cardsData=await getAllCards();
        setCards(cardsData);
      }catch(e){
        console.log(e.message);
        setCards([]);
      }
   })();
     
  },[])

  console.log(cards)
  return <Cards cards={cards}></Cards>;
  
}