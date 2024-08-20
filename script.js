
    const form = document.getElementById('registrationForm');
    const submitBtn = document.getElementById('submitBtn');
    const fields = form.querySelectorAll('input, select');
    const errors = {
        name: 'Имя должно содержать только буквы и пробелы, длиной от 2 до 20 символов.',
        email: 'Введите корректный email.',
        age: 'Введите возраст.',
        gender: 'Выберите пол.',
        profession: 'Выберите профессию.',
        password: 'Пароль должен быть не менее 8 символов, состоять из латинских букв и содержать как минимум одну заглавную букву, одну строчную букву и одну цифру.',
        agreement: 'Необходимо согласие с условиями.'
    };

    fields.forEach(field => {
        field.addEventListener('input', () => {
            validateForm();
        });
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log('Имя:', form.name.value);
            console.log('Email:', form.email.value);
            console.log('Возраст:', form.age.value);
            console.log('Пол:', form.gender.value);
            console.log('Профессия:', form.profession.value);
            console.log('Пароль:', form.password.value);
            form.reset();
            submitBtn.disabled = true;
        }
    });

    function validateForm() {
        let isValid = true;
        fields.forEach(field => {
            const errorElement = document.getElementById(`${field.name}Error`);
            if (!field.checkValidity()) {
                errorElement.textContent = errors[field.name];
                errorElement.style.display = 'block';
                isValid = false;
            } else {
                errorElement.style.display = 'none';
            }
        });
        submitBtn.disabled = !isValid;
        return isValid;
    }

