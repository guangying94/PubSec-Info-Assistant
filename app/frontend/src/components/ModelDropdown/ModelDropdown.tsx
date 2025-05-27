import React from "react";
import { Dropdown, IDropdownOption, IDropdownStyles } from "@fluentui/react";
import styles from "./ModelDropdown.module.css";

interface ModelDropdownProps {
  className?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
}

export const ModelDropdown: React.FC<ModelDropdownProps> = ({ className, defaultValue, onChange }) => {
  const options: IDropdownOption[] = [
    { key: "DeepSeek-R1", text: "DeepSeek-R1" },
    { key: "DeepSeek-V3-0324", text: "DeepSeek-V3-0324" },
    { key: "gpt-4.1", text: "gpt-4.1" },
    { key: "Phi-4", text: "Phi-4" }
  ];

  const onDropdownChange = (_: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
    if (option) {
      onChange(option.key as string);
    }
  };

  const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { 
      width: 180,
      selectors: {
        '.ms-Dropdown-title': {
          borderRadius: '4px',
          padding: '0 32px 0 12px',
          height: '32px',
          lineHeight: '30px',
          borderColor: '#8a8886',
        }
      }
    },
    title: {
      fontSize: '14px'
    },
    dropdownItemSelected: {
      backgroundColor: '#0078d4',
      color: 'white'
    }
  };

  return (
    <div className={`${styles.container} ${className || ""}`}>
      <Dropdown
        label="AI Model"
        selectedKey={defaultValue || options[0].key}
        options={options}
        onChange={onDropdownChange}
        styles={dropdownStyles}
      />
    </div>
  );
};
