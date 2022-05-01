import user from '../types/usert';
import db from '../database';
class userm {
  //create
  async create(u: user): Promise<user> {
    try {
      const conn = await db.connect();
      const sql = `insert into users(email,uname,fname,lname,password)
      values($1,$2,$3,$4,$5) returning email,uname,fname,lname`;
      const result = await conn.query(sql, [
        u.email,
        u.uname,
        u.fname,
        u.lname,
        u.password,
      ]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`unable to create ${u.uname}:${(err as Error).message}`);
    }
  }
  //get info users
  async getMany(): Promise<user[]> {
    try {
      const conn = await db.connect();
      const sql = `select id,email,uname,fname,lname from users`; //wthout
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Error at retrieving users ${(err as Error).message}`);
    }
  }

  // get specific user
  async getOne(id: string): Promise<user> {
    try {
      const sql = `SELECT id, email, uname, fname, lname FROM users 
      WHERE id=($1)`;
      const connection = await db.connect();
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not find user ${id}, ${(error as Error).message}`);
    }
  }

  // update user
  async updateOne(u: user): Promise<user> {
    try {
      const connection = await db.connect();
      const sql = `UPDATE users 
                  SET email=$1, uname=$2, fname=$3, lname=$4, password=$5 
                  WHERE id=$6 
                  RETURNING id, email, uname, fname, lname`;
      const result = await connection.query(sql, [
        u.email,
        u.uname,
        u.fname,
        u.lname,
        u.password,
        u.id,
      ]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not update user: ${u.uname}, ${(error as Error).message}`
      );
    }
  }

  // delete user
  async deleteOne(id: string): Promise<user> {
    try {
      const connection = await db.connect();
      const sql = `DELETE FROM users 
                  WHERE id=($1) 
                  RETURNING id, email, uname, fname, lname`;

      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not delete user ${id}, ${(error as Error).message}`
      );
    }
  }
}
export default userm;
