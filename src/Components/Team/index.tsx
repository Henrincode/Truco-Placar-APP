import styles from "./style";
import { Text, TextInput, TextInputAndroidProps, View } from "react-native";

interface Props extends TextInputAndroidProps {
    team: string
    setTeam: (param: string) => void
    victories: number
}

export default function Team({ team, setTeam, victories, ...rest }: Props) {
    return (
        
        <View style={styles.container}>
            {/* team name */}
            <TextInput
                style={styles.team} {...rest} maxLength={8} selectTextOnFocus
                onChangeText={(valor) => setTeam(valor.toUpperCase())}
                value={team}
            />

            {/* team victories */}
            <Text style={styles.victories}>
                🏆 {victories}
            </Text>
        </View>
    )
}