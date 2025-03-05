document.getElementById("surveyForm").addEventListener("submit", function(event) {
    let isValid = true;

    function showError(inputId, message) {
        document.getElementById(inputId + "Error").textContent = message;
    }
    
    function clearError(inputId) {
        document.getElementById(inputId + "Error").textContent = "";
    }
    
    function isNotEmpty(inputId) {
        let value = document.getElementById(inputId).value.trim();
        if (value === "") {
            showError(inputId, "This field is required");
            return false;
        }
        clearError(inputId);
        return true;
    }

    function isValidEmail(inputId) {
        let value = document.getElementById(inputId).value.trim();
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
            showError(inputId, "Enter a valid email address");
            return false;
        }
        clearError(inputId);
        return true;
    }

    function hasCheckedOption(name) {
        let options = document.getElementsByName(name);
        for (let option of options) {
            if (option.checked) {
                clearError(name);
                return true;
            }
        }
        showError(name, "Please select an option");
        return false;
    }

    function isSelected(inputId) {
        let value = document.getElementById(inputId).value;
        if (value === "") {
            showError(inputId, "Please select an option");
            return false;
        }
        clearError(inputId);
        return true;
    }

    isValid &= isNotEmpty("name");
    isValid &= isValidEmail("email");
    isValid &= hasCheckedOption("satisfaction");
    isValid &= isSelected("service");
    
    if (!isValid) {
        event.preventDefault();
    }
});