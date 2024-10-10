import React, {FC} from "react"

interface Props {
content: string,
className?: string,
}

const BodyText: FC<Props> = ({content , className}) => {
    return (
        <p className={`text-bodyText font-sans text-base text-pretty  ${className}`}>{content}</p>
    )

}


export default BodyText