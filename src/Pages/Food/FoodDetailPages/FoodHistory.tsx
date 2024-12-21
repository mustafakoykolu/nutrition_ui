type Props = {
  history: string;
};
export default function FoodHistory(props: Props) {
  return (
    <div id="food-history">
      <div dangerouslySetInnerHTML={{ __html: props.history }} />
    </div>
  );
}
