import fs from "fs";
import path from "path";

import { Tag } from "../@types";

class TagsService {
  private tags: Tag[];
  constructor() {
    this.tags = JSON.parse(
      fs.readFileSync(
        path.join(__dirname, "../..", "data/tags-list.json"),
        "utf-8"
      )
    );
  }

  getTags() {
    return this.tags;
  }
}

export default new TagsService();
