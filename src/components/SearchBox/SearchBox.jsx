import { useId } from "react";
import css from "./SearchBox.module.css";

import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const id = useId();

  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <label className={css.find}> Find contacts by name </label>
      <input
        onChange={handleSearch}
        className={css.input}
        name='value'
        id={id}
        type="text"
      />
    </div>
  );
};

export default SearchBox;