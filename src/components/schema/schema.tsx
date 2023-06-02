import useOpenCloseSchema from '@/hooks/use-open-close-schema';
import dynamic from 'next/dynamic';
import DocsBtn from '../docs-btn/docs-btn';
import SchemaBtn from '../schema-btn/schema-btn';

import Loader from '../loader/loader';
import styles from './schema.module.scss';

const ListOfDocuments = dynamic(() => import('../docs-list/docs-list'), { loading: () => <Loader />, ssr: false });
const ListOfSchema = dynamic(() => import('../schema-list/schema-list'), { loading: () => <Loader />, ssr: false });

export default function Schema() {
  const { isOpenDoc, isOpenSchema, setIsOpenDoc, setIsOpenSchema } = useOpenCloseSchema();

  return (
    <div className={styles.allSchema}>
      <DocsBtn isOpenDoc={isOpenDoc} setIsOpenDoc={setIsOpenDoc} setIsOpenSchema={setIsOpenSchema} />
      <SchemaBtn isOpenSchema={isOpenSchema} setIsOpenDoc={setIsOpenDoc} setIsOpenSchema={setIsOpenSchema} />
      {isOpenDoc && <ListOfDocuments />}
      {isOpenSchema && <ListOfSchema />}
    </div>
  );
}
