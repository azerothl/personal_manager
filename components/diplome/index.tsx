export default function diplome ({diplome, etablissement, date, location}) {
    return (
        <div>
            <h4>{diplome}</h4>
            <span>{etablissement}</span> <span>{location}</span> <span>{date}</span>
        </div>
    )
}