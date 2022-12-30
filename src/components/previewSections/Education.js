import { School } from "../utility/preview/School";

export const Education = (props) => {
    const renderSchool = (school, index) => {
        return(
            <School
                key={index}
                school={school}
            />
        )
    };

    return (
        <div>
            <h1>Education</h1>
            {
                props.schools.map((school, index) => {
                    return renderSchool(school, index);
                })
            }
        </div>
    );
}