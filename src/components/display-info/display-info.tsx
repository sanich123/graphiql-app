import { useAppSelector } from '@/redux/hooks/hooks';
import { MutableRefObject } from 'react';
import JsonFormatter from 'react-json-formatter';

interface DisplayInfoProps {
  rightSide: MutableRefObject<HTMLDivElement | null>;
}

export function DisplayInfo({ rightSide }: DisplayInfoProps) {
  const { responseData } = useAppSelector(({ savedData }) => savedData);
  const jsonStyle = {
    propertyStyle: { color: 'red' },
    stringStyle: { color: 'green' },
    numberStyle: { color: 'darkorange' },
  };

  return (
    <div className="leftSide" ref={rightSide}>
      {responseData && <JsonFormatter json={responseData} tabWith={2} jsonStyle={jsonStyle} />}
    </div>
  );
}
