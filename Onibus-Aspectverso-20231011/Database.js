import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('busdb');

export const initDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS buses (id INTEGER PRIMARY KEY NOT NULL, empresa TEXT, prefixo TEXT, chassi TEXT, ano TEXT, placa TEXT, modelo TEXT);',
      [],
      () => {
        console.log('Tabela criada com sucesso');
      },
      (_, error) => {
        console.error('Erro ao criar a tabela: ', error);
      }
    );
  });
};

export const addBus = (bus) => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        'INSERT INTO buses (empresa, prefixo, chassi, ano, placa, modelo) VALUES (?, ?, ?, ?, ?, ?);',
        [bus.empresa, bus.prefixo, bus.chassi, bus.ano, bus.placa, bus.modelo],
        (_, result) => {
          console.log('Ônibus adicionado com sucesso');
        },
        (_, error) => {
          console.error('Erro ao adicionar ônibus: ', error);
        }
      );
    },
    null,
    null
  );
};

export const getAllBuses = (callback) => {
  db.transaction(
    (tx) => {
      tx.executeSql('SELECT * FROM buses;', [], (_, { rows }) => {
        const buses = rows._array;
        callback(buses);
      });
    },
    null,
    null
  );
};
