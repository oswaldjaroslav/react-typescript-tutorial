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
}

const PriorityPicker: React.FC<IProps> = ({
  selectPriorityOption,
  selectedPriorityOption,
}) => {
  const [visible, setVisible] = React.useState<boolean>(false);

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
          background: priority === selectedPriorityOption && "lightgrey",
        }}
      >
        {priority}
      </PriorityPickerCollapsiblePanelItem>
    ));
  }, [selectedPriorityOption, handleSelectPriority]);

  React.useEffect(() => {
    renderPriorities();
  }, [renderPriorities]);

  return (
    <Container>
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
