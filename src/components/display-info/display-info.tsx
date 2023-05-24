import { useAppSelector } from '@/redux/hooks/hooks';
import JsonFormatter from 'react-json-formatter';

export function DisplayInfo() {
  const { responseData } = useAppSelector(({ savedData }) => savedData);
  const jsonStyle = {
    propertyStyle: { color: 'red' },
    stringStyle: { color: 'green' },
    numberStyle: { color: 'darkorange' },
  };

  return <div className="leftSide">{responseData && <JsonFormatter json={responseData} tabWith={2} jsonStyle={jsonStyle} />}</div>;
}
