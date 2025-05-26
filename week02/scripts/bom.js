
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); 


button.addEventListener('click', function () {
    // Code to execute when the element is clicked
    if (input.value.trim() !== '') { 
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        
        deleteButton.textContent = '❌'
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        li.append(deleteButton);
        list.append(li);

        // Clear the input field
        input.value = '';

        // Always refocus the input field
        input.focus();
    }
});