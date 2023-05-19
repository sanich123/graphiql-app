import { useAppSelector } from '@/redux/hooks/hooks';
import { LANG } from '@/utils/languages';
import { useState } from 'react';
import BtnTry from '../btn-try/btn-try';
import Image from 'next/image';
import gifVideo from '../../../public/img/gif-test.gif';
import video from '../../../public/sample.webm';

// import IFrame from '../iframe/iframe';

export default function Tabs() {
  const { language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  const [activeTab, setActiveTab] = useState(LANG[language].tabs[0]);
  return (
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
      <video className="tabs__iframe" src="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1h4A3HkttVxJKcyfAI_l-3Ca4G7z2cS2v" controls />
      <Image src={gifVideo} alt="" className="tabs__iframe" />
      {/* <IFrame activeTab={activeTab} /> */}
    </section>
  );
}
