const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'INR',
});
function calculateTotal(table) {
	if (table == 1) {
		const inputs = document.querySelectorAll('.input-1');
		const bcdAmounts = [2.5, 5, 7.5, 10, 15, 20, 25];
		let total = 0;
		let total2 = 0;
		let total3 = 0;

		inputs.forEach((input, index) => {
			const value = parseFloat(input.value) || 0;
			total += value;
			const bcdInput = document.querySelectorAll('.input-2')[index];
			const SWS = document.querySelectorAll('.input-3')[index];
			if (bcdInput) {
				bcdInput.value = Math.round((bcdAmounts[index] / 100) * value);
				total2 += parseFloat(bcdInput.value) || 0;

			}
			if (SWS) {
				SWS.value = Math.round((10 / 100) * (bcdAmounts[index] / 100) * value);
				total3 += parseFloat(SWS.value) || 0;
			}
		});
		document.getElementById('total').innerText = Math.round(total)
		document.getElementById('total2').innerText = Math.round(total2);
		document.getElementById('total3').innerText = Math.round(total3);
	}
	else if (table == 2) {
		const inputs = document.querySelectorAll('.input-12');
		const bcdAmounts = [2.5, 5, 7.5, 10, 15, 20, 25];
		let total = 0;
		let total2 = 0;
		let total3 = 0;

		inputs.forEach((input, index) => {
			const value = parseFloat(input.value) || 0;
			total += value;
			const bcdInput = document.querySelectorAll('.input-13')[index];
			const SWS = document.querySelectorAll('.input-14')[index];
			if (bcdInput) {
				bcdInput.value = Math.round((bcdAmounts[index] / 100) * value);
				total2 += parseFloat(bcdInput.value) || 0;

			}
			if (SWS) {
				SWS.value = Math.round((10 / 100) * (bcdAmounts[index] / 100) * value);
				total3 += parseFloat(SWS.value) || 0;
			}
		});
		document.getElementById('total12').innerText = Math.round(total);
		document.getElementById('total13').innerText = Math.round(total2)
		document.getElementById('total14').innerText = Math.round(total3);
	}
	else {
		console.log("Wrong table Number")
	}
	aidcCalculator(table)
	addCalculator(table)
	igstCalculator(table)
}
function aidcCalculator(table) {
	if (table == 1) {
		const inputs = document.querySelectorAll('.input-4');
		let total4 = 0;
		let total5 = 0;
		inputs.forEach((input, index) => {
			const aidcAmount = document.querySelectorAll('.input-5')[index]
			const AssAmount = document.querySelectorAll('.input-1')[index]
			const value = parseFloat(input.value) || 0;
			if (aidcAmount) {
				aidcAmount.value = Math.round((value / 100) * AssAmount.value);
			}
			total4 += parseFloat(input.value) || 0;
			total5 += parseFloat(aidcAmount.value) || 0;

		})
		document.getElementById('total4').innerText = Math.round(total4);
		document.getElementById('total5').innerText = Math.round(total5);
	}
	else if (table == 2) {
		const inputs = document.querySelectorAll('.input-15');
		let total4 = 0;
		let total5 = 0;
		inputs.forEach((input, index) => {
			const aidcAmount = document.querySelectorAll('.input-16')[index]
			const AssAmount = document.querySelectorAll('.input-12')[index]
			const value = parseFloat(input.value) || 0;
			if (aidcAmount) {
				aidcAmount.value = Math.round((value / 100) * AssAmount.value);
			}
			total4 += parseFloat(input.value) || 0;
			total5 += parseFloat(aidcAmount.value) || 0;

		})
		document.getElementById('total15').innerText = Math.round(total4);
		document.getElementById('total16').innerText = Math.round(total5);
	}
	else {
		console.log("Wrong table Number")
	}


}
function addCalculator(table) {
	if (table == 1) {
		const inputs = document.querySelectorAll('.input-6');
		let total6 = 0;
		let total7 = 0;
		inputs.forEach((input, index) => {
			const addAmount = document.querySelectorAll('.input-7')[index]
			const bcdAmount = document.querySelectorAll('.input-2')[index]
			const AssAmount = document.querySelectorAll('.input-1')[index]
			const value = parseFloat(input.value) || 0;
			if (addAmount) {
				addAmount.value = Math.round((value / 100) * (parseFloat(AssAmount.value) + parseFloat(bcdAmount.value)));
			}
			total6 += parseFloat(input.value) || 0;
			total7 += parseFloat(addAmount.value) || 0;

		})
		document.getElementById('total6').innerText = Math.round(total6);
		document.getElementById('total7').innerText = Math.round(total7);
	}
	else if (table == 2) {
		const inputs = document.querySelectorAll('.input-17');
		let total6 = 0;
		let total7 = 0;
		inputs.forEach((input, index) => {
			const addAmount = document.querySelectorAll('.input-18')[index]
			const BCDAmount = document.querySelectorAll('.input-13')[index]
			const AssAmount = document.querySelectorAll('.input-12')[index]
			const value = parseFloat(input.value) || 0;
			if (addAmount) {
				addAmount.value = Math.round((value / 100) * (parseFloat(AssAmount.value) + parseFloat(BCDAmount.value)));
			}
			total6 += parseFloat(input.value) || 0;
			total7 += parseFloat(addAmount.value) || 0;

		})
		document.getElementById('total17').innerText = Math.round(total6);
		document.getElementById('total18').innerText = Math.round(total7);
	}
	else {
		console.log("wrong table number")
	}

}
function igstCalculator(table) {
	if (table == 1) {
		const inputs = document.querySelectorAll('.input-8');
		let total8 = 0;
		let total9 = 0;
		inputs.forEach((input, index) => {
			const igstAmount = document.querySelectorAll('.input-9')[index]
			const AssAmount = document.querySelectorAll('.input-1')[index]
			const bcdAmount = document.querySelectorAll('.input-2')[index]
			const swsAmount = document.querySelectorAll('.input-3')[index]
			const aidcAmount = document.querySelectorAll('.input-5')[index]
			const value = parseFloat(input.value) || 0;
			if (igstAmount) {
				igstAmount.value = Math.round((parseFloat(AssAmount.value) + parseFloat(bcdAmount.value) + parseFloat(swsAmount.value) + parseFloat(aidcAmount.value)) * parseFloat(value / 100));
			}
			total8 += parseFloat(input.value) || 0;
			total9 += parseFloat(igstAmount.value) || 0;
		})
		document.getElementById('total8').innerText = Math.round(total8);
		document.getElementById('total9').innerText = Math.round(total9);
	}
	else if (table == 2) {
		const inputs = document.querySelectorAll('.input-19');
		let total8 = 0;
		let total9 = 0;
		inputs.forEach((input, index) => {
			const igstAmount = document.querySelectorAll('.input-20')[index]
			const AssAmount = document.querySelectorAll('.input-12')[index]
			const bcdAmount = document.querySelectorAll('.input-13')[index]
			const swsAmount = document.querySelectorAll('.input-14')[index]
			const aidcAmount = document.querySelectorAll('.input-16')[index]
			const value = parseFloat(input.value) || 0;
			if (igstAmount) {
				igstAmount.value = Math.round((parseFloat(AssAmount.value) + parseFloat(bcdAmount.value) + parseFloat(swsAmount.value) + parseFloat(aidcAmount.value)) * parseFloat(value / 100));
			}
			total8 += parseFloat(input.value) || 0;
			total9 += parseFloat(igstAmount.value) || 0;
		})
		document.getElementById('total19').innerText = Math.round(total8);
		document.getElementById('total20').innerText = Math.round(total9);
	}
	else {
		console.log("Wrong table Number")
	}

}
function intendedPeriodCalcuator() {
	const inputs = document.querySelectorAll('.input-10');
	let total10 = 0;
	inputs.forEach((input) => {
		const value = parseFloat(input.value) || 0;
		total10 += value;
	})
	document.getElementById('total10').innerText = Math.round(total10);
}
function printReport() {
	document.getElementsByClassName('printable')[0].style.display = 'none'
	document.getElementsByClassName('printable')[1].style.display = 'none'
	document.getElementsByClassName('printable')[2].style.display = 'none'
	document.getElementsByClassName('printable')[3].style.display = 'none'
	document.getElementsByClassName('printable')[4].style.display = 'none'
	document.getElementsByClassName('printable')[5].style.display = 'none'
	document.getElementById('print').style.display = 'none'
	window.print();
	location.reload();
}

function calculateReport() {
	document.getElementById('container').style.display = 'flex'
	document.getElementById('print').style.display = 'block'

	// variables
	let rateOfInterest = parseFloat(document.getElementById('input-23').value);
	let input10 = document.getElementsByClassName('input-10');

	// 1) total custom duty for 2.5%, 5%, 7.5%, 10%, 15%, 20%, 25% #Capital goods
	let bcdInput = document.querySelectorAll('.input-2')
	let sws = document.querySelectorAll('.input-3')
	let aidc = document.querySelectorAll('.input-5')
	let add = document.querySelectorAll('.input-7')
	let customDuty = []
	let totalDuty;
	for (let i = 0; i < 7; i++) {
		customDuty.push((parseFloat(bcdInput[i].value || 0)) + (parseFloat(sws[i].value) || 0) + (parseFloat(aidc[i].value) || 0) + (parseFloat(add[i].value) || 0));
	}
	console.log('customDuty', customDuty);
	totalDuty = customDuty.reduce((a, b) => a + b, 0);
	console.log('totalDuty', totalDuty)
	document.getElementById('dutyDeferred').innerText = Math.round(totalDuty)
	let dutyDeferred = document.getElementById('dutyDeferred').innerText




	//2) check the machine senario
	let npvDutyPayable;

	let machine1 = document.getElementById('Machine1').value
	let machine2 = document.getElementById('Machine2').value
	let machine3 = document.getElementById('Machine3').value
	let machine4 = document.getElementById('Machine4').value
	let machine5 = document.getElementById('Machine5').value
	let machine6 = document.getElementById('Machine6').value
	let machine7 = document.getElementById('Machine7').value
	let machines = [machine1, machine2, machine3, machine4, machine5, machine6, machine7]

	let indiNpv = [];
	let totalNVP = 0;
	customDuty.forEach((duty, index) => {
		let inputValue = parseFloat(input10[index].value);
		inputValue = isNaN(inputValue) ? 0 : inputValue;
		let npv;
		console.log('machines[index]', machines[index])
		console.log('machines[index]++', machines[index] == 'Sale in DTA' || machines[index] == 'Waste Or Scrap')
		if (machines[index] == 'Sale in DTA' || machines[index] == 'Waste Or Scrap') {
			npv = (parseFloat(duty) / Math.pow(1 + parseFloat(rateOfInterest) / 100, inputValue)) * -1;
			console.log('npv', npv)
			indiNpv.push(npv);
		} else {
			npv = 0;
			indiNpv.push(npv);
		}

	});
	console.log('indiNpv', indiNpv)
	totalNVP = indiNpv.reduce((a, b) => a + b, 0);
	document.getElementById('npvDutyPayable').innerText = Math.round(totalNVP)
	npvDutyPayable = document.getElementById('npvDutyPayable').innerText;

	// 3) Savings in cost of working capital - IGST
	let totalIGSTAmount = document.getElementById('total9').innerText
	let timeLag = document.getElementById('input-22').value
	let costOfSavingCapital;
	costOfSavingCapital = ((parseFloat(totalIGSTAmount) * (parseFloat(rateOfInterest) / 100)) * (parseFloat(timeLag) / 365));
	document.getElementById('savingsIGST').innerText = Math.round(costOfSavingCapital)
	let savingsIGST = document.getElementById('savingsIGST').innerText


	// 4)Savings in cost of working capital on deferred duties of Customs (NPV for 10 years)	
	let benifit = [];
	let totalBenifit = 0;
	let bcdInput2 = document.querySelectorAll('.input-13');
	let sws2 = document.querySelectorAll('.input-14');
	let aidc2 = document.querySelectorAll('.input-16');
	let add2 = document.querySelectorAll('.input-18');

	let customDuty2 = [];
	let totalDuty2 = [];
	let rawMaterialNVP = [];
	let RM = parseFloat(document.getElementById('input-21').value); // Ensure RM is a number

	// Calculate custom duties
	for (let i = 0; i < 7; i++) {
		let bcdValue = parseFloat(bcdInput2[i].value) || 0;
		let swsValue = parseFloat(sws2[i].value) || 0;
		let aidcValue = parseFloat(aidc2[i].value) || 0;
		let addValue = parseFloat(add2[i].value) || 0;
		customDuty2.push(bcdValue + swsValue + aidcValue + addValue);
	}
	console.log('customDuty2', customDuty2)
	// Calculate benefits based on custom duties
	customDuty2.forEach((duty) => {
		let benefitValue = (parseFloat(duty) * (parseFloat(rateOfInterest) / 100)) * (RM / 365);
		benifit.push(benefitValue);
	});
	console.log('benifit', benifit)
	benifit.forEach((benefit) => {
		for (let i = 1; i < 11; i++) {
			let npvValue = (parseFloat(benefit) / Math.pow((1 + parseFloat(rateOfInterest) / 100), i));
			rawMaterialNVP.push(npvValue);
		}
		let totalNVP = rawMaterialNVP.reduce((a, b) => a + b, 0);
		totalDuty2.push(totalNVP);
		console.log('totalNVP', totalNVP)

		rawMaterialNVP = [];
	});

	totalBenifit = totalDuty2.reduce((x, y) => x + y, 0);
	console.log('totalDuty2', totalDuty2)
	document.getElementById('savingsCustomsDuties').innerText = Math.round(totalBenifit)
	let savingsCustomsDuties = document.getElementById('savingsCustomsDuties').innerText;


	// 5) total npv calculation for raw materials
	if (1) {
		let total20 = document.getElementById('total20').innerText
		let igstBenifit = []
		let igstNPV = []
		for (let i = 1; i < 11; i++) {
			igstBenifit.push((parseFloat(total20) * (parseFloat(rateOfInterest) / 100)) * (timeLag / 365))
		}

		for (let i = 1; i < 11; i++) {
			igstNPV.push(parseFloat(igstBenifit[i - 1]) / Math.pow((1 + parseFloat(rateOfInterest) / 100), i))
		}

		document.getElementById('savingsDeferredIGST').innerText = Math.round(igstNPV.reduce((add, b) => add + b, 0))
		let savingsDeferredIGST = document.getElementById('savingsDeferredIGST').innerText


		//6) RoDTEP benefits on exports
		let anualExport = document.getElementById('input-24').value
		let rodepRate = document.getElementById('input-25').value

		let rodepBenifit = []
		let rdbArray = []
		let TotalRDB;

		for (let i = 1; i < 11; i++) {
			rodepBenifit.push(parseFloat(anualExport) * parseFloat(rodepRate))
		}
		for (let i = 1; i < 11; i++) {
			rdbArray.push(parseFloat(rodepBenifit[i - 1]) / Math.pow(1 + parseFloat(rateOfInterest) / 100, i) * -1)
		}
		TotalRDB = rdbArray.reduce((add, b) => add + b, 0)
		document.getElementById('forgoneRoDTEP').innerText = Math.round(TotalRDB)
		let forgoneRoDTEP = document.getElementById('forgoneRoDTEP').innerText

		document.getElementById('netBenefit').innerText = parseFloat(dutyDeferred) + parseFloat(npvDutyPayable) + parseFloat(savingsIGST) + parseFloat(savingsCustomsDuties) + parseFloat(savingsDeferredIGST) + parseFloat(forgoneRoDTEP)

	}
}