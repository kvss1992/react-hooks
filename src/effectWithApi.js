import React from "react";

const dunkStyle = {
  marginTop: "10px"
};

const flatten = companyName => {
  return Object.keys(companyName).reduce((prev, element) => {
    return companyName[element] &&
      typeof companyName[element] === "object" &&
      !Array.isArray(element)
      ? { ...prev, ...flatten(companyName[element], `${element}.`) }
      : { ...prev, ...{ [`${element}`]: companyName[element] } };
  }, {});
};

function ApiHelper() {
  const [company, setCompany] = React.useState("");
  const [finalCompayName, setFinalCompanyName] = React.useState("");
  const [result, setResult] = React.useState("");

  const handleChange = e => {
    setCompany(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFinalCompanyName(company.toUpperCase());
  };

  React.useEffect(() => {
    if (!finalCompayName) {
      return;
    }

    fetch(
      `https://financialmodelingprep.com/api/v3/company/profile/${finalCompayName}`
    )
      .then(request => {
        return request.json();
      })
      .then(companyResponse => {
        let fleshedResponse = flatten(companyResponse);
        setResult(fleshedResponse);
      });
  }, [finalCompayName]);

  return (
    <form onSubmit={handleSubmit}>
      <input value={company} onChange={handleChange} />
      <button value="submit">Submit</button>
      {result ? null : (
        <div style={dunkStyle}> Some Ex ar: "aapl", "googl"</div>
      )}

      {{ result } !== "" ? (
        <div style={dunkStyle}>
          {result
            ? Object.keys(result).map(obj => (
                <li key={obj}>
                  {obj}: {result[obj]}
                </li>
              ))
            : null}
        </div>
      ) : null}
    </form>
  );
}

export default ApiHelper;
