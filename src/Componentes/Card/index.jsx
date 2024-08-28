export default function Card({data}) {

    return(
<>
        {
            data.map(skill =>(
<div class="skill-card">
                    <h3>{titulo}</h3>
                    <p>{nivel}</p>
                </div>

            ))
        }
        


</>
    )
}

const {titulo, nivel} = props