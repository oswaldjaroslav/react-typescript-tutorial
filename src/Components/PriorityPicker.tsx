import React from "react";
import { priorities } from "../shared/mockData";
import {
  Container,
  PriorityPickerButton,
  PriorityPickerCollapsiblePanel,
  PriorityPickerCollapsiblePanelItem,
} from "../styled-components";

interface IProps {
  selectPriorityOption: SelectPriorityOption;
  selectedPriorityOption: string;
  theme: Theme;
}

const PriorityPicker: React.FC<IProps> = ({
  selectPriorityOption,
  selectedPriorityOption,
  theme,
}) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const ref = React.useRef<any>(null);

  const handleVisible = React.useCallback(() => {
    setVisible((current: boolean) => !current);
  }, []);

  const handleSelectPriority = React.useCallback(
    (priority: string) => {
      selectPriorityOption(priority);
      handleVisible();
    },
    [selectPriorityOption, handleVisible]
  );

  const renderPriorities = React.useCallback(() => {
    return priorities.map((priority: string) => (
      <PriorityPickerCollapsiblePanelItem
        onClick={() => handleSelectPriority(priority)}
        style={{
          background: priority === selectedPriorityOption && theme.appTheme,
        }}
      >
        {priority}
      </PriorityPickerCollapsiblePanelItem>
    ));
  }, [selectedPriorityOption, handleSelectPriority]);

  React.useEffect(() => {
    renderPriorities();
  }, [renderPriorities]);

  React.useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handleVisible();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function cleanup() {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handleVisible]);

  return (
    <Container ref={ref}>
      <PriorityPickerButton onClick={handleVisible}>
        {selectedPriorityOption || priorities[3]}
      </PriorityPickerButton>
      {visible && (
        <PriorityPickerCollapsiblePanel>
          {renderPriorities()}
        </PriorityPickerCollapsiblePanel>
      )}
    </Container>
  );
};

export default PriorityPicker;
