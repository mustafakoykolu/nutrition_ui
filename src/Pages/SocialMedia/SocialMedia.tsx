import { useNavigate } from "react-router-dom";
import SocialMediaCard from "../../components/SocialMedia/SocialMediaCard";

function SocialMedia() {
  const navigate=useNavigate();
  return (
    <div>
      <div className="flex w-full">
        <button className="py-5 px-10 shadow-xl ml-auto rounded-3xl bg-gray-800 mx-20 mt-10 text-white font-bold text-xl" onClick={()=>{
          navigate("gonderi-olustur")
        }}>
          Yeni Gönderi Oluştur
        </button>
      </div>
      {Array(10)
        .fill(1)
        .map((x, y) => x + y)
        .map(() => (
          <SocialMediaCard />
        ))}
    </div>
  );
}

export default SocialMedia;
