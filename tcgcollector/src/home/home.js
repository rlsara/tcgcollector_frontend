import  Carrusel  from "./carousel/carousel";
export default function Home() {
  return (
    <div>
      <Carrusel />
      <div className="container min-h-screen h-fit mx-auto mt-3">
        <p className="text-center">Home</p>
      </div>
    </div>
  );
}
