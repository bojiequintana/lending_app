import Icon from "~/components/ui/Icon";
import InputIcon from "~/components/ui/InputIcon";

const SearchForm = () => {
  return (
    <form className="w-full max-w-md">
      <InputIcon
        placeholder="Search..."
        className="bg-base-300/40"
        icon={<Icon name="search" />}
      />
    </form>
  );
};

export default SearchForm;
