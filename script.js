function calculatePythagorean() {
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);
    var stepsDiv = document.getElementById('steps');

    if (!isNaN(sideA) && !isNaN(sideB)) {
        var step1 = "Step 1: Square the length of side A: " + sideA + "² = " + Math.pow(sideA, 2);
        var step2 = "Step 2: Square the length of side B: " + sideB + "² = " + Math.pow(sideB, 2);
        var step3 = "Step 3: Add the squared values: " + Math.pow(sideA, 2) + " + " + Math.pow(sideB, 2) + " = " + (Math.pow(sideA, 2) + Math.pow(sideB, 2));
        var result = "The length of the hypotenuse (side C) is √(" + (Math.pow(sideA, 2) + Math.pow(sideB, 2)) + ") = " + Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2)).toFixed(2);

        stepsDiv.innerHTML = "<p>" + step1 + "</p><p>" + step2 + "</p><p>" + step3 + "</p>";
        document.getElementById('result').innerHTML = result;
    } else {
        stepsDiv.innerHTML = "";
        document.getElementById('result').innerHTML = "Please enter valid numbers for both sides.";
    }
}
