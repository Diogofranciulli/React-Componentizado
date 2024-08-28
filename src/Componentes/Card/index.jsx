export default function Card({data}) {

    return(
<>
        {
            data.map((skill,index) =>(
                <div class="skill-card" key={index}>
                    <h3>{skill.titulo}</h3>
                    <p>{skill.nivel}</p>
                </div>

            ))
        }
        


</>
    )
}
