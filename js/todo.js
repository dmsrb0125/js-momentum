const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let toDos = []; 

const TODOS_KEY ="todos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id)); 
    saveToDos(); //???
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id ; //저장공간에 저장된 id를 li에 직접 id를 넣어준다 이렇게 넣어주면 string으로 들어가게된다
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText =  newTodo.text; //밑에 오브젝트가 text로 받아주기때문에
    button.innerText = "❌";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="" ;
    const newTodoObj ={
        text: newTodo,
        id: Date.now(), //그저 각각의 아이디를 표시하기위해 설정, Date로해주면 number로 정의된다
    }; // 오브젝트형식으로 만들어 아이디를 할당시키고  그아이디값으로 해당값만 삭제해줄수있게된다
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}    

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos =localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // 전에 입력했던값도 넣어준다 todos자체가[]로 시작했기때문에 
    parsedToDos.forEach(paintToDo);  
} // 새로고침후 저장된값이 화면에 그려지게 설정

