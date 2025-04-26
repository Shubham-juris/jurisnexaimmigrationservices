import BgImg from "../../assets/HeroImg/Background.png";

export default function ServicesHeader() {
  return (
    <div className="w-full bg-gray-100">
      <div
        className="w-full h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <h1 className="text-5xl font-bold text-white">SERVICES WHAT WE OFFER</h1>
      </div>
    </div>
  );
}
