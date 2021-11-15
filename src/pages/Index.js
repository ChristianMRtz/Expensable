import { ButtonTransparent, CenterButton, Loader } from "../components/Styles";
import { ExpansableStyle, Space } from "../components/Styles";
import trash from "../assets/trash.svg";
import loader from "../assets/loader.gif";
import { useEffect, useState } from "react";
import { apiDeleteFetch, apiGetFetch } from "../services/apiFetch";
import { useHistory } from "react-router";

export const Index = () => {
  const [data, setData] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("expense");
  const [spinner, setSpinner] = useState(true);
  const history = useHistory();

  function changeSelected(e) {
    e.preventDefault();
    const category = e.target.id;
    setCurrentFilter(category);
  }

  const handleSubmit = () => {
    sessionStorage.removeItem("token");
    history.push("/login");
  };

  function deleteCategory(e) {
    e.preventDefault();
    const idSelected = e.target.id;
    apiDeleteFetch(`categories/${idSelected}`);
    const copyData = [...data];
    const filtered = copyData.filter((d) => d.id !== parseInt(idSelected));
    setData(filtered);
  }

  function reducer(data) {
    const amount = data.map((t) => t.amount);
    if (amount.length > 0) {
      return amount.reduce((x, y) => x + y).toFixed(2);
    } else {
      return 0;
    }
  }

  function filter(data, currentFilter) {
    if (!data) return [];
    return data.filter((f) => f.transaction_type === currentFilter);
  }

  useEffect(() => {
    async function fetchData() {
      setTimeout(() => setSpinner(false), 1000);
      const dataGiven = await apiGetFetch("categories");
      setData(dataGiven);
    }
    fetchData();
  }, []);

  return (
    <ExpansableStyle>
      <h1>Expensable</h1>
      <div className="NavLink">
        <div
          onClick={(e) => changeSelected(e)}
          id="expense"
          className={currentFilter === "expense" ? "Links Selected" : "Links"}
        >
          Expenses
        </div>
        <div
          onClick={(e) => changeSelected(e)}
          id="income"
          className={currentFilter === "income" ? "Links Selected" : "Links"}
        >
          Income
        </div>
      </div>
      {spinner && (
        <Loader>
          <img src={loader} alt="loader" />
        </Loader>
      )}
      <div className="Content">
        {!spinner &&
          filter(data, currentFilter).map((d) => (
            <div className="Card" key={d.name}>
              <p className="TitleCard">{d.name}</p>
              <p className="NumberTransactions">
                {d.transactions.length} transaction
                {d.transactions.length > 1 ? "s" : ""}
              </p>
              <p className="TotalMoney">${reducer(d.transactions)}</p>
              <div className="ButtonTrash">
                <img
                  onClick={deleteCategory}
                  id={d.id}
                  src={trash}
                  alt="Trash"
                />
              </div>
            </div>
          ))}
      </div>
      <Space>
        <CenterButton>
          <ButtonTransparent onClick={handleSubmit}>Log Out</ButtonTransparent>
        </CenterButton>
      </Space>
    </ExpansableStyle>
  );
};
