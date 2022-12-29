export const Experience = (props) => {
    const renderCareer = (career, index) => {
        return(
            <div key={index}>
                <p>Company: {career.company}</p>
                <p>Postion: {career.position}</p>
                <p>City: {career.city}</p>
                <p>State: {career.state}</p>
                <p>From: {career.from}</p>
                <p>To: {career.to}</p>
                <p>Details: {career.details}</p>
            </div>
        )
    };

    return (
        <div>
            <h1>Work Experience</h1>
            {
                props.careers.map((career, index) => {
                    return renderCareer(career, index);
                })
            }
        </div>
    );
}