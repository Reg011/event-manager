module.exports = (app) => {
  const { Client } = require("pg");

  class Connection {
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

  const c = new Connection();
  c.startConnection().then((res) => {});

  const sendQuery = (builder, values = null, prepared = false) => {
    const p = new Promise(function (resolve, reject) {
      const c = new Connection();
      c.startConnection().then((res) => {
        c.con.query(builder, values, (error, results) => {
          if (error) {
            console.error(error);
            c.endConnection();
            reject(error);
          } else {
            c.endConnection();
            resolve(!prepared ? results.rows : results[1].rows);
          }
        });
      });
    });

    return p;
  };
  // end
  const port = process.env.PORT || 8000;

  app.listen(port, () => {
    console.log(`server listening at ${port}`);
  });
};
