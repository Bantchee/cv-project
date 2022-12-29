import { Career } from "../utility/preview/Career";

export const Experience = (props) => {
    const renderCareer = (career, index) => {
        return(
            <Career
                key={index}
                career={career}
            />
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