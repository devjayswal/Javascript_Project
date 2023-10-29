    // JavaScript to show and hide the popup
    let tasklist = ["Sleep", "Bath", "Hug", "Code", "Eat"];
    for(let i = 0; i < tasklist.length; i++){
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(tasklist[i]));
        document.getElementById("tasklist").appendChild(li);
    }

    function addTask(){
        let tasktext = document.getElementById("input1").value;
        if(tasktext == ""){
            alert("Please enter a task");
            return;
        }

        tasklist.push(tasktext);
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(tasktext));
        document.getElementById("tasklist").appendChild(li);

    }
    



    function removeTask(){
        const tasktext = document.getElementById("input5").value;
        if(tasktext == ""){
            alert("Please enter a task");
            return;
        }
        for(let i = 0; i < tasklist.length; i++){
            if(tasklist[i] == tasktext){
                const parent = document.getElementById("tasklist");
                const child = document.getElementById("tasklist").children[i];
                parent.removeChild(child);
                
                break;
            }
        }
    }

    const showPopupButton = document.getElementById("showPopup");
    const popup = document.getElementById("popup");
    const saveButton = document.getElementById("saveButton");
    const cancelButton = document.getElementById("cancelButton");

    const removetask = document.getElementById("removetask");
    const removepopup = document.getElementById("removepopup");
    const removebutton = document.getElementById("removeButton");
    const cancelButton2 = document.getElementById("cancelButton2");

    showPopupButton.addEventListener("click", function() {
      popup.style.display = "block";
    });

    removetask.addEventListener("click", function() {
      removepopup.style.display = "block";
    });

    removebutton.addEventListener("click", function() {
        removepopup.style.display = "none";
        const tasktext = document.getElementById("input5").value;
        removeTask();
    });
    cancelButton2.addEventListener("click", function() {
        removepopup.style.display = "none";
    });




    saveButton.addEventListener("click", function() {
      // Get the values from the input fields
      const variable1 = document.getElementById("input1").value;
      const variable2 = document.getElementById("input2").value;
      const variable3 = document.getElementById("input3").value;

      // You can perform actions with the variables here
        addTask();
      // Close the popup
      popup.style.display = "none";
    });

    cancelButton.addEventListener("click", function() {
      // Close the popup
      popup.style.display = "none";
    });