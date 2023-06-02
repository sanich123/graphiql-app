import { useAppSelector } from '@/redux/hooks/hooks';
import { DrawKyesSchema } from '../schema/functions-draw-query';
import styles from '../schema/schema.module.scss';
import PWrongSchema from '../p-wrong-schema/p-wrong-schema';

export default function SchemaList() {
  const { dataDoc } = useAppSelector(({ apiData }) => apiData);
  const { blockSchema, blockFirstInfo, h1Schema, ulSchema } = styles;

  return (
    <div className={blockSchema}>
      <div className={blockFirstInfo}>
        <h1 className={h1Schema}>SCHEMA</h1>
        <ul className={ulSchema}>{dataDoc ? DrawKyesSchema(JSON.parse(dataDoc)) : <PWrongSchema />}</ul>
      </div>
    </div>
  );
}
