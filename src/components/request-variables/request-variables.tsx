import { useAppSelector } from '@/redux/hooks/hooks';
import useTextEditor from '@/hooks/use-text-editor';
import { Textarea } from '../textarea/textarea';
import { TEXTAREA_PLACES } from '@/constants/enums';
import { LANG } from '@/constants/languages';
import styles from '../editor/Editor.module.scss';

export default function RequestVariables() {
  const { sideVar, varHeader, title } = styles;
  const { openEditor } = useTextEditor();
  const { language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);

  return (
    <div className={sideVar}>
      <div className={varHeader}>
        <div className={title} onClick={openEditor}>
          {LANG[language].graphQlPage.variablesHeader}
        </div>
      </div>
      <Textarea place={TEXTAREA_PLACES.variables} />
    </div>
  );
}
