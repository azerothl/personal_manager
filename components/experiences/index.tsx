import Experience from "../experience";

export default function Experiences ({className, experiences}:{className:any,experiences:Array<any>}) {
    return (
        <div
            className={className}
        >
            {/* <h2>Experiences</h2> */}
            <div>
                {experiences && experiences.map(e => 
                    (
                        <Experience 
                            position={e.position}
                            date={e.date}
                            company={e.company}
                            location={e.location}
                            description={e.description}
                        /> 
                    )
                )}
            </div>
        </div>
    )
}