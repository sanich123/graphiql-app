export default function ResetBtn({ setIsForgetPassword }: { setIsForgetPassword: (arg: boolean) => void }) {
  return (
    <>
      {'Forgot the password? '}
      <button type="button" onClick={() => setIsForgetPassword(true)}>
        Reset password
      </button>
    </>
  );
}
