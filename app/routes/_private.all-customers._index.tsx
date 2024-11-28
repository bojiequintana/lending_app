import { useNavigate } from "@remix-run/react";
import Icon from "~/components/ui/Icon";
const AllCustomers = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Personal Info</th>
              <th>Valid Id</th>
              <th>Residential address</th>
              <th>Proof of income</th>
              <th>Other/s</th>
              <th>Status</th>
              <th>Date created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <th>Proof of income</th>
              <th>Other/s</th>
              <th>Status</th>
              <th>Date created</th>
              <th>
                <button
                  className="btn btn-sm"
                  onClick={() =>
                    navigate("/all-customers/client-profile/USER-111")
                  }
                >
                  <Icon name="edit" />
                </button>
              </th>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <th>Proof of income</th>
              <th>Other/s</th>
              <th>Status</th>
              <th>Date created</th>
              <th>
                <button
                  className="btn btn-sm"
                  onClick={() =>
                    navigate("/all-customers/client-profile/USER-111")
                  }
                >
                  <Icon name="edit" />
                </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <th>Proof of income</th>
              <th>Other/s</th>
              <th>Status</th>
              <th>Date created</th>
              <th>
                <button
                  className="btn btn-sm"
                  onClick={() =>
                    navigate("/all-customers/client-profile/USER-111")
                  }
                >
                  <Icon name="edit" />
                </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>4</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <th>Proof of income</th>
              <th>Other/s</th>
              <th>Status</th>
              <th>Date created</th>
              <th>
                <button
                  className="btn btn-sm"
                  onClick={() =>
                    navigate("/all-customers/client-profile/USER-111")
                  }
                >
                  <Icon name="edit" />
                </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>5</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <th>Proof of income</th>
              <th>Other/s</th>
              <th>Status</th>
              <th>Date created</th>
              <th>
                <button
                  className="btn btn-sm"
                  onClick={() =>
                    navigate("/all-customers/client-profile/USER-111")
                  }
                >
                  <Icon name="edit" />
                </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>6</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <th>Proof of income</th>
              <th>Other/s</th>
              <th>Status</th>
              <th>Date created</th>
              <th>
                <button
                  className="btn btn-sm"
                  onClick={() =>
                    navigate("/all-customers/client-profile/USER-111")
                  }
                >
                  <Icon name="edit" />
                </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>7</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <th>Proof of income</th>
              <th>Other/s</th>
              <th>Status</th>
              <th>Date created</th>
              <th>
                <button
                  className="btn btn-sm"
                  onClick={() =>
                    navigate("/all-customers/client-profile/USER-111")
                  }
                >
                  <Icon name="edit" />
                </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>8</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <th>Proof of income</th>
              <th>Other/s</th>
              <th>Status</th>
              <th>Date created</th>
              <th>
                <button
                  className="btn btn-sm"
                  onClick={() =>
                    navigate("/all-customers/client-profile/USER-111")
                  }
                >
                  <Icon name="edit" />
                </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>9</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <th>Proof of income</th>
              <th>Other/s</th>
              <th>Status</th>
              <th>Date created</th>
              <th>
                <button
                  className="btn btn-sm"
                  onClick={() =>
                    navigate("/all-customers/client-profile/USER-111")
                  }
                >
                  <Icon name="edit" />
                </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>10</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <th>Proof of income</th>
              <th>Other/s</th>
              <th>Status</th>
              <th>Date created</th>
              <th>
                <button
                  className="btn btn-sm"
                  onClick={() =>
                    navigate("/all-customers/client-profile/USER-111")
                  }
                >
                  <Icon name="edit" />
                </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>11</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <th>Proof of income</th>
              <th>Other/s</th>
              <th>Status</th>
              <th>Date created</th>
              <th>
                <button
                  className="btn btn-sm"
                  onClick={() =>
                    navigate("/all-customers/client-profile/USER-111")
                  }
                >
                  <Icon name="edit" />
                </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>12</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <th>Proof of income</th>
              <th>Other/s</th>
              <th>Status</th>
              <th>Date created</th>
              <th>
                <button
                  className="btn btn-sm"
                  onClick={() =>
                    navigate("/all-customers/client-profile/USER-111")
                  }
                >
                  <Icon name="edit" />
                </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>13</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <th>Proof of income</th>
              <th>Other/s</th>
              <th>Status</th>
              <th>Date created</th>
              <th>
                <button
                  className="btn btn-sm"
                  onClick={() =>
                    navigate("/all-customers/client-profile/USER-111")
                  }
                >
                  <Icon name="edit" />
                </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>14</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <th>Proof of income</th>
              <th>Other/s</th>
              <th>Status</th>
              <th>Date created</th>
              <th>
                <button
                  className="btn btn-sm"
                  onClick={() =>
                    navigate("/all-customers/client-profile/USER-111")
                  }
                >
                  <Icon name="edit" />
                </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>15</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <th>Proof of income</th>
              <th>Other/s</th>
              <th>Status</th>
              <th>Date created</th>
              <th>
                <button
                  className="btn btn-sm"
                  onClick={() =>
                    navigate("/all-customers/client-profile/USER-111")
                  }
                >
                  <Icon name="edit" />
                </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>16</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <th>Proof of income</th>
              <th>Other/s</th>
              <th>Status</th>
              <th>Date created</th>
              <th>
                <button
                  className="btn btn-sm"
                  onClick={() =>
                    navigate("/all-customers/client-profile/USER-111")
                  }
                >
                  <Icon name="edit" />
                </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>17</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <th>Proof of income</th>
              <th>Other/s</th>
              <th>Status</th>
              <th>Date created</th>
              <th>
                <button
                  className="btn btn-sm"
                  onClick={() =>
                    navigate("/all-customers/client-profile/USER-111")
                  }
                >
                  <Icon name="edit" />
                </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>18</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <th>Proof of income</th>
              <th>Other/s</th>
              <th>Status</th>
              <th>Date created</th>
              <th>
                <button
                  className="btn btn-sm"
                  onClick={() =>
                    navigate("/all-customers/client-profile/USER-111")
                  }
                >
                  <Icon name="edit" />
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCustomers;
