import Social from "../social";

export default function Socials ({className,socials}) {
    return (<div
        className={className}
    >
        {socials && 
        (
            <h3>Réseaux sociaux</h3>
        )}
        {socials && socials.map(e => 
            <Social icon={e.icon} infos={e.infos}            
        />)}
    </div>)
}