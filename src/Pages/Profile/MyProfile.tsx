import nutritionist from "../../assets/Images/nutritionist.png";

export default function MyProfile() {
  return (
    <div id="myprofile-page-container">

        <div className="my-20 w-4/6">
          <img
            className="absolute inset-x-0 shadow-xl bg-white h-80 mx-auto  rounded-full"
            src={nutritionist}
            alt="nutiritionist"
          />
        </div>
        <div className="h-40 bg-gray-800 w-4/6  mx-auto "></div>
        <div className="h-40 bg-white w-4/6 mx-auto bg-white"></div>
        <div className="w-full flex justify-center">
          <div className="max-w rounded overflow-hidden bg-white shadow-lg w-4/6  ">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">
                Mustafa Emre Köykolu
              </div>
              <div className="text-xl mb-2 text-center">
                Ankara Lokantasında Junior Kıdemsiz Baş Şefi
              </div>

              <div className="w-6/6 mx-auto">
                <div>
                  <div className="grid grid-rows-2 grid-col-2 gap-2 mx-auto ">
                    <div className="row-span-1 col-span-1 font-bold ">
                      Kullanıcı Adı:
                    </div>
                    <div className="row-span-1 col-span-1 col-start-2  ">
                      sysAlert
                    </div>
                    <div className="row-span-1 col-span-1 font-bold ">
                      Email Adresi:
                    </div>
                    <div className="row-span-1 col-span-1 col-start-2 ">
                      emrea388@gmail.com
                    </div>
                    <div className="row-span-1 col-span-1 font-bold ">
                      Telefon Numarası:
                    </div>
                    <div className="row-span-1 col-span-1 col-start-2 ">
                      05310113620
                    </div>
                    <div className="row-span-1 col-span-1 font-bold ">
                      Yemek Tercihi:
                    </div>
                    <div className="row-span-1 col-span-1 col-start-2 ">Et</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
  );
}
