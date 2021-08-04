import React from "react";
import PaletteOutlinedIcon from "@material-ui/icons/PaletteOutlined";
import { themes } from "../shared/mockData";
import {
  ButtonTitle,
  ThemeButton,
  ThemeColor,
  ThemePickerButton,
  ThemePickerContainer,
  ThemePickerPanel,
  ThemeTitle,
} from "../styled-components";

const ThemePicker = ({ theme, setTheme }: any) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const ref = React.useRef<any>(null);

  const handleOpenCLose = () => {
    setOpen((current: boolean) => !current);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSetTheme = (theme: any) => {
    handleClose();
    setTheme(theme);
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
              onClick={() => handleSetTheme(item)}
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
