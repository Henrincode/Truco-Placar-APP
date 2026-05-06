import { Text, TextInput, TextInputAndroidProps, View } from "react-native";
import styles from "./style";

interface Props extends TextInputAndroidProps {
    nome: string,
    setNome: (param: string) => void,
    vitorias: number

}

export default function Team({ nome, setNome, vitorias, ...rest }: Props) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.nome} {...rest} maxLength={8} selectTextOnFocus
                onChangeText={(valor) => setNome(valor.toUpperCase())}
                value={nome}
            />
            <Text style={styles.vitorias}>
                🏆 {vitorias}
            </Text>
        </View>
    )
}