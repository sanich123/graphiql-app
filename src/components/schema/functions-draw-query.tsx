import styles from './schema.module.scss';


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
    // console.log('fff');
    // console.log(obj);
    // console.log(dataMutation);

    if (obj === undefined) {
      return (
        <p className={styles.pInfoCorrect}>Enter correct api</p>
      )
    } else if (obj.data.__schema.mutationType === null) {
      return (
        <p className={styles.pInfoCorrect}>No mutations</p>
      )
    } else {
      // console.log('info:');
      // console.log(obj.data.__schema.mutationType.fields);
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
      const allLi = arr.map((item: { kind: string, name: string }) => {
        if (item.kind === 'OBJECT') {
          return (
            <li className={`${styles.liSchema} ${styles.liSchemaTypes}`} key={item.name}>
              <span className={styles.spanType}>type</span> {`${item.name} {
                ${'item.kind'}
              }`}
            </li>
          )
        }

      }
      );
      return allLi;
  } catch {
    return (
      <p className={styles.pInfoCorrect}>Enter correct api</p>
    )
  }
}
