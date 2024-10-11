import React, { FC } from 'react';

interface Props {
  content: string;
  className?: string;
}

const BodyText: FC<Props> = ({ content, className }) => {
  return (
    <p
      className={`${className} text-bodyText font-sans text-base text-pretty  `}
    >
      {content}
    </p>
  );
};

export default BodyText;
