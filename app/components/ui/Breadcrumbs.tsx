interface IProps {
  items: string[];
  activeIndex: number;
}
const Breadcrumbs = ({ items, activeIndex }: IProps) => {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        {items.map((item, index) => {
          if (index > activeIndex) {
            return null;
          }
          return (
            <li key={item}>
              <span className="inline-flex items-center gap-2">{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
