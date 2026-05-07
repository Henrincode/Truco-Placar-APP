import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./styles";

export default function EscapeButton({ ...rest }: TouchableOpacityProps) {
    return (
        <TouchableOpacity {...rest} style={[styles.container, rest.disabled && { opacity: 0.3 }]}>
            <Text style={[styles.text, styles.invert]}>🦆</Text>
            <Text style={styles.text}>Correu</Text>
            <Text style={styles.text}>🦆</Text>
        </TouchableOpacity>
    )
}