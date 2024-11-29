import React from "react";

export default function MiSmo() {
  return (
    <>
      <div className="relative">
        <img
          src="/assets/card2.jpg"
          alt="Image"
          className="w-full h-screen object-cover"
        />
        <div className="absolute top-3/4 lg:top-1/4 lg:right-0 flex flex-wrap justify-start items-center mr-8">
          <div className="bg-white p-4 rounded-xl w-[680px] h-[430px]">
            <h1 className="text-gray-700 uppercase text-3xl pb-4">
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
            <br />
            <p className="text-gray-700">
              More i maritimna kultura sastavni su djelovi našeg identiteta s
              kojim se dičimo. Plovidba je nedjeljivi dio maritimne kulture, no
              ipak manje od 10% studenata je imalo priliku barem jednom
              doživjeti plovidbu i jedrenje.
            </p>
            <br />
            <p className="text-gray-700">
              Unatoč činjenici da smo svjetski lideri u nautičkom turizmu i da
              su nam marine pune jahti i brodica, našoj su dici plovidba i
              jedrenje još uvijek nešto apstraktno i nedostižno.
            </p>
            <br />
            <p className="text-gray-700">
              <span className="font-bold text-blue-400">Naša misija</span> je
              plovidbu i sportsko jedrenje{" "}
              <span className="font-bold text-blue-400">učiniti dostupno</span>{" "}
              svakom članu akademske zajednice.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
/* transform translate-x-1/4 lg:transform-none */