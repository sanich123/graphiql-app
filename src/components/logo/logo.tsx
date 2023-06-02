import Link from 'next/link';
import { LogoIcon } from '../svg/svg';
import { LANG } from '@/constants/languages';
import { useAppSelector } from '@/redux/hooks/hooks';
import { ROUTES } from '@/constants/enums';

export default function Logo({ place }: { place: string }) {
  const { language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  return (
    <Link href={ROUTES.main} className={`${place}__logo`}>
      <LogoIcon />
      <span className={`${place}__logo--text`}>{LANG[language].graphiql}</span>
    </Link>
  );
}
