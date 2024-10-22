import { ReactNode } from "react";

interface IColumnFieldName {
  id: string | number;
}

interface IColumns {
  label: string;
  value: string;
  render?: null | ((id: string | number, data?: object) => ReactNode | string);
  alignment?: "center" | "right";
}
interface IDataSource extends IColumnFieldName {
  [key: string]: string | number | boolean | object;
}

interface IProps {
  columns: IColumns[];
  dataSource: IDataSource[];
}

const Table = ({ columns, dataSource }: IProps) => {
  const handleRender = (
    data: IDataSource,
    column: IColumns
  ): string | ReactNode => {
    if (column.render) return column.render(data.id);
    if (typeof data[column.value] !== "object")
      return data[column.value] as string | number | boolean;
    return "";
  };

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map(({ label, value }) => (
            <th key={value}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((data) => {
          return (
            <tr key={data.id}>
              {columns.map((column) => (
                <td
                  key={`${column.value}`}
                  className={`${
                    column.alignment === "center" && "text-center"
                  } ${column.alignment === "right" && "text-right"}`}
                >
                  {handleRender(data, column)}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
