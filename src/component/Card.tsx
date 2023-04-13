import { useState } from 'react'
import copy from 'copy-to-clipboard'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

export const Card = () => {
  const [passLength, setPassLength] = useState<number | string>(6);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(true);

  const [password, setPassword] = useState(() => generatePassword());

  function generatePassword(
    characterAmount = passLength,
    includeUpper = includeUppercase,
    includeNumbers = includeNumber,
    includeSymbols = includeSymbol
    ) {
      const UPPERCASE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const LOWERCASE_CHAR = "abcdefghijklmnopqrstuvwxyz";
      const NUMBER_CHAR = "1234567890";
      const SYMBOL_CHAR = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

      let combinedCharacters = LOWERCASE_CHAR;

      if (includeUpper) combinedCharacters += UPPERCASE_CHAR;
      if (includeNumbers) combinedCharacters += NUMBER_CHAR;
      if (includeSymbols) combinedCharacters += SYMBOL_CHAR;

      let password = "";
      for (let i = 0; i < characterAmount; i++) {
        password += combinedCharacters.charAt(
          Math.floor(Math.random() * combinedCharacters.length)
        );
      }

      return password;
    }

  function handleCopy(password: string) {
    copy(password);
  }

  return (
    <div className="bg-cyan-600 max-w-sm rounded-lg p-6 sm:p-8 text-center m-4">

      <h1 className="mb-5 text-xl sm:text-2xl font-bold"> PASSWORD GENERATOR </h1>

      <div className="flex mb-5 h-10 items-center">
        <input
          type="text"
          className="h-full w-full rounded-l-lg border p-3 font-semibold tracking-wider"
          id="password"
          value={password}
          disabled />
        <button
          className="group flex h-full items-center rounded-r-lg bg-neutral-100"
          onClick={() => handleCopy(password)}
          data-tooltip-id="copy-button" 
          data-tooltip-content="Copy" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="text-cyan-500 transition-all group-hover:scale-110 group-active:scale-95" >
            <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
          </svg>
        </button>
        <Tooltip
          id="copy-button"
          place="right"
          className="font-semibold"
          style={{ backgroundColor: "#075985", color: "#FFFFFF" }} />
      </div>

      <div className="text-base font-semibold sm:text-lg" >
        <div className="flex items-center justify-between mb-3" >
          <label
            htmlFor="password-length"> LENGTH </label>
          <input
            type="range"
            id="password-length"
            className="h-2 w-1/4 appearance-none rounded"
            min={4}
            max={25}
            value={passLength}
            onChange={(e) => setPassLength(parseInt(e.target.value))}  />

          <input
            type="number"
            className="w-14 pl-2 rounded border text-cyan-800"
            aria-labelledby="password-length"
            min={4}
            max={25}
            value={passLength}
            onChange={(e) =>
              setPassLength(e.target.value === "" ? "" : parseInt(e.target.value))} />
        </div>

        <div className="flex items-center justify-between mb-3">
          <label
            htmlFor="include-uppercase"> UPPERCASE </label>
          <input
            type="checkbox"
            id="include-uppercase"
            className="h-4 w-4"
            defaultChecked={includeUppercase}
            onChange={() =>
              setIncludeUppercase((prevIncludeUppercase) => !prevIncludeUppercase)} />
        </div>

        <div className="flex items-center justify-between mb-3">
          <label
            htmlFor="include-number"> NUMBER </label>
          <input
            type="checkbox"
            id="include-number"
            className="h-4 w-4"
            defaultChecked={includeNumber}
            onChange={() =>
              setIncludeNumber((prevIncludeNumber) => !prevIncludeNumber)} />
        </div>

        <div className="flex items-center justify-between">
          <label
            htmlFor="include-symbol"> SYMBOL </label>
          <input
            type="checkbox"
            id="include-symbol"
            className="h-4 w-4"
            defaultChecked={includeSymbol}
            onChange={() =>
              setIncludeSymbol((prevIncludeSymbol) => !prevIncludeSymbol)} />
        </div>
      </div>

      <button
        className="mt-6 w-full py-3 rounded text-base sm:text-lg font-bold
        bg-gradient-to-r from-sky-200 to-sky-600
        transition-all hover:scale-105 active:scale-100"
        onClick={() =>
          setPassword(
            generatePassword(passLength, includeUppercase, includeNumber,includeSymbol))} >
        GENERATE
      </button>
    </div>
  );
};
