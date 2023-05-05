import { filterBtns } from '@/utils/helpers';

type AuthNavigateBtnsProps = {
  isResetOpen: boolean;
  isRegisterOpen: boolean;
  setIsResetOpen: (arg: boolean) => void;
  setIsRegisterOpen: (arg: boolean) => void;
};

export default function AuthNavigateBtns({ isResetOpen, isRegisterOpen, setIsResetOpen, setIsRegisterOpen }: AuthNavigateBtnsProps) {
  const filtredBtns = filterBtns(isResetOpen, isRegisterOpen);
  return (
    <div className="auth-wrapper__nav-btns">
      {filtredBtns.map(({ phrase, isReset, isRegister, btnText }) => (
        <div key={btnText} className="btns-wrapper">
          <div>{phrase}</div>
          <button
            type="button"
            onClick={() => {
              setIsResetOpen(isReset);
              setIsRegisterOpen(isRegister);
            }}
            className="btns-wrapper__nav-btn"
          >
            {btnText}
          </button>
        </div>
      ))}
    </div>
  );
}
