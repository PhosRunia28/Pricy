export default function LogoHeader() {
  return (
    <div className="flex w-full max-w-fit items-center gap-3">
      <img
        src="./logo.svg"
        alt="logo"
        className="w-full max-w-10 bg-cover bg-center"
      />
      <h2 className="font-bold">Hoster</h2>
    </div>
  );
}
