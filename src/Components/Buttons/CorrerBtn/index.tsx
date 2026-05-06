import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./styles";

interface Props extends TouchableOpacityProps {
    texto: string,
    ocultar?: boolean
}

export default function CorrerBtn({texto, ocultar, ...rest}: Props) {
    return (
        <TouchableOpacity {...rest} style={[styles.container, {opacity: ocultar ? 0 : 1}]}>
            <Text style={[styles.texto]}>{texto}</Text>
        </TouchableOpacity>
    )
}