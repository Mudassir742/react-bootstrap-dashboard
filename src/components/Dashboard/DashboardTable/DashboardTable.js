import { Data } from "../../../Data/TableData";

const DashboardTable = () => {
  return (
    <>
      <h2 className="my-4">Section title</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
            </tr>
          </thead>
          <tbody>
            {Data &&
              Data.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.column_1}</td>
                    <td>{data.column_2}</td>
                    <td>{data.column_3}</td>
                    <td>{data.column_4}</td>
                    <td>{data.column_5}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardTable;
