const Suma = ({exercises}) => {
    console.log('Suma:', exercises)

    const result = exercises.reduce((x, part) => x + part.exercises, 0)
    console.log('Result:', result)

    return (
        <p><strong>Total of {result} exercises</strong></p>
    )
}

export default Suma
