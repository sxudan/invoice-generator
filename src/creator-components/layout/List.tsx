import Text from "../Text";
import View from "../View";
import React, { ReactNode, useEffect, useState } from "react";
import HStack from "./HStack";
import EditableInput from "../EditableInput";


type ListProps = {
  pdfMode?: boolean;
  title: string;
  items: string[];
  onChange?: (items: string[]) => void;
  properties?: {
    showBullets: boolean
  }
};

const List = ({ items, pdfMode, title, onChange, properties={'showBullets': true} }: ListProps) => {
  const [data, setData] = useState(items);

  const handleAdd = () => {
    setData(data.concat(["New Item"]));
  };

  const handleRemove = (index: number) => {
    const newArray = Array.from(data);
    newArray.splice(index, 1);
    setData(newArray);
  };

  useEffect(() => {
    if (onChange) {
      onChange(data);
    }
  }, [data]);

  // @ts-ignore
  return (
    <View pdfMode={pdfMode}>
      {data.map((item: string, index) => (
        // @ts-ignore
        <HStack pdfMode={pdfMode} key={index} crossAxisAlignment="center">
          
          {
            // @ts-ignore
            properties.showBullets && <Text pdfMode={pdfMode} style={{ width: "auto" }}>
            •
          </Text>
          }
          <EditableInput
            placeholder="Add item"
            pdfMode={pdfMode}
            value={item}
            onChange={(val) => {
              const newItem = Array.from(data);
              newItem[index] = val;
              setData(newItem);
            }}
          />
          {!pdfMode && (
            <button
              className="link row__remove"
              aria-label="Remove Row"
              title="Remove Row"
              onClick={() => handleRemove(index)}
            >
              <span className="icon icon-remove bg-red"></span>
            </button>
          )}
        </HStack>
      ))}
      {!pdfMode && (
        <button className="link mt-10" onClick={handleAdd}>
          <span className="icon icon-add bg-green mr-10 "></span>
          Add {title.toLowerCase()}
        </button>
      )}
    </View>
  );
};

export default List;
