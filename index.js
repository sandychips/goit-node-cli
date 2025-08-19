import { listContacts, getContactById, removeContact, addContact } from "./contacts.js";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv))
  .usage("Usage: node index.js -a <action> [options]")
  .option("a", { alias: "action", type: "string", demandOption: true, describe: "Action: list|get|add|remove" })
  .option("i", { alias: "id", type: "string", describe: "Contact id" })
  .option("n", { alias: "name", type: "string", describe: "Name" })
  .option("e", { alias: "email", type: "string", describe: "Email" })
  .option("p", { alias: "phone", type: "string", describe: "Phone" })
  .strict(false) // прощаємо зайві опції
  .help()
  .parse();

// Нормалізація значення дії
const action = String(argv.action ?? argv.a ?? "")
  .trim()
  .toLowerCase();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list": {
      const items = await listContacts();
      console.table(items);
      break;
    }
    case "get": {
      const item = await getContactById(id);
      console.log(item);
      break;
    }
    case "add": {
      const created = await addContact(name, email, phone);
      console.log(created);
      break;
    }
    case "remove": {
      const removed = await removeContact(id);
      console.log(removed);
      break;
    }
    default: {
      console.warn("\x1B[31mUnknown action type! Use: list|get|add|remove");
    }
  }
}

await invokeAction({ action, id: argv.id, name: argv.name, email: argv.email, phone: argv.phone });
