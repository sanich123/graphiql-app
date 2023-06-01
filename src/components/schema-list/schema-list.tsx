import { useAppSelector } from '@/redux/hooks/hooks';
import { DrawKyesSchema } from '../schema/functions-draw-query';
import styles from '../schema/schema.module.scss';

export default function SchemaList() {
  const { dataDoc } = useAppSelector(({ apiData }) => apiData);
  const { blockSchema, blockFirstInfo, h1Schema, ulSchema, pInfoCorrect } = styles;

  return (
    <div className={blockSchema}>
      <div className={blockFirstInfo}>
        <h1 className={h1Schema}>SCHEMA</h1>
        <ul className={ulSchema}>{dataDoc ? DrawKyesSchema(JSON.parse(dataDoc)) : <p className={pInfoCorrect}>Enter correct api</p>}</ul>
      </div>
    </div>
  );
}
