import React, { FC } from "react";

type Props = {
  onSetSuperType: (superType: string) => void;
  superSelected: string;
};

const SUPERTYPES = ["pokemon", "energy", "trainer"];

const SuperTypeFilter: FC<Props> = ({ onSetSuperType, superSelected }) => {
  const handleSupertype = (e: any) => {
    e.preventDefault;
    onSetSuperType(e.target.value);
  };

  const selected = `bg-cyan-800 text-white `;

  return (
    <div className="flex flex-row gap-1">
      {SUPERTYPES.map((superType) => (
        <button
          key={superType}
          onClick={handleSupertype}
          value={superType}
          className={`p-2 ${superType === superSelected ? selected : "bg-slate-300 text-Darkness "} rounded-lg `}
        >
          {superType}
        </button>
      ))}
    </div>
  );
};

export default SuperTypeFilter;
