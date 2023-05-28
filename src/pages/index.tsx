import { useAppSelector } from '@/redux/hooks/hooks';
import { LANG } from '@/utils/languages';
import Image from 'next/image';
import Img1 from '../../public/img/home-sceenshot.png';
import Img1Dark from '../../public/img/home-sceenshot-dark.png';
import { BigLogo } from '../components/svg/svg';
import Tabs from '@/components/tabs/tabs';
import BtnTry from '@/components/btn-try/btn-try';

export default function Home() {
  const { language, theme } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  const isLight = theme === 'light';

  return (
    <main>
      <section className="home-main text-center">
        <BigLogo />
        <h1 className="h1 font-bold text-4xl mb-2">{LANG[language].main.h1}</h1>
        <p className="description mb-6">{LANG[language].main.p}</p>
        <div className="mb-12">
          <BtnTry />
        </div>
        <Image
          src={isLight ? Img1 : Img1Dark}
          alt="Изображение graphql editor"
          width={1074}
          height={523}
          className="main__image rounded-3xl"
          placeholder="blur"
        />
      </section>
      <section className="tabs mt-40">
        <Tabs />
      </section>
    </main>
  );
}
