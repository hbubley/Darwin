export const GAME_OBJECTS_ARRAY = [{
    type: "animal",
    animal: "rabbit",
    image: "",
    offspring: 5,
    sleep: 50,
    colony_size: 5,
    hunger: 50,
    predators: ["snake", "falcon"],
    prey: ["carrots"],
    difficulty: "hard",
}, {
    type: "animal",
    animal: "falcon",
    offspring: 1,
    image: "",
    sleep: 30,
    colony_size: 1,
    hunger: 30,
    predators: [],
    prey: ["rabbit", "snakes"],
    difficulty: "easy"

}, {
    type: "animal",
    animal: "snake",
    image: "",
    offspring: 3,
    sleep: 30,
    colony_size: 1,
    hunger: 100,
    predators: ["falcon"],
    prey: ["rabbit"],
    difficulty: "medium",
}, {
    type: "resource",
    resource: "cave",
    image: "",
},
{
    type: "resource",
    resource: "carrots",
    image: "",
    predators: ["rabbit"]

}];