const meterNo = document.getElementById("meterno");
const idCard = document.getElementById("idcard");
const payBtn = document.getElementById("payBtn");
const payMessage = document.getElementById("payMessage");

const isValidData = () => {
	if (meterNo.value != "" && idCard.files.length != 0) return true;
	return false;
};

const isPaymentAllowed = () => {
	const today = new Date();
	const day = today.getDay();
	const time = today.getHours();

	if ((day === 2 || day === 5) && time >= 14) return true;
	return false;
};

const payProcess = event => {
	event.preventDefault();
	const validated = isValidData();
	const paymentAllowed = isPaymentAllowed();

	const paid =
		"<p style='color:green; font-size: 25px; font-weight: 700;'>Thank you for the bill payment!</p>";
	const unpaid =
		"<p style='color:red; font-size: 25px; font-weight: 700;'>Unable to process payment.</p>";

	if (validated && paymentAllowed) {
		payMessage.innerHTML = paid;
	} else {
		payMessage.innerHTML = unpaid;
	}
};

payBtn.addEventListener("click", payProcess);
