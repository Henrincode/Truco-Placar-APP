import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./styles";

export default function ResetButton({ ...rest }: TouchableOpacityProps) {
    return (
        <TouchableOpacity {...rest} style={styles.container}>
            <Text style={styles.text}>Zerar Tudo</Text>
        </TouchableOpacity>
    )
}