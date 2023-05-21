import { ReactElement, JSXElementConstructor, ReactFragment } from 'react';
import styles from './schema.module.scss';
import { ArgsType } from './types';


export function DrawKyes(obj: { data: { __schema: { queryType: { fields: []; }; }; }; }) {
  try {
    if (obj === undefined) {
      return (
        <p className={styles.pInfoCorrect}>Enter correct api</p>
      )
    }
      const arr = obj.data.__schema.queryType.fields;
      const allLi = arr.map((item: { name: string }) => {
        return (
          <li className={styles.liSchema} key={item.name}>
            <button className={styles.btnQuery}>{item.name}</button>
          </li>
        )
      }
      );
      return allLi;
  } catch {
    return (
      <p className={styles.pInfoCorrect}>Enter correct api</p>
    )
  }
}

export function DrawKyesMutation(obj: { data: { __schema: { mutationType: { fields: any; } | null; }; }; } | undefined) {
  try {
    if (obj === undefined) {
      return (
        <p className={styles.pInfoCorrect}>Enter correct api</p>
      )
    } else if (obj.data.__schema.mutationType === null) {
      return (
        <p className={styles.pInfoCorrect}>No mutations</p>
      )
    } else {
      const arr = obj.data.__schema.mutationType.fields;
      const allLi = arr.map((item: { name: string }) => {
        return (
          <li className={styles.liSchema} key={item.name}>
            <button className={styles.btnQuery}>{item.name}</button>
          </li>
        )
      }
      );
      return allLi;
    }
  } catch (error) {
    console.log(error)
    return (
      <p className={styles.pInfoCorrect}>Enter correct api aaa</p>
    )
  }
}

export function DrawKyesSchema(obj: { data: { __schema: { types: any; }; }; } | undefined) {
  try {
    if (obj === undefined) {
      return (
        <p className={styles.pInfoCorrect}>Enter correct api</p>
      )
    }
      const arr = obj.data.__schema.types;
      const allLi = arr.map((item: { kind: string, name: string, fields: any, inputFields: any }) => {
        if (item.kind === 'OBJECT') {
          const arrFields = item.fields;
          let allArgs: string | number | boolean | JSX.Element[] | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined;
          const allLi = arrFields.map((item: {name: string, args: [], type: ArgsType}) => {
            const condition = item.args[0] !== undefined;
            const fieldValue = item.type.name ||
              item.type.ofType.name ||
              item.type.ofType.ofType.name ||
              item.type.ofType.ofType.ofType.name ||
              item.type.ofType.ofType.ofType.ofType.name ||
              item.type.ofType.ofType.ofType.ofType.ofType.name ||
              item.type.ofType.ofType.ofType.ofType.ofType.ofType.name ||
              item.type.ofType.ofType.ofType.ofType.ofType.ofType.ofType.name;

            if (item.args !== []) {
              allArgs = item.args.map((arg: {name: string, type: ArgsType} ) => {
                const argValue = arg.type.name ||
                  arg.type.ofType.name ||
                  arg.type.ofType.ofType.name ||
                  arg.type.ofType.ofType.ofType.name ||
                  arg.type.ofType.ofType.ofType.ofType.name ||
                  arg.type.ofType.ofType.ofType.ofType.ofType.name ||
                  arg.type.ofType.ofType.ofType.ofType.ofType.ofType.name ||
                  arg.type.ofType.ofType.ofType.ofType.ofType.ofType.ofType.name;
                return (
                  <div key={`1${arg.name}`}>
                    <span className={styles.spanArgName}>{arg.name}</span>
                    <span className={styles.spanColon}>:</span>
                    <span className={styles.spanArgValue}>{argValue}</span>
                  </div>
                )
              })
            }
            return (
              <div className={styles.nameFields} key={`0${item.name}`}>
                <span className={styles.spanFieldName}>{item.name}</span>
                {condition &&
                  <div className={styles.blockAllArgs}>
                    <span className={styles.spanOpenBracket}>(</span>
                    {allArgs}
                    <span>)</span>
                  </div> }
                  <span className={styles.spanColon}>:</span>
                  <span className={styles.spanFieldValue}>{fieldValue}</span>
              </div>
            )
          })
          return (
            <li className={`${styles.liSchema} ${styles.liSchemaTypes}`} key={item.name}>
              <span className={styles.spanType}>type</span>
              <span className={styles.spanTypeName}>{item.name}</span>
              <span>{'{'}</span>
              {allLi}
              <span>{'}'}</span>
            </li>
          )
        }
        if (item.kind === 'SCALAR') {
          return (
            <li className={`${styles.liSchema} ${styles.liSchemaTypes}`} key={item.name}>
              <span className={styles.spanType}>scalar</span>
              <span className={styles.spanTypeName}>{item.name}</span>
            </li>
          )
        }
        if (item.kind === 'INPUT_OBJECT') {
          const arrInputFields = item.inputFields;
          console.log(arrInputFields)

          const allLi = arrInputFields.map((item) => {
            const fieldInputValue = item.type.name ||
              item.type.ofType.name ||
              item.type.ofType.ofType.name ||
              item.type.ofType.ofType.ofType.name ||
              item.type.ofType.ofType.ofType.ofType.name ||
              item.type.ofType.ofType.ofType.ofType.ofType.name ||
              item.type.ofType.ofType.ofType.ofType.ofType.ofType.name ||
              item.type.ofType.ofType.ofType.ofType.ofType.ofType.ofType.name;
            return (
              <div className={styles.nameFields} key={`2${item.name}`}>
                <span className={styles.spanFieldName}>{item.name}</span>
                  <span className={styles.spanColon}>:</span>
                  <span className={styles.spanFieldValue}>{fieldInputValue}</span>
              </div>
            )
          })


          return (
            <li className={`${styles.liSchema} ${styles.liSchemaTypes}`} key={item.name}>
              <span className={styles.spanType}>input</span>
              <span className={styles.spanTypeName}>{item.name}</span>
              <span>{'{'}</span>
              {allLi}
              <span>{'}'}</span>
            </li>
          )
        }
      });
      return allLi;
  } catch {
    return (
      <p className={styles.pInfoCorrect}>Enter correct api</p>
    )
  }
}
