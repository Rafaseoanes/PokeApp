import { useState } from "react";

function Search() {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInput(event.target.value);
    console.log(userInput);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="relative block">
          <input
            onChange={handleInputChange} // Handle input changes
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full 
            border border-slate-200 rounded-full py-2 pl-6 pr-3 mb-6 focus:outline-none sm:text-sm"
            placeholder="Search a Pokemon..."
            type="text"
            name="search"
          />
        </label>
        <button type="submit" className="hidden">
          Submit
        </button>{" "}
        {/* Hidden submit button */}
      </form>
    </div>
  );
}

export default Search;
