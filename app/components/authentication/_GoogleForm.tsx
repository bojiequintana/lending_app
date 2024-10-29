import Button from "../ui/Button";
import google from "public/google.png";
interface IProps {
  onClick: () => void;
}
const GoogleForm = (props: IProps) => {
  return (
    <div className="w-full">
      <Button
        type="button"
        variant="base100"
        className="relative px-8 w-full"
        onClick={props.onClick}
      >
        <img src={google} alt="googleLogo" className="w-6 absolute" />
      </Button>
    </div>
  );
};

export default GoogleForm;
