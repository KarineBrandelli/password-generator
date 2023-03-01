export const Card = () => {
  return (
    <div className="bg-cyan-500 max-w-sm rounded-lg p-8 text-center mx-4">
      <h1 className="mb-5 text-2xl font-bold"> PASSWORD GENERATOR </h1>

      <div className="flex mb-5 h-10 items-center">
        <input
          type="text"
          className="h-full w-full rounded-l-lg border p-3"
          id="password"
          disabled />
        <button
          className="group flex h-full items-center rounded-r-lg bg-neutral-100" >
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
      </div>

      <div className="text-lg font-semibold" >
        <div className="flex items-center justify-between mb-3" >
          <label
            htmlFor="password-length"> LENGTH </label>
          <input
            type="range"
            id="password-length"
            className="mr-4 h-2 w-2/6 appearance-none rounded"
            min={4}
            max={25}
          />

          <input
            type="number"
            className="w-1/6 rounded border"
            aria-labelledby="password-length"
            min={4}
            max={25}
          />
        </div>

        <div className="flex items-center justify-between mb-3">
          <label
            htmlFor="include-uppercase"> UPPERCASE </label>
          <input
            type="checkbox"
            id="include-uppercase"
            className="h-4 w-4 mr-5"
          />
        </div>

        <div className="flex items-center justify-between mb-3">
          <label
            htmlFor="include-number"> NUMBER </label>
          <input
            type="checkbox"
            id="include-number"
            className="h-4 w-4 mr-5"
          />
        </div>

        <div className="flex items-center justify-between">
          <label
            htmlFor="include-symbol"> SYMBOL </label>
          <input
            type="checkbox"
            id="include-symbol"
            className="h-4 w-4 mr-5"
          />
        </div>
      </div>

      <button
        className="mt-6 w-full py-3 rounded font-bold
        bg-gradient-to-r from-sky-200 to-sky-600
        transition-all hover:scale-105 active:scale-100">
          GENERATE
      </button>
    </div>
  );
};
