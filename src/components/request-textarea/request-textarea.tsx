import { useAppSelector } from '@/redux/hooks/hooks';
import useTextEditor from '@/hooks/use-text-editor';
import { Textarea } from '../textarea/textarea';
import RequestBtn from '../request-btn/request-btn';
import { TEXTAREA_PLACES } from '@/constants/enums';
import { LANG } from '@/constants/languages';
import styles from '../editor/Editor.module.scss';

export default function RequestTextarea() {
  const { sideEditor, queryHeader, title } = styles;
  const { openEditor } = useTextEditor();
  const { language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);

  return (
    <div className={sideEditor}>
      <div className={queryHeader}>
        <div className={title} onClick={openEditor}>
          {LANG[language].graphQlPage.queryHeader}
        </div>
        <RequestBtn />
      </div>
      <Textarea place={TEXTAREA_PLACES.request} />
    </div>
  );
}
