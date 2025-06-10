import React from 'react'
import SearchForm from "../Components/SearchForm";
import Navbar from "../Components/Navbar"
import Select from "react-select";

function Search() {

  // form options for error checking + handling output
  const [options, setOptions] = React.useState([]);

  // Drop down configurations (react-select package)
  const searchEngines = [
    { value: 'google', label: 'Google', image: 'https://img.icons8.com/color/512/google-logo.png' },
    { value: 'firefox', label: 'Firefox', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png' },
    { value: 'edge', label: 'Microsoft Edge', image: 'https://winblogs.thesourcemediaassets.com/sites/33/2020/09/Edge_800.png' },
  ]

  const [engine, setEngine] = React.useState(searchEngines[0].value);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: 'transparent', // or your desired color
      boxShadow: 'none',
      borderColor: 'transparent',
      cursor: 'pointer',
      '&:hover': {
        borderColor: 'transparent'
      }
      // minHeight: 'auto',
      // height: '36px',
    }),

    menu: (base) => ({
      ...base,
      backgroundColor: '#313131',
      width: 'auto'
    }),

    menuList: (base) => ({
      ...base,
    }),

    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? '#3E3E3E' : 'transparent',
      display: 'flex',
      alignItems: 'center',
    }),

    dropdownIndicator: (base) => ({
      ...base,
      padding: 2,
    }),

    indicatorSeparator: () => ({
      display: 'none',
    }),

    input: () => ({
      display: 'none',
    })
  }

  // Validate data function (to implement), formData contains all necessary data
  function validateData(formData) {
    //updates the options with selected fields in form
    const data = Object.fromEntries(formData.entries());
    setOptions(data);

    console.log(data);
  }


  return (
    <>
      {/* <Navbar /> */}
      <main className="bg-[url('../grid-background.svg')] bg-cover bg-center bg-no-repeat text-[#D4D4D4] w-screen h-screen p-4 box-border flex flex-col justify-center items-center">
        <div className="header flex flex-row justify-center items-center mb-10 mt-15" >
          <img src="../Logo.svg" alt="datacrawl-logo" className="w-20 mr-10" />
          <div className="header-text">
            <h1 className="text-5xl font-semibold mb-4 text-[#939395] ">WebCrawler</h1>
            <p className="bg-[linear-gradient(to_right,_#787878,_#DEDEDE,_#787878)] bg-clip-text text-transparent font-semibold text-lg ">World's first industrial data search engine</p>
          </div>
        </div>

        <form id="settings" action={validateData} className="flex flex-col justify-center items-center">


          {/* Search Bar */}
          <div className="search-bar bg-[#3E3E3E] w-150 pl-2 rounded-full flex flex-row justify-between items-stretch box-border mb-5">

            <div className="flex flex-row">
              <Select
                name="search-engine"
                className="mr-5 flex flex-col justify-center items-center"
                defaultValue={searchEngines[0]}
                options={searchEngines}
                onChange={(option) => setEngine(option.value)}
                getOptionLabel={(e) => (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={e.image} alt={e.label} width="28" />
                  </div>
                )}
                styles={customStyles}

              />
              {/* <option defaultValue="google"></option>
                <option defaultValue="firefox"></option>
                <option defaultValue="edge"></option>
              </select> */}
              <input type="text" name="search" placeholder="search something here" className="focus:outline-none w-100" />
            </div>

            <button className="bg-[#313131] py-3 px-6 rounded-full hover:cursor-pointer hover:bg-[#2C2C2C]">Generate</button>
          </div>

          {/* settings */}
          <div className="grid gap-4 h-80 w-140">


            {/* Row 1 */}
            <div className="grid grid-cols-[45%_52%] h-30 gap-4 w-full">

              {/* Search Engine */}
              <div className="bg-[#313131] h-30 rounded-lg flex flex-col justify-center items-center box-border">
                <div>
                  <p className="mb-2">Search Engine:</p>
                  <label>Links Generated
                    <input className="rounded-sm bg-[#2A2A2A] w-[3rem] py-2 outline-none focus:ring-0 focus:border-none text-center ml-5" type="number" defaultValue="5" name="num-links" />
                  </label>
                </div>
              </div>

              {/* Data Options */}
              {/* peer-checked:bg-blue-500 peer-checked:text-white px-4 py-2 rounded */}
              <div className="bg-[#313131] h-30 rounded-lg flex flex-col justify-center items-center box-border">
                <p>Data Options:</p>
                <div>
                  <input type="radio" name="data-option" defaultValue="api-only" className="peer" />
                  <span className="">API Only</span>
                </div>

                <div>
                  <input type="radio" name="data-option" defaultValue="website-only" className="peer" />
                  <span className="">Website Only</span>
                </div>

                <div>
                  <input type="radio" name="data-option" defaultValue="show-all" className="peer" />
                  <span className="">Show All</span>
                </div>
              </div>

            </div> {/* End of Row 1 */}

            {/* Row 2 */}
            <div className="grid grid-cols-[60%_37%] h-45 gap-4 ">

              {/* Output */}
              <div className="bg-[#313131] h-45 rounded-lg flex flex-col justify-center items-center box-border">
                <p>Output:</p>
                <input type="radio" name="output" defaultValue="structured" />
                <span> Structured:
                  <select>
                    <option>JSON</option>
                    <option>XML</option>
                    <option>YAML</option>
                  </select>
                </span>

                <input type="radio" name="output" defaultValue="semi-structured" />
                <span> Semi-Structured: Raw +
                  <select>
                    <option>JSON</option>
                    <option>XML</option>
                    <option>YAML</option>
                  </select>
                </span>

                <input type="radio" name="output" defaultValue="raw" />
                <span> Raw </span>
              </div>


              {/* Crawler settings */}
              <div className="bg-[#313131] h-45 rounded-lg flex flex-col justify-center items-center box-border">
                <div>
                  <p className="mb-4">Crawler Settings:</p>
                  <div className="flex w-full flex-row justify-between items-center">
                    <label for="depth">Depth</label>
                    <input className="rounded-sm bg-[#2A2A2A] w-[3rem] py-2 outline-none focus:ring-0 focus:border-none text-center ml-5" type="number" defaultValue="5" name="depth" id="depth" />
                  </div>
                  <br />
                  <div className="flex w-full flex-row justify-between items-center">
                    <label for="links-crawled">Links Crawled</label>
                    <input className="rounded-sm bg-[#2A2A2A] w-[3rem] py-2 outline-none focus:ring-0 focus:border-none text-center ml-5" type="number" defaultValue="5" name="links-crawled" id="links-crawled" />
                  </div>
                </div>
              </div>

            </div> {/* End of Row 2 */}

          </div> {/* End of Grid */}

        </form>

      </main >
    </>
  )
}

export default Search