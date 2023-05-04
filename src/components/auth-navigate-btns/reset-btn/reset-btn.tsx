export default function ResetBtn({ setIsResetOpen }: { setIsResetOpen: (arg: boolean) => void }) {
  return (
    <div className="btns-wrapper">
      <div>{'Forgot the password? '}</div>
      <button type="button" onClick={() => setIsResetOpen(true)} className="btns-wrapper__nav-btn">
        Reset
      </button>
    </div>
  );
}
