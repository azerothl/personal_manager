export default function Scale({label, level}) {
    const value = (level * 10)+'%';
    return (
        <div>
            <label>{label}</label>
            <div 
                style={{width:'80%', height: 10, border: 1, borderStyle:'solid', borderColor:'gray'}}
            >
                <div
                    style={{width:value, backgroundColor: 'black',  height: 8, marginTop: 1}}
                ></div>
            </div>
        </div>
    )
}