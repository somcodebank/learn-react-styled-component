const Variant = (input) => {
  const variant = (input || "").trim().toLowerCase();
  let result = "";
  if (variant === "large") {
    result = `padding: 1rem;
    font-size: 1.5rem;
    margin: 1rem;`;
  } else if (variant == "small") {
    result = `padding: 0.25rem;
    font-size: 0.9rem;
    margin: 0.25rem;`;
  } else {
    result = `padding: 0.55rem;
    font-size: 1rem;
    margin: 0.55rem;`;
  }
  return result;
};

export default Variant;
