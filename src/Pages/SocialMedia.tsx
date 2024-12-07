import SocialMediaCard from "../components/SocialMedia/SocialMediaCard";
function SocialMedia() {
  return (
    <div>
        {
            Array(10).fill(1).map((x, y) => x + y).map(()=><SocialMediaCard/>
          )
        }

    </div>
  );
}

export default SocialMedia;
