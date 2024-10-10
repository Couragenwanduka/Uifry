import React, {FC} from "react"

interface Props {
content: string,
className?: string,
}
const Headertext: FC<Props> = ({content, className}) => {
  return (
    <p className={`${className} lg:text-5xl md:text-5xl text-3xl text-pretty  text-darkBlue font-sans font-semibold`}>{content}</p>
  )
}

export default Headertext