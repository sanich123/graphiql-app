import { useAppSelector } from '@/redux/hooks/hooks';
import { LANG } from '@/constants/languages';
import styles from '../schema/schema.module.scss';

type SchemaBtnProps = {
  setIsOpenDoc: (arg: boolean) => void;
  setIsOpenSchema: (arg: boolean) => void;
  isOpenSchema: boolean;
};

export default function SchemaBtn({ isOpenSchema, setIsOpenDoc, setIsOpenSchema }: SchemaBtnProps) {
  const { btnSchema, name } = styles;
  const { language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);

  return (
    <button
      className={btnSchema}
      onClick={() => {
        setIsOpenSchema(!isOpenSchema);
        setIsOpenDoc(false);
      }}
    >
      <p className={name}>{LANG[language].graphQlPage.schemaHeader}</p>
    </button>
  );
}
