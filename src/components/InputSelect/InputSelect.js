import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const InputSelect = () => {
  return (
    <View style={{ width: 316 }}>
      <RNPickerSelect
        style={style}
        Icon={() => {
          return <FontAwesome name="caret-down" size={20} color="#34898F" />;
        }}
        placeholder={{
          label: "Selecionar horário",
          value: null,
          color: "#34898F",
        }}
        onValueChange={(value) => console.log(value)}
        items={[
          { label: "14:00", value: "14:00" },
          { label: "15:00", value: "15:00" },
          { label: "16:00", value: "16:00" },
          { label: "17:00", value: "17:00" },
          { label: "18:00", value: "18:00" },
         
        ]}
        useNativeAndroidPickerStyle={false}
      />
    </View>
  );
};

const style = StyleSheet.create({
  inputAndroid: {
    fontSize: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: "#60BFC5",
    borderRadius: 5,
    color: "#34898F",
    alignItems: "center",
    justifyContent: "center",

    fontFamily: "MontserratAlternates_600SemiBold",
  },
  iconContainer: {
    top: "25%",
    marginRight: 10,
  },
  placeholder: {
    color: "#34898F",
  },
});

export default InputSelect;
