export type RegisterBtnProps = {
  [key: string]: (arg: boolean) => void;
};

export default function RegisterBtn({ setIsForgetPassword, setIsRegistered }: RegisterBtnProps) {
  return (
    <>
      {'Dont have an account?'}
      <button
        type="button"
        onClick={() => {
          setIsForgetPassword(false);
          setIsRegistered(true);
        }}
      >
        Register
      </button>
    </>
  );
}
