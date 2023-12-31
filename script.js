function showCalculator() {
    var select = document.getElementById("calculatorSelect");
    var calculatorContainer = document.getElementById("calculator-container");
    var selectedCalculator = select.value;

    // Hide all calculators
    var calculators = document.getElementsByClassName("calculator");
    for (var i = 0; i < calculators.length; i++) {
        calculators[i].style.display = "none";
    }

    // Remove the active class from all calculators
    for (var i = 0; i < calculators.length; i++) {
        calculators[i].classList.remove('active-calculator');
    }

    // Show selected calculator
    if (selectedCalculator) {
        var selectedCalculatorDiv = document.getElementById(selectedCalculator);
        if (selectedCalculatorDiv) {
            selectedCalculatorDiv.style.display = "block";
            selectedCalculatorDiv.classList.add('active-calculator'); // Add the active class
            calculatorContainer.style.display = "block";
        }
    } else {
        calculatorContainer.style.display = "none";
    }
}


function calculateBMI() {
    var age = document.getElementById("age").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var gender = document.querySelector('input[name="gender"]:checked');

    if (age && height && weight && gender) {
        var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        var result = "BMI: " + bmi;

        // Display BMI result
        document.getElementById("bmiResult").innerText = result;
    } else {
        alert("Please fill in all fields.");
    }
}

function calculateCalories() {
    var age = document.getElementById("calorieAge").value;
    var height = document.getElementById("calorieHeight").value;
    var weight = document.getElementById("calorieWeight").value;
    var gender = document.querySelector('input[name="calorieGender"]:checked');
    var activityLevel = document.getElementById("calorieActivity").value;

    if (age && height && weight && gender && activityLevel) {
        // Perform calorie calculation (replace with your formula)
        var maintenanceCalories = calculateCaloriesForMaintenance(weight, height, age, gender.value, activityLevel);
        var cuttingCalories = maintenanceCalories - 500; // 0.5 kg per week
        var bulkingCalories = maintenanceCalories + 500; // 0.5 kg per week

        // Display calorie result
        var tableContent = "<tr><th>Goal</th><th>Calories</th></tr>";
        tableContent += "<tr><td>Maintenance</td><td>" + maintenanceCalories.toFixed(2) + "</td></tr>";
        tableContent += "<tr><td>Cutting (0.5 kg/week)</td><td>" + cuttingCalories.toFixed(2) + "</td></tr>";
        tableContent += "<tr><td>Bulking (0.5 kg/week)</td><td>" + bulkingCalories.toFixed(2) + "</td></tr>";

        document.getElementById("calorieResult").innerHTML = tableContent;
    } else {
        alert("Please fill in all fields.");
    }
}

function calculateCaloriesForMaintenance(weight, height, age, gender, activityLevel) {
    var bmr;
    if (gender === "male") {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    return bmr * getActivityFactor(activityLevel);
}

function getActivityFactor(activityLevel) {
    switch (activityLevel) {
        case "sedentary":
            return 1.2;
        case "moderate":
            return 1.5;
        case "active":
            return 1.7;
        default:
            return 1.2;
    }
}

function calculateProteinRatio() {
    var weight = document.getElementById("proteinWeight").value;
    var ratio = document.getElementById("proteinRatio").value;

    if (weight && ratio) {
        // Perform protein ratio calculation
        var proteinRatio = weight * ratio;
        var result = "Protein Ratio: " + proteinRatio.toFixed(2);

        // Display protein ratio result
        document.getElementById("proteinRatioResult").innerText = result;
    } else {
        alert("Please fill in all fields.");
    }
}

function addTableRow() {
    var exercise = document.getElementById("exercise").value;
    var weights = document.getElementById("weights").value;
    var sets = document.getElementById("sets").value;
    var reps = document.getElementById("reps").value;
    var bodyPart = document.getElementById("bodyPart").value;

    var table = document.getElementById("exerciseTable");
    var row = table.insertRow(-1);

    var cellExercise = row.insertCell(0);
    var cellWeights = row.insertCell(1);
    var cellSets = row.insertCell(2);
    var cellReps = row.insertCell(3);
    var cellBodyPart = row.insertCell(4);

    cellExercise.innerHTML = exercise;
    cellWeights.innerHTML = weights;
    cellSets.innerHTML = sets;
    cellReps.innerHTML = reps;
    cellBodyPart.innerHTML = bodyPart;
}
