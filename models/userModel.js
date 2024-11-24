import db from '../db.js';

export default class User {
  static async create(data) {
    const query = `
      INSERT INTO users (full_name, admission_number, email, phone_number, program_name, program_code, role, status, password)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const [result] = await db.execute(query, [
      data.full_name,
      data.admission_number,
      data.email,
      data.phone_number,
      data.program_name,
      data.program_code,
      data.role,
      data.status,
      data.password,
    ]);
    return result;
  }

  static async findByEmailAndPassword(email, password) {
    const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
    const [rows] = await db.execute(query, [email, password]);
    return rows[0]; // Returns the first user found, or undefined if not found
  }
}
