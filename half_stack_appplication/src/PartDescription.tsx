interface PartHeaderProps {
    description: string;
}
const PartDescription = (props: PartHeaderProps) => {
    return(
        <p>
            <i>
                {props.description}
            </i>
        </p>
    )
}

export default PartDescription;