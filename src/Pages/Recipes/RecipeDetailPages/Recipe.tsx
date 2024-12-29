import sadFoodImage from "../../../assets/Images/sadFood.webp";

type Props = {
    recipe:string
}

export default function Recipe(props:Props){
    return(
        <div id="meal-recipe pb-3">
        {props.recipe != null ? (
          <div dangerouslySetInnerHTML={{ __html: props.recipe }} />
        ) : (
          <div className="text-center">
            <span>Üzgünüz, henüz faydaları eklenmemiş</span>
            <img className="mx-auto w-96" src={sadFoodImage} alt="Sunset in the mountains" />
          </div>
        )}
      </div>
    )
}