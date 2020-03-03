
let root = document.getElementById("root")


function alertt(root, message){
	let fonAlert = document.createElement("div")
	fonAlert.classList.add("fonAlert")
	
	let newAlert = document.createElement("div")
	newAlert.classList.add("newAlert")

	newAlert.textContent = message
	
	newAlert.animate([
		{
			opacity:"0",
			top: "50%", left :"50%",
			transform:"scale(0.5) translate(-50%, -50%)",
			margin: "auto"
		},{
			opacity:"1",
			top: "50%", left :"50%",
			transform:"scale(1) translate(-50%, -50%)",
			margin: "auto"
		}
		],{duration:1000,iterations:1})


	root.appendChild(fonAlert)
	root.appendChild(newAlert)

}

function genBox(root){
	root.setAttribute("align","center")


	let timeAlert = 2000
	let box; let cbox; let bol = false;
	let boxes = {}
	let countClick = 1;
	for (let x = 1; x < 10; x++){
		cbox = document.createElement("div")
		cbox.classList.add("child")
		cbox.className += " child" + x

		cbox.animate([ //Init Animation
			{
				opacity:"0"
			},{
				opacity:"1"
			}
			],{duration:1000,iterations:1})

	
		root.appendChild(cbox)

		let clickprop1 = 0; let clickprop2 = 0;
		let selcbox = document.querySelector(".child"+x)
		

		selcbox.addEventListener("mouseover", ()=>{
			selcbox.animate([
				{
					boxShadow:` 0px 0px 80px rgb(${Math.random()*255},0,${Math.random()*255})`
				},{
					boxShadow:"inset 0px 0px 0px transparent"
				}
				],{duration:1000,iterations:1})
		})

		selcbox.addEventListener("click",()=>{
			
			clickprop1 += 1 //Numero de clicks en una misma casilla
			
			if ( clickprop1 <= 1){
				countClick += 1 //Nummro de clicks de cada casilla
			}
			
			if (countClick % 2){
				
				if (clickprop1 <= 1){
					boxes["child"+x] = false
					selcbox.textContent = "X"
					selcbox.animate([
						{
							boxShadow:`inset 0px 0px 80px rgb(0,0,255)`
						},{
							boxShadow:"inset 0px 0px 0px transparent"
						}
						],{duration:1000,iterations:1})
				}
				// console.log("X has played")
			} else {
				if (clickprop1 <= 1){
					boxes["child"+x] = true
					selcbox.textContent = "O"
					selcbox.animate([
						{
							boxShadow:`inset 0px 0px 80px rgb(255,0,0)`
						},{
							boxShadow:"inset 0px 0px 0px transparent"
						}
						],{duration:1000,iterations:1})
				}
				// console.log("O has played")
			}

			if (boxes.child1 === false && boxes.child2 === false && boxes.child3 === false ||
				boxes.child4 === false && boxes.child5 === false && boxes.child6 === false ||
				boxes.child7 === false && boxes.child8 === false && boxes.child9 === false ||
				boxes.child1 === false && boxes.child5 === false && boxes.child9 === false ||
				boxes.child3 === false && boxes.child5 === false && boxes.child7 === false ||
				boxes.child1 === false && boxes.child4 === false && boxes.child7 === false ||
				boxes.child2 === false && boxes.child5 === false && boxes.child8 === false ||
				boxes.child3 === false && boxes.child6 === false && boxes.child9 === false ){
				
				alertt(root,"You won X")
				
				setTimeout(()=>{
					window.location.reload(false); 		
				},timeAlert)
			} else if (
				boxes.child1 === true && boxes.child2 === true && boxes.child3 === true ||
				boxes.child4 === true && boxes.child5 === true && boxes.child6 === true ||
				boxes.child7 === true && boxes.child8 === true && boxes.child9 === true ||
				boxes.child1 === true && boxes.child5 === true && boxes.child9 === true ||
				boxes.child3 === true && boxes.child5 === true && boxes.child7 === true ||
				boxes.child1 === true && boxes.child4 === true && boxes.child7 === true ||
				boxes.child2 === true && boxes.child5 === true && boxes.child8 === true ||
				boxes.child3 === true && boxes.child6 === true && boxes.child9 === true 
				) {
				alertt(root,"You won O")
					
				setTimeout(()=>{
					window.location.reload(false); 
				},timeAlert)
				
			} else {
				if (Object.keys(boxes).length === 9){
					setTimeout(()=>{
						window.location.reload(false); 
					},1000)
					// console.log("Empate")
				}	
			}
		})
	}
}

genBox(root)
