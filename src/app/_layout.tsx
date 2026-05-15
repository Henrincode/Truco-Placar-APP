import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardProvider } from "react-native-keyboard-controller";

export default function Layout() {
    return (
        // calcula o tamanho do notch/barras de sistema para o resto do app.
        <SafeAreaProvider>
            <KeyboardProvider>
                <Stack screenOptions={{ headerShown: false }} />
            </KeyboardProvider>
        </SafeAreaProvider>
    )
}