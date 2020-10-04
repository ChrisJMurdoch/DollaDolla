
/** Eliza-style chatbot class */
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

        // Loop through keyword=>intent mappings
        for (let set of this.keywords ) {

            // Loop through keywords in set
            for (let keyword of set.aliases) {

                // Call intent if matched
                if (input.includes(keyword)) {
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
        ask_name            : () => "My name is HAL.",
        ask_balance         : () => "Your balance is: £" + this.balance + ".",
        ask_goal            : () => "You are £" + (this.goal-this.balance) + " from your goal.",
        ask_netflix_balance : () => "You have spent £" + this.spending["netflix"] + " on Netflix this month.",
        ask_open            : () => "I'm sorry Dave, I'm afraid I can't do that.",
        default             : () => "I'm sorry, I don't understand.",
    };

    // Map keywords to intents
    keywords = [
        { aliases: [ "hi", "hello" ],            intent: this.intents['greet'] },
        { aliases: [ "bye", "goodbye" ],         intent: this.intents['leave'] },
        { aliases: [ "name", "call" ],           intent: this.intents['ask_name'] },
        { aliases: [ "balance" ],                intent: this.intents['ask_balance'] },
        { aliases: [ "goal", "left", "target" ], intent: this.intents['ask_goal'] },
        { aliases: [ "netflix" ],                intent: this.intents['ask_netflix_balance'] },
        { aliases: [ "open", "pod bay doors" ],  intent: this.intents['ask_name'] },
    ];

};
