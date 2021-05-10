document.addEventListener("DOMContentLoaded", function(){
    let btns = document.querySelectorAll('.functionBtn');
    btns.forEach(btn => btn.addEventListener('click', function() {
        let btnValue = this.getAttribute('data-value');
        if (btnValue == "AC") {
            display.textContent = "";
        }
        else {
            display.textContent = display.textContent + btnValue;
        }
    }));
  });
