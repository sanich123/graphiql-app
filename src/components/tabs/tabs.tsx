import { useAppSelector } from '@/redux/hooks/hooks';
import { LANG } from '@/constants/languages';
import { useState } from 'react';
import BtnTry from '../btn-try/btn-try';
import { LINKS } from '@/constants/const';
import Image from 'next/image';
import { THEMES } from '@/constants/enums';

export default function Tabs() {
  const { theme } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  const imgSrcNum = theme === THEMES.light ? 0 : 1;
  const { language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  const [activeTab, setActiveTab] = useState(LANG[language].tabs[0]);

  return (
    <div className="main__tabs tabs">
      <div className="tabs-wrapper">
        <h2 className="h2">Functionality</h2>
        <ul className="tabs__list">
          {LANG[language].tabs.map((tab) => (
            <li key={tab} className={`tabs__list--item ${tab === activeTab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
              {tab}
            </li>
          ))}
        </ul>
        <BtnTry />
      </div>
      <Image src={LINKS[activeTab as keyof typeof LINKS][imgSrcNum]} alt="" width="980" height="500" />
    </div>
  );
}
