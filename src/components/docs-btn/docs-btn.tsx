import styles from '../schema/schema.module.scss';

type DocsBtnProps = {
  setIsOpenDoc: (arg: boolean) => void;
  setIsOpenSchema: (arg: boolean) => void;
  isOpenDoc: boolean;
};

export default function DocsBtn({ isOpenDoc, setIsOpenDoc, setIsOpenSchema }: DocsBtnProps) {
  const { btnDoc, name } = styles;
  return (
    <button
      className={btnDoc}
      onClick={() => {
        setIsOpenDoc(!isOpenDoc);
        setIsOpenSchema(false);
      }}
    >
      <p className={name}>DOCS</p>
    </button>
  );
}
