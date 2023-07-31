import { CoursePart } from "./Types"
interface PartHeaderProps {
    part: CoursePart;
}
const PartHeader = (props: PartHeaderProps) => {
    return(
        <p>
                <b>
                    {props.part.name} {props.part.exerciseCount}
                </b>
        </p>
    )
}

export default PartHeader;