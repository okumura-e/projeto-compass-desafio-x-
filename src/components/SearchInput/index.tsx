import { useState } from "react";
import { Container, Input } from "./styles";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container
      isFocused={isFocused}
      isHovering={isHovering}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <BsSearch />
      <Input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Pesquisar no UOLkut"
      />
    </Container>
  );
};

export default SearchInput;
