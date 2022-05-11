export default function Detail({icon, label, infos, description}) {
    return (<div>
        <span
            title={label}
        >{icon}</span> <span>{infos}</span>
        {description  && 
        (
            <div>
                {description}
            </div>
        )}
    </div>)
}