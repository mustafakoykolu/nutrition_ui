type Props = {
  benefits: string;
};
export default function FoodBenefits(props: Props) {
  return (
    <div id="food-benefits pb-3">
      <div dangerouslySetInnerHTML={{ __html: props.benefits }} />
    </div>
  );
}
