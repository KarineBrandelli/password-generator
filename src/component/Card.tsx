import { useEffect, useState } from "react";

import copy from "copy-to-clipboard";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export const Card = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordContent, setPasswordContent] = useState<{
    length: number;
    includeUppercase: boolean;
    includeNumber: boolean;
    includeSymbol: boolean;
  }>({
    length: 6,
    includeUppercase: true,
    includeNumber: true,
    includeSymbol: true,
  });

  function generatePassword(): void {
    const LOWERCASE_CHAR = "abcdefghijklmnopqrstuvwxyz";
    const UPPERCASE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const NUMBER_CHAR = "0123456789";
    const SYMBOL_CHAR = "!#$%&*/<=>?@[]_{}";

    let combinedCharacters = LOWERCASE_CHAR;

    if (passwordContent.includeUppercase) combinedCharacters += UPPERCASE_CHAR;
    if (passwordContent.includeNumber) combinedCharacters += NUMBER_CHAR;
    if (passwordContent.includeSymbol) combinedCharacters += SYMBOL_CHAR;

    let passwordResult = "";

    for (let i = 0; i < passwordContent.length; i++) {
      passwordResult += combinedCharacters.charAt(
        Math.floor(Math.random() * combinedCharacters.length)
      );
    }

    setPassword(passwordResult);
  }

  useEffect(() => {
    generatePassword();
  }, []);

  function handleCopy(password: string) {
    copy(password);
  }

  return (
    <div className="bg-cyan-600 max-w-sm rounded-xl p-5 sm:p-8 text-center m-4">

      <h1 className="mb-5 text-lg sm:text-2xl font-bold"> PASSWORD GENERATOR </h1>

      <div className="flex mb-5 h-10 items-center">
        <input
          type="text"
          className="h-full w-full rounded-l-lg border p-3 font-semibold tracking-wider text-sm sm:text-base"
          id="password"
          value={password}
          disabled />
        <button
          className="group flex h-full items-center rounded-r-lg bg-zinc-100"
          onClick={() => handleCopy(password)}
          data-tooltip-id="copy-button"
          data-tooltip-content="Copy" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="text-cyan-600 transition-all duration-300 group-hover:scale-110" >
            <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
          </svg>
        </button>
        <Tooltip
          id="copy-button"
          place="right"
          className="font-semibold"
          style={{ backgroundColor: "#075985", color: "#FFFFFF" }} />
      </div>

      <div className="text-sm sm:text-lg font-semibold">
        <div className="flex items-center justify-between mb-3">
          <label htmlFor="password-length"> LENGTH </label>

          <span className="flex justify-end items-center gap-5">
            <input
              type="range"
              id="password-length"
              className="h-2 w-1/5 sm:w-1/3 appearance-none rounded"
              min={4}
              max={25}
              value={passwordContent.length}
              onChange={(e) => {
                setPasswordContent((prevState) => ({
                  ...prevState,
                  length: Number(e.target.value),
                }));
              }}
            />

            <input
              type="number"
              className="w-14 pl-2 rounded border text-cyan-800 text-base"
              aria-labelledby="password-length"
              min={4}
              max={25}
              value={passwordContent.length}
              onChange={(e) => {
                setPasswordContent((prevState) => ({
                  ...prevState,
                  length: Number(e.target.value),
                }));
              }}
            />
          </span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <label htmlFor="include-uppercase"> UPPERCASE </label>
          <input
            type="checkbox"
            id="include-uppercase"
            className="h-4 w-4"
            defaultChecked={passwordContent.includeUppercase}
            onChange={() => {
              setPasswordContent((prevState) => ({
                ...prevState,
                includeUppercase: !prevState.includeUppercase,
              }));
            }}
          />
        </div>

        <div className="flex items-center justify-between mb-3">
          <label htmlFor="include-number"> NUMBER </label>
          <input
            type="checkbox"
            id="include-number"
            className="h-4 w-4"
            defaultChecked={passwordContent.includeNumber}
            onChange={() => {
              setPasswordContent((prevState) => ({
                ...prevState,
                includeNumber: !prevState.includeNumber,
              }));
            }}
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="include-symbol"> SYMBOL </label>
          <input
            type="checkbox"
            id="include-symbol"
            className="h-4 w-4"
            defaultChecked={passwordContent.includeSymbol}
            onChange={() => {
              setPasswordContent((prevState) => ({
                ...prevState,
                includeSymbol: !prevState.includeSymbol,
              }));
            }}
          />
        </div>
      </div>

      <button
        className="mt-6 w-full py-3 rounded text-sm sm:text-lg font-bold
        bg-gradient-to-r from-sky-500 via-sky-600 to-sky-800
        transition-all duration-300 hover:scale-105"
        onClick={() => generatePassword()} >
        GENERATE
      </button>
    </div>
  );
};
