// QuizApp.js

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import quizData from './quizData.json';

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const questions = quizData.questions;

  const handleAnswer = (selectedOption) => {
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (selectedOption === correctAnswer) {
      setScore(score + 1);
      setCorrectAnswers([...correctAnswers, questions[currentQuestion]]);
    } else {
      setWrongAnswers([...wrongAnswers, questions[currentQuestion]]);
    }

    // Avance para a próxima pergunta
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion < questions.length) {
    return (
      <View style={styles.container}>
        <View style={styles.quizContainer}>
          <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              title={option}
              onPress={() => handleAnswer(option)}
            />
          ))}
        </View>
      </View>
    );
  } else {
    // O quiz terminou, exiba a pontuação final e as perguntas acertadas/erradas
    return (
      <View style={styles.container}>
        <Text style={styles.resultText}>Pontuação final: {score} de {questions.length}</Text>
        
        <Text style={styles.resultSubtitle}>Perguntas Acertadas:</Text>
        {correctAnswers.map((item, index) => (
          <Text key={index}>{index + 1}. {item.question}</Text>
        ))}

        <Text style={styles.resultSubtitle}>Perguntas Erradas:</Text>
        {wrongAnswers.map((item, index) => (
          <Text key={index}>{index + 1}. {item.question}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quizContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  resultText: {
    fontSize: 20,
    marginBottom: 10,
  },
  resultSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default QuizApp;
