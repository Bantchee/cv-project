export const Career = (props) => {
    let {company, position, city, state, from, to, details} = props.career;
    return (
        <div
            className="border-l-4 border-sky-500 dark:border-emerald-500 pl-4 ml-4 text-base rounded-md"
        >
            <p
                className="text-xl font-bold"
            >
                {
                    (company.trim() === "" ? "Company" : company) + " - " +
                    (city.trim() === "" ? "City" : city) + ", " +
                    (state.trim() === "" ? "State" : state)
                }
            </p>
            <p
                className="text-xl font-bold"
            >
                {position.trim() === "" ? "Position" : position}
            </p>
            <p> {
                    (from.trim() === "" ? "From" : from) + " - " +
                    (to.trim() === "" ? "To" : to)
                }
            </p>
            <p>{details.trim() === "" ? "Details" : details}</p>
        </div>
    )
}