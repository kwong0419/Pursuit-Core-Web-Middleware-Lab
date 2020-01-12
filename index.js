document.addEventListener("DOMContentLoaded", () => {
    let container1 = document.querySelector("#container1")
    let input = document.querySelector("#input")
    let resultBtn = document.querySelector("#resultBtn")


    resultBtn.addEventListener("click", () => {
        container1.innerHTML = "";
        if(input.value === ""){
            let h1 = document.createElement("h1");
            h1.innerText = "Please enter an animal";
            container1.appendChild(h1);
        } else {
            axios.get(`http://localhost:3002/animal/${input.value}`).then(res => {
                let h3 = document.createElement("h3")
                let h4 = document.createElement("h4");
                h3.innerText = `Checking if animal is in our database...`;
                setTimeout(() => {
                    h4.innerText = `Status: ${res.data.status}` + '\n' + `Animal available: ${res.data.message}`;
                }, 1500);
                container1.appendChild(h3);
                container1.appendChild(h4);
            })
        }
    })

    let container2 = document.querySelector("#container2");
    let floor = document.querySelector("#floor");
    let ceil = document.querySelector("#ceil");
    let randomizeBtn = document.querySelector("#randomizeBtn");
    randomizeBtn.addEventListener("click", () => {
        if(floor.value === "" || ceil.value === ""){
            let h1 = document.createElement("h1");
            h1.innerText = "Please enter a valid range!"
            container2.appendChild(h1);
        } else {
            axios.get(`http://localhost:3002/random?floor=${floor.value}&ceil=${ceil.value}`).then(res => {
                debugger
                let h3 = document.createElement("h3")
                let h4 = document.createElement("h4");
                h3.innerText = `Generating a random number from your range...`;
                setTimeout(() => {
                    h4.innerText = `Status: ${res.data.status}` + '\n' + `Range: ${res.data.range}` + '\n' + `Your random number is: ${res.data.randPick}`;
                }, 1500);
                container2.appendChild(h3);
                container2.appendChild(h4);
            })
        }
    })
    
    
    
})