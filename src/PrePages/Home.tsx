import "../Styles/PrePages/Home.css";
import nutritionist from "../assets/Images/nutritionist.png";
function Home() {
  return (
    <div id="home-container">
      <div className="sm:block lg:hidden">
        <img src={nutritionist} alt="Beslenme Uzmanı Görseli" />
      </div>
      <div id="home-explainer-container" className="flex flex-row">
        <div className="lg:basis-2/3 md:basis-3/3 bg-white shadow-xl rounded-3xl p-10">
          <h1 className="text-3xl font-semibold mt-2">
            Sağlıklı Yaşam İçin Tek Bir Uygulama!
          </h1>
          <p className="mt-2">
            Hedeflerinize kolayca ulaşın. Fit Lezzet, yemek tariflerinden kalori
            takibine kadar her şeyde yanınızda.
          </p>
          <h2 className="text-2xl font-semibold mt-3">
            Yemek Tarifleri ve Planlama
          </h2>
          <p className="mt-2">
            Zengin ve sağlıklı yemek tarifleri arasından seçim yapın. Damak
            tadınıza ve ihtiyaçlarınıza uygun yemek programları oluşturun.
          </p>
          <h2 className="text-2xl font-semibold mt-3">
            Kalori Takibi ve Sağlıklı Beslenme
          </h2>
          <p className="mt-2">
            Günlük kalori alımınızı kontrol edin ve hedeflerinize göre
            ilerleyin. Kilo verme, alma veya koruma süreçlerinizi destekliyoruz.
          </p>
          <h2 className="text-2xl font-semibold mt-3">
            Alışveriş Listesi Asistanı
          </h2>
          <p className="mt-2">
            Planladığınız yemek tariflerine göre alışveriş listenizi oluşturun.
            Kolay ve hızlı alışverişin tadını çıkarın!
          </p>
          <h2 className="text-2xl font-semibold mt-3">
            Beslenme Uzmanlarından Öneriler
          </h2>
          <p className="mt-2">
            Sağlık ve beslenme hedeflerinizi destekleyecek özel ipuçları ve
            tavsiyeler alın. Daha bilinçli kararlar verin!
          </p>
        </div>
        <div className="lg:basis-1/3 hidden lg:block">
          <img src={nutritionist} alt="Beslenme Uzmanı Görseli" />
        </div>
      </div>
    </div>
  );
}
export default Home;
