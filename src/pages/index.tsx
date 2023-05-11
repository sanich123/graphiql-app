import { BigLogo } from '@/components/svg/svg';
import { useAppSelector } from '@/redux/hooks/hooks';
import { LANG } from '@/utils/languages';
import Image from 'next/image';
import Img1 from '../../public/img/img1.png';
import BtnTry from '@/components/btn-try/btn-try';
import { useState } from 'react';
import { LINKS } from '@/utils/const';

export default function Home() {
  const { theme, language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  const [activeTab, setActiveTab] = useState(LANG[language].tabs[0]);

  return (
    <div className={`wrapper-main ${theme}`}>
      <main className="main">
        <BigLogo />
        <h1 className="main__h1">{LANG[language].main.h1}</h1>
        <p className="main__p">{LANG[language].main.p}</p>
        <BtnTry place="main" />
        <Image src={Img1} alt="Изображение graphql editor" width={1074} height={523} className="main__image" placeholder="blur" />
        <section className="main__tabs tabs">
          <div className="tabs-wrapper">
            <h2 className="tabs__h2">Functionality</h2>
            <ul className="tabs__list">
              {LANG[language].tabs.map((tab) => (
                <li key={tab} className={`tabs__list--item ${tab === activeTab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
                  {tab}
                </li>
              ))}
            </ul>
            <BtnTry place={'tabs'} />
          </div>
          <div className="iframe-wrapper">
            <iframe
              className="tabs__iframe"
              width="500"
              height="300"
              src={LINKS[activeTab as keyof typeof LINKS]}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>
      </main>
    </div>
  );
}
