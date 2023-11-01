import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('busDB.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS buses (id INTEGER PRIMARY KEY NOT NULL, company TEXT NOT NULL, model TEXT NOT NULL, year INTEGER NOT NULL, plate TEXT NOT NULL, capacity INTEGER NOT NULL);',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertBus = (company, model, year, plate, capacity) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO buses (company, model, year, plate, capacity) VALUES (?, ?, ?, ?, ?);',
        [company, model, year, plate, capacity],
        (_, result) => {
          resolve(result.insertId);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const updateBus = (id, company, model, year, plate, capacity) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE buses SET company = ?, model = ?, year = ?, plate = ?, capacity = ? WHERE id = ?;',
        [company, model, year, plate, capacity, id],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const fetchBuses = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM buses;',
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
