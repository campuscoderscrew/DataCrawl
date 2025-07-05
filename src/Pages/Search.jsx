import React from "react";
import Select from "react-select";
import SearchMessageErrors from "../Components/SearchMessageErrors";
import LoadingScreen from "../Components/LoadingScreen";
import Navbar from "../Components/Navbar";

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
      backgroundColor: state.isFocused ? "#2C2C2C" : "transparent",
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
    // if (!data["data-option"]) errs.push("No data search option selected");
    if (data["links-crawled"] < 0 || data["num-links"] < 0 || data["depth"] < 0)
      errs.push("Negative values cannot be selected");
    if (!data["links-crawled"]) {
      errs.push("Links Crawled needs to be filled out");
    }
    if (!data["depth"]) {
      errs.push("Depth needs to be filled out");
    }
    if (!data["num-links"]) {
      errs.push("Links Generated needs to be filled out");
    }
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

  function validateApiData(formData) {
    //Separate validation for Oauth-API Form 
  }

  const cancelLoading = () => {
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <main className="relative bg bg-[url('../grid-background-darker.svg')] text-[#D4D4D4] h-screen w-screen p-4 box-border flex flex-col justify-center items-center">

        <div className="flex relative mt-15">
          <form
            id="oauth-settings"
            onSubmit={(e) => {
              e.preventDefault();
              validateApiData(new FormData(e.target));
            }}
            className="flex flex-col justify-center bg-[#242424] p-8 mr-3 rounded-lg w-85">
            <div className="mb-6">
              <p className="font-bold mb-4">Providers</p>
              <div className="grid grid-cols-2 mb-6">
                <div className="grid gap-2">
                  <label>
                    <input type="checkbox" value="github" name="provider" />
                    <span className="ml-2">Github</span>
                  </label>
                  <label>
                    <input type="checkbox" value="wikipedia" name="provider" />
                    <span className="ml-2">Wikipedia</span>
                  </label>
                </div>
                <div className="grid gap-2">
                  <label>
                    <input type="checkbox" value="hugging-face" name="provider" />
                    <span className="ml-2">Hugging Face</span>
                  </label>
                  <label>
                    <input type="checkbox" value="kaggle" name="provider" />
                    <span className="ml-2">Kaggle</span>
                  </label>
                </div>
              </div>
              <button type="button" className="p-1 px-8 bg-[#2C2C2C] rounded-sm">Provider Login</button>
            </div>

            <div className="">
              <p className="font-bold mb-4">Search Parameters</p>
              <div className="flex flex-col *:mb-4">

                <label className="flex justify-between">
                  <span>Author</span>
                  <input type="text" name="author" className="bg-[#2C2C2C] p-1 px-2 rounded-sm" />
                </label>

                <label className="flex justify-between">
                  <span className="">Date</span>
                  <div className="text-right">
                    <input type="date" name="start-date" className="bg-[#2C2C2C] rounded-sm w-[35%] p-1 text-[#7f7d7d]" />
                    <span className="px-2"> - </span>
                    <input type="date" name="start-date" className="bg-[#2C2C2C] rounded-sm w-[35%] p-1 text-[#7f7d7d]" />
                  </div>
                </label>

                <div className="flex w-full flex-row justify-between items-center mb-6">
                  <label for="links-crawled">Limit Per Type</label>
                  <input
                    className="rounded-sm bg-[#2C2C2C] w-[3rem] py-2 outline-none focus:ring-0 focus:border-none text-center ml-5"
                    type="number"
                    defaultValue="10"
                    name="links-crawled"
                    id="links-crawled"
                  />
                </div>

                <div>
                  <p className="font-bold mb-4">Data Type</p>
                  <div className="grid grid-cols-2">
                    <div className="grid gap-2">
                      <label>
                        <input type="checkbox" value="image" name="provider" />
                        <span className="ml-2">Image</span>
                      </label>
                      <label>
                        <input type="checkbox" value="text" name="provider" />
                        <span className="ml-2">Text</span>
                      </label>
                      <label>
                        <input type="checkbox" value="audio" name="provider" />
                        <span className="ml-2">Audio</span>
                      </label>
                    </div>
                    <div className="grid gap-2">
                      <label>
                        <input type="checkbox" value="video" name="provider" />
                        <span className="ml-2">Video</span>
                      </label>
                      <label>
                        <input type="checkbox" value="code" name="provider" />
                        <span className="ml-2">Code</span>
                      </label>
                      <label>
                        <input type="checkbox" value="geospatial" name="provider" />
                        <span className="ml-2">GeoSpatial</span>
                      </label>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </form >

          <div>
            {/* Header */}
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
              <div className="search-bar w-max flex flex-row justify-between items-stretch box-border mb-5">
                <div className="flex flex-row bg-[#2A2A2A] pl-2 rounded-lg  w-[80%]">
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
                <button className="bg-[#242424] py-3 px-6 rounded-lg hover:cursor-pointer hover:bg-[#2C2C2C]"
                  disabled={loading}>
                  Generate
                </button>
              </div>

              {/* settings grid */}

              {!loading ? (
                <div className="grid h-80 w-155 grid-cols-[58%_38%] gap-[2%]">

                  {/* Col 1 */}
                  <div className="grid grid-rows-[40%_56%] h-full box-border gap-y-[4%] w-full">

                    {/* Search Engine bg-[#242424]*/}
                    <div className="bg-[#242424] h-full rounded-lg flex flex-col justify-center p-6 box-border select-box">
                      <div>
                        <p className="mb-4 font-bold">Search Engine:</p>
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

                    {/* Output bg-[#242424] */}

                    <div className="bg-[#242424] rounded-lg flex flex-col justify-center box-border p-6 *:my-1.5 select-box h-full">

                      <p className="font-bold">Output:</p>

                      <div>
                        <input type="radio" name="output" defaultValue="structured" className="inline" />
                        <span className="ml-3">Structured:</span>
                        <span className="bg-[#2C2C2C] p-1 px-2 rounded-sm ml-4 cursor-pointer w-max">
                          <select name="structured[file-type]" className="focus:outline-none">
                            <option value="json">JSON</option>
                            <option value="xml">XML</option>
                            <option value="yaml">YAML</option>
                          </select>
                        </span>
                      </div>

                      <div>
                        <input type="radio" name="output" defaultValue="semi-structured" />
                        <span className="ml-3">Semi-Structured: Raw +</span>
                        <span className="bg-[#2C2C2C] p-1 px-2 rounded-sm ml-4 cursor-pointer w-max">
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

                  </div>{" "}
                  {/* End of Col 1 */}

                  {/* Col 2 */}
                  <div className="grid h-full">

                    {/* Crawler settings */}
                    <div className="bg-[#242424] rounded-lg flex flex-col justify-center p-6 box-border select-box">
                      <div>
                        <p className="mb-6 font-bold">Crawler Settings:</p>
                        <div className="flex w-full flex-row justify-between items-center mb-6">
                          <label for="depth">Depth</label>
                          <input
                            className="rounded-sm bg-[#2A2A2A] w-[3rem] py-2 outline-none focus:ring-0 focus:border-none text-center ml-5"
                            type="number"
                            defaultValue="5"
                            name="depth"
                            id="depth"
                          />
                        </div>
                        <div className="flex w-full flex-row justify-between items-center mb-6">
                          <label for="links-crawled">Links Crawled</label>
                          <input
                            className="rounded-sm bg-[#2A2A2A] w-[3rem] py-2 outline-none focus:ring-0 focus:border-none text-center ml-5"
                            type="number"
                            defaultValue="5"
                            name="links-crawled"
                            id="links-crawled"
                          />
                        </div>

                        <div className="flex w-full flex-row justify-between items-center mb-6">
                          <span>Type:</span>
                          <span className="bg-[#2C2C2C] p-1 px-2 rounded-sm ml-4 cursor-pointer w-max">
                            <select name="structured[file-type]" className="focus:outline-none">
                              <option value="recursive">Recursive</option>
                              <option value="breadth">Breadth</option>
                              <option value="depth">Depth</option>
                            </select>
                          </span>
                        </div>

                        <div>
                          <label className="hover:cursor-pointer">
                            <input type="checkbox" name="backlink" value="backlink" />
                            <span className="ml-5">Use Backlink</span>
                          </label>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* End of Col 2 */}
                </div>
              ) : (
                <LoadingScreen onCancel={cancelLoading} />
              )}
            </form>
          </div>
          <SearchMessageErrors errors={errors} onClose={() => setErrors([])} />

        </div >
      </main >
    </>
  );
}

export default Search;
