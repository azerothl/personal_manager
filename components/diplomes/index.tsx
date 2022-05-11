import Diplome from "../diplome";

export default function Diplomes ({className, diplomes}) {
    return (
        <div
            className={className}
        >
            {diplomes &&
                <h3>Diplômes</h3>
            }
            {diplomes && diplomes.map(e => 
            <Diplome 
                diplome={e.diplome}
                location={e.location}
                etablissement={e.etablissement}
                date={e.date}
            />)}
        </div>
    )
}