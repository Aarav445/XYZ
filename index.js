import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";

const AUTHOR_NAME = "Aarav Sonara";
const AUTHOR_EMAIL = "sonara.aarav@gmail.com";
const AUTHOR = `"${AUTHOR_NAME} <${AUTHOR_EMAIL}>"`;

const makeCommits = (n) => {
  if (n === 0) return simpleGit().push();

  const x = random.int(0, 54);
  const y = random.int(0, 6);
  const date = moment().subtract(1, "y").add(1, "d").add(x, "w").add(y, "d").format();

  const data = { date };

  console.log(`Committing for: ${date}`);

  jsonfile.writeFile(path, data, () => {
    simpleGit().add([path]).commit(date, {
  "--date": date,
  "--author": '"Aarav Sonara <sonara.aarav@gmail.com>"'
    }, makeCommits.bind(this, --n));

  });
};


makeCommits(37);
