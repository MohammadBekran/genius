import eyeIcon from "../../../assets/images/blogs/eye.svg";
import dotsIcon from "../../../assets/images/blogs/item-dots.svg";
import calenderIcon from "../../../assets/images/blogs/calendar.svg";

interface BlogSeasCreatedAtProps {
  allSeas: number;
  createdAt: string;
}

const BlogSeasCreatedAt = ({ allSeas, createdAt }: BlogSeasCreatedAtProps) => {
  return (
    <div className="flex gap-3 items-center mt-3">
      <div className="flex gap-1">
        <img src={eyeIcon} />
        <span className="blogAllSeasCreatedAt">{allSeas} بازدید</span>
      </div>
      <img src={dotsIcon} />
      <div className="flex gap-1">
        <img src={calenderIcon} />
        <span className="blogAllSeasCreatedAt">{createdAt}</span>
      </div>
    </div>
  );
};

export { BlogSeasCreatedAt };
