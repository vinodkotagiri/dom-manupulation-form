let countries;
fetch("./countries.json")
    .then(response => response.json())
    .then(result => initialize(result))
    .catch(error => console.log('error', error));

function initialize(data) {
    countries = data;
    let states = {};
    let countrySelection = document.getElementById("country");
    countrySelection.innerHTML = `<option selected>select</option>`
    countries.map((country) => {
        countrySelection.innerHTML += `<option id="${country.name}">${country.name}</option>`
    });
    countries.map((country) => {
        states[country.name] = country.states;

    })
    let stateSelection = document.getElementById("state");
    countrySelection.addEventListener("change", () => {
        let selectedCountry = event.target[event.target.selectedIndex].id;
        stateSelection.innerHTML = "";
        states[selectedCountry].map((state) => {
            stateSelection.innerHTML += `<option id="${state.name}">${state.name}</option>`
        })

        const form = document.getElementById("form");


        form.addEventListener("submit", (event) => {
            event.preventDefault();
            let tableData = document.getElementById("form-data");
            var food = document.querySelectorAll("input[type='checkbox']");
            let favFoods = [];
            food.forEach((f) => {
                if (f.checked) favFoods.push(f.value);
            })


            tableData.innerHTML += `<td>${form.firstName.value}</td>
                                <td>${form.lastName.value}</td>
                                <td>${form.address.value}</td>
                                <td>${form.pincode.value}</td>
                                <td>${form.gender.value}</td>
                                <td>${favFoods.join(",")}</td>
                                <td>${stateSelection.options[stateSelection.selectedIndex].value}</td>
                                <td>${countrySelection.options[countrySelection.selectedIndex].value}</td>`;

        })


    })


}