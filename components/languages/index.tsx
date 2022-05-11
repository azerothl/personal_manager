import Scale from "../scale/scale";

export default function Languages ({className, languages}) {
    return (
        <div className={className}>
            {languages && 
                <h3>Langues</h3>
            }
            {languages && languages.map(e => 
            <Scale
                label={e.label}
                level={e.level}
                />
                )}
        </div>
    );
}