const songTitles = [

        "The Buffalo",
	"You're Not Me But Neither Am I",
	"Imaginary Peaks, Imaginary Beasts",
	"El Capitano",
	
	"Sol",
	"(Yes, He Did Help Overthrow Fulgencio Batista, But​) Che Guevara Didn't Wear His Own T​-​Shirts",
	"Good Atmosphere",
	"Untitled",
	"El Capitano (Different Mix)",
	
	"I See It Too.",
	"“But I Won't Always Be on the Receiving End!”",
	"A Map of the Stars",
	"Waiting For Your Return, Like Running Backwards",
	"(Through Hallways)",
	"“He Never Existed in the First Place”",
	"Born Again So Many Times You Forget You Are",
	"(Underground)",
	"Remember to Wave (When Looking Down from the Clouds)",
	"It's a Lot. It's Seamless.",
	
	"Pile! No Pile! Pile!",
	"Please Don't Cry, They Stopped Hours Ago",
	"Boy's Theme",
	"A Highway Got Paved Over My Future, I Drive It Getting To School.",
	"The Blah Blah Blahs",
	"Can't Run Away",
	"Untitled (cont.)",
	"Aubade (Morning Love Song)",
	"It's Not What You Think It Is",
	"Allston Massachusetts December 2009-January 2010",
	"Bug-Infested Floorboards—Can We Please Just Leave This Place, Now.",
	"Orange, Blue With Stripes",
	
	
	"For geOn (For Colin)",
	"45 Minutes From “Somewhere Out There”",
	"Don't Come Around Here No More (Please)",
	"Introducing Morrissey (The Ergs! cover)",
    
]


function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            // if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            // check if the song title contains the query
            if (arr[i].toUpperCase().includes(val.toUpperCase())) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = arr[i]
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += '<input type="hidden" value="' + arr[i] + '">';
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                if (a.childElementCount < 5) // only show top 5 results
                    a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
                document.getElementById("guess-button").click()
            }
        }
        if (arr.includes(inp.value)) {
            document.getElementById("guess-button").disabled = false;
        } else {
            document.getElementById("guess-button").disabled = true;
        }
    });

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
        if (arr.includes(inp.value)) {
            document.getElementById("guess-button").disabled = false;
        } else {
            document.getElementById("guess-button").disabled = true;
        }
    });
}

autocomplete(document.getElementById("search-input"), songTitles);
