export type RegisterBtnProps = {
  [key: string]: (arg: boolean) => void;
};

export default function RegisterBtn({ setIsResetOpen, setIsRegisterOpen }: RegisterBtnProps) {
  return (
    <>
      {'Dont have an account?'}
      <button
        type="button"
        onClick={() => {
          setIsResetOpen(false);
          setIsRegisterOpen(true);
        }}
      >
        Register
      </button>
    </>
  );
}
