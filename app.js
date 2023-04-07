const dropdownsValue = document.querySelector('.dropdown__value'); // доступ к ячейке
const dropdownList = document.querySelector('.dropdown__list'); // доступ к списку
const dropdownLink = Array.from(document.querySelectorAll('.dropdown__link')); // массив из элементов списка

function expendList() { 
    dropdownList.classList.toggle('dropdown__list_active'); // добавление класса к списку элементов
    dropdownLink.forEach((element) =>
        element.onclick = function() { // клик на элемент списка
            dropdownsValue.textContent = element.textContent; // замена контента ячейки
            dropdownList.classList.toggle('dropdown__list_active'); // удаление класса у списка элементов
            return false;
        }
    )
}

dropdownsValue.addEventListener('click',expendList); // клик на ячейку

