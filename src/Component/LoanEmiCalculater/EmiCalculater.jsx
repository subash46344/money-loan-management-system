import React, { useEffect } from "react";
import "./LoanStyle.css";
import Chart from "chart.js/auto"; // Import Chart.js

function EmiCalculator() {
  useEffect(() => {
    const loanAmountInput = document.querySelector(".loan-amount");
    const interestRateInput = document.querySelector(".interest-rate");
    const loanTenureInput = document.querySelector(".loan-tenure");

    const loanEMIValue = document.querySelector(".loan-emi .value");
    const totalInterestValue = document.querySelector(".total-interest .value");
    const totalAmountValue = document.querySelector(".total-amount .value");

    const calculateBtn = document.querySelector(".calculate-btn");

    let loanAmount = parseFloat(loanAmountInput.value);
    let interestRate = parseFloat(interestRateInput.value);
    let loanTenure = parseFloat(loanTenureInput.value);

    let interest = interestRate / 12 / 100;

    let myChart; // Declare myChart outside the function

    const destroyChart = () => {
      if (myChart) {
        myChart.destroy();
      }
    };

    const checkValues = () => {
      let loanAmountValue = loanAmountInput.value;
      let interestRateValue = interestRateInput.value;
      let loanTenureValue = loanTenureInput.value;

      let regexNumber = /^[0-9]+$/;
      if (!loanAmountValue.match(regexNumber)) {
        loanAmountInput.value = "10000";
      }

      if (!loanTenureValue.match(regexNumber)) {
        loanTenureInput.value = "12";
      }

      let regexDecimalNumber = /^(\d*\.)?\d+$/;
      if (!interestRateValue.match(regexDecimalNumber)) {
        interestRateInput.value = "7.5";
      }
    };

    const displayChart = (totalInterestPayableValue) => {
      destroyChart(); // Destroy existing chart if it exists

      const ctx = document.getElementById("myChart").getContext("2d");
      myChart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Total Interest", "Principal Loan Amount"],
          datasets: [
            {
              data: [totalInterestPayableValue, loanAmount],
              backgroundColor: ["#e63946", "#14213d"],
              borderWidth: 0,
            },
          ],
        },
      });
    };

    const updateChart = (totalInterestPayableValue) => {
      myChart.data.datasets[0].data[0] = totalInterestPayableValue;
      myChart.data.datasets[0].data[1] = loanAmount;
      myChart.update();
    };

    const refreshInputValues = () => {
      loanAmount = parseFloat(loanAmountInput.value);
      interestRate = parseFloat(interestRateInput.value);
      loanTenure = parseFloat(loanTenureInput.value);
      interest = interestRate / 12 / 100;
    };

    const formatCurrency = (value) => {
      // Format the value to include commas as thousands separator
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(value);
    };

    const updateData = (emi) => {
      loanEMIValue.innerHTML = formatCurrency(Math.round(emi));

      let totalAmount = Math.round(loanTenure * emi);
      totalAmountValue.innerHTML = formatCurrency(totalAmount);

      let totalInterestPayable = Math.round(totalAmount - loanAmount);
      totalInterestValue.innerHTML = formatCurrency(totalInterestPayable);

      if (myChart) {
        updateChart(totalInterestPayable);
      } else {
        displayChart(totalInterestPayable);
      }
    };

    const calculateEMI = () => {
      checkValues();
      refreshInputValues();
      let emi =
        loanAmount *
        interest *
        (Math.pow(1 + interest, loanTenure) /
          (Math.pow(1 + interest, loanTenure) - 1));

      return emi;
    };

    const init = () => {
      let emi = calculateEMI();
      updateData(emi);
    };

    init();

    calculateBtn.addEventListener("click", init);

    // Cleanup event listeners when component unmounts
    return () => {
      calculateBtn.removeEventListener("click", init);
      destroyChart(); // Destroy chart on component unmount
    };
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <section className="loan_emi_main_block">
      <div className="loan-calculator">
        <div className="top">
          <h2 style={{ color: "#fff" }}>Loan Calculator</h2>

          <form action="#">
            <div className="group">
              <div className="title">Amount</div>
              <input type="text" defaultValue="30000" className="loan-amount" />
            </div>

            <div className="group">
              <div className="title">Interest Rate</div>
              <input type="text" defaultValue="8.5" className="interest-rate" />
            </div>

            <div className="group">
              <div className="title">Tenure (in months)</div>
              <input type="text" defaultValue="240" className="loan-tenure" />
            </div>
          </form>
        </div>

        <div className="result">
          <div className="left">
            <div className="loan-emi">
              <h3>Loan EMI</h3>
              <div className="value">123</div>
            </div>

            <div className="total-interest">
              <h3>Total Interest Payable</h3>
              <div className="value">1234</div>
            </div>

            <div className="total-amount">
              <h3>Total Amount</h3>
              <div className="value">12345</div>
            </div>

            <button className="calculate-btn">Calculate</button>
          </div>

          <div className="right">
            <canvas id="myChart" width="400" height="400"></canvas>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmiCalculator;
