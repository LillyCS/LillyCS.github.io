const story = document.querySelector('.story');

function tellFortune(num_children, partner_name, geo, job, id_) {
    /*
        Parameters: number of children, partner's name, geographic location, job title.
        Return: your fortune: "You will be a X in Y, and married to Z with N kids."
        Call that function 3 times with 3 different values for the arguments.
    */

    output = "You will be a "+job+" in "+geo+", and married to "+partner_name+" with "+num_children+" kids.";


    document.getElementById(id_).innerHTML = output;
}
tellFortune("2", "Ryan", "Hawaii", "Painter", "fortune1");

tellFortune("10", "Bob", "Utah", "Scientist","fortune2");

tellFortune("5", "Peter", "California", "Astronaut", "fortune3");