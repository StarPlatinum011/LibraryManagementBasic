const myLibrary=[];

console.table(myLibrary,'lil bit');
function Book(name, author, pages, hasRead){
    this.name=name;
    this.author=author;
    this.pages=pages;
    this.hasRead=hasRead;
}

Book.prototype.hasRead = function(btn){
    if(btn==true){
        this.hasRead="True";
    }else{

    }
}

function addToLibrary(){
    //getting dom elements locally
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let hasRead = document.getElementById('completed').checked;


    //creats a book object
    let newBook = new Book(title, author, pages,hasRead);
    myLibrary.push(newBook);//add to array
    console.log(newBook)

     displayBooks();
}

function displayBooks(){
    // const mainContainer = document.getElementsByClassName('main-container');
    // const div = document.createElement('div');
    const cards = document.createElement('div');
    // div.id = 'container';
    cards.classList = 'cards';
    
    const dltButton = document.createElement('button');
    dltButton.id = 'btn-card-dlt';

    const name = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const completed = document.createElement('p');

    for(var i = 0; i < myLibrary.length; i++) {
        cards.dataset.count = i;
        dltButton.innerHTML="delete card";
        name.innerHTML="Book Name: "+myLibrary[i].name;
        author.innerHTML="Author Name: "+myLibrary[i].author;
        pages.innerHTML="No of Pages: "+myLibrary[i].pages;
        completed.innerHTML="Completed Reading: "+myLibrary[i].hasRead;
    }

    //appending elements to their respective parents
    document.getElementById('container').appendChild(cards);
    cards.appendChild(name);
    cards.appendChild(author);
    cards.appendChild(pages);
    cards.appendChild(completed);
    cards.appendChild(dltButton);
    // console.log('check noumber: ',sn);

    //deleting the cards on buttonclick
    dltButton.addEventListener('click', event => {
        event.target.parentNode.remove();
        myLibrary.filter(v => v[1] !== event.target);
    });
}

let submit = document.getElementById('submit');
submit.addEventListener('click',addToLibrary);//button that adds input to array




