import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import ButtonCalc from '@/Components/Buttons/CalcButton';
import Input from '@/Components/Inputs';
import { useState } from 'react';
import Placar from '@/Components/placar';
import Team from '@/Components/Team';
import TextoButton from '@/Components/Buttons/TextoButton';
import ZerarButton from '@/Components/Buttons/ZerarButton';

export default function App() {

  const [teamA, setTeamA] = useState('Team A'.toUpperCase())
  const [placarA, setPlacarA] = useState(0)
  const [vitoriasA, setVitoriasA] = useState(0)

  const [teamB, setTeamB] = useState('TEAM B'.toUpperCase())
  const [placarB, setPlacarB] = useState(0)
  const [vitoriasB, setVitoriasB] = useState(0)

  const [point, setPoint] = useState(1)

  function addPonto(team: string) {
    const total = team === 'a' ? point + placarA : point + placarB

    if (total >= 12) {
      team === 'a' ? setVitoriasA(vitoriasA + 1) : setVitoriasB(vitoriasB + 1)
      setPoint(1)
      setPlacarA(0)
      setPlacarB(0)
    } else {
      team === 'a' ? setPlacarA(placarA + point) : setPlacarB(placarB + point)
      setPoint(1)
    }
  }

  function removePonto(team: string) {
    const total = team === 'a' ? placarA - point : placarB - point
    if (total <= 0) {
      team === 'a' ? setPlacarA(0) : setPlacarB(0)
    } else {
      team === 'a' ? setPlacarA(total) : setPlacarB(total)
    }
  }

  function truco() {
    if (point === 1) {
      setPoint(point + 2)
    } else if (point < 12) {
      setPoint(point + 3)
    }
  }

  function correu() {
    if (point > 3) {
      setPoint(point - 3)
    } else if (point === 3) {
      setPoint(point - 2)
    }
  }

  function zerar() {
    setPlacarA(0)
    setPlacarB(0)
    setVitoriasA(0)
    setVitoriasB(0)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>♦️ TRUCO ♦️</Text>

      <View style={styles.row}>
        <Team nome={teamA} setNome={setTeamA} vitorias={vitoriasA} />
        <Team nome={teamB} setNome={setTeamB} vitorias={vitoriasB} />
      </View>
      <View style={styles.row}>
        <Placar tittle={placarA} />
        <Placar tittle={placarB} />
      </View>

      {/* buttons container */}
      <View style={styles.buttonsContainer}>
        {/* buttons list */}
        <View style={styles.row}>
          <ButtonCalc onPress={() => addPonto('a')} tittle={`+ ${point}`} />
          <ButtonCalc onPress={() => addPonto('b')} tittle={`+ ${point}`} />
        </View>
        {/* buttons list */}
        <View style={styles.row}>
          <ButtonCalc onPress={() => removePonto('a')} tittle={`- ${point}`} />
          <ButtonCalc onPress={() => removePonto('b')} tittle={`- ${point}`} />
        </View>
      </View>

      {/* button pedir truco! */}
      <View style={styles.row}>
        <TextoButton onPress={truco} texto='Pedir truco' />
      </View>
      {point > 1 ? (
        <View style={styles.row}>
          <TextoButton onPress={correu} texto='Correu' />
        </View>
      ) : (
        <View style={styles.row}>
          <ZerarButton onPress={zerar} texto='Zerar tudo' />
        </View>
      )}
    </View>
  );
}
