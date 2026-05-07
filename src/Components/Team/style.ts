import { StyleSheet } from "react-native";

// Team style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 4,
        justifyContent: 'center',
        padding: 16,
        borderRadius: 10,
        backgroundColor: '#222',
    },
    team: {
        padding: 0,
        color: 'white',
        fontSize: 26,
        textAlign: 'center'
    },
    victories: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default styles