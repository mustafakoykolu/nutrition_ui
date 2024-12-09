import nutritionist from "../../assets/Images/nutritionist.png";

export default function MyProfile() {
  return (
    <div>
      <div className="w-full">
        <img
          className="absolute inset-x-0 shadow-xl bg-white w-3/4 md:w-1/6 mx-auto  rounded-full"
          src={nutritionist}
          alt="nutiritionist"
        />
      </div>

      <div className="flex justify-center bg-blue-500 shadow-xl rounded-2xl my-20">
        Profilim
        <div>Mustafa Emre Köykolu</div>
      </div>
      <div></div>
    </div>
  );
}
