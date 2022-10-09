module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["You will meet someone special soon", "Luck is on its way!", "You will have a great year!", "A pleasant surprise is waiting for you", "A good time to finish up old tasks"];
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },
    getInspiration: (req, res) => {
        const inspirations = ["Be the change you want to see", "", "Don't just read, absorb", "Don't just talk, act!", "Don't just take, give"];
        let randomIndex = Math.floor(Math.random() * inspirations.length);
        let randomInspiration = inspirations[randomIndex];

        res.status(200).send(randomInspiration);

    },
    getFruit: (req, res) => {
        const fruits = ["apple", "banana", "cherry"];
        let randomIndex = Math.floor(Math.random() * fruits.length);
        let randomFruit = fruits[randomIndex];

        res.status(200).send(randomFruit) 
   },
    getWorkout: (req, res) => {
        const workouts = ["Aerobic workout", "Strength/Resistance workout", "Endurance training", "Balance workout", "Zumba", "HIIT", "Yoga"];
        let randomIndex = Math.floor(Math.random() * workouts.length);
        let randomWorkout = workouts[randomIndex];

        res.status(200).send(randomWorkout);
    },
    
}