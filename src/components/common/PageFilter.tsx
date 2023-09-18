import { FC, useState } from 'react';
import InputSlider from 'react-input-slider';

type Props = {
  onChangeNumberOfPages: (type: number) => void;
  pageNumber: number;
};

const PageFilter: FC<Props> = ({ onChangeNumberOfPages, pageNumber }) => {
  // const [pageNumber, setPageNumber] = useState(50);

  const handleChange = (e: any) => {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 0 && Number(value) <= 250)) {
      onChangeNumberOfPages(Number(value));
    }
  };

  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Number of Cards</label>
        <input
          type="text"
          className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 border rounded-lg focus:outline-none "
          placeholder="Escribe un número entre 0 y 250"
          value={pageNumber}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <InputSlider
          styles={{
            track: { backgroundColor: 'white' },
            active: {
              backgroundColor: 'lightblue',
            },
            thumb: {
              backgroundColor: 'white',
              borderColor: 'black',
            },
          }}
          axis="x"
          x={pageNumber}
          xmin={0}
          xmax={250}
          onChange={({ x }) => onChangeNumberOfPages(x)}
        />
        <div className="text-gray-700 mt-2 text-center">{pageNumber}</div>
      </div>
    </>
  );
};

export default PageFilter;
