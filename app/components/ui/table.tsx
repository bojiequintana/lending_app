import { ReactNode } from "react";

interface IColumnFieldName {
  id: string | number;
}

interface IColumns {
  label: string;
  value: string;
  render?: null | ((id: string | number) => ReactNode | string);
}
interface IDataSource extends IColumnFieldName {
  [key: string]: string | number | boolean;
}

interface IProps {
  columns: IColumns[];
  dataSource: IDataSource[];
}
const Table = ({ columns, dataSource }: IProps) => {
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
                <td key={`${column.value}`}>
                  {column.render ? column.render(data.id) : data[column.value]}
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
