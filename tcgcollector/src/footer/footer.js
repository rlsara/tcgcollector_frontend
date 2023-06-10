export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-r justify-end sticky bottom-0 from-pink to-purple text-center lg:text-left">
        <div className="py-2 text-center text-md font-semibold leading-relaxed inline-block whitespace-nowrap text-white text-opacity-80">
          © 2023 Copyright:
          <a className="hover:text-white hover:text-opacity-100" href="https://github.com/rlsara">{" "}Sara Ruibal Luis</a>
        </div>
      </footer>
    </>
  );
}
