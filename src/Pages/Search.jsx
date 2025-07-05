import React from "react";
import Select from "react-select";
import SearchMessageErrors from "../Components/SearchMessageErrors";
import LoadingScreen from "../Components/LoadingScreen";
import Navbar from "../Components/Navbar"


function Search({ onSearchSubmit }) {
  // form options for error checking + handling output
  const [options, setOptions] = React.useState([]);
  const [errors, setErrors] = React.useState([]);

  // form option for loading screen state
  const [loading, setLoading] = React.useState(false);

  // Drop down configurations (react-select package)
  const searchEngines = [
    {
      value: "google",
      label: "Google",
      image: "https://img.icons8.com/color/512/google-logo.png",
    },
    {
      value: "firefox",
      label: "Firefox",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png",
    },
    {
      value: "edge",
      label: "Microsoft Edge",
      image:
        "https://winblogs.thesourcemediaassets.com/sites/33/2020/09/Edge_800.png",
    },
  ];

  const [engine, setEngine] = React.useState(searchEngines[0].value);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "transparent",
      boxShadow: "none",
      borderColor: "transparent",
      cursor: "pointer",
      "&:hover": {
        borderColor: "transparent",
      },
    }),

    menu: (base) => ({
      ...base,
      backgroundColor: "#313131",
      width: "auto",
    }),

    menuList: (base) => ({
      ...base,
    }),

    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#3E3E3E" : "transparent",
      display: "flex",
      alignItems: "center",
    }),

    dropdownIndicator: (base) => ({
      ...base,
      padding: 2,
    }),

    indicatorSeparator: () => ({
      display: "none",
    }),

    input: () => ({
      display: "none",
    }),
  };

  // Validate data function (to implement), formData contains all necessary data
  function validateData(formData) {
    //updates the options with selected fields in form
    const data = Object.fromEntries(formData.entries());
    const errs = [];
    setOptions(data);

    if (data.search.trim() === "") {
      errs.push("Search Query is invalid");
    }
    if (!data.output) errs.push("No output option selected");
    if (!data["data-option"]) errs.push("No data search option selected");
    if (data["links-crawled"] < 0 || data["num-links"] < 0 || data["depth"] < 0)
      errs.push("Negative values cannot be selected");

    setErrors(errs);

    if (!data.output) console.log(data);

    if (errs.length == 0) {
      setLoading(true);
    }

    // filter validated data based on selected options
    if (errs.length == 0) {
      // type conversion: Strings to Numbers
      data["depth"] = Number(data["depth"]);
      data["links-crawled"] = Number(data["links-crawled"]);
      data["num-links"] = Number(data["num-links"]);

      // add file type option to data object
      let fileType;
      if (data.output === "structured") {
        fileType = data["structured[file-type]"];
      } else if (data.output === "semi-structured") {
        fileType = data["semi-structured[file-type]"];
      }
      else {
        fileType = data.output;
      }
      data["file-type"] = fileType;
      delete data["structured[file-type]"];
      delete data["semi-structured[file-type]"];

      // pass data to App.jsx
      onSearchSubmit(data);

    }

  }

  const cancelLoading = () => {
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <main className="relative bg bg-[url('../grid-background.svg')] bg-cover bg-center bg-no-repeat text-[#D4D4D4] w-screen h-screen p-4 box-border flex flex-col justify-center items-center">
        <div className="header flex flex-row justify-center items-center mb-10 mt-15">
          <img src="../Logo.svg" alt="datacrawl-logo" className="w-20 mr-10" />
          <div className="header-text">
            <h1 className="text-5xl font-semibold mb-4 text-[#939395] ">
              DataCrawl
            </h1>
            <p className="bg-[linear-gradient(to_right,_#787878,_#DEDEDE,_#787878)] bg-clip-text text-transparent font-semibold text-lg ">
              World's first industrial data search engine
            </p>
          </div>
        </div>


        <form
          id="settings"
          onSubmit={(e) => {
            e.preventDefault();
            validateData(new FormData(e.target));
          }}
          className="flex flex-col justify-center items-center"
        >
          {/* Search Bar */}
          <div className="search-bar bg-[#3E3E3E] w-max pl-2 rounded-full flex flex-row justify-between items-stretch box-border mb-5">
            <div className="flex flex-row">
              <Select
                name="search-engine"
                className="mr-5 flex flex-col justify-center items-center"
                defaultValue={searchEngines[0]}
                options={searchEngines}
                onChange={(option) => setEngine(option.value)}
                getOptionLabel={(e) => (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={e.image} alt={e.label} width="28" />
                  </div>
                )}
                styles={customStyles}
                disabled={loading}
              />

              <input
                type="text"
                name="search"
                placeholder="search something here"
                className="focus:outline-none w-100"
              />
            </div>

            <button className="bg-[#313131] py-3 px-6 rounded-full hover:cursor-pointer hover:bg-[#2C2C2C]"
              disabled={loading}>
              Generate
            </button>
          </div>
          {/* settings grid */}
          {!loading ? (
            <div className="grid h-80 w-150 gap-4">
              {/* Row 1 */}
              <div className="grid grid-cols-[40%_57%] h-30 box-border gap-[3%] w-full">

                {/* Search Engine */}
                <div className="bg-[#313131] h-30 rounded-lg flex flex-col justify-center items-center box-border select-box">
                  <div>
                    <p className="mb-2">Search Engine:</p>
                    <label>
                      Links Generated
                      <input
                        className="rounded-sm bg-[#2A2A2A] w-[3rem] py-2 outline-none focus:ring-0 focus:border-none text-center ml-5"
                        type="number"
                        defaultValue="5"
                        name="num-links"
                      />
                    </label>
                  </div>
                </div>

                {/* Data Options */}

                <div className="bg-[#313131] h-30 rounded-lg flex flex-col justify-center items-center box-border p-4 select-box">
                  <p className="text-left w-full px-3">Data Options:</p>

                  <div className="flex flex-row box-border rounded-sm  mt-5">

                    <div>
                      <input type="radio" name="data-option" defaultValue="api" id="api-only" className=" hidden peer" />

                      <label className="text-sm peer-checked:bg-[#2A2A2A] rounded-l-md bg-[#3E3E3E] p-2.5 hover:cursor-pointer hover:bg-[#2A2A2A] px-4 border-r-1 border-[#2A2A2A]" htmlFor="api-only"> API Only </label>
                    </div>

                    <div>
                      <input type="radio" name="data-option" defaultValue="website" id="website-only" className=" hidden peer" />

                      <label className="text-sm peer-checked:bg-[#2A2A2A] bg-[#3E3E3E] p-2.5 hover:cursor-pointer hover:bg-[#2A2A2A] px-4 border-r-1 border-[#2A2A2A]" htmlFor="website-only"> Website Only </label>
                    </div>

                    <div>
                      <input type="radio" name="data-option" defaultValue="all" id="show-all" className=" hidden peer" />

                      <label className="text-sm h-full p-2.5 px-4 peer-checked:bg-[#2A2A2A] bg-[#3E3E3E] hover:cursor-pointer hover:bg-[#2A2A2A] rounded-r-md" htmlFor="show-all"> Show All </label>
                    </div>

                  </div>
                </div>
              </div>{" "}
              {/* End of Row 1 */}
              {/* Row 2 */}
              <div className="grid grid-cols-[60%_37%] h-45 gap-[3%]">
                {/* Output */}
                <div className="bg-[#313131] h-45 rounded-lg flex flex-col justify-center box-border p-6 justify-between *:my-1.5 select-box">

                  <p>Output:</p>


                  {/* <input type="radio" name="output" defaultValue="structured" />
                  <span>
                    <label for="structured">
                      {" "}
                      Structured:
                      <select name="structured[file-type]">
                        <option value="json">JSON</option>
                        <option value="xml">XML</option>
                        <option value="yaml">YAML</option>
                      </select>
                    </label>
                  </span> */}

                  <div>
                    <input type="radio" name="output" defaultValue="structured" className="inline" />
                    <span className="ml-3">Structured:</span>
                    <span className="bg-[#3E3E3E] p-1 px-2 rounded-sm ml-4 cursor-pointer w-max">
                      <select name="structured[file-type]" className="focus:outline-none">
                        <option value="json">JSON</option>
                        <option value="xml">XML</option>
                        <option value="yaml">YAML</option>
                      </select>
                    </span>
                  </div>

                  {/* <input
                    type="radio"
                    name="output"
                    defaultValue="semi-structured"
                  />
                  <span>
                    {" "}
                    Semi-Structured: Raw +
                    <select name="semi-structured[file-type]">
                      <option value="json">JSON</option>
                      <option value="xml">XML</option>
                      <option value="yaml">YAML</option>
                    </select>
                  </span> */}

                  <div>
                    <input type="radio" name="output" defaultValue="semi-structured" />
                    <span className="ml-3">Semi-Structured: Raw +</span>
                    <span className="bg-[#3E3E3E] p-1 px-2 rounded-sm ml-4 cursor-pointer w-max">
                      <select name="semi-structured[file-type]">
                        <option value="json">JSON</option>
                        <option value="xml">XML</option>
                        <option value="yaml">YAML</option>
                      </select>
                    </span>
                  </div>

                  <div>
                    <input type="radio" name="output" defaultValue="raw" />
                    <span className="ml-3">Raw</span>
                  </div>

                </div>

                {/* Crawler settings */}
                <div className="bg-[#313131] h-45 rounded-lg flex flex-col justify-center items-center box-border select-box">
                  <div>
                    <p className="mb-4">Crawler Settings:</p>
                    <div className="flex w-full flex-row justify-between items-center">
                      <label for="depth">Depth</label>
                      <input
                        className="rounded-sm bg-[#2A2A2A] w-[3rem] py-2 outline-none focus:ring-0 focus:border-none text-center ml-5"
                        type="number"
                        defaultValue="5"
                        name="depth"
                        id="depth"
                      />
                    </div>
                    <br />
                    <div className="flex w-full flex-row justify-between items-center">
                      <label for="links-crawled">Links Crawled</label>
                      <input
                        className="rounded-sm bg-[#2A2A2A] w-[3rem] py-2 outline-none focus:ring-0 focus:border-none text-center ml-5"
                        type="number"
                        defaultValue="5"
                        name="links-crawled"
                        id="links-crawled"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* End of Row 2 */}
            </div>
          ) : (
            <LoadingScreen onCancel={cancelLoading} />
          )}
        </form>
        <SearchMessageErrors errors={errors} onClose={() => setErrors([])} />
      </main>
    </>
  );
}

export default Search;
