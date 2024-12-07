import { useNavigate } from "react-router";
import nutritionist from "../../assets/Images/nutritionist.png";

export default function SocialMediaCard() {
    const navigate = useNavigate()
  return (
    <div className="flex justify-center p-5 px-20 shadow-xl rounded-3xl bg-white mx-20 my-20 ">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-white rounded-b "
        style={{ backgroundImage: "url(" + nutritionist + ")" }}
        title="nutritionist"
      ></div>
      
      <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Takipçilerime özel
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">
            Bugün menümde ne var?
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod nulla ex ab? Odit numquam nulla mollitia voluptas cupiditate tempore eos doloribus aliquam necessitatibus sint itaque consequuntur, fugiat officia quia quisquam?
            Error quo laborum ipsum quasi perferendis, quam earum distinctio ad. Veniam nobis quam temporibus. Quae adipisci quisquam exercitationem et modi iure! Animi veritatis velit fugit sequi veniam fugiat iste maiores.
            Deleniti accusamus ipsum exercitationem! Similique voluptatibus animi nisi, quasi facere tempore voluptates minus inventore ipsa corporis asperiores omnis pariatur hic quisquam fuga earum dicta quibusdam praesentium, impedit ipsam necessitatibus. Quae!
          </p>
        </div>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={nutritionist}
            alt="Nutritionist"
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Mustafa Emre Köykolu</p>
            <p className="text-gray-600">7 Aralık</p>
          </div>
            <button className="ml-auto text-blue-500" onClick={()=>{
                navigate("gonderi?id=123456")
            }} >Devam Et</button>

        </div>
        
      </div>
    </div>
  );
}
