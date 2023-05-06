import { AUTH_NAV_BTNS_TEXT, AUTH_PLACES } from '@/utils/const';
import { filterBtns } from '@/utils/helpers';

type AuthNavigateBtnsProps = {
  place: AUTH_PLACES;
  setPlace: (arg: AUTH_PLACES) => void;
};

export default function AuthNavigateBtns({ place, setPlace }: AuthNavigateBtnsProps) {
  return (
    <div className="auth-wrapper__nav-btns">
      {AUTH_NAV_BTNS_TEXT.filter(filterBtns(place)).map(({ phrase, btnText }) => (
        <div key={btnText} className="btns-wrapper">
          <div>{phrase}</div>
          <button type="button" onClick={() => setPlace(btnText)} className="btns-wrapper__nav-btn">
            {btnText}
          </button>
        </div>
      ))}
    </div>
  );
}
