function AddGroup() {
  const groupDiv = document.createElement('div');
  groupDiv.id = 'groupItem';

  const input = document.createElement('input');
  input.value = 'Group Item_20204689';
  input.id = 'groupName';
  input.style.border = 'none';
  input.readOnly = true;
  input.addEventListener('dblclick', () => {
    input.readOnly = false;
    input.value = input.value.slice(0,-9);
  })
  input.addEventListener('blur', function() {
    input.readOnly = true;
    input.value = input.value + '_20204689';
  });

  const deleteButton = document.createElement('button');
  const imgdelete = document.createElement('img');
  imgdelete.src = "./img/delete.png";
  imgdelete.width = 13;
  deleteButton.id = 'deleteButton';
  deleteButton.appendChild(imgdelete);
  deleteButton.addEventListener('click', () => {
      var result = window.confirm("Hoàng Đức Thành_20204689 có muốn xoá group "+ input.value + " ?");
      if(result)DeleteGroup(groupDiv)
    });

  const addItemButton = document.createElement('button');
  addItemButton.textContent = 'Add Info Item';
  addItemButton.value='true';
  addItemButton.addEventListener('click', () => {
    if(addItemButton.value === 'true'){
      addTextButton.style.display='';
      addItemButton.value='false';
      radioButton.style.display='';
    }
  });

  const addTextButton = document.createElement('button');
  addTextButton.textContent = 'Add Text Item';
  addTextButton.id='textItem';
  addTextButton.addEventListener('click', () => {
    AddItem(groupDiv,'text')
    addItemButton.value='true';
    addTextButton.style.display='none';
    radioButton.style.display='none';
  });

  const radioButton = document.createElement('button');
  radioButton.textContent = 'Add Info Item';
  radioButton.addEventListener('click', () => {
    AddItem(groupDiv,'radio')
    addItemButton.value='true';
    addTextButton.style.display='none';
    radioButton.style.display='none';
  });
  addTextButton.style.display='none';
  radioButton.style.display='none';

  const addGroupButton = document.createElement('button');
  addGroupButton.textContent = 'Add Group Item';
  addGroupButton.addEventListener('click', () => {
    AddGroup();
  });

  const brr=document.createElement('br');

  groupDiv.appendChild(input);
  groupDiv.appendChild(deleteButton);
  groupDiv.appendChild(addItemButton);
  groupDiv.appendChild(addGroupButton);
  groupDiv.appendChild(brr);
  groupDiv.appendChild(addTextButton);
  groupDiv.appendChild(radioButton);

  const parentElement = document.querySelector('#main');
  parentElement.appendChild(groupDiv);
}

function AddItem(group,type) {
  const itemDiv = document.createElement('div');
  itemDiv.id = 'item'

  const input1 = document.createElement('input');
  input1.type = 'text';
  input1.placeholder = 'Item Info Name';
  input1.style.border = 'none'
  input1.readOnly = true;
  input1.addEventListener('dblclick', () => {
    input1.readOnly = false;
  })
  input1.addEventListener('blur', function() {
    input1.readOnly = true;
  });

  const input2 = document.createElement('input');
  input2.type = type;

  const deleteButton = document.createElement('button');
  const imgdelete = document.createElement('img');
  imgdelete.src = "./img/delete.png";
  imgdelete.width = 13;
  deleteButton.appendChild(imgdelete);

  itemDiv.appendChild(input1);
  itemDiv.appendChild(input2);
  itemDiv.appendChild(deleteButton);
  group.appendChild(itemDiv);

  deleteButton.addEventListener('click', () => {
      var result = window.confirm("Hoàng Đức Thành 20204689 có muốn xoá item "+ input1.value + " ?");
      if(result)group.removeChild(itemDiv)
    });

}


function DeleteGroup(group){
  const parentElement = document.querySelector('#main');
  parentElement.removeChild(group);
}