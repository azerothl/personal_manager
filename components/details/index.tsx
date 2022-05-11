import Detail from "../detail";

export default function Details ({className, details}) {
    return (
        <div
            className={className}
        >
            {/* {details && 
                <h3>Details</h3>
            } */}
            {details && details.map(e => 
                <Detail 
                    icon={e.icon}
                    label={e.label}
                    infos={e.infos}
                    description={e.description}
                />
            )}
        </div>
    )
}