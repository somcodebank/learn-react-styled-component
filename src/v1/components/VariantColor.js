const VariantColor = (input) => {
  const variant = (input || "").trim().toLowerCase();
  let result = "";
  if (variant === "error") {
    result = `color: orange;
    background-color: red;
    border-color: orange;
    `;
  } else if (variant == "warning") {
    result = `color: red;
    background-color: orange;
    border-color: red;
    `;
  } else if (variant == "success") {
    result = `color: green;
    background-color: lightgreen;
    border-color: green;
    `;
  } else {
    result = `color: #333;
    background-color: #bbb;
    border-color: #333;
    `;
  }
  return result;
};

export default VariantColor;
