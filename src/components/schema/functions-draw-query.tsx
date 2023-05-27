import { ReactElement, JSXElementConstructor, ReactFragment, useState } from 'react';
import styles from './schema.module.scss';
import { ArgsArr, ItemArrField, ItemInputField, ItemSchemaTypes } from './types';


export function DrawKyes(obj: { data: { __schema: { types: ItemSchemaTypes[] } } } | undefined, name: 'Query' | 'Mutation') {
  try {
    if (obj === undefined) {
      return <p className={styles.pInfoCorrect}>Enter correct api</p>;
    }
    const arr = obj.data.__schema.types;
    let arrQuery: ItemArrField[] | [] = [];
    arr.forEach((type) => {
      if (type.name === name) {
        arrQuery = type.fields;
      }
    });
    if (name === 'Mutation' && arrQuery[0] === undefined) {
      return <p className={styles.pInfoCorrect}>No mutations</p>;
    }
    if (arrQuery) {
      const allLi = arrQuery.map((item: { name: string }) => {

        return (
          <div>
            <li className={styles.liSchema} key={`00${item.name}`}>
              <button className={styles.btnQuery} value={item.name}
                onClick={(e: React.SyntheticEvent) => {
                  e.preventDefault();
                  console.log(item.name)}}
              >
                {item.name}
              </button>
            </li>
          </div>
        )
      }
      );
      return allLi;
    }
  } catch {
    return <p className={styles.pInfoCorrect}>Enter correct api</p>;
  }
}

export function DrawKyesSchema(obj: { data: { __schema: { types: ItemSchemaTypes[] } } } | undefined) {
  try {
    if (obj === undefined) {
      return <p className={styles.pInfoCorrect}>Enter correct api</p>;
    }
    const arr = obj.data.__schema.types;
    const allLi = arr.map((item: ItemSchemaTypes) => {
      if (item.kind === 'OBJECT') {
        const arrFields = item.fields;
        let allArgs: string | number | boolean | JSX.Element[] | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined;
        const allLi = arrFields.map((item: ItemArrField) => {
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
            allArgs = item.args.map((arg: ArgsArr ) => {
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
              );
            });
          }
          return (
            <div className={styles.nameFields} key={`0${item.name}`}>
              <span className={styles.spanFieldName}>{item.name}</span>
              {condition &&
                  <div className={styles.blockAllArgs}>
                  <span className={styles.spanOpenBracket}>(</span>
                  {allArgs}
                  <span>)</span>
                </div>
              }
              <span className={styles.spanColon}>:</span>
              <span className={styles.spanFieldValue}>{fieldValue}</span>
            </div>
          );
        });
        return (
          <li className={`${styles.liSchema} ${styles.liSchemaTypes}`} key={`4${item.name}`}>
            <span className={styles.spanType}>type</span>
            <span className={styles.spanTypeName}>{item.name}</span>
            <span>{'{'}</span>
            {allLi}
            <span>{'}'}</span>
          </li>
        );
      }
      if (item.kind === 'SCALAR') {
        return (
          <li className={`${styles.liSchema} ${styles.liSchemaTypes}`} key={`5${item.name}`}>
            <span className={styles.spanType}>scalar</span>
            <span className={styles.spanTypeName}>{item.name}</span>
          </li>
        );
      }
      if (item.kind === 'INPUT_OBJECT') {
        const arrInputFields = item.inputFields;
        const allLi = arrInputFields.map((item : ItemInputField) => {
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
          );
        });
        return (
          <li className={`${styles.liSchema} ${styles.liSchemaTypes}`} key={`6${item.name}`}>
            <span className={styles.spanType}>input</span>
            <span className={styles.spanTypeName}>{item.name}</span>
            <span>{'{'}</span>
            {allLi}
            <span>{'}'}</span>
          </li>
        );
      }
      if (item.kind === 'ENUM') {
        const arrEnum = item.enumValues;
        const allLi = arrEnum.map((item: { name: string }) => (
              <div className={styles.nameFields} key={`3${item.name}`}>
                <span>{item.name}</span>
              </div>
            ));
        return (
          <li className={`${styles.liSchema} ${styles.liSchemaTypes}`} key={`7${item.name}`}>
            <span className={styles.spanType}>enum</span>
            <span className={styles.spanTypeName}>{item.name}</span>
            <span>{'{'}</span>
            {allLi}
            <span>{'}'}</span>
          </li>
        );
      }
    });
    return allLi;
  } catch {
    return <p className={styles.pInfoCorrect}>Enter correct api</p>;
  }
}
