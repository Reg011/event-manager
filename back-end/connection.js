const { Client } = require("pg");

export class Connection {
  con = null;

  startConnection() {
    const promise = new Promise((resolve, reject) => {
      this.con = new Client({
        host: "localhost",
        user: "postgres",
        password: "kumojin011",
        database: "event-manager",
      });

      this.con.connect(function (err) {
        if (err) {
          reject(err);
        } else {
          resolve("connected");
        }
      });
    });

    return promise;
  }

  endConnection() {
    this.con.end();
  }
}
