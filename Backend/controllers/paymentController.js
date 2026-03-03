const Razorpay = require("razorpay");
const crypto = require("crypto");

const razorpay = new Razorpay({
key_id: process.env.RAZORPAY_KEY_ID,
key_secret: process.env.RAZORPAY_SECRET
});

exports.createOrder = async (req, res) => {
const options = {
    amount: req.body.amount * 100,
    currency: "INR",
    receipt: "order_rcptid_" + Date.now(),
};

const order = await razorpay.orders.create(options);
res.json(order);
};

exports.verifyPayment = (req, res) => {
const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

const body = razorpay_order_id + "|" + razorpay_payment_id;

const expected = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body.toString())
    .digest("hex");

if (expected === razorpay_signature) {
    res.json({ success: true });
} else {
    res.status(400).json({ success: false });
}
};
