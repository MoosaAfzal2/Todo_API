import { resetTodos } from "./list";

export default function handler(req, res) {
    if (req.method === "RESET") {
      resetTodos()
      res.status(200).json({ msg: "todo Resets" });
    } else {
      resetTodos()
      res.status(400).json({ msg: "invalid request method" });
    }
  }