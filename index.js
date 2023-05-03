
//citeis
const names = [
    "Egypt",
    "France",
    "UK",
    "USA",
    "Lebnan",
    "Sudan",
    "Canada",
  ];
  //Sort names in ascending order
  let sortedNames = names.sort();
  //reference
  let input = document.getElementById("input");
  //nationalities
  let nationallites = document.getElementById('nationallites')
  const chooseNationallites = [
    "Egyption",
    "saudain",
  ];

  let sortNationalites = chooseNationallites.sort()

  function search(e , s , y , list , tag) {
    removeElements();
    // Loop through above array
    // Initially remove all elements (so if user erases a letter or adds new letter then clean previous outputs)
    for (let i of e) {
      // Convert input to lowercase and check if it includes the input value
      if (i.toLowerCase().includes(s.value.toLowerCase()) && s.value != "") {
        // Create li element
        let listItem = document.createElement("li");
  
        // One common class name
        listItem.classList.add(y);
        listItem.style.cursor = "pointer";
        listItem.addEventListener("click", () => {
            displayNames(i , tag);
          });
        // Display matched part in bold
        let startIndex = i.toLowerCase().indexOf(s.value.toLowerCase());
        let word = i.substring(0, startIndex);
        word += "<b>" + i.substring(startIndex, startIndex + s.value.length) + "</b>";
        word += i.substring(startIndex + s.value.length);
  
        // Display the value in array
        listItem.innerHTML = word;

        document.querySelector(list).appendChild(listItem);
      }
    }
  }

  function displayNames(value , tag) {
    tag.value = value;
    removeElements();
  }
  function removeElements() {
    //clear all the item
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
      item.remove();
    });
  }

  //Execute function on keyup
  input.addEventListener("keyup", (e) => search(sortedNames , input , "list-items" , ".list" , input));
  nationallites.addEventListener("keyup", (e) => search(sortNationalites , nationallites , "list-items" , ".list2" , nationallites));
 

  //check in and check out date

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
const formattedToday = `${yyyy}-${mm}-${dd}`;
let checkOutMin = formattedToday
const nights = document.getElementById('nights')
let chekIn = document.getElementById('checkIn')
let checkOut = document.getElementById('checkOut')


chekIn.setAttribute('min', formattedToday)
checkOut.setAttribute('min', checkOutMin)
checkOut.setAttribute('value', checkOutMin)
chekIn.setAttribute('value', formattedToday)

// set how many nights will stay
function setNights(){
    const date1 = new Date(chekIn.value);
    const date2 = new Date(checkOut.value);
    const diffInMs = date2.getTime() - date1.getTime();
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    let numStr = diffInDays.toString();
if (numStr.includes("-") || +numStr == 0) {
    let options = nights.options;
    for (let i = 1; i < options.length; i++) {
        options[i].removeAttribute("selected");
      }
    nights.options[0].setAttribute('selected', true)
} else{
    nights.options[diffInDays -1].setAttribute('selected', true)
}
}

function setCheckOut(){
    const day = new Date(chekIn.value) ;
    let dd = String(day.getDate()).padStart(2, '0') ;
    let mm = String(day.getMonth() + 1).padStart(2, '0');
    const yyyy = day.getFullYear();
    checkOutMin = `${yyyy}-${mm}-${+dd + +nights.value}` ;
    checkOut.value = `${yyyy}-${mm}-${+dd + +nights.value}`
    
    }

chekIn.addEventListener('change' , (e)=>{ 
    checkOutMin = e.target.value
    checkOut.setAttribute('min', checkOutMin)
    checkOut.value = checkOutMin
    checkOut.focus()
    setNights()
})


checkOut.addEventListener('change' , (e)=>{ 
    setNights()
})

nights.addEventListener('change' , ()=> setCheckOut())


//form

const closeForm = document.getElementById('close')
const popUpForm = document.getElementById('form')
const moreBtn = document.getElementById('checkMore')
const done = document.getElementById('done')


closeForm.addEventListener('click' , ()=> popUpForm.classList.remove('d-flex'))
moreBtn.addEventListener('click' , (e)=> {
    e.preventDefault()
    popUpForm.classList.add('d-flex')

})
done.addEventListener('click' , (e)=> {
    e.preventDefault()
    popUpForm.classList.remove('d-flex')

})
