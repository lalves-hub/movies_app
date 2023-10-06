import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';



const DropdownComponent = ({dataDropD,onValueChange, placeholder}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [dataDrop, setDataDrop] = useState(dataDropD)
  const [placeHolder, setPlaceHolder] = useState(placeholder)
  //   [
  // { label: 'Item 1', value: '1' },
  // { label: 'Item 2', value: '2' },
  // { label: 'Item 3', value: '3' }]);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        // inputSearchStyle={styles.inputSearchStyle}
        data={dataDrop}
        // search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? `${placeHolder}`: '...'}
        // searchPlaceholder="Search..."
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

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 5,
    marginTop: 30,
    marginLeft: 100,
    marginRight: 100,
  },
  dropdown: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingHorizontal: 8,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
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
  },
});

// import React, { useState } from 'react';
// import { View } from 'react-native';
// import { Dropdown } from 'react-native-element-dropdown';

// const DropdownComponent = () => {
//   const data = [
//     { label: 'Item 1', value: '1' },
//     { label: 'Item 2', value: '2' },
//     { label: 'Item 3', value: '3' },
//     { label: 'Item 4', value: '4' },
//     { label: 'Item 5', value: '5' },
//     { label: 'Item 6', value: '6' },
//     { label: 'Item 7', value: '7' },
//     { label: 'Item 8', value: '8' },
//   ];

//   const [selectedOption, setSelectedOption] = useState(options[0].value);

//   return (
//     <View>
//       <Dropdown 

//         data={data}

//       />
//     </View>
//   );
// };

// export default DropdownComponent;




// import React, { useState } from 'react';
// import { View } from 'react-native';
// import { Picker } from '@react-native-picker/picker'

// const Dropdown = () => {
//   const [selectedValue, setSelectedValue] = useState('option1');

//   return (
//     <View>
//       <Picker
//         selectedValue={selectedValue}
//         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//       >
//         <Picker.Item label="Option 1" value="option1" />
//         <Picker.Item label="Option 2" value="option2" />
//         <Picker.Item label="Option 3" value="option3" />
//       </Picker>
//     </View>
//   );
// };

// export default Dropdown
