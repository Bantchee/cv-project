export const Career = (props) => {
    return (
        <div>
            <p>Company: {props.career.company}</p>
            <p>Postion: {props.career.position}</p>
            <p>City: {props.career.city}</p>
            <p>State: {props.career.state}</p>
            <p>From: {props.career.from}</p>
            <p>To: {props.career.to}</p>
            <p>Details: {props.career.details}</p>
        </div>
    )
}