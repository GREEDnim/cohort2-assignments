export default function Card({data}){
    return(
        <div className="card-container">
            <h2>{data.name}</h2>
            <h3>{data.description}</h3>

            <h2>Interests</h2>

            <div className="interests">
                {data.interests.map((interest)=> <p>{interest}</p> )}
            </div>

            <div className="buttons">
                {data.socials.map((social)=>(
                    <a key={social._id} href={social.link}><button className="button">{social.name}</button></a>
                ))}
            </div>

        </div>
    )
}