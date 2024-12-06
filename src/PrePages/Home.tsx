import "../Styles/PrePages/Home.css";
import nutritionist from "../assets/Images/nutritionist.png";
function Home() {
  return (
    <div id="home-container">
      <div className="sm:block lg:hidden">
        <img src={nutritionist} alt="" />
      </div>
      <div id="home-explainer-container" className="flex flex-row">
        <div className="lg:basis-2/3 md:basis-3/3">
          <h1 className="text-3xl font-semibold mt-2">
            Bütün beslenme ihtiyaçlarınız için tek bir uygulama!
          </h1>
          <p className="mt-2">
            Her şey kolayken, beslenme takibi niye zor olsun ? Nutrition
            beslenmenize yardım eder.
          </p>
          <h2 className="text-2xl font-semibold mt-3">
            Yemek Programı Yardımcısı
          </h2>
          <p className="mt-2">
            Hedefleriniz ve yemek zevklerini belirleyin. Bir kez ayarladıktan
            sonra sizin ihtiyacınıza göre yemek listesi ayarlayalım!
          </p>
          <h2 className="text-2xl font-semibold mt-3">
            Alışveriş Listesi Yardımcısı
          </h2>
          <p className="mt-2">
            Hazırladığınız yemek listesi ve kişi sayınıza göre satın almanız
            gereken malzemelerin listesini sizin için ayarlayalım. Sizi düşünce
            zahmetinden kurtaralım !
          </p>
          <h2 className="text-2xl font-semibold mt-3">
            Kalori Takibi Yardımcısı
          </h2>
          <p className="mt-2">
            Hedeflerinize belirlediğiniz sürede ulaşın! Yemeklerinizi yemek
            listesi veya manuel olarak takip edin. Günlük, aylık veya yıllık
            hedefler oluşturun. Kilo verme veya alma sürecinizi destekleyin!
          </p>
        </div>
        <div className="lg:basis-1/3  hidden lg:block">
          <img src={nutritionist} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Home;
