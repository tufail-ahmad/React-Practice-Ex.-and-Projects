function Name() {
  let myName = "Tufail Ahmad";
  let myLearning = () => {
    return "I am learning React from Prashant Jain Sir.";
  };
  return (
    <h3>
      My name is {myName}. {myLearning()}
    </h3>
  );
}

export default Name;
