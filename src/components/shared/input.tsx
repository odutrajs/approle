import { FieldError } from "react-hook-form";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import theme, { Box, Text } from "../../utils/theme";

type InputProps = {
  label: string;
  error?: FieldError | undefined;
} & TextInputProps;

const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <Box flexDirection="column">
      <Text variant="textXs" textTransform="uppercase" mb="3.5" color="white">
        {label}
      </Text>
      <TouchableOpacity></TouchableOpacity>
      <TextInput
        style={{
          padding: 15,
          borderWidth: 1,
          backgroundColor: "#000",
          borderColor: error ? theme.colors.rose500 : "#0a4c6c",
          borderRadius: theme.borderRadii["rounded-3xl"],
          color: "white",
        }}
        {...props}
      />
      {error && (
        <Text mt="3.5" color="rose500">
          {label} is required
        </Text>
      )}
    </Box>
  );
};

export default Input;

const styles = StyleSheet.create({});
