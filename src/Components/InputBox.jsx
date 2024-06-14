import react, { useId } from "react";

function InputBox({
  label,
  amount = 0,
  onAmountChange,
  onCurrencyChange,
  selectCurrency = "pkr",
  amountDisable = false,
  currercyOptions = [],
  currencyDisable,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(event) => {
            onAmountChange && onAmountChange(Number(event.target.value));
            disabled = { currencyDisable };
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none value ={selectCurrency}"
          value={selectCurrency}
          onChange={(event) =>
            onCurrencyChange && onCurrencyChange(event.target.value)
          }
          disabled={amountDisable}
        >
          {currercyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
// remeber the key in loop if not used it have massive effect on performance
