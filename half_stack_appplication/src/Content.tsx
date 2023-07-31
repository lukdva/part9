import { CoursePart } from "./Types";
import Part from "./Part";

interface ContentProps {
    courseParts: CoursePart[];
}

const Content = (props: ContentProps) => {
    return (
        <>
        {
            props.courseParts.map( part => {
                return (
                    <Part key={part.name} part={part}/>
                )
            })
        }
        </>
    )
}

export default Content;