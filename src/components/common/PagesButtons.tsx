import React, { FC } from "react";

type Props = {
  onSetPage: (action: "next" | "prev") => void;
  currentPage: number;
};

const PagesButtons: FC<Props> = ({ onSetPage, currentPage }) => {
  const handleNextPage = () => {
    onSetPage("next");
  };
  const handlePrevPage = () => {
    onSetPage("prev");
  };

  return (
    <div className="flex flex-row justify-center gap-3">
      {currentPage > 1 && (
        <button onClick={handlePrevPage} className="rounded-lg bg-slate-300 text-Darkness px-2">
          {currentPage - 1} {"< "}
        </button>
      )}
      {currentPage}
      <button onClick={handleNextPage} className="rounded-lg bg-slate-300 text-Darkness px-2">
        {" >"} {currentPage + 1}
      </button>
    </div>
  );
};

export default PagesButtons;
