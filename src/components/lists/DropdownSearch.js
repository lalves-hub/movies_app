import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';



const DropdownSearch = ({dataDropD,onValueChange, placeholder}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [dataDrop, setDataDrop] = useState(dataDropD)
  const [placeHolder, setPlaceHolder] = useState(placeholder)

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'orange' }]}>
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Choose Search Type *</Text>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'orange' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={dataDrop}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? `${placeHolder}`: '...'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          onValueChange(item)

          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownSearch;

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginTop: 0,
    marginLeft: 28
  },
  dropdown: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  }
});