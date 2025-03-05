document.getElementById("surveyForm").addEventListener("submit", function(event) {
    let isValid = true;

    function showError(inputId, message) {
        let errorElement = document.getElementById(inputId + "Error");
        errorElement.textContent = message;
        errorElement.setAttribute("role", "alert");
    }
    
    function clearError(inputId) {
        let errorElement = document.getElementById(inputId + "Error");
        errorElement.textContent = "";
        errorElement.removeAttribute("role");
    }
    
    function isNotEmpty(inputId) {
        let inputElement = document.getElementById(inputId);
        let value = inputElement.value.trim();
        if (value === "") {
            showError(inputId, "This field is required");
            inputElement.setAttribute("aria-invalid", "true");
            return false;
        }
        clearError(inputId);
        inputElement.setAttribute("aria-invalid", "false");
        return true;
    }

    function isValidEmail(inputId) {
        let inputElement = document.getElementById(inputId);
        let value = inputElement.value.trim();
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
            showError(inputId, "Enter a valid email address");
            inputElement.setAttribute("aria-invalid", "true");
            return false;
        }
        clearError(inputId);
        inputElement.setAttribute("aria-invalid", "false");
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
        let inputElement = document.getElementById(inputId);
        let value = inputElement.value;
        if (value === "") {
            showError(inputId, "Please select an option");
            inputElement.setAttribute("aria-invalid", "true");
            return false;
        }
        clearError(inputId);
        inputElement.setAttribute("aria-invalid", "false");
        return true;
    }

    