import express from "express";
import dotenv from "dotenv";
dotenv.config();
class Application {
  static async main() {
    const app = express();

    const port = process.env.PORT;
    app.get("/", (req, res) => {
      res.send("Test api");
    });

    app.listen(port, () => {
      console.log(`'App running on port ${port}...'`);
    });
    // const buffer = await htmlToPdf("<html><body><h1>Test</h1></body></html>");
    // console.log("buffer", buffer);
  }
}

export default Application;
