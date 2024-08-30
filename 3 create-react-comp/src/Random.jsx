function Random() {
  let random = Math.random() * 100;
  return (
    <h1 style={{ backgroundColor: "rgb(230, 94, 54)", color: "#ffffff" }}>
      Random Number is {Math.round(random)}.
    </h1>
  );
}

export default Random;
