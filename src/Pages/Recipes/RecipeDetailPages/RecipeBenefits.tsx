import sadFoodImage from "../../../assets/Images/sadFood.png";


type Props = {
  benefits?: string;
};
export default function RecipeBenefits(props: Props) {
  return (
    <div id="food-benefits pb-3">
      {props.benefits != null ? (
        <div dangerouslySetInnerHTML={{ __html: props.benefits }} />
      ) : (
        <div className="text-center">
          <span>Üzgünüz, henüz faydaları eklenmemiş</span>
          <img className="mx-auto w-96" src={sadFoodImage} alt="Sunset in the mountains" />
        </div>
      )}
    </div>
  );
}
