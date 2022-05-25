const sportsList = document.querySelector('#sports-list');
const names = ["Football", "Basketball", "Tennis", "Volleyball", "Gym"]

function rendersports(doc){
    let values = [doc.data().football, doc.data().basketball, doc.data().tennis, doc.data().volleyball, doc.data().gym]

    if (sportsList.childNodes.length == 0) {
        for (i=0; i<5; i++)
        {
            let li = document.createElement('li');
            let name = document.createElement('span');
            let value = document.createElement('span');

            li.className = names[i];
            name.textContent = names[i]
            value.textContent = values[i];
            value.id = "value" + names[i]
           
            li.appendChild(name);
            li.appendChild(value);

            sportsList.appendChild(li);
        }
    }
    else {
        for (i=0; i<5; i++)
        {
            document.getElementById('value' + names[i]).innerHTML = values[i]
        }
    }

    var ul = document.getElementById("sports-list");
    console.log(ul.getElementsByTagName("LI").item(0).childNodes.item(1).textContent)
    Array.from(ul.getElementsByTagName("LI"))
      .sort((b, a) => a.childNodes.item(1).textContent.localeCompare(b.childNodes.item(1).textContent, 'en', {numeric: true}))
      .forEach(li => ul.appendChild(li));
}

db.collection("sportsUsersCount")
    .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            rendersports(doc)
        });
    });
