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

  getTags(search?: string) {
    if (!search) {
      return this.tags;
    }

    return this.tags.filter((tag) =>
      tag.label.toLowerCase().includes(search.toLowerCase())
    );
  }
}

export default new TagsService();
