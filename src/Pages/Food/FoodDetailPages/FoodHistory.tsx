import sadFoodImage from "../../../assets/Images/sadFood.webp";

type Props = {
  history?: string;
};
export default function FoodHistory(props: Props) {
  return (
    <div id="food-history">
      {props.history != null ? (
        <div dangerouslySetInnerHTML={{ __html: props.history }} />
      ) : (
        <div className="text-center">
          <span>Üzgünüz, henüz tarihçesi eklenmemiş</span>
          <img className="mx-auto w-96" src={sadFoodImage} alt="Sunset in the mountains" />
        </div>
      )}
    </div>
  );
}
