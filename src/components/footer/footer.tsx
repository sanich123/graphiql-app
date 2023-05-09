import React from 'react';
import Logo from '../logo/logo';
import { RSLogo } from '../svg/svg';
import { useAppSelector } from '@/redux/hooks/hooks';
import { DEVELOPERS } from '@/utils/const';
import Link from 'next/link';
import { LANG } from '@/utils/languages';

export default function Footer() {
  const { theme, language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);

  return (
    <footer className={`footer ${theme}`}>
      <nav className="footer__nav">
        <Logo place={'footer'} />
        <RSLogo />
      </nav>
      <div className="footer__copyright copyright">
        <ul className={`copyright__authors ${theme}`}>
          {DEVELOPERS.map(({ name, github }) => {
            const footer = LANG[language].footer;
            return (
              <li key={github} className="copyright__authors--item">
                <Link href={github}>{footer[name as keyof typeof footer]}</Link>
              </li>
            );
          })}
        </ul>
        <div className="copyright__rsschool-info">
          © 2023. {LANG[language].specialFor}
          <Link href="https://app.rs.school/course/schedule?course=react-2023-q1">{LANG[language].rsSchool}</Link>
        </div>
      </div>
    </footer>
  );
}
