import Scale from "../scale/scale";

export default function Competences ({className, competences}) {
    return (
        <div
            className={className}
        >
            {competences && 
                <h3>Compétences</h3>
            }
        {competences && competences.map(e =>
            <Scale
                label={e.label}
                level={e.level}
                />
        )}

        </div>
    )
}