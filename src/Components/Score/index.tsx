import { Text, View } from "react-native"
import styles from "./styles"

export default function Score({ tittle }: { tittle: number }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Pontos</Text>
            <Text style={styles.text}>{tittle}</Text>
        </View>
    )
}