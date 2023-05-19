import { useAppSelector } from '@/redux/hooks/hooks';
import { LANG } from '@/utils/languages';
import { useState } from 'react';
import BtnTry from '../btn-try/btn-try';
import IFrame from '../iframe/iframe';

export default function Tabs() {
  const { language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  const [activeTab, setActiveTab] = useState(LANG[language].tabs[0]);
  return (
    <section className="main__tabs tabs">
      {/* <div className="tabs-wrapper">
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
      <IFrame activeTab={activeTab} /> */}
    </section>
  );
}
