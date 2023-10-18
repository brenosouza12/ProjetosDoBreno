import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const words = ['Louise', 'Luna', 'Emma', 'Clara'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  word: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    padding: 5,
    width: 40,
    textAlign: 'center',
  },
  attempts: {
    fontSize: 20,
    marginTop: 10,
  },
  gameStatus: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  winText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
  },
  loseText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: this.getRandomWord(),
      guessedWord: '',
      attempts: 0,
      maxAttempts: 6,
      gameStatus: 'Jogando',
    };
  }

  getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  handleGuessLetter(letter) {
    const { currentWord, guessedWord, attempts, maxAttempts } = this.state;
    if (attempts >= maxAttempts) {
      this.setState({ gameStatus: 'Você perdeu' });
      return;
    }

    if (currentWord.includes(letter)) {
      const newGuessedWord = currentWord
        .split('')
        .map((char, index) => (guessedWord[index] === char ? char : '_'))
        .join('');
      this.setState({ guessedWord: newGuessedWord });

      if (newGuessedWord === currentWord) {
        this.setState({ gameStatus: 'Você ganhou' });
        this.refs.wordView.tada(800);
      }
    } else {
      this.setState({ attempts: attempts + 1 });
    }
  }

  render() {
    const { guessedWord, attempts, maxAttempts, gameStatus } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.word}>{guessedWord}</Text>
        <Text style={styles.attempts}>Tentativas restantes: {maxAttempts - attempts}</Text>
        <Text style={styles.gameStatus}>Status do Jogo: {gameStatus}</Text>
        {gameStatus !== 'Você ganhou' ? (
          <TextInput
            onChangeText={(text) => this.handleGuessLetter(text)}
            maxLength={1}
            style={styles.input}
          />
        ) : null}
        {gameStatus === 'Você perdeu' ? (
          <Text style={styles.loseText}>Você perdeu! A palavra era: {this.state.currentWord}</Text>
        ) : null}
        <Animatable.View ref="wordView">
          {gameStatus === 'Você ganhou' ? (
            <Text style={styles.winText}>Você ganhou!</Text>
          ) : null}
        </Animatable.View>
      </View>
    );
  }
}

export default App;


