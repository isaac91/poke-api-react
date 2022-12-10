import { Filter, SearchBoxContainer } from "./search-box.styles";

const SearchBox = ({ onChangeHandler, placeholder }) => {
  return (
    <SearchBoxContainer>
      <Filter onChange={onChangeHandler} placeholder={placeholder} />
    </SearchBoxContainer>
  );
};

export default SearchBox;
