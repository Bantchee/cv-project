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
        <div
            className="flex flex-col gap-4"
        >
            <h1
                className="text-sky-500 dark:text-emerald-500 text-2xl"
            >
                Work Experience
            </h1>
            {
                props.careers.map((career, index) => {
                    return renderCareer(career, index);
                })
            }
        </div>
    );
}