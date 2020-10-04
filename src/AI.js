
/** Simple Eliza-style chatbot */
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

        // Ignore case and add whitespace to end
        input = input.toLowerCase() + " ";

        // Loop through keyword=>intent mappings
        for (let set of this.keywords ) {

            // Loop through keywords in set
            for (let keyword of set.aliases) {

                // Call intent if matched
                if (input.includes(keyword)) {
                    console.log(keyword);
                    return set.intent();
                }
            }
        }

        // Call default intent if no matches
        return this.intents.default();
    }

    // Map intents to replies
    intents = {
        greet               : () => "Hello!",
        leave               : () => "Goodbye!",
        thank               : () => "No problem!",
        check_in            : () => "I'm good, thank you!",
        ask_name            : () => "My name is HAL.",
        ask_balance         : () => "Your balance is: £" + this.balance + ".",
        ask_spent           : () => "You have spent £" + ( this.spending.netflix + this.spending.amazon + this.spending.tesco ).toFixed(2) + " this month.",
        ask_goal            : () => "You are £" + (this.goal-this.balance) + " from your goal.",
        ask_netflix_balance : () => "You have spent £" + this.spending.netflix + " on Netflix this month.",
        ask_amazon_balance  : () => "You have spent £" + this.spending.amazon + " on Amazon this month.",
        ask_tesco_balance   : () => "You have spent £" + this.spending.tesco + " on Tesco this month.",
        get_coupon          : () => "I've realised you shop at Disney a lot, use the discount code: 'MAGIC10' next time!",
        ask_open            : () => "I'm sorry Dave, I'm afraid I can't do that.",
        default             : () => "I'm sorry, I don't understand.",
    };

    // Map keywords to intents - Priority: High -> Low
    keywords = [
        { aliases: [ "hi ", "hello", "hey", "hiya" ], intent: this.intents.greet },
        { aliases: [ "bye", "goodbye" ],             intent: this.intents.leave },
        { aliases: [ "thanks", "thank you" ],        intent: this.intents.thank },
        { aliases: [ "doing" ],               intent: this.intents.check_in },
        { aliases: [ "name", "call" ],               intent: this.intents.ask_name },
        { aliases: [ "coupon", "discount", "help" ], intent: this.intents.get_coupon },
        { aliases: [ "goal", "left", "target" ],     intent: this.intents.ask_goal },
        { aliases: [ "netflix" ],                    intent: this.intents.ask_netflix_balance },
        { aliases: [ "amazon" ],                     intent: this.intents.ask_amazon_balance },
        { aliases: [ "tesco" ],                      intent: this.intents.ask_tesco_balance },
        { aliases: [ "spent", "used" ],              intent: this.intents.ask_spent },
        { aliases: [ "balance", "have", "money" ],   intent: this.intents.ask_balance },
        { aliases: [ "open the", "pod bay doors" ],  intent: this.intents.ask_open },
    ];

};
