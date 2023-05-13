import { useState } from 'react';
import styles from './schema.module.scss';
import { DATA_SCHEMA } from '@/data/data-schema';
import { DATA_2 } from '@/data/data-2';
import { useSelector } from 'react-redux';
import { RootState } from "@/redux/store";
import React from "react";


export default function Schema() {
  const [isOpenDoc, setIsOpenDoc] = useState(false);
  const [isOpenSchema, setIsOpenSchema] = useState(false);
  const dataQuery = useSelector((state: RootState) => state.apiData.dataQuery);
  let objQuery;
  if (dataQuery !== '') {
    objQuery = JSON.parse(dataQuery)
    console.log(JSON.parse(dataQuery))
  }


  function DrawKyes(obj: { data: { __schema: { queryType: { fields: []; }; }; }; }) {
    if(obj === undefined) {
      return (
        <p>uncorrect</p>
      )
    }
      const arr = obj.data.__schema.queryType.fields;
      const allLi = arr.map((item: { name: string }) => {
        console.log(item)
        return (
          <li key={item.name}><button className={styles.btnQuery}>{item.name}</button></li>
        )
      }
      );
      return allLi;
  }

  return (
    <div className={styles.allSchema}>
      <button
        className={styles.btnDoc}
        onClick={() => {
          setIsOpenDoc(state => !state);
          if (isOpenSchema === true) setIsOpenSchema(false);
        }}
      >
        <p className={styles.name}>DOCS</p>
      </button>
      <button
        className={styles.btnSchema}
        onClick={() => {
          setIsOpenSchema(state => !state);
          if (isOpenDoc === true) setIsOpenDoc(false);
        }}
      >
        <p className={styles.name}>Shema</p>
      </button>
      {isOpenDoc && <div className={styles.blockSchema}>
          <h1 className={styles.h1Schema}>Query</h1>
          <div className={styles.blockFirstInfo}>
            <ul>
              {DrawKyes(objQuery)}
            </ul>
          </div>
        </div> }
        {isOpenSchema && <div className={styles.blockSchema}>
          <h1 className={styles.h1Schema}>FFFFF</h1>
        </div> }
    </div>
  );
}
