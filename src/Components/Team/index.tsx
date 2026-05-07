import { Text, TextInput, TextInputAndroidProps, View } from "react-native";
import styles from "./style";

interface Props extends TextInputAndroidProps {
    team: string,
    setTeam: (param: string) => void,
    victories: number

}

export default function Team({ team, setTeam, victories, ...rest }: Props) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.team} {...rest} maxLength={8} selectTextOnFocus
                onChangeText={(valor) => setTeam(valor.toUpperCase())}
                value={team}
            />
            <Text style={styles.victories}>
                🏆 {victories}
            </Text>
        </View>
    )
}