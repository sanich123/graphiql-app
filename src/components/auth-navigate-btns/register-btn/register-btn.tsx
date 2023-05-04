export type RegisterBtnProps = {
  [key: string]: (arg: boolean) => void;
};

export default function RegisterBtn({ setIsResetOpen, setIsRegisterOpen }: RegisterBtnProps) {
  return (
    <div className="btns-wrapper">
      <div>Don&prime;t have an account?</div>
      <button
        type="button"
        onClick={() => {
          setIsResetOpen(false);
          setIsRegisterOpen(true);
        }}
        className="btns-wrapper__nav-btn"
      >
        Register
      </button>
    </div>
  );
}
