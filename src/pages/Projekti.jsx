import React from "react";
import { FaRegFaceSmileWink } from "react-icons/fa6";

export default function Projekti() {
  return (
    <>
      <div className="w-full h-screen">
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
          <div class="flex flex-col items-center">
            <div class="w-40 h-40 rounded-full overflow-hidden mt-4">
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

          <div class="flex flex-col items-center">
            <div class="w-40 h-40 rounded-full overflow-hidden mt-4">
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

          <div class="flex flex-col items-center">
            <div class="w-40 h-40 rounded-full overflow-hidden mt-4">
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

          <div class="flex flex-col items-center">
            <div class="w-40 h-40 rounded-full overflow-hidden mt-4">
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
        <div className="flex justify-end items-center my-4 pr-16">
          <p className="text-md">
            Želiš se prijaviti? Imaš pitanja? Pošalji poruku na naš <br />{" "}
            Instagram profil...
          </p>
        </div>
      </div>
    </>
  );
}
