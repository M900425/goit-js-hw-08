const form = document.querySelector(`.login-form`);
form.addEventListener(`submit`, event => {
    event.preventDefault();

    const object = {};
    const elements = form.elements
    let allFilled = true;

    for (const element of elements) {
        if (element.tagName === 'INPUT' && element.name) {
            if (element.value.trim() === '') {
                allFilled = false;
                break;
            }
        }
    }

    if (!allFilled) {
        alert('All form fields must be filled in');
        return;
    }

    for (const element of elements) {
        if (element.tagName === 'INPUT' && element.name) {
            data[element.name] = element.value.trim();
        }
    }

    console.log(data);
    form.reset();
});