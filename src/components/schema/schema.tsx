import { useState } from 'react';
import styles from './schema.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import React from 'react';
import { DrawKyes, DrawKyesSchema } from './functions-draw-query';

export default function Schema() {
  const [isOpenDoc, setIsOpenDoc] = useState(false);
  const [isOpenSchema, setIsOpenSchema] = useState(false);
  const dataDoc = useSelector((state: RootState) => state.apiData.dataDoc);
  let objDoc;

  if (dataDoc) {
    objDoc = JSON.parse(dataDoc);
  }

  return (
    <div className={styles.allSchema}>
      <button
        className={styles.btnDoc}
        onClick={() => {
          setIsOpenDoc((state) => !state);
          setIsOpenSchema(false);
        }}
      >
        <p className={styles.name}>DOCS</p>
      </button>
      <button
        className={styles.btnSchema}
        onClick={() => {
          setIsOpenSchema((state) => !state);
          setIsOpenDoc(false);
        }}
      >
        <p className={styles.name}>Shema</p>
      </button>
      {isOpenDoc && (
        <div className={`${styles.blockSchema} ${styles.blockSchemaBorderDoc}`}>
          <div className={styles.blockFirstInfo}>
            <h1 className={styles.h1Schema}>QUERIES</h1>
            <ul className={styles.ulSchema}>{DrawKyes(objDoc, 'Query')}</ul>
            <h1 className={styles.h1Schema}>MUTATION</h1>
            <ul className={styles.ulSchema}>{DrawKyes(objDoc, 'Mutation')}</ul>
          </div>
        </div>
      )}
      {isOpenSchema && (
        <div className={styles.blockSchema}>
          <div className={styles.blockFirstInfo}>
            <h1 className={styles.h1Schema}>SCHEMA</h1>
            <ul className={styles.ulSchema}>{DrawKyesSchema(objDoc)}</ul>
          </div>
        </div>
      )}
    </div>
  );
}
