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
            <h1
                className="text-sky-500 dark:text-emerald-500 text-2xl"
            >
                Education
            </h1>
            {
                props.schools.map((school, index) => {
                    return renderSchool(school, index);
                })
            }
        </div>
    );
}