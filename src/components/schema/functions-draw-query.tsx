import { ReactElement, ReactFragment } from 'react';
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
      const allLi = arrQuery.map((item: ItemArrField) => {
        const conditionArg = item.args[0] !== undefined;

        const fieldValue =
          item.type.name ||
          item.type.ofType.name ||
          item.type.ofType.ofType.name ||
          item.type.ofType.ofType.ofType.name ||
          item.type.ofType.ofType.ofType.ofType.name ||
          item.type.ofType.ofType.ofType.ofType.ofType.name ||
          item.type.ofType.ofType.ofType.ofType.ofType.ofType.name ||
          item.type.ofType.ofType.ofType.ofType.ofType.ofType.ofType.name;

        const allArgs = item.args.map((arg: ArgsArr) => {
          const argValue =
            arg.type.name ||
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

        return (
          <div className={styles.blockQuery} key={`00${item.name}`}>
            <li className={styles.liSchema}>
              <div className={styles.btnQuery}>{item.name}</div>
              <div className={styles.blockQueryType}>
                <span className={styles.spanBlockQueryType}>type</span>
                {fieldValue}
              </div>
              {conditionArg && (
                <div className={styles.blockQueryArgs}>
                  <span className={styles.spanBlockQueryArgs}>Arguments:</span>
                  {allArgs}
                </div>
              )}
            </li>
          </div>
        );
      });
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
        let allArgs: string | number | boolean | JSX.Element[] | ReactElement<string> | ReactFragment | null | undefined;
        const allLiFields = arrFields.map((itemField: ItemArrField) => {
          const condition = itemField.args[0] !== undefined;
          const fieldValue =
            itemField.type.name ||
            itemField.type.ofType.name ||
            itemField.type.ofType.ofType.name ||
            itemField.type.ofType.ofType.ofType.name ||
            itemField.type.ofType.ofType.ofType.ofType.name ||
            itemField.type.ofType.ofType.ofType.ofType.ofType.name ||
            itemField.type.ofType.ofType.ofType.ofType.ofType.ofType.name ||
            itemField.type.ofType.ofType.ofType.ofType.ofType.ofType.ofType.name;

          allArgs = itemField.args.map((arg: ArgsArr) => {
            const argValue =
              arg.type.name ||
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

          return (
            <div className={styles.nameFields} key={`0${itemField.name}`}>
              <span className={styles.spanFieldName}>{itemField.name}</span>
              {condition && (
                <div className={styles.blockAllArgs}>
                  <span className={styles.spanOpenBracket}>(</span>
                  {allArgs}
                  <span>)</span>
                </div>
              )}
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
            {allLiFields}
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
        const allLiInputFields = arrInputFields.map((itemInputFields: ItemInputField) => {
          const fieldInputValue =
            itemInputFields.type.name ||
            itemInputFields.type.ofType.name ||
            itemInputFields.type.ofType.ofType.name ||
            itemInputFields.type.ofType.ofType.ofType.name ||
            itemInputFields.type.ofType.ofType.ofType.ofType.name ||
            itemInputFields.type.ofType.ofType.ofType.ofType.ofType.name ||
            itemInputFields.type.ofType.ofType.ofType.ofType.ofType.ofType.name ||
            itemInputFields.type.ofType.ofType.ofType.ofType.ofType.ofType.ofType.name;
          return (
            <div className={styles.nameFields} key={`2${itemInputFields.name}`}>
              <span className={styles.spanFieldName}>{itemInputFields.name}</span>
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
            {allLiInputFields}
            <span>{'}'}</span>
          </li>
        );
      }
      if (item.kind === 'ENUM') {
        const arrEnum = item.enumValues;
        const allLiEnum = arrEnum.map((itemEnum: { name: string }) => (
          <div className={styles.nameFields} key={`3${itemEnum.name}`}>
            <span>{itemEnum.name}</span>
          </div>
        ));
        return (
          <li className={`${styles.liSchema} ${styles.liSchemaTypes}`} key={`7${item.name}`}>
            <span className={styles.spanType}>enum</span>
            <span className={styles.spanTypeName}>{item.name}</span>
            <span>{'{'}</span>
            {allLiEnum}
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
