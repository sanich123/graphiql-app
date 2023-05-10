import { ROUTES } from '@/utils/const';
import Link from 'next/link';
import { LogoIcon } from '../svg/svg';
import { LANG } from '@/utils/languages';
import { useAppSelector } from '@/redux/hooks/hooks';

export default function Logo({ place }: { place: string }) {
  const { language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);
  return (
    <Link href={ROUTES.main} className={`${place}__logo`}>
      <LogoIcon />
      <span className={`${place}__logo--text`}>{LANG[language].graphiql}</span>
    </Link>
  );
}
