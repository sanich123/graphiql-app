import { useSendGraphiqlResponseMutation } from '@/redux/graphql-api/graphql-api';
import { useAppSelector } from '@/redux/hooks/hooks';
import { MutableRefObject, useEffect } from 'react';

interface DisplayInfoProps {
  rightSide: MutableRefObject<HTMLDivElement | null>;
  requestQuery: string;
}
export function DisplayInfo({ rightSide, requestQuery }: DisplayInfoProps) {
  const { responseData } = useAppSelector(({ savedData }) => savedData);

  console.log(responseData);
  return (
    <div className="leftSide" ref={rightSide}>
      {/* {data && data.toString()} */}
    </div>
  );
}
