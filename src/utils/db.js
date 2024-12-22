import Dexie from 'dexie';

// Delete existing database
const deleteDatabase = async () => {
  try {
    await Dexie.delete('TodoDB');
  } catch (error) {
    console.error('Error deleting database:', error);
  }
};

// Create new database instance
const createDatabase = async () => {
  const db = new Dexie('TodoDB');
  
  db.version(1).stores({
    todos: 'id, title, completed, userId'
  });
  
  return db;
};

// Initialize database
const initDatabase = async () => {
  await deleteDatabase();
  return await createDatabase();
};

export const db = await initDatabase();