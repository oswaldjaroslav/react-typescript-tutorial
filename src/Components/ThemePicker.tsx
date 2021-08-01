import React from "react";
import styled from "styled-components";
import PaletteOutlinedIcon from "@material-ui/icons/PaletteOutlined";
import { themes } from "../shared/mockData";

const ThemePickerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 27px;
  margin-top: 10px;
`;

const ThemePickerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const ButtonTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
`;

const ThemePickerPanel = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  background-color: whitesmoke;
  width: 250px;
  height: 150px;
  position: absolute;
  margin-top: -185px;
  display: flex;
  flex-wrap: wrap;
`;

const ThemeTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  font-size: 12px;
`;

const ThemeButton = styled.div`
  flex: 1 0 33%;
  margin: 3px;
  border: 1px solid grey;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
`;

const ThemeColor = styled.div`
  width: 100%;
  height: 50%;
`;

const ThemePicker = ({ theme, setTheme }: any) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const ref = React.useRef<any>(null);

  const handleOpenCLose = () => {
    setOpen((current: boolean) => !current);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function cleanup() {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <ThemePickerContainer ref={ref}>
      {open ? (
        <ThemePickerPanel style={{ background: theme.itemTheme }}>
          {Object.values(themes).map((item: any) => (
            <ThemeButton
              style={{ background: item.itemTheme }}
              onClick={() => setTheme(item)}
            >
              <ThemeColor style={{ background: item.buttonTheme }} />
              <ThemeTitle>{item.title}</ThemeTitle>
            </ThemeButton>
          ))}
        </ThemePickerPanel>
      ) : null}
      <ThemePickerButton onClick={handleOpenCLose}>
        <PaletteOutlinedIcon />
        <ButtonTitle>Themes</ButtonTitle>
      </ThemePickerButton>
    </ThemePickerContainer>
  );
};

export default ThemePicker;
