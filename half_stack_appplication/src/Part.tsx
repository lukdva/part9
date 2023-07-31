import { CoursePart } from "./Types"
import PartHeader from "./PartHeader"
import PartDescription from "./PartDescription"

interface PartProps {
    part: CoursePart
}
const assertNever = ( value: never) => {
    throw new Error(
        `Unhandled discriminated union member: ${JSON.stringify(value)}`
    )
}

const Part = (props: PartProps) => {
    switch(props.part.kind) {
        case "basic":
           return( 
           <>
                <PartHeader part={props.part}/>
                <PartDescription description={props.part.description}/>
            </>
           )
           break;
        case "group":
            return( 
            <>
                <PartHeader part={props.part}/>
                <p>
                    project exercises {props.part.groupProjectCount}
                </p>
            </>
           )
            break;
        case "background":
            return( 
            <>
                <PartHeader part={props.part}/>
                <PartDescription description={props.part.description}/>
                <p>
                    submit to {props.part.backgroundMaterial}
                </p>
            </>
           )
            break;
        case "special":
            return( 
            <>
                <PartHeader part={props.part}/>
                <PartDescription description={props.part.description}/>
                <p>
                    required skills: {props.part.requirements.join(', ')}
                </p>
            </>
            )
            break;
        default:
            return assertNever(props.part);
            break;

    }
}

export default Part;