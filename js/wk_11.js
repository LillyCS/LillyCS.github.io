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

function calculateDogAge(age,id_){
    /*
        Parameters: your puppy's age.
        Return calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
        outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
        Call the function three times with different sets of values.
    */

    dog_age = age*7;
    /* using template literal to access age contents */
    output = `Your doggie is ${dog_age} years old in dog years!`;

    document.getElementById(id_).innerHTML = output;
}

calculateDogAge(1,"dog1");
calculateDogAge(2,"dog2");
calculateDogAge(3,"dog3");