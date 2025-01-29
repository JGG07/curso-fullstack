// eslint-disable-next-line react/prop-types
const Filter = ({filter, handleFilterChange}) => {
    return (
        <div>
            Filter shown with <input
            value={filter}
            onChange={handleFilterChange}
        />
        </div>
    )
}

export default Filter
