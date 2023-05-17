import { useAppSelector } from '@/redux/hooks/hooks';
import { LANG } from '@/utils/languages';
import Image from 'next/image';
import Img1 from '../../public/img/img1.png';
import { BigLogo } from '../components/svg/svg';
import Tabs from '@/components/tabs/tabs';
import BtnTry from '@/components/btn-try/btn-try';

export default function Home() {
  const { theme, language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);

  return (
    <div className={`wrapper-main ${theme}`}>
      <main className="main">
        <BigLogo />
        <h1 className="main__h1">{LANG[language].main.h1}</h1>
        <p className="main__p">{LANG[language].main.p}</p>
        <BtnTry place="main" />
        <Image src={Img1} alt="Изображение graphql editor" width={1074} height={523} className="main__image" placeholder="blur" />
        <Tabs />
      </main>
    </div>
  );
}
