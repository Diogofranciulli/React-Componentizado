import Card from "../Card";

function Skills({ skills }) {

  const habilidades = [
    {
      titulo: "Node",
      nivel : "noob"
    },
    {
      titulo: "Props",
      nivel : "30 minutos"
    },
    {
      titulo: "Python",
      nivel : "Jesus"
    }
  ]
  return (
    <div className="skills">
      <h2>Habilidades</h2>
                <Card data = {habilidades}/>
                
    </div>
  );
}

export default Skills;