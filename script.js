document.getElementById('trackerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    let message = `<p><strong>${name}</strong>, Age ${age}</p>`;
    message += `<p>Your BMI: ${bmi}</p>`;
    
    if (bmi < 18.5) {
        message += "<p>Your BMI indicates you are underweight. Focus on nutrient-rich meals.</p>";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        message += "<p>Your BMI is healthy! Keep up the good work!</p>";
    } else {
        message += "<p>Your BMI suggests overweight. Focus on balanced meals and regular activity.</p>";
    }

    document.getElementById('progressOutput').innerHTML = message;
});
