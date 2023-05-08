import { useState } from 'react';
import styles from './schema.module.scss';
import { DATA_SCHEMA } from '@/data/data-schema';
import { DATA_2 } from '@/data/data-2';

const schema = DATA_SCHEMA.data.__schema;
console.log(schema);

const schema2 = DATA_2.data.__schema;
console.log(schema2);

type Schema = { queryType?: { name: string; }; mutationType?: null; types?: ({ kind: string; name: string; fields: null; inputFields: null; interfaces: null; enumValues: null; possibleTypes: null; } | { kind: string; name: string; fields: ({ name: string; args: never[]; type: { kind: string; name: string; ofType: null; }; isDeprecated: boolean; deprecationReason: null; } | { name: string; args: never[]; type: { kind: string; name: null; ofType: { kind: string; name: null; ofType: { kind: string; name: null; ofType: { kind: string; name: string; ofType: null; }; }; }; }; isDeprecated: boolean; deprecationReason: null; } | { name: string; args: { name: string; type: { kind: string; name: string; ofType: null; }; defaultValue: null; }[]; type: { kind: string; name: null; ofType: { kind: string; name: string; ofType: null; }; }; isDeprecated: boolean; deprecationReason: null; })[]; inputFields: null; interfaces: never[]; enumValues: null; possibleTypes: null; } | { kind: string; name: string; fields: ({ name: string; args: { name: string; type: { kind: string; name: null; ofType: { kind: string; name: string; ofType: null; }; }; defaultValue: null; }[]; type: { kind: string; name: string; ofType: null; }; isDeprecated: boolean; deprecationReason: null; } | { name: string; args: { name: string; type: { kind: string; name: string; ofType: null; }; defaultValue: string; }[]; type: { kind: string; name: null; ofType: { kind: string; name: null; ofType: { kind: string; name: null; ofType: { kind: string; name: string; ofType: null; }; }; }; }; isDeprecated: boolean; deprecationReason: null; })[]; inputFields: null; interfaces: never[]; enumValues: null; possibleTypes: null; } | { kind: string; name: string; fields: null; inputFields: ({ name: string; type: { kind: string; name: string; ofType: null; }; defaultValue: null; } | { name: string; type: { kind: string; name: null; ofType: { kind: string; name: null; ofType: { kind: string; name: string; ofType: null; }; }; }; defaultValue: null; })[]; interfaces: null; enumValues: null; possibleTypes: null; } | { kind: string; name: string; fields: ({ name: string; args: never[]; type: { kind: string; name: null; ofType: { kind: string; name: string; ofType: null; }; }; isDeprecated: boolean; deprecationReason: null; } | { name: string; args: never[]; type: { kind: string; name: string; ofType: null; }; isDeprecated: boolean; deprecationReason: null; } | { name: string; args: { name: string; type: { kind: string; name: string; ofType: null; }; defaultValue: string; }[]; type: { kind: string; name: null; ofType: { kind: string; name: null; ofType: { kind: string; name: null; ofType: { kind: string; name: string; ofType: null; }; }; }; }; isDeprecated: boolean; deprecationReason: null; })[]; inputFields: null; interfaces: never[]; enumValues: null; possibleTypes: null; } | { kind: string; name: string; fields: null; inputFields: null; interfaces: null; enumValues: { name: string; isDeprecated: boolean; deprecationReason: null; }[]; possibleTypes: null; } | { kind: string; name: string; fields: ({ name: string; args: never[]; type: { kind: string; name: null; ofType: { kind: string; name: string; ofType: null; }; }; isDeprecated: boolean; deprecationReason: null; } | { name: string; args: never[]; type: { kind: string; name: string; ofType: null; }; isDeprecated: boolean; deprecationReason: null; } | { name: string; args: { name: string; type: { kind: string; name: string; ofType: null; }; defaultValue: string; }[]; type: { kind: string; name: null; ofType: { kind: string; name: null; ofType: { kind: string; name: string; ofType: null; }; }; }; isDeprecated: boolean; deprecationReason: null; })[]; inputFields: null; interfaces: never[]; enumValues: null; possibleTypes: null; })[]; directives?: ({ name: string; locations: string[]; args: { name: string; type: { kind: string; name: string; ofType: null; }; defaultValue: string; }[]; } | { name: string; locations: string[]; args: { name: string; type: { kind: string; name: null; ofType: { kind: string; name: string; ofType: null; }; }; defaultValue: null; }[]; })[]; }

export default function Schema() {
  const [isOpen, setIsOpen] = useState(false)

  function  ChangeOpen() {
    setIsOpen(state => !state)
  }

  function DrawKyes(obj: Schema) {
    const keys = Object.keys(obj);
    const allLi = keys.map((key) =>
      <li key={key}><button className={styles.btnQuery}>{key}</button></li>
    );
    return allLi;
  }

  return (
    <div className={styles.allSchema}>
      <button className={styles.btnSchema} onClick={ChangeOpen}>
        <p className={styles.name}>Shema</p>
      </button>
      {isOpen && <div className={styles.blockSchema}>
          <h1 className={styles.h1Schema}>Query</h1>
          <div className={styles.blockFirstInfo}>
            <ul>
              {DrawKyes(schema)}
            </ul>
          </div>
        </div> }
    </div>
  );
}
