import { useState, useEffect } from "react";
import { Container, Select, OptionsList, Option, ErrorText } from "./styles";

import { IoIosArrowDown } from "react-icons/io";

interface CustomSelectProps {
  selected?: string;
  options: string[];
  placeholder: string;
  onSelect: (option: string) => void;
  hasError?: boolean;
}

const CustomSelect = ({
  selected,
  options,
  placeholder,
  onSelect,
  hasError,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [currentSelected, setCurrentSelected] = useState(selected);
  const [error, setError] = useState(hasError || false);

  useEffect(() => {
    setError(hasError || false);
  }, [hasError]);

  const handleSelectOption = (text: string) => {
    setIsOpen(false);
    setCurrentSelected(text);
    onSelect(text);
  };

  const handleSelectClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <Container>
      <Select
        isOpened={isOpen}
        hasError={error}
        isHovering={isHovering}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={(e) => handleSelectClick(e)}
      >
        <span>{currentSelected || placeholder}</span>
        <IoIosArrowDown />
      </Select>
      {isOpen && (
        <OptionsList>
          {options.map((text) => (
            <Option
              selected={currentSelected === text}
              onClick={() => handleSelectOption(text)}
              key={text}
            >
              {text}
            </Option>
          ))}
        </OptionsList>
      )}
      {!isOpen && hasError && <ErrorText>Este campo é obrigatório!</ErrorText>}
    </Container>
  );
};

export default CustomSelect;
