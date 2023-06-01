import useOpenCloseSchema from '@/hooks/use-open-close-schema';
import DocsBtn from '../docs-btn/docs-btn';
import SchemaBtn from '../schema-btn/schema-btn';
import DocsList from '../docs-list/docs-list';
import SchemaList from '../schema-list/schema-list';
import styles from './schema.module.scss';

export default function Schema() {
  const { isOpenDoc, isOpenSchema, setIsOpenDoc, setIsOpenSchema } = useOpenCloseSchema();

  return (
    <div className={styles.allSchema}>
      <DocsBtn isOpenDoc={isOpenDoc} setIsOpenDoc={setIsOpenDoc} setIsOpenSchema={setIsOpenSchema} />
      <SchemaBtn isOpenSchema={isOpenSchema} setIsOpenDoc={setIsOpenDoc} setIsOpenSchema={setIsOpenSchema} />
      {isOpenDoc && <DocsList />}
      {isOpenSchema && <SchemaList />}
    </div>
  );
}
