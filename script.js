const newButton = document.querySelector('.newbutton');
const projectBoard = document.querySelector('.projectboard');


newButton.addEventListener('click', () => {
    const newPost = document.createElement('div');
    const postTitle = document.createElement('p');
    const postText = document.createElement('p');
    const projectIcons = document.createElement('div');
    projectIcons.setAttribute('class', 'projecticons');
    
    const searchIcon = document.createElement('img');
    searchIcon.setAttribute('class', 'itemicon');
    searchIcon.setAttribute('src', './img/eye-outline.svg')
    const flagIcon = document.createElement('img');
    flagIcon.setAttribute('class', 'itemicon');
    flagIcon.setAttribute('src', './img/flag-outline.svg');
    const analysIcon = document.createElement('img');
    analysIcon.setAttribute('class', 'itemicon');
    analysIcon.setAttribute('src', './img/analytics-outline.svg');

    newPost.setAttribute('class', 'projectitem');
    postTitle.textContent = 'Placeholder title';
    postTitle.setAttribute('class', 'itemtitle');
    postText.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis voluptatibus in unde dicta deleniti nulla aut.';
    postText.setAttribute('class', 'itemtext');

    projectIcons.appendChild(searchIcon);
    projectIcons.appendChild(flagIcon);
    projectIcons.appendChild(analysIcon);

    newPost.appendChild(postTitle);
    newPost.appendChild(postText);
    newPost.appendChild(projectIcons);

    projectBoard.appendChild(newPost);
});