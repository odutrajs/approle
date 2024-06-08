import { Pressable } from "react-native";
import { Text } from "../../../utils/theme";
import { LinearGradient } from "expo-linear-gradient";

type ButtonProps = {
  label: string;
  onPress: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
  uppercase?: boolean;
  gradientLeft?: string;
  gradientRight?: string;
};

const ButtonLinearGradient = ({
  label,
  onLongPress,
  onPress,
  disabled,
  uppercase,
  gradientLeft,
  gradientRight,
}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} disabled={disabled}>
      <LinearGradient
        colors={[
          gradientLeft ? gradientLeft : "#fba72a",
          gradientRight ? gradientRight : "#dd0769",
        ]}
        style={{
          paddingTop: 14,
          paddingBottom: 14,
          borderRadius: 14,
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text
          variant="textXs"
          fontWeight="700"
          color="white"
          textAlign="center"
          textTransform={uppercase ? "uppercase" : "none"}
        >
          {label}
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

export default ButtonLinearGradient;
