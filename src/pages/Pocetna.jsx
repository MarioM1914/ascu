import React from "react";
import Hero from "../components/Hero";

export default function Pocetna() {
  return (
    <>
      <Hero
        cName="relative"
        heroImg={"/src/assets/HeroImg.jpg"}
        name="Akademski jedriličarski klub Universitas Split"
        title="More je onoga koji ga uživa"
        text="Novi val popularizacije maritimne kulture i sportskog jedrenja"
      />

      {/* Card 1 */}
      <div className="flex flex-wrap">
        <div className="w-full h- md:max-w-full mt-16">
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md">
            <img
              src="/src/assets/card1.jpg"
              alt="Image"
              className="h-72 md:w-1/2 object-cover rounded-tl-lg rounded-tr-lg md:rounded-bl-lg md:rounded-tr-none"
            />
            <div className="md:w-1/2 flex flex-wrap justify-start items-center pl-6 pt-4 pb-4 mx-3">
              <h1 className="text-gray-700 uppercase text-3xl md:text-5xl">
                Mi smo ...
              </h1>
              <p className="text-gray-700">
                <span className="font-bold text-blue-400">AJK Universitas</span>{" "}
                je udruga Sveučilišta u Splitu osnovana s ciljem{" "}
                <span className="font-bold text-blue-400">
                  popularizacije maritimne kulture i razvoja
                </span>{" "}
                sportsko-rekreativnog jedrenja među studentima te promocije
                Sveučilišta kao{" "}
                <span className="font-bold text-blue-400">atraktivne</span>{" "}
                destinacije za studiranje.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full max-w-full mt-16 mb-4">
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md">
            <div className="md:w-1/2 flex flex-wrap justify-start items-center pl-6 pt-4 pb-4 mx-3 order-2 md:order-1">
              <p className="text-gray-700">
                More i maritimna kultura sastavni su djelovi našeg identiteta s
                kojim se dičimo. Plovidba je nedjeljivi dio maritimne kulture,
                no ipak manje od 10% studenata je imalo priliku barem jednom
                doživjeti plovidbu i jedrenje.
              </p>
              <br />
              <p className="text-gray-700">
                Unatoč činjenici da smo svjetski lideri u nautičkom turizmu i da
                su nam marine pune jahti i brodica, našoj su dici plovidba i
                jedrenje još uvijek nešto apstraktno i nedostižno.
              </p>
            </div>
            <img
              src="/src/assets/card2.jpg"
              alt="Image"
              className="h-72 order-1 md:order-2 md:w-1/2 object-fit rounded-tr-lg rounded-tl-lg md:rounded-br-lg md:rounded-tl-none"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full h- md:max-w-full mt-16 mb-16">
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md">
            <img
              src="/src/assets/card3.jpg"
              alt="Image"
              className="h-72 md:w-1/2 object-cover rounded-tl-lg rounded-tr-lg md:rounded-bl-lg md:rounded-tr-none"
            />
            <div className="md:w-1/2 flex flex-wrap justify-start items-center pl-6 pt-4 pb-4 mx-3">
              <p className="text-gray-700 md:text-3xl">
                <span className="font-bold text-blue-400">Naša misija</span> je
                plovidbu i sportsko jedrenje{" "}
                <span className="font-bold text-blue-400">
                  učiniti dostupno
                </span>{" "}
                svakom članu akademske zajednice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
