const Part = ({part}) => {
    console.log('Parts:', part);
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

export default Part
