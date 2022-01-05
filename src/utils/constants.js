export const GAME_OBJECTS_ARRAY = [{
    type: "animal",
    animal: "rabbit",
    image: "https://res.cloudinary.com/dum4u7sro/image/upload/v1641324322/Untitled%20design/3_tpxacd.png",
    offspring: 5,
    sleep: 70,
    colony_size: 5,
    hunger: 50,
    predators: ["snake", "falcon"],
    prey: ["carrots"],
    difficulty: "hard",
}, {
    type: "animal",
    animal: "falcon",
    offspring: 1,
    image: "https://res.cloudinary.com/dum4u7sro/image/upload/v1641324321/Untitled%20design/5_m3zeib.png",
    sleep: 30,
    colony_size: 1,
    hunger: 30,
    predators: [],
    prey: ["rabbit", "snakes"],
    difficulty: "easy"

}, {
    type: "animal",
    animal: "snake",
    image: "https://res.cloudinary.com/dum4u7sro/image/upload/v1641324322/Untitled%20design/4_cvpisr.png",
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
    image: "https://res.cloudinary.com/dum4u7sro/image/upload/v1641324899/Untitled%20design/7_ypsaqk.png",
},
{
    type: "resource",
    resource: "carrots",
    image: "https://res.cloudinary.com/dum4u7sro/image/upload/v1641324899/Untitled%20design/6_fgpfem.png",
    predators: ["rabbit"]

}];