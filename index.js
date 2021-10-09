//requiring express
const express = require('express');

//specifying express app
const app = express();

//specifying a port to listen on
const port = 9000;

//define API urls
app.get('/', (req, res)=>{
    res.send("Hi, from the express server!");
});

app.get('/penguins', (req, res) =>{
    //call to db

    //return dummy data
    const penguins1 = "A group of penguins in the water is called a raft but on land theyre called a waddle!";
    const penguins2 ="The black and white tuxedo look donned by most penguin species is a clever camouflage called countershading.";
    const penguins3 = "Penguins may huddle together for several reasons.";
    const penguins4 = "Penguins evolved to fly underwater.";
    const penguins5 = "A penguin’s thick feathers aren’t the only way this bird stays warm.";
    const penguins6 = "A Penguins live in many locations and habitats. ";
    const penguins7 = "Contrary to many popular holiday cartoons, you’ll never see penguins and polar bears together in the wild.";
    const penguins8 = "Penguin feet are adapted to walk long distances.";
    const penguins9 = "Many male penguins gift female penguins with rocks in order to woo them.";
    const penguins10 ="According to some animal experts, the penguin is one of the most streamlined animals in the world.";    
 
    //sending a response should always be in JSON
    res.write(JSON.stringify(penguins1));
    res.write(JSON.stringify(penguins2));
    res.write(JSON.stringify(penguins3));
    res.write(JSON.stringify(penguins4));
    res.write(JSON.stringify(penguins5));
    res.write(JSON.stringify(penguins6));
    res.write(JSON.stringify(penguins7));
    res.write(JSON.stringify(penguins8));
    res.write(JSON.stringify(penguins9));
    res.write(JSON.stringify(penguins10));

    res.end();
});

app.get('/bears', (req, res) =>{
    //call to db

    //return dummy data
    const bears1 ="Bears are extraordinarily intelligent animals. They have far superior navigation skills to humans; excellent memories; large brain to body ratio; and use tools in various contexts from play to hunting.";
    const bears2 ="Bears grieve deeply for others. Cubs are known to moan and cry when separated from their mothers.  This can go on for weeks if their mothers are killed by hunters.";
    const bears3 ="Bears have excellent senses of smell, sight and hearing. They can smell food, cubs, a mate or predators from miles away. Their great eyesight allows them to detect when fruits are ripe.";
    const bears4 ="Some species of Asiatic bear build nests in the trees. They can use these for hiding, eating and even sleeping.";
    const bears5 ="Bears care deeply about family members. They will risk their lives and even fight to the death in order to save a cub or sibling from danger.";
    const bears6 ="Bears were often honoured in the cultures of many early civilizations. They were seen as a symbol of power, strength and love.";
    const bears8 ="Vikings and the Celts have many legends about the strength, protectiveness and prowess of bears.";
    const bears9 ="The bear is a common national personification for Russia (and the former USSR) and Germany. The brown bear is Finland’s national animal.";

    //sending a response should always be in JSON
    res.write(JSON.stringify(bears1));
    res.write(JSON.stringify(bears2));
    res.write(JSON.stringify(bears3));
    res.write(JSON.stringify(bears4));
    res.write(JSON.stringify(bears5));
    res.write(JSON.stringify(bears6));
    res.write(JSON.stringify(bears7));
    res.write(JSON.stringify(bears8));
    res.write(JSON.stringify(bears9));

    res.end();
});


//running the express http server on the port specified
app.listen(port, ()=>{
    console.log("listening on port", port);
});