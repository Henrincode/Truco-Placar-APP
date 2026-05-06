import { Text, TextInput, TextInputProps, View } from "react-native"
import styles from "./styles"

export default function Placar({ tittle }: { tittle: number }) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Pontos</Text>
            <Text style={styles.texto}>{tittle}</Text>
        </View>
    )
}