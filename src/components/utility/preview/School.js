export const School = (props) => {
    return (
        <div>
            <p>Certification: {props.school.certification}</p>
            <p>School: {props.school.school}</p>
            <p>City: {props.school.city}</p>
            <p>State: {props.school.state}</p>
            <p>From: {props.school.from}</p>
            <p>To: {props.school.to}</p>
            <p>Details: {props.school.details}</p>
        </div>
    )
}