const formGen = document.querySelector('.generator');
const list = document.querySelector('.output');
const errorSpan = document.querySelector('.error');

formGen.addEventListener('submit', e => {
        e.preventDefault();
        list.innerHTML = ``;

        let startRange = Number(formGen.sRange.value);
        const endRange = Number(formGen.eRange.value);
        const destination = formGen.destination.value;
        formGen.reset();

        if (startRange < endRange) {
                errorSpan.classList.add("error-hidden");
                while (startRange < endRange) {
                        list.innerHTML += `<span>${destination}${startRange}</span><br>`;
                        startRange++;
                }

                list.innerHTML += `<span>${destination}${startRange}</span><br>`;
                list.classList.remove("output-hidden");

        } else {
                errorSpan.classList.remove("error-hidden");
        }

});