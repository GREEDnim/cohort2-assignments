import Card from "./Card";
export default function Cards({cards}){

    return (
        <div className="cards-container">
            {
                cards.map((card)=><Card key={card._id} data={card}></Card>)
            }
        </div>
    )
}