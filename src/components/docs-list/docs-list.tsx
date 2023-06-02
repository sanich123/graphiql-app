import { useAppSelector } from '@/redux/hooks/hooks';
import React from 'react';
import { DrawKyes } from '../schema/functions-draw-query';
import styles from '../schema/schema.module.scss';
import PWrongSchema from '../p-wrong-schema/p-wrong-schema';

export default function DocsList() {
  const { dataDoc } = useAppSelector(({ apiData }) => apiData);
  const { blockSchema, blockSchemaBorderDoc, blockFirstInfo, h1Schema, ulSchema } = styles;

  return (
    <div className={`${blockSchema} ${blockSchemaBorderDoc}`}>
      <div className={blockFirstInfo}>
        <h1 className={h1Schema}>QUERIES</h1>
        <ul className={ulSchema}>{dataDoc ? DrawKyes(JSON.parse(dataDoc), 'Query') : <PWrongSchema />}</ul>
        <h1 className={h1Schema}>MUTATION</h1>
        <ul className={ulSchema}>{dataDoc ? DrawKyes(JSON.parse(dataDoc), 'Mutation') : <PWrongSchema />}</ul>
      </div>
    </div>
  );
}
