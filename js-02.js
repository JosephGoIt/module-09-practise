let promise = new Promise ((resolve, rejected) => {
    let toyAvailable = false;
    let toy = "";
    setTimeout ( () => {
        if(toyAvailable){
            resolve("here's your new toy");
            toy = "voltes 5";
        } else {
            rejected("toy not found");
            toy = "wala sorry";
        }
    }, 5000);
});

promise
    .then((value) => console.log(value))
    .catch((error) => console.log(error))
    .finally((toy) => console .log(`your new toy is ${toy}`));