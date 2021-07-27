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

  console.log(selectedPriorityOption);

  const handleSelectPriority = (priority: string) => {
    selectPriorityOption(priority);
    handleVisible();
  };

  const handleVisible = () => {
    setVisible((current: boolean) => !current);
  };

  return (
    <Container>
      <PriorityPickerButton onClick={handleVisible}>
        {selectedPriorityOption || priorities[3]}
      </PriorityPickerButton>
      {visible && (
        <PriorityPickerCollapsiblePanel>
          {priorities.map((priority: string) => (
            <PriorityPickerCollapsiblePanelItem
              onClick={() => handleSelectPriority(priority)}
              style={{
                background: priority === selectedPriorityOption && "lightgrey",
              }}
            >
              {priority}
            </PriorityPickerCollapsiblePanelItem>
          ))}
        </PriorityPickerCollapsiblePanel>
      )}
    </Container>
  );
};

export default PriorityPicker;
