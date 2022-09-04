import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  // props.date itu ngambil dari file "ExpenseItem" dengan prps.date juga yang ditarik dari app.js
  // inputan fungsi E.Date props.date = atribut date dari E.Date di E.ItemS dimana atribut ini ngambil inputan dari atribut E.Item di App.js
  return (
    <div className="expense-date">
      <div classname="expense-date__month">{month}</div>
      <div classname="expense-date__year">{year}</div>
      <div classname="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
