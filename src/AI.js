
export default class AI {

    balance;
    goal;
    spending;

    constructor(balance, goal, spending) {
        this.balance = balance;
        this.goal = goal;
        this.spending = spending;
    }

    ask(input) {

        // Ignore case
        input = input.toLowerCase();

        // Name query
        if (input.includes("name"))
            return "My name is HAL.";

        // Balance query
        if (input.includes("balance"))
            return "Your balance is: £" + this.balance + ".";

        // Goal query
        else if(input.includes("goal"))
            return "You are £" + (this.goal-this.balance) + " from your goal.";

        // Spending
        else if(input.includes("netflix"))
            return "You have spent £" + this.spending["netflix"] + " on Netflix this month.";

        // ...
        else if(input.includes("open"))
            return "I'm sorry Dave, I'm afraid I can't do that.";
            
        // Spending query | Netflix
        else
            return "I'm sorry, I don't understand.";

    }

};
