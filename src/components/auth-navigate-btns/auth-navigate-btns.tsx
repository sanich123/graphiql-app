import { useAppSelector } from '@/redux/hooks/hooks';
import { AUTH_NAV_BTNS_TEXT, AUTH_PLACES } from '@/utils/const';
import { filterBtns } from '@/utils/helpers';

type AuthNavigateBtnsProps = {
  place: AUTH_PLACES;
  setPlace: (arg: AUTH_PLACES) => void;
};

export default function AuthNavigateBtns({ place, setPlace }: AuthNavigateBtnsProps) {
  const { language } = useAppSelector(({ changeThemeLang }) => changeThemeLang);

  return (
    <div className="auth-wrapper__nav-btns">
      {(AUTH_NAV_BTNS_TEXT[language] as []).filter(filterBtns(place)).map(({ phrase, btnText, value }) => (
        <div key={btnText} className="btns-wrapper">
          <div className="btns-wrapper__text">{phrase}</div>
          <button type="button" onClick={() => setPlace(value)} className="btns-wrapper__nav-btn">
            {btnText}
          </button>
        </div>
      ))}
    </div>
  );
}
