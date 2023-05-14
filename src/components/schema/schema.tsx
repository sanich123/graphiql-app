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
  const dataDoc = useSelector((state: RootState) => state.apiData.dataDoc);
  let objQuery;
  let objDoc;
  if (dataQuery !== '') {
    objQuery = JSON.parse(dataQuery);
  }

  if (dataDoc !== '') {
    objDoc = JSON.parse(dataDoc);
  }


  function DrawKyes(obj: { data: { __schema: { queryType: { fields: []; }; }; }; }) {
    try {
      if(obj === undefined || dataQuery === '') {
        return (
          <p className={styles.pInfoCorrect}>Enter correct api</p>
        )
      }
        const arr = obj.data.__schema.queryType.fields;
        const allLi = arr.map((item: { name: string }) => {
          console.log(item)
          return (
            <li className={styles.liSchema} key={item.name}>
              <button className={styles.btnQuery}>{item.name}</button>
            </li>
          )
        }
        );
        return allLi;
    } catch(e) {
      return (
        <p className={styles.pInfoCorrect}>Enter correct api</p>
      )
    }
  }

  return (
    <div className={styles.allSchema}>
      <button
        className={styles.btnDoc}
        onClick={() => {
          setIsOpenDoc(state => !state);
          setIsOpenSchema(false);
        }}
      >
        <p className={styles.name}>DOCS</p>
      </button>
      <button
        className={styles.btnSchema}
        onClick={() => {
          setIsOpenSchema(state => !state);
          setIsOpenDoc(false);
        }}
      >
        <p className={styles.name}>Shema</p>
      </button>
      {isOpenDoc && <div className={styles.blockSchema}>
          <h1 className={styles.h1Schema}>QUERIES</h1>
          <div className={styles.blockFirstInfo}>
            <ul className={styles.ulSchema}>
              {DrawKyes(objQuery)}
            </ul>
          </div>
        </div>
      }
        {isOpenSchema && <div className={styles.blockSchema}>
        <div className={styles.blockFirstInfo}>
          <h1 className={styles.h1Schema}>SCHEMA</h1>
        </div>
        </div> }
    </div>
  );
}
