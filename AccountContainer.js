import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./SearchBar";
import AddTransactionForm from "./Form";

function AccountContainer() {
  const [transaction, setTransaction] = useState([])
  const [query, setQuery] = useState("")
  useEffect(() => {
    fetch("http://localhost:3000/transactions?q=" + query)
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction))
  }, [query])
  function handleSearch(e) {
    setQuery(e.target.value)
  }
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm />
      <TransactionsList transactions={transaction} />
    </div>
  );
}

export default AccountContainer;
