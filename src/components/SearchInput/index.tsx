import { useState } from "react";
import { Container, Input } from "./styles";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState<string>();

  function handlerSubmit(e:any) {
    e.preventDefault();
    navigate(`/search?name=${search}`)
  }

  return (
    <Container
      isFocused={isFocused}
      isHovering={isHovering}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <BsSearch />
      <form onSubmit={handlerSubmit}>
        <Input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setSearch(e.target.value) }
          value={search}
          placeholder="Pesquisar no UOLkut"
        />
      </form>
    </Container>
  );
};

export default SearchInput;
