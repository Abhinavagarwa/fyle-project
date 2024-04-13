function validateAndCalculate() {
    var age = document.getElementById("age").value;
    var income = document.getElementById("income").value;
    var extraIncome = document.getElementById("extraIncome").value;
    var deductions = document.getElementById("deductions").value;
  
    var isValid = true;
  
    // Validate income
    if (isNaN(income)) {
      document.getElementById("income").nextElementSibling.style.display = "inline-block";
      isValid = false;
    } else {
      document.getElementById("income").nextElementSibling.style.display = "none";
    }
  
    // Validate extra income
    if (isNaN(extraIncome)) {
      document.getElementById("extraIncome").nextElementSibling.style.display = "inline-block";
      isValid = false;
    } else {
      document.getElementById("extraIncome").nextElementSibling.style.display = "none";
    }
  
    // Validate deductions
    if (isNaN(deductions)) {
      document.getElementById("deductions").nextElementSibling.style.display = "inline-block";
      isValid = false;
    } else {
      document.getElementById("deductions").nextElementSibling.style.display = "none";
    }
  
    // Show modal if all inputs are valid
    if (isValid) {
      calculateTax(age, parseFloat(income), parseFloat(extraIncome), parseFloat(deductions));
    }
  }
  
  function calculateTax(age, income, extraIncome, deductions) {
    var grossIncome = income + extraIncome;
    var taxableIncome = grossIncome + deductions - 8;
    var tax = 0;
  
    if (taxableIncome > 0) {
      if (age === "<40") {
        tax = 0.3 * taxableIncome;
      } else if (age === ">=40 & <60") {
        tax = 0.4 * taxableIncome;
      } else {
        tax = 0.1 * taxableIncome;
      }
    }
    var afterTaxIncome = grossIncome - tax;
    var modalContent0 = "<div class='income'>       Your Overall Income will be " + "</div>";
    var modalContent1 = "<div class='tax'>"  +afterTaxIncome.toFixed(2)+"<br"+"</div>";
    var modalContent2 = "<div class='ded'>after Tax Deductions"  + "</div>";
    document.getElementById("modalResult").innerHTML = modalContent0;
    document.getElementById("modalResult1").innerHTML = modalContent1;
    document.getElementById("modalResult2").innerHTML = modalContent2;
    document.getElementById("modal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  