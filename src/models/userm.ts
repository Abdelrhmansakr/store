import user from '../types/usert';
import db from '../database';
class userm {
  //create
  async create(u: user): Promise<user> {
    try {
      const conn = await db.connect();
      const sql = `insert into users(email,uname,fname,lname,password)
      values($1,$2,$3,$4,$5) returnning*`;
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
}
export default userm;
