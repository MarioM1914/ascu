import React from "react";
import Hero from "../components/Hero";
import { FaRegFaceSmileWink } from "react-icons/fa6";

export default function Pocetna() {
  return (
    <>
      <Hero
        cName="relative"
        heroImg={"/assets/HeroImg.jpg"}
        name="Akademski jedriličarski klub Universitas Split"
        title="More je onoga koji ga uživa"
        text="Novi val popularizacije maritimne kulture i sportskog jedrenja"
      />

      <div className="relative">
        <img
          src="/assets/oNama.jpg"
          alt="Image"
          className="w-full h-screen object-cover"
        />
        <div className="absolute top-3/4 lg:top-1/4 lg:right-0 flex flex-wrap justify-start items-center mr-8">
          <div className="bg-white p-4 rounded-xl w-[680px] h-[490px]">
            <h1 className="text-gray-700 uppercase text-3xl pb-4">O nama</h1>
            <p className="text-gray-700">
              <span className="font-bold text-blue-400">AJK Universitas</span>{" "}
              je udruga Sveučilišta u Splitu osnovana s ciljem{" "}
              <span className="font-bold text-blue-400">
                popularizacije maritimne kulture i razvoja
              </span>{" "}
              sportsko-rekreativnog jedrenja među studentima i djelatnicima
              Sveučilišta u Splitu te pozicioniranja Sveučilišta kao{" "}
              <span className="font-bold text-blue-400">atraktivne</span>{" "}
              destinacije za studiranje.
            </p>
            <br />
            <p className="text-gray-700">
              More i maritimna kultura sastavni su dijelovi našeg identiteta.
              Plovidba je neodvojivi dio kulture života uz more, no ipak, manje
              od 10% studenata je imalo priliku barem jednom doživjeti plovidbu
              i jedrenje.
            </p>
            <br />
            <p className="text-gray-700">
              Unatoč dugoj pomorskoj tradiciji i činjenici da smo svjetski
              lideri u nautičkom turizmu sa stotinama marina, sidrišta i
              privezišta duž hrvatske obale te tisućama brodova koji plove
              istočnom stranom Jadrana, našoj su dici plovidba i jedrenje još
              uvijek nešto apstraktno i nedostižno.
            </p>
            <br />
            <p className="text-gray-700">
              Utoliko,{" "}
              <span className="font-bold text-blue-400">naša misija</span> je
              plovidbu i sportsko jedrenje{" "}
              <span className="font-bold text-blue-400">učiniti dostupno</span>{" "}
              svakom članu akademske zajednice, a vizija je da naše more uistinu
              to i (p)ostane. Naše.
            </p>
            <br />
            <p className="text-gray-700 italic">More je onoga koji ga uživa.</p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen">
        <h1 className="text-gray-700 uppercase text-3xl text-center py-4">
          Naši projekti
        </h1>
        <div className="flex justify-center items-center">
          <p className="text-center w-[50%] my-8">
            U posljednje četiri godine u našim projektima učestvovalo je preko
            1500 studenta, koji su sudjelovali na 102 jedriličarske regate i 674
            sportsko - edukativne plovidbe a preplovili smo i preko 5000nm, što
            je malo više nego od Splita do New Yorka, a tek smo krenuli{" "}
            <FaRegFaceSmileWink className="inline" />
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 pt-8">
          <div class="flex flex-col items-center bg-blue-100 rounded-lg">
            <div class="w-[96%] h-40 rounded-lg overflow-hidden mt-1.5">
              <img
                src="/assets/discoverySailing.jpg"
                alt="Discovery Sailing image"
                class="w-full h-full object-cover"
              />
            </div>
            <h1 class="text-lg text-center italic mt-4">
              “Prvi doživljaj plovidbe i jedrenja” <br />
              <span className="font-bold">Discovery Sailing</span>
            </h1>
            <p class="text-sm text-center text-gray-700 leading-loose mt-4">
              * cilj projekta je omogućiti što većem broju studenata{" "}
              <span className="font-bold">prvi</span> doživljaj plovidbe i
              jedrenja te ih na taj način dodatno potaknuti za život s morem.
              Projekt se sastoji od stručno vođenih rekreativnih i edukativnih
              plovidbi na sportskoj jedrilici.
            </p>
          </div>

          <div class="flex flex-col items-center bg-red-100 rounded-lg">
            <div class="w-[96%] h-40 rounded-lg overflow-hidden mt-1.5">
              <img
                src="/assets/skolaJedrenja.jpg"
                alt="Škola jedrenja image"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 class="text-lg text-center italic mt-4">
              “Na krilima vjetra ja nastavljam ples” <br />
              <span className="font-bold">ASCU Škola jedrenja</span>
            </h1>
            <p class="text-sm text-center text-gray-700 leading-loose mt-4">
              * za one koji već sada znaju da je jedrenje njihov đir i žele
              unaprijediti vlastita znanja i vještine. Jedina mogućnost da
              kontinuirano guštaš, učiš i družiš se u plovidbi.
            </p>
          </div>

          <div class="flex flex-col items-center bg-green-100 rounded-lg">
            <div class="w-[96%] h-40 rounded-lg overflow-hidden mt-1.5">
              <img
                src="/assets/ASCURegata.jpg"
                alt="ASCU Regata image"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 class="text-lg text-center italic mt-4">
              “Citus, Altus, Fortus” <br />
              <span className="font-bold">ASCU Regata</span>
            </h1>
            <p class="text-sm text-center text-gray-700 leading-loose mt-4">
              * Projekt namijenjen već iskusnim jedriličarima i ambicioznim
              “školarcima” s ciljem postizanja što boljih sportskih rezultata na
              regatama diljem Jadrana i šire.
            </p>
          </div>

          <div class="flex flex-col items-center bg-rose-100 rounded-lg">
            <div class="w-[96%] h-40 rounded-lg overflow-hidden mt-1.5">
              <img
                src="/assets/dita.jpg"
                alt="Đita image"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 class="text-lg text-center italic mt-4">
              “Neman tekst” <br />
              <span className="font-bold">Đita</span>
            </h1>
            <p class="text-sm text-center text-gray-700 leading-loose mt-4">
              * tjedan plovidbe, druženja i života na jedrilici sada više nije
              tako nedostižan. Cilj projekta je višednevnu plovidbu učiniti
              dostupnom studentima.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center my-4 pr-16 bg-blue-100 rounded-lg">
          <div className="w-[96%] ">
            <p className="text-md">
              Želiš se prijaviti? Imaš pitanja? Pošalji poruku na naš <br />{" "}
              Instagram profil...
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen">
        <h1 className="text-gray-700 uppercase text-3xl text-center py-4 mt-4">
          Partneri i Donatori
        </h1>
        <div className="flex justify-center items-center">
          <p className="py-4 text-md text-center">
            Svi projekti sufinancirani su uz pomoć naših partnera i donatora. Da
            bi nastavili širiti naš društveni utjecaj neophodna nam je i vaša
            pomoć.
            <br />
            <br />
            Priključite se{" "}
            <span className="font-bold text-blue-400">Novom Valu</span> širenja
            maritimne kulture i omogućimo našoj dici da se zaljube u more jer{" "}
            <span className="font-bold text-blue-400">
              More je onoga koji ga uživa
            </span>
            .
          </p>
        </div>
      </div>
    </>
  );
}
