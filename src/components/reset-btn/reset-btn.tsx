export default function ResetBtn({ setIsResetOpen }: { setIsResetOpen: (arg: boolean) => void }) {
  return (
    <>
      {'Forgot the password? '}
      <button type="button" onClick={() => setIsResetOpen(true)}>
        Reset password
      </button>
    </>
  );
}
