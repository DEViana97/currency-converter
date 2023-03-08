import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

export default function PickerSelect({ moedas, onChange }) {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  return (
    <Picker
      selectedValue={selectedLanguage}
      onValueChange={(itemValue, itemIndex) => {
        setSelectedLanguage(itemValue);
        onChange(itemValue);
      }}
    >
      {moedas.map((moeda) => {
        return <Picker.Item label={moeda.label} value={moeda.value} />;
      })}
    </Picker>
  );
}
