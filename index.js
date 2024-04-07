#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todiList = [];
let conditions = true;
console.log(chalk.magenta.bold("\n\t Wellcome to codewithsadia - Todo-List Application\n"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.green("Enter your New Task :"),
        },
    ]);
    todiList.push(addTask.task);
    console.log(`${addTask.task}Task added in Todo-List successfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.blue("Do you want to add more task?"),
            default: "false",
        },
    ]);
    conditions = addMoreTask.addmore;
}
console.log(chalk.white(`You updated Todo-list: ${todiList}`));
